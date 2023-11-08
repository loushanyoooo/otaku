new WOW().init();

var navPosition = $(".navbar-scroll").offset().top;
$(window).on("scroll",function(){
    var navTop = $(window).scrollTop();
    if(navPosition < navTop){
        $(".navbar-scroll").addClass('navbarA').removeClass('navbarB');
        $(".other").fadeIn();
    }
    else{
        $(".navbar-scroll").addClass('navbarB').removeClass('navbarA');
        $(".other").fadeOut(500);
    }
});

$(".navbar a,.banner a,.other a,.fast a,.scroll").on("click",function(){
    var lineHref = $(this).attr("href");
    var positionHrefTop = $(lineHref).offset().top;
    $("html,body").animate({scrollTop:positionHrefTop-50},500);
    return false;
});

$('.count').each(function(){
    $(this).prop('counter',2470).animate({
        counter:$(this).text()
    },{
        duration:9000,
        easing:'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function(){
    $(".ticket").on("keyup",".many",function(){
        var pay = +$(this).closest(".ticket").data("pay");
        var many = +$(this).val();
        $(this).closest(".ticket").find("#total").text(pay * many);
    });
    $(".ticket").on("click",".many",function(){
        var pay = +$(this).closest(".ticket").data("pay");
        var money = +$(this).closest(".ticket").data("money");
        var many = +$(this).val();
        $(this).closest(".ticket").find("#total").text(pay * many);
    });
});

$(".carousel-control-next").on("click",function(){
    $(".carousel-control-prev").fadeIn();
});
$(".carousel-control-prev").on("click",function(){
    $(".carousel-control-prev").fadeOut();
});

