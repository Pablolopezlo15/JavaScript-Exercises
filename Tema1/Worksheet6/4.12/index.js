var alto=parseInt(prompt("Introduce el alto de las celdas"));
var ancho=parseInt(prompt("Introduce el ancho de las celdas"));
var numcolum=parseInt(prompt("Introduce el número de columnas"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="'+ancho+'">');
document.write('<tr height="50">');

for (var i = 0; i < numcolum; i++) {
    var color;
    if (i % 2===0){
        color = 'black';
    }
    else{
        color = 'white';
    }
    document.write('<td width="50" bgcolor="' + color + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');