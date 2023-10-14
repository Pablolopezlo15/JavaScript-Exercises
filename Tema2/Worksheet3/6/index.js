function encontrarSubcadena(cadena, subcadena) {
  const indice = cadena.indexOf(subcadena);
  if (indice !== -1) {
    return {
      esSubcadena: true,
      posicion: indice
    };
  } 
  else {
    return {
      esSubcadena: false,
      posicion: -1
    };
  }
}
  
const cadenaPrincipal = "Esta es una cadena de ejemplo que contiene una subcadena. Esta subcadena es una subcadena.";
const subcadena = "subcadena";
const resultado = encontrarSubcadena(cadenaPrincipal, subcadena);
  
if (resultado.esSubcadena) {
  console.log(`La subcadena "${subcadena}" es una subcadena de la cadena principal.`);
  console.log(`La primera posición a partir de la cual ocurre es: ${resultado.posicion}`);
} 
else {
  console.log(`La subcadena "${subcadena}" no es una subcadena de la cadena principal.`);
}
  