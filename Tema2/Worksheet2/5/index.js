coef1 = parseInt(prompt("Introduce el  primer coeficiente"));
coef2 = parseInt(prompt("Introduce el segundo coeficiente"));
coef3 = parseInt(prompt("Introduce el tercer coeficiente"));

result1 = (-coef2 + Math.sqrt(coef2 * coef2 - 4 * coef1 * coef3)) / (2 * coef1);
result2 = (-coef2 - Math.sqrt(coef2 * coef2 - 4 * coef1 * coef3)) / (2 * coef1);


document.write(result1+"<br>");
document.write(result2+"<br>");
