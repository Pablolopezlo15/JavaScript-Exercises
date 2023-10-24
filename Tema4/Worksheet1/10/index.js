window.onload = () => {

  var imagen = document.querySelector("img");
  var mueveImagen = false;

  imagen.addEventListener("click", function(e) {
    if (!mueveImagen) {
      mueveImagen = true;
      e.clientX.left;
      e.clientY.top;
    } else {
      mueveImagen = false;
    }
  });


  window.addEventListener("mousemove", function(e) {
    if (mueveImagen) {
      imagen.style.left = e.clientX + "px";
      imagen.style.top = e.clientY + "px";
    }
  });

  function mostrarPos(e){
    let x = e.clientX;
    let y = e.clientY;
    let coordenadas = "Coordenadas: (" + x + "," + y + ")";
    console.log(coordenadas);
}
imagen.addEventListener("mousemove", mostrarPos);

}
