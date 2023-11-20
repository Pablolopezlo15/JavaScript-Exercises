window.onload = function() {
    document.getElementById('boton').addEventListener('click', comprobarDisponibilidad);
};  

function comprobarDisponibilidad() {
  var username = document.getElementById('username').value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        mostrarResultado(xhttp.responseText);
    }
  };
  xhttp.open("POST", "index2.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username=" + username);
}
  
function mostrarResultado(response) {
    document.getElementById('resultado').innerHTML = response;
}
  