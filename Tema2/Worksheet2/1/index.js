document.write(Math.random()+"<br>");
document.write(Math.random() * (200 - 100) + 100+"<br>");

num1 = parseInt(prompt("Introduce un número"));
num2 = parseInt(prompt("Introduce otro número"));

document.write(Math.random() * (num1 - num2) + num2);
