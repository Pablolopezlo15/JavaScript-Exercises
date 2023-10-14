function obtengoPosicion(coordenadas){

    var map = L.map('map').setView([coordenadas.coords.latitude, coordenadas.coords.longitude], 12);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([coordenadas.coords.latitude, coordenadas.coords.longitude]).addTo(map);
    var popup = L.popup();
    
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Has hecho click en: " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);
}


if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(obtengoPosicion);
}
else
    console.log("Geolocalizacion no soportada")