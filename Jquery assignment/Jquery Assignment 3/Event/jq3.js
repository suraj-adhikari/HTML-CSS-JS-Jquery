$("document").ready(function () {
  $("p1").dblclick(function () {
    $("p1").css("background", "blue");
  });

  var block = $(".main");
            block.dblclick(function () {
                block.toggleClass("GFG");
            });

  $("#inp").blur(function () {
    alert("This input field has lost its focus.");
  });

  $("h").click(function () {
    $("h").hide();
  });


  $("#textInput").change(function () {
    $("<p>Input text has changed.</p>").appendTo("body");
  });


  $("body").delegate("h1, h3", "click", function () {
    $(this).after("<h4>Added Another Header!</h4>");
});


var listItems = $( 'li' );
var rawListItem = listItems[1]; 
var html = rawListItem.innerHTML;
console.log(html);

$("#button").click(function () {
    $(".div").css("background", "green");
  });

  $( "input[type=text]" ).focus(function() {
    $( this ).blur();
  });
});
