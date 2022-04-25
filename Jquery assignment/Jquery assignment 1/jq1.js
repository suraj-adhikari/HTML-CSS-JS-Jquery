

$(document).ready(function () {
    $('#div').children('.div1').css('background','green');
    $('#div').children('.div2').css('background','blue');
    $('body').css("background-color", "red");
    $('.name').hide();



    $("#myselect").change(function() {
        alert($(this).find("option:selected").text()+' clicked!');
    });
    
    var listItems = $( 'li' );
    var rawListItem = listItems[1];
    var html = rawListItem.innerHTML;
    console.log(html);

    $('li').click(function(){
        document.getElementById('ui').innerHTML= "Index" +  + $(this).index()+"     "+ $(this).text();
    });
    


    $("a").attr("href","http://www.yahoo.com");
    $("a").text("Yahoo")
});
