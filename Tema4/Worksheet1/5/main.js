window.onload = () =>{
    console.log("CARGADA PAGINA");
    
    document.write('<table border="1" >');
    for (i = 0; i<100; i++){
        document.write("<tr></tr>")
        for(j = 0; j<100; j++){
            document.write("<td></td>")
        }
    }
    document.write("</table>");
    asociarEventos();
}