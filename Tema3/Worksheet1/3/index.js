function lanzamiento(){
    var numTiradasUno = 0;
    var numTiradasDos = 0;
    var numTiradasTres = 0;
    var numTiradasCuatro = 0;
    var numTiradasCinco = 0;
    var numTiradasSeis = 0;

    for(i=0;i<6000;i++){
        var valor = parseInt((Math.floor((Math.random() * 6)+1)));
        
        switch(valor){
            case 1:
                numTiradasUno++;
            break;
            case 2:
                numTiradasDos++;
            break;
            case 3: 
                numTiradasTres++;
            break;
            case 4:
                numTiradasCuatro++;
            break;
            case 5:
                numTiradasCinco++;
            break;
            case 6:
                numTiradasSeis++;
            break;

        }
    }

    Tiradas = [`El nº 1 ha salido: ${numTiradasUno}<br>El nº 2 ha salido: ${numTiradasDos}<br>El nº 3 ha salido: ${numTiradasTres}<br>El nº 4 ha salido: ${numTiradasCuatro}<br>El nº 5 ha salido: ${numTiradasCinco}<br>El nº 6 ha salido: ${numTiradasSeis}`];
    return document.write(Tiradas);


    /*
    document.write("El dado sacado "+numTiradasUno+" el nº 1<br>");
    document.write("El dado sacado "+numTiradasDos+" el nº 2<br>");
    document.write("El dado sacado "+numTiradasTres+" el nº 3<br>");
    document.write("El dado sacado "+numTiradasCuatro+" el nº 4<br>");
    document.write("El dado sacado "+numTiradasCinco+" el nº 5<br>");
    document.write("El dado sacado "+numTiradasSeis+" el nº 6<br>");
    */

}

lanzamiento();