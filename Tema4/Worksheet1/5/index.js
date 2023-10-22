function asociarEventos() {
    const celdas = document.querySelectorAll("table td");

    celdas.forEach(celda => {celda.addEventListener("mousemove", pintar)});
}


function borrar(e) {
    if(e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }
    else if(e.shiftKey) {
        e.target.style.backgroundColor = "blue";

    }

}

