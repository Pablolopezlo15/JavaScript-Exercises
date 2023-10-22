function asociarEventos() {
    const celdas = document.querySelectorAll("table td");

    celdas.forEach(celda => {celda.addEventListener("mousemove", pintar)});
}


function pintar(e) {
    if(e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }
    else if(e.shiftKey) {
        e.target.style.backgroundColor = "blue";

    }

}

