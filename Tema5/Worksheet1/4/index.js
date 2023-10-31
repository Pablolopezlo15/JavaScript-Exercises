window.onload = () => {
    submit = document.getElementById("submit");
    submit.addEventListener("click", enviarNuevo);

}

function enviarNuevo(litext){
    nuevo = document.getElementById("new").value
    var li = document.createElement("li");
    var litext = document.createTextNode(nuevo);
    li.appendChild(litext);
    document.body.appendChild(li);

}
