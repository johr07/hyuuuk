$(function () {
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.dropdown-trigger').dropdown();

    $('.dropdown-content a').click(function () {
        var asd = $(this).html();
        $(this).parent().parent().parent().children('.dropdown-trigger').html(asd);
    });
    $('.btn_open').click(function () {
        $('.header').addClass('on');
        $('html, body').addClass('on');
    });
    $('.btn_close').click(function () {
        $('.header').removeClass('on');
        $('html, body').removwClass('on');
    });
})