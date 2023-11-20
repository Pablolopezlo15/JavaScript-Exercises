function comprobarDisponibilidad() {
    var username = document.getElementById('username').value;
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index2.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        mostrarResultado(xhr.responseText);
      }
    };
  
    xhr.send('username=' + username);
  }
  
  function mostrarResultado(response) {
    document.getElementById('resultado').innerHTML = response;
  }
  