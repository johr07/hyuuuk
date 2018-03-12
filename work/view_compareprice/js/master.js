$(function(){
    $(window).scroll(function(){
        var wst = $(window).scrollTop();
        if (wst >= 400) {
            $(".wrapper").addClass("on");
            $(".header").addClass("on");
            $(".main_search_wrap").addClass("on");
        }
        else {
            $(".wrapper").removeClass("on");
            $(".header").removeClass("on");
            $(".main_search_wrap").removeClass("on");
        }
    })
    $(".like_button").click(function(){
        $(this).toggleClass("on");
        return false;
    });
    $(".post_t").click(function(){
        $(this).toggleClass("on");
        return false;
    });
    $(".quote3").click(function(){
        $(this).parent(".comment").children(".toggle").toggleClass("on");
        return false;
    });
    $(".gnb_open").click(function(){
        $(".popup_wrap").toggleClass("on");
        return false;
    });
    $(".popup_wrap .popup_close, .popup_wrap .popup_bg").click(function(){
        $(".popup_wrap").toggleClass("on");
        return false;
    });
    $(".report_price").click(function(){
        $(".popup_wrap_2").toggleClass("on");
        $("body").css("overflow-y","hidden");
        return false;
    });
    $(".popup_wrap_2 .popup_close, .popup_wrap_2 .popup_bg_inner").click(function(){
        $(".popup_wrap_2").toggleClass("on");
        $("body").css("overflow-y","auto");
        return false;
    });
    $(".point_select ul li").click(function(){
        $(this).toggleClass("on").siblings().removeClass("on");
    });
    $(".pay_select ul li").click(function(){
        $(this).toggleClass("on").siblings().removeClass("on");
    });
    $(".tab a").click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
        target = $(this).attr('href');
        $(this).parent().parent().parent().parent().find('.tab_con > div').not(target).hide();
        $(target).fadeIn(600);
    });
    $(".nation_select").click(function(){
        $(this).toggleClass("on");
        $(".nation_select").not(this).removeClass("on");
    });
    var smallImg = $(".small_img ul li a img");
    $(smallImg).click(function(){
        var bigImg = $(".big_img img");
        var clickImg = $(this).attr("src");
        $(bigImg).attr("src", clickImg);
        return false;
    })
    function increaseValue() {
        var value = parseInt(document.getElementById('number_ea').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number_ea').value = value;
    }
    function decreaseValue() {
        var value = parseInt(document.getElementById('number_ea').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('number_ea').value = value;
    }
    $(".decrease").click(function(){
        decreaseValue();
    });
    $(".increase").click(function(){
        increaseValue();
    });
    $('.number').each(function() {
    	 $(this).val($.number($(this).val()));
    });
    $('.number').blur(function() {
    	 $(this).val($.number($(this).val()));
    });
});
