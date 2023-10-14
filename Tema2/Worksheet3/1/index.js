cad = "hola";
cad2 = "Hola buenas tardes"
cad3 = "a aaaaa aaa aaaaaaaaaaaaaa a aa"

function invierteCadena(cad_arg){
   var cadenareversa = cad.split("").reverse().join(""); 
   document.write(cadenareversa+"<br>");   
}
invierteCadena(cad);

function inviertePalabra(cad_arg){
    var cadenapalreversa = cad2.split(" ").reverse().join(" ");
   document.write(cadenapalreversa+"<br>");   
}
inviertePalabra(cad2);

function encuentraPalabraMasLarga(cad_arg){
    var palabramaslarga = cad3.split(" ");
    for(i=0;i<cad3.length;i++){
        x = cad3[i]

    }
    document.write(palabramaslarga.length);

}
encuentraPalabraMasLarga(cad3);

function filtraPalabrasMasLargas(cad_arg,num){
    palabrasSeparadas = cad_arg.split(" ");
    palabraConcuerdaConNum = "";
    for(i=0;i<palabrasSeparadas.length;i++){
        
    }

}