function eliminarCaracteresRepetidos(cadena) {
  let caracteresUnicos = new Set();
  let arregloCaracteres = cadena.split('');
  
  for (let caracter of arregloCaracteres) {
    caracteresUnicos.add(caracter);
  }
  let resultado = [...caracteresUnicos].join('');
    return resultado;
}
  
const cadenaOriginal = "hola que tal como estas";
const cadenaSinRepetidos = eliminarCaracteresRepetidos(cadenaOriginal);
document.write(cadenaSinRepetidos); 
  