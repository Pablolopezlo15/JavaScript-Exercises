function esPalindromo(cadena) {
  let cadenaFormateada = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let cadenaRevertida = cadenaFormateada.split('').reverse().join('');
  
  return cadenaFormateada === cadenaRevertida;
}

let cadena1 = "Adan";
let cadena2 = "Arenera";
let cadena3 = "Hola Mundo";

document.write(cadena1+" "+esPalindromo(cadena1)+"<br>");
document.write(cadena2+" "+esPalindromo(cadena2)+"<br>"); 
document.write(cadena3+" "+esPalindromo(cadena3)); 
