let number = true;
let array = [1,2,'hola',4,5];
let suma;

function addOnlyNums(...array){
    suma = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]){    
            suma +=array[i];
        }
    }
    return suma;
}

var resultado = addOnlyNums(1,'cat',3,4)
console.log(resultado);
addOnlyNums(array);