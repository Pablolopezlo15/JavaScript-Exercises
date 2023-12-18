$(document).ready(function() {
    $("#start").click(function() {
    $("#square").addClass("square");
    $("#square").animate({ left: "200px" }, 2000);    
     $("#square").css({"background-color" : "blue"});
    // $("#square").animate({ top: "-40px" }, 2000);



      $("#Circulo").animate({ top: "500px" }, 2000);
      $("#Circulo").animate({ left: "800px" }, 2000);
      $("#Circulo").animate({ top: "40px" }, 2000);

  });
    
});

