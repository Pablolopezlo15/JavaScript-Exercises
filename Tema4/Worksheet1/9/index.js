function asociarEventos() {
    const imagen = document.querySelectorAll("imagen");
    imagen.addEventListener("mousemove", pintar);
}


var imagen = document.getElementById("imagen");
var mueveImagen = false;
var initialX, initialY;

imagen.addEventListener("click", function(e) {
  if (!mueveImagen) {
    mueveImagen = true;
    initialX = e.clientX - imagen.getBoundingClientRect().left;
    initialY = e.clientY - imagen.getBoundingClientRect().top;
  } else {
    mueveImagen = false;
  }
});


window.addEventListener("mousemove", function(e) {
  if (mueveImagen) {
    e.preventDefault();
    var x = e.clientX - initialX;
    var y = e.clientY - initialY;
    imagen.style.left = x + "px";
    imagen.style.top = y + "px";
  }
});