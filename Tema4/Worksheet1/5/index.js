function asociarEventos() {
    const celdas = document.querySelectorAll("table td");
    celdas.forEach(celda => {
        celda.addEventListener("mousemove", pintar);
        celda.addEventListener("mousedown", borrarLinea);
    });

    const borrarCanvasButton = document.getElementById("borrarCanvas");
    borrarCanvasButton.addEventListener("click", borrarCanvas);
}

function borrarLinea(e) {
    if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    } else if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    }
}

function borrarCanvas() {
    const celdas = document.querySelectorAll("table td");
    celdas.forEach(celda => {
        celda.style.backgroundColor = "white";
    });
}
