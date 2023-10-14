function encontrarApariciones(cadena, subcadena) {
  let apariciones = [];
  let inicio = 0;
  
  while (inicio < cadena.length) {
    const indice = cadena.indexOf(subcadena, inicio);
    if (indice === -1) {
      break;
    }
    apariciones.push(indice);
    inicio = indice + 1;
  }
  
  return apariciones;
}
  
texto = "Esta es una cadena de ejemplo que contiene una subcadena. Esta subcadena es una subcadena.";
subcadena = "subcadena";
resultados = encontrarApariciones(texto, subcadena);
console.log("Apariciones de la subcadena:", resultados);
  