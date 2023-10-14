var contador = 60;
setTimeout(miFunc,1000);

function miFunc(){
    document.getElementById("segundos").innerHTML = contador;
    contador--;
    setTimeout(miFunc,1000);
}