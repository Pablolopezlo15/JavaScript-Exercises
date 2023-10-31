window.onload = () => {
    console.log('Número de enlaces en la página: ' + contarEnlaces());
}

function contarEnlaces() {
    var enlaces = document.getElementsByTagName('a');
    var contador = enlaces.length;
    return contador;    
}


  