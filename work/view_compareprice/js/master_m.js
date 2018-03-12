$(function(){
    $(".item_like").click(function(){
        $(this).toggleClass("on");
        return false;
    });
    $(".con_post").click(function(){
        $(this).toggleClass("on").siblings().removeClass('on');
    });
    $(".gnb_user .menu_button").click(function(){
        $(this).parent().toggleClass("on");
    });
    $(".sort_product .item").click(function(){
        $(this).parent().toggleClass("on").siblings().removeClass('on');
    });
    $(".select_box_title").click(function(){
        $(this).parent().children(".con_check_box").toggleClass("on");
    });
    $(".con_check_box .close_btn").click(function(){
        $(this).parent().toggleClass("on");
    });
    $(".sel").click(function(){
        $(this).parent().children("ul").toggleClass("on");
        return false;
    });
    $(".nation_select").click(function(){
        $(this).toggleClass("on");
    });
    $(".quote3").click(function(){
        $(this).parent(".comment").children(".toggle").toggleClass("on");
        return false;
    });
    $(".menu_button").click(function(){
        $(".popup_wrap").toggleClass("on");
        return false;
    });
    $(".name a").click(function(){
        $(".popup_wrap").toggleClass("on");
        return false;
    });
    $(".popup_wrap .popup_close, .popup_bg").click(function(){
        $(".popup_wrap").toggleClass("on");
        return false;
    });
    $(".report_button").click(function(){
        $(".popup_wrap2").toggleClass("on");
        $("body").css("overflow-y","hidden");
        return false;
    });
    $(".popup_wrap2 .popup_close").click(function(){
        $(".popup_wrap2").toggleClass("on");
        $("body").css("overflow-y","auto");
        return false;
    });
    $(".con_error a").click(function(){
        $(".popup_wrap3").toggleClass("on");
        $("body").css("overflow-y","hidden");
        return false;
    });
    $(".popup_wrap3 .popup_close").click(function(){
        $(".popup_wrap3").toggleClass("on");
        $("body").css("overflow-y","auto");
        return false;
    });
    $(".tab a").click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
        target = $(this).attr('href');
        $(this).parent().parent().parent().parent().find('.tab_con > div').not(target).hide();
        $(target).fadeIn(600);
    });
    $(".tab_button a").click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
        target = $(this).attr('href');
        $(this).parent().parent().parent().parent().find('.tab_con > div').not(target).hide();
        $(target).fadeIn(600);
        return false;
    });
    $(".point_select ul li").click(function(){
        $(this).toggleClass("on").siblings().removeClass("on");
    });
    $(".pay_select ul li").click(function(){
        $(this).toggleClass("on").siblings().removeClass("on");
    });
});
