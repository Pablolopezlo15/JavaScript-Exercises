var edad = prompt("Introduce tu edad");

if(edad<5){
    alert("Debes estar en el jardin de la infancia");
}
else if(edad>5 && edad<12){
    alert("Debes estar en primaria");
}
else if(edad>11 && edad<17){
    alert("Debes estar en la ESO");
}
else if(edad>17 && edad<22){
    alert("Debes estar en Bachillerato o ciclos");
}
else if(edad>21){
    alert("Debes estar en la Universidad");
}
