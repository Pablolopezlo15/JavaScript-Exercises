function asociarEventos() {
    const body = document.querySelector("body");
    body.addEventListener("click", mandarAlert);
}

function mandarAlert() {
    alert("¡Has pulsado al boton!")
}


