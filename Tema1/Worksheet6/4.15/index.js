var num_adivinar = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

while (true) {
  var num = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  if (num === num_adivinar) {
    alert(`¡Felicidades! Adivinaste el número en ${intentos + 1} intentos.`);
    break;
  } else if (num < num_adivinar) {
    alert("El número es mayor.");
  } else {
    alert("El número es menor.");
  }

  intentos++;
}
