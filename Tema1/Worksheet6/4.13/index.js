var numColumnas = parseInt(prompt("Ingrese el número de columnas:"));
var alturaCelda = parseInt(prompt("Ingrese la altura de las celdas (en píxeles):"));
var anchoCelda = parseInt(prompt("Ingrese el ancho de las celdas (en píxeles):"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + alturaCelda + '">');


for(var i = 0; i < numColumnas; i++){
  if(i%2==0) color = 'white';
  else color = 'black';
  document.write('<td bgvolor="'+color+'"width="'+ancho+'">&nbsp;</td>');
}
var i = 0;
while (i < numColumnas) {
  document.write('<td width="' + anchoCelda + '">&nbsp;</td>');
  i++;
}

document.write('</tr>');
document.write('</table>');
