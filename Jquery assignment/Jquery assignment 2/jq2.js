$(document).ready(function () {
    $('body').css("background-color", "red");
    $('p1').css("background-color", "green");
    $('p2').css("background-color", "skyblue");

    $('#wiki').addClass('myclass2');
    
    $('p1').hover(function () {
        console.log('you hoverd on: ', this);
         $('#id').slideToggle(1000);
        },
        function (){
    
            console.log('Thanks for coming')
        });


    $("#wiki").click(function(){
        var txt = "";
        txt += "Inner width: " + $("#wiki").innerWidth() + "</br>";
        txt += "Inner height: " + $("#wiki").innerHeight();
        $("#wiki").html(txt);
      });

    $("p1").click(function(){
        var xt = "";
        xt += "Outer width: " + $("p1").outerWidth() + "</br>";
        xt += "Outer height: " + $("p1").outerHeight();
        $("p1").html(xt);
      });

    $("#wiki").mouseout(function(){
        var t = "";
        t += "Document width/height: " + $(document).width();
        t += "x" + $(document).height() + "\n";
        t += "Window width/height: " + $(window).width();
        t += "x" + $(window).height();
        console.log(t);
      });

    $("#button").click(function(){
        $("p4").offset({top: 500, left: 100});
    });

    // $("div.scroll").scrollTop( 300 );

});

$("div.scroll").scrollTop( 300 );

     



