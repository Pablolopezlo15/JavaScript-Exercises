$(document).ready(function(){  
    $("#btn1").click(function(){
        $("#Circulo").animate({ left: "500px" }, 2000);
        $("#Circulo").animate({ top: "500px" }, 2000);
        $("#Circulo").animate({ left: "800px" }, 2000);
        $("#Circulo").animate({ top: "40px" }, 2000);

    });

    $("#btn2").click(function(){
        $("#Circulo").stop(true, true);
    });
    
});
