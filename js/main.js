$(document).ready(function(){

    $( ".right_slide" ).click(function() {
        $( "#slider" ).animate({
            left: "-=952"
        }, 1000, function() {

        });
    });
    $( ".left_slide" ).click(function() {
        $( "#slider" ).animate({
            left: "+=952"
        }, 1000, function() {

        });
    });

    $("button").click(function() {
        $('html, body').animate({
            scrollTop: $(".porfolio").offset().top
        }, 1000);
    });

    $(window).scroll(function (event) {
        if($(window).scrollTop() > 797 ) {
            $('.backcolor').fadeIn("fast");
        } else
        {
            $('.backcolor').fadeOut("fast");
        }

    });
});