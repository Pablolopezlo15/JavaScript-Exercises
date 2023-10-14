var alto = parseInt(prompt("Introduce el alto de las celdas del tablero: "));

document.write('<table border="2" style="border-collapse: collapse">');


for (var i = 0; i < 8; i++) {
  for(var j = 0; j< 8; j++){

    if (i % 2===0){
        document.write(`<td bgcolor="black" width="${a}px">&nbsp;</td>`)
    }
    else{
        document.write(``)
    }
    document.write('<td width="'+alto+'" bgcolor="' + color + '">&nbsp;</td>');
  }

}

document.write('</tr>');
document.write('</table>');