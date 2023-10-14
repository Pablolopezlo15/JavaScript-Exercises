function eliminarCaracteresRepetidos(cadena) {
  let caracteresUnicos = new Set();
    let arregloCaracteres = cadena.split('');
  for (let caracter of arregloCaracteres) {
    caracteresUnicos.add(caracter);
  }
  let resultado = [...caracteresUnicos].join('');
  
  return resultado;
}

let cadenaOriginal = "holaholahola";
let cadenaSinRepetidos = eliminarCaracteresRepetidos(cadenaOriginal);
document.write(cadenaSinRepetidos); 
