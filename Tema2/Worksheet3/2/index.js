function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "SOLO MAYUSCULAS";
  }
    
  if (cadena === cadena.toLowerCase()) {
    return "SOLO MINUSCULAS";
  }
    
  return "AMBAS";
}
  
let cadena1 = "SOLOMAYUSCULAS";
let cadena2 = "solominusculas";
let cadena3 = "MezclaDeMayusculasYMinusculas";
  
document.write("La cadena: "+cadena1+" "+analizarCadena(cadena1)+"<br>"); 
document.write("La cadena: "+cadena2+" "+analizarCadena(cadena2)+"<br>"); 
document.write("La cadena: "+cadena3+" "+analizarCadena(cadena3)+"<br>"); 
  