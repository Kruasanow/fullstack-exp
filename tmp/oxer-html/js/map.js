function showMap() {
    var map = L.map('map');
    map.setView([55.7422, 37.5719], 11);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
    var m = document.getElementById("map");
    m.style.width = "100vw";
    m.style.height = "50vh";
};
showMap();

// function doStyles() {
//     var m = document.getElementById('rightofmap');
//     m.style.width = "7vw";
//     m.style.height = "60vh";
// };

// doStyles();