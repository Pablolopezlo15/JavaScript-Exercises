
num1 = parseInt(prompt("Introduce el primer número"));
num2 = parseInt(prompt("Introduce el segundo número"));
num3 = parseInt(prompt("Introduce el terces número"));
num4 = parseInt(prompt("Introduce el primer número"));

function Mayor(){
    var numeroMayor = Math.max(num1, num2, num3, num4);
    alert("El número mayor es: " + numeroMayor);
}

Mayor();