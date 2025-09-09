from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit, join_room
import eventlet

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# ====== Game state ======
players = {}        # key: player name, value: dict with role, position, color
history = []        # list of {player: name, position: pos}
player_sids = {}    # key: player name, value: their current SocketIO sid

# ====== Routes ======
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        role = request.form["role"]
        start_location = request.form["start_pos"]

        # Farbe nur für Polizist/Korrupt, Dieb = grau
        color = request.form.get("color")
        if role not in ["Polizist", "Korrupt"]:
            color = "gray"

        # Spieler speichern
        players[name] = {"role": role, "position": start_location, "color": color}
        history.append({"player": name, "position": start_location})
        return render_template("map.html", player=name, role=role)
    return render_template("index.html")

@app.route("/admin")
def admin_page():
    return render_template("admin.html")

# ====== SocketIO events ======
@socketio.on('join')
def on_join(data):
    name = data['name']
    join_room('game')
    player_sids[name] = request.sid
    # send initial state to this player
    socketio.emit(
        'state_update',
        {'players': visible_positions(name), 'history': history},
        room=request.sid
    )

@socketio.on('move')
def on_move(data):
    name = data['name']
    new_pos = data['new_pos']
    if name in players:
        players[name]['position'] = new_pos
        history.append({"player": name, "position": new_pos})
        broadcast_state()

@socketio.on('investigate')
def on_investigate(data):
    player = data['name']
    field = data['field']

    # only police/corrupt can investigate
    if players[player]["role"] == "Dieb":
        emit('investigate_result', {'field': field, 'message': "Nur die Polizei kann untersuchen!"}, room=request.sid)
        return

    # auto-move
    players[player]['position'] = field
    history.append({"player": player, "position": field})
    broadcast_state()

    # check if thief was here
    was_thief_here = any(
        h['position'] == field and players[h['player']]['role'] == "Dieb"
        for h in history
    )
    msg = "Ein Dieb war bereits hier! (Du hast die Wahl, wen du darüber informieren möchtest)" if was_thief_here else "Kein Dieb war bislang hier"
    emit('investigate_result', {'field': field, 'message': msg}, room=request.sid)

@socketio.on('arrest')
def on_arrest(data):
    player = data['name']
    field = data['field']

    # only police/corrupt can arrest
    if players[player]["role"] == "Dieb":
        emit('arrest_result', {'field': field, 'message': "Nur die Polizei kann festnehmen!"}, room=request.sid)
        return

    # auto-move
    players[player]['position'] = field
    history.append({"player": player, "position": field})
    broadcast_state()

    thiefs_here = [p for p, info in players.items() if info['role'] == "Dieb" and info['position'] == field]
    message = f"Festnahme erfolgreich! Polizisten (die nicht korrupt sind) müssen obligatorisch jeden informieren. Dieb: {', '.join(thiefs_here)}" if thiefs_here else "Hier ist kein Dieb."
    emit('arrest_result', {'field': field, 'message': message}, room=request.sid)

@socketio.on('get_players')
def get_players():
    emit('player_list', {'players': players}, room=request.sid)

@socketio.on('remove_player')
def remove_player(data):
    name = data['name']
    if name in players:
        del players[name]
    if name in player_sids:
        del player_sids[name]
    global history
    history = [h for h in history if h['player'] != name]
    broadcast_state()

@socketio.on('reset_game')
def reset_game():
    global players, history, player_sids
    players = {}
    history = []
    player_sids = {}
    broadcast_state()

# ====== Helper functions ======
def broadcast_state():
    """Emit updated state to all players based on their visibility."""
    for p_name, sid in player_sids.items():
        socketio.emit(
            'state_update',
            {'players': visible_positions(p_name), 'history': history},
            room=sid
        )

def visible_positions(viewer_name):
    """Return a dict of player positions and colors that this viewer is allowed to see."""
    visible = {}
    viewer_role = players[viewer_name]["role"]

    for p, info in players.items():
        target_role = info["role"]

        if viewer_role == "Polizist" and target_role == "Dieb":
            # Normal police cannot see thieves
            continue

        # include position AND color
        visible[p] = {"position": info["position"], "color": info["color"]}

    return visible

# ====== Main ======
if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", debug=True)
