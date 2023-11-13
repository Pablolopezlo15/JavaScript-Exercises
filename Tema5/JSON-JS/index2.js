var modeloDatos = {
    "notas": []
};
window.onload = () => {

    document.getElementById("boton");
    boton.addEventListener("click", nuevaNota);
    document.getElementById("borrarNotas");
    borrarNotas.addEventListener("click", borrar);
    if (window.localStorage.getItem("notas")) {
        console.log("Hay notas");
        modeloDatos = JSON.parse(window.localStorage.getItem("notas"));
        muestraNotas(modeloDatos.notas);
    }
    else {
        console.log("No hay notas");
    }

}

function nuevaNota () {
    textoNota = document.getElementById("input").value;
    document.getElementById("input").value = "";

    //CREO objeto nota
    fecha = new Date().toLocaleString();
    objetoNota = {"titulo": textoNota,
                  "fecha": fecha}

    modeloDatos.notas.push(objetoNota);
    //ACTUALIZO localStorage
    window.localStorage.setItem("notas", JSON.stringify(modeloDatos));
    muestraNotas(modeloDatos.notas);
    console.log(textoNota);
}

function borrar () {
    window.localStorage.removeItem("notas");
}

function muestraNotas (arrayNotas) {
    let ul = document.getElementById("ul");
    ul.innerHTML = "";
    for(nota of arrayNotas) {
        li = document.createElement("li");
        li.innerHTML = nota.titulo + " - " + nota.fecha;
        ul.appendChild(li);
    }

}

