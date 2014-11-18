$(document).ready(function () {

    $('.mobile_menu').click(function () {
        $('nav').toggleClass('menu_show');
    });
    $(".right_slide").click(function () {


        if ($(window).width() > 991) {


            if (parseInt($('#slider').css('left')) > -4500)
                $("#slider").animate({
                    left: "-=895"
                }, 1000, function () {

                });
        }
        else {


            if (parseInt($('#slider').css('left')) > -2100)
                $("#slider").animate({
                    left: "-=419"
                }, 1000, function () {

                });
        }


    });
    $(".left_slide").click(function () {


        if ($(window).width() > 991) {


            if (parseInt($('#slider').css('left')) < 0)
                $("#slider").animate({
                    left: "+=895"
                }, 1000, function () {

                });
        }
        else {


            if (parseInt($('#slider').css('left')) < 0)
                $("#slider").animate({
                    left: "+=419"
                }, 1000, function () {

                });
        }


    });

    $("button").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });


    $("li.about").click(function () {
        $('li').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });

    $(".back_top").click(function () {
        $('li').removeClass('active');
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 500);
    });

    $("li.portfolio").click(function () {
        $('li').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 500);
    });

    $("li.contact").click(function () {
        $('li').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 500);
    });
    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 797) {
            $('.backcolor').fadeIn("fast");
        } else {
            $('.backcolor').fadeOut("fast");
        }

    });
});

