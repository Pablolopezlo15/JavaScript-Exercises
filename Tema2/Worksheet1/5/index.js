var contador = 59;
var contador1 = 59;
var contador2 = 1;
setTimeout(miFunc,1000);
setTimeout(miFuncminutos,1000);
setTimeout(miFunchoras,1000);

function miFunc(){
    if(contador <0){
        contador=59;
        document.getElementById("segundos").innerHTML = contador;
        contador--;
        setTimeout(miFunc,1000);
    }
    else{
        document.getElementById("segundos").innerHTML = contador;
        contador--;
        setTimeout(miFunc,1000);
    }

}

function miFuncminutos(){
    if(contador1 <0){
        document.getElementById("minutos").innerHTML = contador1+" : ";
        contador1--;
        setTimeout(miFuncminutos,60000);
    }
    else{
        document.getElementById("minutos").innerHTML = contador1+" : ";
        contador1--;
        setTimeout(miFuncminutos,60000);
    }
}

function miFunchoras(){
    document.getElementById("horas").innerHTML = contador2+" : ";
    contador2--;
    setTimeout(miFuncminutos,600000);
}