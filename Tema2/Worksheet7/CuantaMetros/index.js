let totalMetrosRecorridos = 0;
let lastPosition = null;

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; 

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = radioTierra * c;
    return distancia * 1000; 
}

function actualizarDistancia(position) {
    if (lastPosition) {
        const distancia = calcularDistancia(
            lastPosition.coords.latitude,
            lastPosition.coords.longitude,
            position.coords.latitude,
            position.coords.longitude
        );
        totalMetrosRecorridos += distancia;
    }
    lastPosition = position;
}

function mostrarDistanciaRecorrida() {

    document.getElementById("metrosRecorridos").textContent = `${totalMetrosRecorridos} metros`;
}

function onError(error) {
    console.error(`Error al obtener la ubicación: ${error.message}`);
}

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(actualizarDistancia, onError);
} else {
    console.log("La geolocalización no está disponible en este navegador.");
}

mostrarDistanciaRecorrida();
