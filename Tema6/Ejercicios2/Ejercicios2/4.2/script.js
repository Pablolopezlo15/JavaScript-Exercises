window.onload = function() {
    document.getElementById('boton').addEventListener('click', comprobarDisponibilidad);
};  

function comprobarDisponibilidad() {
  var username = document.getElementById('username').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'index2.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      procesarRespuesta(xhr.responseXML);
    }
  };

  xhr.send('username=' + username);
}

function procesarRespuesta(responseXML) {
  var disponible = responseXML.querySelector('disponible').textContent === 'true';

  if (disponible) {
    document.getElementById('resultado').innerHTML = 'El nombre está disponible.';
  } else {
    var alternativas = responseXML.querySelector('alternativas').textContent.split(',');
    mostrarAlternativas(alternativas);
  }
}

function mostrarAlternativas(alternativas) {
  var mensaje = 'El nombre no está disponible. Alternativas: ' + alternativas.join(', ');
  document.getElementById('resultado').innerHTML = mensaje;
}
