const locations = {
  "Hütteldorf": { "x": 5.20, "y": 63.55 }, //DONE
  "Zehetnergasse": { "x": 2.70, "y": 42.00 }, //DONE
  "Hochsatzengasse": { "x": 9.90, "y": 70.50 }, //DONE
  "Gruschaplatz": { "x": 2.65, "y": 70.50 }, //DONE
  "Penzing": { "x": 5.20, "y": 51.00 }, //DONE
  "Ober St.Veit": { "x": 9.80, "y": 63.55 }, //DONE
  "Braunschweiggasse": { "x": 14.70, "y": 63.55 }, //DONE
  "Hietzing": { "x": 19.40, "y": 63.55 }, //DONE
  "Schönbrunn": { "x": 23.80, "y": 63.55 }, //DONE
  "Meidling Hauptstraße": { "x": 27.90, "y": 63.55 }, //DONE
  "Längenfeldgasse": { "x": 31.90, "y": 63.55 }, //DONE
  "Margaretengürtel": { "x": 36.30, "y": 63.55 }, //DONE
  "Pilgramgasse": { "x": 39.80, "y": 63.55 }, //DONE
  "Kettenbrückengasse": { "x": 46.50, "y": 63.55 }, //DONE
  "Karlsplatz": { "x": 52.20, "y": 63.55 }, //DONE
  "Stadtpark": { "x": 59.40, "y": 58.90 }, //DONE
  "Breitensee": { "x": 13.60, "y": 51.00}, //DONE
  "Landstraße": { "x": 60.60, "y": 51.00 }, //DONE
  "Schwedenplatz": { "x": 56.10, "y": 41.00 }, //DONE
  "Speising": { "x": 15.40, "y": 73.50 }, //DONE
  "Karl-Schwed-Gasse": { "x": 15.40, "y": 80.50 }, //DONE
  "Leopoldigasse": { "x": 15.40, "y": 88.10 }, //DONE
  "Alterlaa": { "x": 31.90, "y": 88.60 }, //DONE
  "Erlaaer Straße": { "x": 31.90, "y": 93.40 }, //DONE
  "Am Schöpfwerk": { "x": 31.90, "y": 83.60 }, //DONE
  "Tscherttegasse": { "x": 31.90, "y": 79.00 }, //DONE
  "Bahnhof Meidling": { "x": 31.90, "y": 73.80 }, //DONE
  "Niederhofstrasse": { "x": 31.90, "y": 68.80 }, //DONE
  "Am Europaplatz": { "x": 29.70, "y": 85.30 }, //DONE
  "Clemens-Holzmeister-Straße": { "x": 29.70, "y": 97.40 }, //DONE
  "Gußriegelstraße": { "x": 41.20, "y": 97.40 }, //DONE
  "Laxenburger Str.": { "x": 52.40, "y": 97.40 }, //DONE
  "Altes Landgut": { "x": 52.40, "y": 93.70 }, //DONE
  "Troststraße": { "x": 52.40, "y": 88.60 }, //DONE
  "Reumannplatz": { "x": 52.40, "y": 83.60 }, //DONE
  "Keplerplatz": { "x": 52.40, "y": 78.70 }, //DONE
  "Südtiroler Platz - Hauptbahnhof": { "x": 52.40, "y": 73.80 }, //DONE
  "Taubstummengasse": { "x": 52.40, "y": 68.20 }, //DONE
  "Matzleinsdorfer Platz": { "x": 44.20, "y": 73.60 }, //DONE
  "Knöllgasse": { "x": 44.20, "y": 83.60 }, //DONE
  "Schrankenberggasse": { "x": 63.00, "y": 83.60 }, //DONE
  "Geiselbergstraße": { "x": 72.80, "y": 83.60 }, //DONE
  "Enkplatz": { "x": 84.60, "y": 83.60 }, //DONE
  "Simmering": { "x": 84.60, "y": 77.00 }, //DONE
  "Haidestraße": { "x": 84.60, "y": 60.50 }, //DONE
  "Gumpendorfer Straße": { "x": 31.90, "y": 54.50 }, //DONE
  "Quartier Belvedere": { "x": 65.80, "y": 71.80 }, //DONE
  "Rennweg": { "x": 66.00, "y": 63.80 }, //DONE
  "Praterkai": { "x": 84.60, "y": 48.80 }, //DONE
  "Lobau": { "x": 84.60, "y": 36.80 }, //DONE
  "Stadlau": { "x": 78.60, "y": 36.80 }, //DONE
  "Stadlauer Brücke": { "x": 80.00, "y": 48.80 }, //DONE
  "Praterbrücke": { "x": 75.00, "y": 48.80 }, //DONE
  "Donaumarina": { "x": 75.00, "y": 44.00 }, //DONE
  "Donaustadtbrücke": { "x": 77.00, "y": 39.80 }, //DONE
  "Hardeggasse": { "x": 80.00, "y": 33.00 }, //DONE
  "Donauspital": { "x": 84.60, "y": 33.00 }, //DONE
  "Seestadt": { "x": 89.00, "y": 33.00 }, //DONE
  "Josef-Baumann-Gasse": { "x": 89.00, "y": 20.00 }, //DONE
  "Zehdengasse": { "x": 89.00, "y": 3.80 }, //DONE
  "Polgarstraße": { "x": 84.60, "y": 20.30 }, //DONE
  "Kagraner Brücke": { "x": 84.60, "y": 9.00 }, //DONE
  "Kagran": { "x": 76.40, "y": 9.00 }, //DONE
  "Leopoldau": { "x": 79.80, "y": 3.80 }, //DONE
  "Siemensstraße": { "x": 60.00, "y": 3.80 }, //DONE
  "Floridsdorf": { "x": 60.00, "y": 12.60 }, //DONE
  "Carminweg": { "x": 68.40, "y": 9.00 }, //DONE
  "Alte Donau": { "x": 73.20, "y": 13.70 }, //DONE
  "Kaisermühlen - VIC": { "x": 70.40, "y": 18.20 }, //DONE
  "Goethehof": { "x": 65.60, "y": 18.20 }, //DONE
  "Neue Donau": { "x": 56.00, "y": 18.20 }, //DONE
  "Donauinsel": { "x": 66.80, "y": 24.00 }, //DONE
  "Vorgartenstraße": { "x": 63.60, "y": 29.50 }, //DONE
  "Praterstern": { "x": 60.50, "y": 33.80 }, //DONE
  "Messe Prater": { "x": 65.30, "y": 33.80 }, //DONE
  "Krieau": { "x": 68.00, "y": 37.40 }, //DONE
  "Stadion": { "x": 70.60, "y": 40.90 }, //DONE
  "Nestroyplatz": { "x": 58.40, "y": 37.20 }, //DONE
  "Gasometer": { "x": 80.80, "y": 71.60 }, //DONE
  "Erdberg": { "x": 76.60, "y": 67.20 }, //DONE
  "Schlachthausgasse": { "x": 72.70, "y": 62.80 }, //DONE
  "Kardinal-Nagl-Platz": { "x": 68.70, "y": 58.60 }, //DONE
  "Rochusgasse": { "x": 64.50, "y": 54.20 }, //DONE
  "Traisengasse": { "x": 60.30, "y": 22.80 }, //DONE
  "Taborstraße": { "x": 55.80, "y": 33.80 }, //DONE
  "Handelskai": { "x": 52.70, "y": 22.80 }, //DONE
  "Schottenring": { "x": 50.30, "y": 33.80 }, //DONE
  "Dresdner Straße": { "x": 48.60, "y": 22.80 }, //DONE
  "Jägerstraße": { "x": 45.00, "y": 22.80 }, //DONE
  "Spittelau": { "x": 41.70, "y": 22.80 }, //DONE
  "Friedensbrücke": { "x": 44.40, "y": 26.50 }, //DONE
  "Roßauer Lände": { "x": 47.00, "y": 29.80 }, //DONE
  "Heiligenstadt": { "x": 41.90, "y": 10.80 }, //DONE
  "Oberdöbling": { "x": 29.90, "y": 10.80 }, //DONE
  "Schottentor Universität": { "x": 47.00, "y": 39.00 }, //DONE
  "Rathaus": { "x": 44.30, "y": 44.20 }, //DONE
  "Stubentor": { "x": 56.40, "y": 50.00 }, //DONE
  "Stephansplatz": { "x": 52.30, "y": 50.00 }, //DONE
  "Herrengasse": { "x": 48.30, "y": 50.00 }, //DONE
  "Volkstheater": { "x": 44.00, "y": 50.00 }, //DONE
  "Museumsquartier": { "x": 44.00, "y": 56.70 }, //DONE
  "Neubaugasse": { "x": 40.00, "y": 50.00 }, //DONE
  "Zieglergasse": { "x": 36.00, "y": 50.00 }, //DONE
  "Westbahnhof": { "x": 31.90, "y": 50.00 }, //DONE
  "Burggasse": { "x": 31.90, "y": 44.00 }, //DONE
  "Thaliastraße": { "x": 31.90, "y": 39.40 }, //DONE
  "Josefstädter Straße": { "x": 31.90, "y": 34.40 }, //DONE
  "Währinger Straße": { "x": 31.90, "y": 29.50 }, //DONE
  "Nußdorfer Straße": { "x": 36.20, "y": 23.00 }, //DONE
  "Schweglerstraße": { "x": 28.30, "y": 47.00 }, //DONE
  "Johnstraße": { "x": 24.80, "y": 44.50 }, //DONE
  "Hütteldorfer Straße": { "x": 21.20, "y": 42.00 }, //DONE
  "Kendlerstraße": { "x": 17.80, "y": 39.00 }, //DONE
  "Ottakring": { "x": 13.60, "y": 36.00 }, //DONE
  "Hernals": { "x": 13.60, "y": 26.00 }, //DONE
  "Gersthof": { "x": 19.00, "y": 20.80 }, //DONE
  "Krottenbachstr.": { "x": 24.50, "y": 15.80 }, //DONE
  "Aumannplatz": { "x": 25.40, "y": 25.00 } //DONE
};
