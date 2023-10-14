function paresimpares() {
  const numeros = [];
  for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 1000) + 1);
  }
  
  console.log("Contenido original del array:");
  console.log(numeros);
  const pares = [];
  const impares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    } else {
      impares.push(numeros[i]);
    }
  }
  
  const resultado = pares.concat(impares);
  
  console.log("Array organizado con pares e impares juntos:");
  console.log(resultado);
}
  
paresimpares();
  