var num = parseInt(prompt("Escribe un número"));

var num2 = parseInt(prompt("Intenta adivinar el número"));
if(num==num2){
    alert("¡Enhorabuena has adivinado el número!");
}
else{
    while(num!=num2){
        alert("Número incorrecto vuelve a intentarlo");
        alert("Aquí tienes una pista");
            if(num<num2){
                alert("Es un número más pequeño");
            }
            else{
                alert("Es un número más grande")
            }
        var num2 = parseInt(prompt("Introduce de nuevo el número"));
        }
        alert("¡Enhorabuena has adivinado el número!");

}


