/*var alto=parseInt(prompt("Introduce el alto de las celdas"));
var ancho=parseInt(prompt("Introduce el ancho de las celdas"));
var numcolum=parseInt(prompt("Introduce el número de columnas"));


document.write('<table border="0" cellspacing="2" bgcolor="black" witdh="'+ancho+'"><tr bgcolor="white" height="'+alto+'">');
for(let i=0;i<numcolum;i++)
    {document.write('<td witdh="'+ancho+'">&nbsp;</td>');
}
document.write('</td></tr></table>');

*/
  var numColumnas = parseInt(prompt("Ingrese el número de columnas:"));
  var alturaCelda = parseInt(prompt("Ingrese la altura de las celdas (en píxeles):"));
  var anchoCelda = parseInt(prompt("Ingrese el ancho de las celdas (en píxeles):"));

  document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
  document.write('<tr bgcolor="white" height="' + alturaCelda + '">');

  for (var i = 0; i < numColumnas; i++) {
    document.write('<td width="' + anchoCelda + '">&nbsp;</td>');
  }

  document.write('</tr>');
  document.write('</table>');