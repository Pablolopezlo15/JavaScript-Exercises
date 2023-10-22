function asociarEventos() {
    const html = document.querySelector("html");

    html.addEventListener("mousemove", mostrarPos);
    
}

function mostrarPos(e){
    let x = e.clientX;
    let y = e.clientY;
    let coordenadas = "Coordenadas: (" + x + "," + y + ")";
    console.log(coordenadas);
}
