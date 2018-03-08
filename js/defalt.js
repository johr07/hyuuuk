$(function(){
    function parallax(){
        $(window).scroll(function(){
            var scrollT = $(window).scrollTop();
            var scrollB = $(window).scrollTop() + window.innerHeight;
            var parallax1 = $(".parallax1");
            if (parallax1.length) {
                var parallax1_OT = parallax1.offset().top;
                var parallax1_OB = parallax1.offset().top + $(".parallax1").innerHeight();
                if (scrollB >= parallax1_OT && scrollT <= parallax1_OB) {
                    var parallax1 = scrollB - parallax1_OT;
                    $(".parallax1 figure:nth-child(1)").css('opacity',(1 / parallax1) * 400);
                  	$(".parallax1 figure:nth-child(2)").css('transform','translate3d('+'-50%'+","+(-parallax1 * 0.01)+"px"+","+'0'+')');
                  	$(".parallax1 figure:nth-child(3)").css('transform','translate3d('+'-50%'+","+(-parallax1 * 0.02)+"px"+","+'0'+')');
                  	$(".parallax1 figure:nth-child(4)").css('transform','translate3d('+'-50%'+","+(-parallax1 * 0.01)+"px"+","+'0'+')');
                };
            }
            var parallax2 = $(".parallax2");
            if (parallax2.length) {
                var parallax2_OT = $(".parallax2").offset().top;
                var parallax2_OB = $(".parallax2").offset().top + $(".parallax2").innerHeight();
                if (scrollB >= parallax2_OT && scrollT <= parallax2_OB) {
                    var parallax2 = scrollB - parallax2_OT;
                    $(".parallax2 figure:nth-child(1)").css('opacity',(1 / parallax2) * 400);
                  	$(".parallax2 figure:nth-child(2)").css('opacity',(10 * parallax2) / 200 * 0.01);
                  	$(".parallax2 figure:nth-child(3)").css('transform','translate3d('+'-50%'+","+(-parallax2 * 0.02)+"px"+","+'0'+')');
                  	$(".parallax2 figure:nth-child(4)").css('transform','translate3d('+'-50%'+","+(parallax2 * 0.02)+"px"+","+'0'+')');
                };
            }
        });
    };
    function heroH(){
        $(".section.main_hero .row").css("height",window.innerHeight);
    };


    heroH();
    parallax();



    $(".gnb_open").click(function(){
        $(".gnb_wrap").addClass("on");
        $("body").on('scroll touchmove mousewheel', function(e) {
            e.preventDefault();
        });
        return false;
    });
    $(".gnb_close").click(function(){
        $(".gnb_wrap").removeClass("on");
        $("body").off('scroll touchmove mousewheel');
        return false;
    });
});
