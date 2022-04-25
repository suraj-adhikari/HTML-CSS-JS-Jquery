$("document").ready(function () {
  $( "#btn1" ).click(function() {
    $( "#box" ).animate({
     width: "300px",
     height: "300px", 
      }, 1500 );
  });
  
  $( "#btn2" ).click(function() {
    $( "#box" ).animate({
     width: "100px",
     height: "100px",    
      }, 1500 );
  });

  $(".button").click(function(){
    $("#div1").delay(800).fadeIn();
    $("#div2").delay(2400).fadeIn();
    $("#div3").delay(4000).fadeIn();
  });

  $( "#start" ).click(function() {
    $( "span" )
    .animate({ left:"+=200px" }, 1500 )    .animate({ top:"0px" }, 400 )
    .queue(function() {
    $( this ).toggleClass( "red" ).dequeue();
    })
    .animate({ left:"10px", top:"30px" }, 400 );
    });

  $('#lorem').animate({
        opacity:0.6,
        height: '150px',
        width:'350px'
  },500);

  $("#but2").click(function(){
    $("#div4").fadeToggle();
    $("#div5").fadeToggle("slow");
    $("#div6").fadeToggle(4000);

  
});
  $( "#but5" ).click(function() {
    $( "p" ).hide(3000);
  });

  $("#enable").click(function(){
    jQuery.fx.off = false;
  }); 

  $("#disable").click(function(){
    jQuery.fx.off = true;
  });

  $("#toggle").click(function(){
    $("div").toggle("slow");
  });
  $(".btn7").click(function(){
    $(".class").slideDown();
  });  
$(".btn8").click(function(){
    $(".class").slideUp();
});


  
});
