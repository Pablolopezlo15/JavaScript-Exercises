console.log(new Date);

let fechaHoraActual = new Date();

let anoActual = fechaHoraActual.getFullYear();
let mesActual = fechaHoraActual.getMonth() + 1; 
let diaActual = fechaHoraActual.getDate();
let horaActual = fechaHoraActual.getHours();
let minutosActuales = fechaHoraActual.getMinutes();
let segundosActuales = fechaHoraActual.getSeconds();

document.write("El año actual es: " + anoActual +"<br>");
document.write("El mes actual es: " + mesActual +"<br>");
document.write("El día actual es: " + diaActual +"<br>");
document.write("La hora actual es: " + horaActual +"<br>");
document.write("Los minutos actuales son: " + minutosActuales +"<br>");
document.write("Los segundos actuales son: " + segundosActuales +"<br>");