$(document).ready(function(){

    $( ".right_slide" ).click(function() {
        $( "#slider" ).animate({
            left: "-=890",
        }, 1000, function() {

        });
    });
    $( ".left_slide" ).click(function() {
        $( "#slider" ).animate({
            left: "+=890",
        }, 1000, function() {

        });
    });

    $("button").click(function() {
        $('html, body').animate({
            scrollTop: $(".porfolio").offset().top
        }, 1000);
    });
});