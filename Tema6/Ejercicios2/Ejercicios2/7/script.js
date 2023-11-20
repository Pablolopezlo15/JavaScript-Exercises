window.onload = function() {

    let cargarBTN = document.getElementById("cargar");
    cargarBTN.addEventListener("click", cargar);

}

function cargar(){
    var codigoPostal = document.getElementById('codigoPostal').value;

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'php.php?codigoPostal=' + codigoPostal, true);

    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('productor').innerText = this.responseText;
        }
    }

    xhttp.send();

}



