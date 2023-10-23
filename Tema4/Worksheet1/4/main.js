window.onload = () =>{
    console.log("CARGADA PAGINA");
    
    document.write('<table border="1" >');
    for (i = 0; i<80; i++){
        document.write("<tr></tr>")
        for(j = 0; j<200; j++){
            document.write("<td></td>")
        }
    }
    document.write("</table>");
    asociarEventos();
}