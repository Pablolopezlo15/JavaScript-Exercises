function cambiarAminimalista() {
    document.querySelector("body").style.fontFamily = '"Gill Sans", sans-serif';
    document.querySelector("ul").style.display = "flex";
    document.querySelector("ul").style.listStyle = "none";
    document.querySelector("ul").style.backgroundColor = "white";
    document.querySelector("ul").style.border = "black 2px solid";
	document.querySelector("a").style.color = "blue";
    document.querySelector("div").style.border = "black 2px solid";
    document.querySelector("div").style.backgroundColor = "yellow";
    document.querySelector("body").style.background = "lightyellow"
    document.querySelector("main").style.position = "relative"
    document.querySelector("main").style.left = "10%"
    document.querySelector("main").style.width = "90%"
	document.querySelector("aside").style.justifyContent = "left";
    document.querySelector("aside").style.width = "150px";
    document.querySelector("aside").style.height = "800px";
    document.querySelector("aside").style.backgroundColor = "lightblue";
    document.querySelector("aside").style.position = "absolute";
    document.getElementById("visible").innerHTML = "";

}

function cambiarAnormal() {
    document.querySelector("body").removeAttribute('style');
    document.querySelector("ul").removeAttribute('style');
    document.querySelector("a").removeAttribute('style');
    document.querySelector("div").removeAttribute('style');
    document.querySelector("main").removeAttribute('style');
    document.querySelector("aside").removeAttribute('style');
    document.getElementById("visible").innerHTML = "<b>Este parrafo debe solo ser visible en el tema Normal.</b>";
}
const temaminimalista = document.getElementById("temaminimalista");
temaminimalista.addEventListener("click", cambiarAminimalista);

const temanormal = document.getElementById("temanormal");
temanormal.addEventListener("click", cambiarAnormal)
