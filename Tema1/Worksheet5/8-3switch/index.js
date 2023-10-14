var num = prompt("Escribe un numero");
var num2 =prompt("Escribe otro numero");
var op = prompt("Escribe la operación +,- ó x");
numpars = parseInt(num);
numpars2 = parseInt(num2);

switch(op){
    case "+":
        if(op=="+"){
            alert("La suma de los número es "+(numpars+numpars2));
        }
    break;
    case "-":
        if(op=="-"){
            alert("La resta de los números es "+ (numpars-numpars2));
        }
    break;
    case "x":
        if(op=="x"){
            alert("La multiplicacion de los números es "+(numpars*numpars2));
        }
    break;
    default:
        alert("Esa no es una opción válida");
    
    
}