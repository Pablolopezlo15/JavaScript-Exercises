let fechaHoy = new Date();

let fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85);

let fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);

let fecha85Mas2Anios = new Date(fecha85);
fecha85Mas2Anios.setFullYear(fecha85Mas2Anios.getFullYear() + 2);

let fecha187Menos24Horas = new Date(fecha187);
fecha187Menos24Horas.setHours(fecha187Menos24Horas.getHours() - 24);

let fechaResto = new Date(fecha85 - fecha187);


document.write("La fecha de hoy es: " + fechaHoy + "<br>");
document.write("La fecha en 85 días será: " + fecha85 + "<br>");
document.write("La fecha hace 187 días fué: " + fecha187 + "<br>");
document.write("La fecha en 2 años y 85 días será: " + fecha85Mas2Anios + "<br>");
document.write("La fecha hace 188 días fué: " + fecha187Menos24Horas + "<br>");
document.write(fechaResto + "<br>");