function asociarEventos() {
    const btn = document.querySelector("button");

    btn.addEventListener("click", mandarAlert);
    
}

function mandarAlert(){
    alert("¡Has pulsado al boton!")
}
