$(document).ready(function () {
    $('.nut-menu').click(function (e) { 
        e.preventDefault();
        $('.icon-1').toggleClass('hide');
        $('.icon-2').toggleClass('hide');
        $('nav').toggleClass('di-vao');
    });

    $('.nut-back-to-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },'fast');
    });

    $('.nut-back-to-top').hide();

    $(window).scroll(function () { 
        if (window.pageYOffset >= 200 ) {
            $('.nut-back-to-top').fadeIn(400);
        } else {
            $('.nut-back-to-top').fadeOut(400);
        }
    });


    $('.nut-1').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop:$('.khoi-2').offset().top
        },400);
    });

    $('.nut-2').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop:$('.khoi-3').offset().top
        },400);
    });

    $('.item-1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },'fast', function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:$('.khoi-2').offset().top
        },'fast', function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:$('.khoi-3').offset().top
        },'fast', function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-4').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:$('.khoi-5').offset().top
        },'fast', function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });

    $('.item-5').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:$('.khoi-7').offset().top
        },'fast', function(){
            $('nav').removeClass('di-vao');
            $('.icon-1').removeClass('hide');
            $('.icon-2').addClass('hide');
        });
    });
    

});