$(function () {
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.dropdown-trigger').dropdown();

    $('.dropdown-content a').click(function(){
        var asd = $(this).html();
        $(this).parent().parent().parent().children('.dropdown-trigger').html(asd);
    });
    $('.btn_menu').click(function(){
        $('.header').addClass('on');
    });
    $('.btn_close').click(function(){
        $('.header').removeClass('on');
    });
})