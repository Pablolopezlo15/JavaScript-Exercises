window.addEventListener('scroll', scrollInfinito);



function scrollInfinito(){
    
    let altoScroll = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if((scrollTop + clientHeight)>(altoScroll - 15)){
        document.getElementById("etiqueta").innerHTML+="Salta Scroll<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
    }

}
