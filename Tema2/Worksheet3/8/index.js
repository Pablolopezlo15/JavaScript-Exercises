function contarPalabras(cadena) {
  cadena = cadena.trim();
  const palabras = cadena.split(/\s+/);
  const palabrasFiltradas = palabras.filter((palabra) => palabra !== '');
  return palabrasFiltradas.length;
}
  
const texto = "   Esto es  un   ejemplo   con  espacios entre   palabras.   ";
const numeroDePalabras = contarPalabras(texto);
console.log(`Número de palabras en el texto: ${numeroDePalabras}`);
  