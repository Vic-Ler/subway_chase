function updateMap() {
    let player = window.location.pathname.split("/").pop();
    fetch(`/get_state/${player}`)
        .then(response => response.json())
        .then(data => {
            const mapDiv = document.getElementById("map");
            mapDiv.innerHTML = ""; // clear previous markers

            const mapWidth = mapDiv.clientWidth;
            const mapHeight = mapDiv.clientHeight;

            for (let p in data.positions) {
                const locName = data.positions[p];
                if (!locations[locName]) continue;

                const marker = document.createElement("div");
                marker.classList.add("playerMarker");

                // Determine role color
                const role = p.includes("Korrupt") ? "korrupt" : (p.includes("Dieb") ? "dieb" : "polizist");
                marker.classList.add("playerMarker", role);
                marker.innerText = p[0];

                // Convert percentage coordinates to pixels relative to container
                marker.style.position = "absolute";
                marker.style.width = "20px";
                marker.style.height = "20px";
                marker.style.borderRadius = "50%";
                marker.style.textAlign = "center";
                marker.style.lineHeight = "20px";
                marker.style.color = "white";
                marker.style.fontSize = "12px";
                marker.style.left = `calc(${locations[locName].x}% - 10px)`;
                marker.style.top = `calc(${locations[locName].y}% - 10px)`;

                mapDiv.appendChild(marker);
            }
        });
}

// poll every 3 seconds
setInterval(updateMap, 3000);
updateMap(); // initial
