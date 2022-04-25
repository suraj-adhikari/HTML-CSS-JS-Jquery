$('document').ready(function(){
    $('#link1').click(function(e) {
        event.preventDefault();
       });

    $("*", document.body).click(function (event) {
            event.stopPropagation();
            var domElement = $(this).get(0);
            $("h3:first").text("Clicked Element: "
                + domElement.nodeName);
        });

        var lastt, tdiff;
        $( "p" ).click(function( event ) {  if (lastt) {
          tdiff = event.timeStamp - lastt;
          $( "#div1" ).append( "Time since last event: " + tdiff + "<br>" );
           } 
           else {
             $( "#div1" ).append( "<br>Click again.<br>" );
               }
             lastt = event.timeStamp;
            });
    $( "h1" ).click(function(event) {
        console.log(event.type);
        });

    $( "input" ).on( "keydown", function(event) {
        $( "div" ).html( event.type + ": " +  event.which );
      });

    $( "input" ).focus(function() {
        $( this ).next( "span" ).css( "display", "inline" ).fadeOut(5000);
        });

    $("div").focusin(function(){
        $(this).attr('class', 'focusedin');
        });
    
    $("div").focusout(function(){
        $(this).attr('class', 'focusedout');
        });


    $( "p1" )
    .mouseup(function() {
      $( this ).append("Mouse up." );
    })
    .mousedown(function() {
      $( this ).append( "Mouse down" );
    }); 
    
    $( window ).resize(function() {
        $( "div" ).prepend( "<div>" + $( window ).width() + "</div>" );
      });
    

});