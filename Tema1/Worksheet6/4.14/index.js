var alto = parseInt(prompt("Introduce el alto de las celdas"));
var ancho = parseInt(prompt("Introduce el ancho de las celdas"));
var numColumnas = parseInt(prompt("Introduce el número de columnas"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="' + ancho + '">');
document.write('<tr height="' + alto + '">');

var i = 0;
while (i < numColumnas) {
    var color;
    if (i % 2 === 0) {
        color = 'black';
    } else {
        color = 'white';
    }
    document.write('<td width="' + ancho + '" bgcolor="' + color + '">&nbsp;</td>');
    i++;
}

document.write('</tr>');
document.write('</table>');
