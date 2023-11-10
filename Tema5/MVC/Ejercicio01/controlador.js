window.onload = () => {
    //Iniciamos la app

    //Creamos el modelo

    miListaLibros = new listaLectura();

    //Defino eventos
    document.getElementById("btnAlta").addEventListener("click", altaLibros);

    
    
}

function altaLibros () {
    tit = document.getElementById("inputTit").value;
    aut = document.getElementById("inputAut").value;
    agn = document.getElementById("inputAño").value;

    let nuevoLibro = new libro (tit, aut, agn);
    miListaLibros.addLibro(nuevoLibro);
    actualizarVista();
}

function actualizarVista() {
    //vistaSimple("misLibros", miListaLibros.listalibros);
    vistaCompleja("misLibros", miListaLibros.listalibros);
}