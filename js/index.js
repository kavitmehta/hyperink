
/*Start for buttons for gallery*/
  $(document).ready(function(){
$(".showMe1").toggle().show();
$(".showMegallery1").toggle().hide();
$(".showMegallery2").toggle().hide();
$(".showMegallery3").toggle().hide();
$(".showMegallery4").toggle().hide();
$(".showMegallery5").toggle().hide();


    $("#gallery-button-class").click(function(){
       $(".showMegallery").show();
     $(".showMegallery1").toggle().hide();
       $(".showMegallery2").toggle().hide();
       $(".showMegallery3").toggle().hide();
       $(".showMegallery4").toggle().hide();
       $(".showMegallery5").toggle().hide();
    });


    $(".gallery-button-class1").click(function(){
       $(".showMegallery").toggle().hide();
     $(".showMegallery1").show();
       $(".showMegallery2").toggle().hide();
       $(".showMegallery3").toggle().hide();
       $(".showMegallery4").toggle().hide();
       $(".showMegallery5").toggle().hide();
    });


    $(".gallery-button-class2").click(function(){
       $(".showMegallery").toggle().hide();
     $(".showMegallery1").toggle().hide();
       $(".showMegallery2").show();
       $(".showMegallery3").toggle().hide();
       $(".showMegallery4").toggle().hide();
       $(".showMegallery5").toggle().hide();
    });


    $(".gallery-button-class3").click(function(){
         $(".showMegallery").toggle().hide();
     $(".showMegallery1").toggle().hide();
       $(".showMegallery2").toggle().hide();
       $(".showMegallery3").show();
       $(".showMegallery4").toggle().hide();
       $(".showMegallery5").toggle().hide();
    });


    $(".gallery-button-class4").click(function(){
        $(".showMegallery").toggle().hide();
     $(".showMegallery1").toggle().hide();
       $(".showMegallery2").toggle().hide();
       $(".showMegallery3").toggle().hide();
       $(".showMegallery4").show();
       $(".showMegallery5").toggle().hide();
    });


    $(".gallery-button-class5").click(function(){
       $(".showMegallery").toggle().hide();
     $(".showMegallery1").toggle().hide();
       $(".showMegallery2").toggle().hide();
       $(".showMegallery3").toggle().hide();
       $(".showMegallery4").toggle().hide();
       $(".showMegallery5").show();
    });
    /*End for buttons for gallery*/
});
/*Start for buttons for Parallax*/
  $(document).ready(function(){
$(".showMe1").toggle().show();
$(".showMe2").toggle().hide();
$(".showMe3").toggle().hide();
$(".showMe4").toggle().hide();
$(".showMe5").toggle().hide();
$(".showMe6").toggle().hide();


    $("#parallax-id1").click(function(){
$(".showMe1").show();
$("#parallax-id1").css("background-color","#4dc2e6");
$("#parallax-id2").css("background-color","");
$("#parallax-id3").css("background-color","");
$("#parallax-id4").css("background-color","");
$("#parallax-id5").css("background-color","");
$("#parallax-id6").css("background-color","");
$(".showMe2").toggle().hide();
$(".showMe3").toggle().hide();
$(".showMe4").toggle().hide();
$(".showMe5").toggle().hide();
$(".showMe6").toggle().hide();
    });


    $("#parallax-id2").click(function(){
$("#parallax-id1").toggle().show().css("background-color","#4dc2e6");
$("#parallax-id2").css("background-color","#4dc2e6");
$("#parallax-id1").css("background-color","");
$("#parallax-id3").css("background-color","");
$("#parallax-id4").css("background-color","");
$("#parallax-id5").css("background-color","");
$("#parallax-id6").css("background-color","");
$(".showMe1").toggle().hide();
$(".showMe2").show();
$(".showMe3").toggle().hide();
$(".showMe4").toggle().hide();
$(".showMe5").toggle().hide();
$(".showMe6").toggle().hide();
    });


    $("#parallax-id3").click(function(){
      $("#parallax-id3").css("background-color","#4dc2e6");
$("#parallax-id2").css("background-color","");
$("#parallax-id1").css("background-color","");
$("#parallax-id4").css("background-color","");
$("#parallax-id5").css("background-color","");
$("#parallax-id6").css("background-color","");
$(".showMe1").toggle().hide();
$(".showMe2").toggle().hide();
$(".showMe3").show();
$(".showMe4").toggle().hide();
$(".showMe5").toggle().hide();
$(".showMe6").toggle().hide();
    });


    $("#parallax-id4").click(function(){
          $("#parallax-id4").css("background-color","#4dc2e6");
$("#parallax-id2").css("background-color","");
$("#parallax-id1").css("background-color","");
$("#parallax-id3").css("background-color","");
$("#parallax-id5").css("background-color","");
$("#parallax-id6").css("background-color","");
$(".showMe1").toggle().hide();
$(".showMe2").toggle().hide();
$(".showMe3").toggle().hide();
$(".showMe4").show();
$(".showMe5").toggle().hide();
$(".showMe6").toggle().hide();
    });


    $("#parallax-id5").click(function(){
               $("#parallax-id5").css("background-color","#4dc2e6");
$("#parallax-id2").css("background-color","");
$("#parallax-id1").css("background-color","");
$("#parallax-id3").css("background-color","");
$("#parallax-id4").css("background-color","");
$("#parallax-id6").css("background-color","");
$(".showMe1").toggle().hide();
$(".showMe2").toggle().hide();
$(".showMe3").toggle().hide();
$(".showMe4").toggle().hide();
$(".showMe5").show();
$(".showMe6").toggle().hide();
    });


    $("#parallax-id6").click(function(){
               $("#parallax-id6").css("background-color","#4dc2e6");
$("#parallax-id2").css("background-color","");
$("#parallax-id1").css("background-color","");
$("#parallax-id3").css("background-color","");
$("#parallax-id5").css("background-color","");
$("#parallax-id4").css("background-color","");
       $(".showMe1").toggle().hide();
$(".showMe2").toggle().hide();
$(".showMe3").toggle().hide();
$(".showMe4").toggle().hide();
$(".showMe5").toggle().hide();
$(".showMe6").show();
    });
    /*End for buttons for Parallax*/


});


