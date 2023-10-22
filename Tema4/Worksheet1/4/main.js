window.onload = () =>{
    console.log("CARGADA PAGINA");
    document.write("<table>");
    for (i = 0; i<100; i++){
        for(j = 0; j<100; j++){
            document.write("<td></td>")
        }
    }
    document.write("</table>");
    asociarEventos();

}