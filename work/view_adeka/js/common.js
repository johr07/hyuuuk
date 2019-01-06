function dropDwon() {
    $('.dropDown .drop').click(function () {
        $(this).toggleClass('on');
    });
};

function dropDwonSel() {
    $('.dropDownSel').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropDownSel').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropDownSel .dropdown-menu li').click(function () {
        $(this).parents('.dropDownSel').find('span').text($(this).text());
        $(this).parents('.dropDownSel').find('input').attr('value', $(this).attr('id'));
    });

    $('.dropdown-menu li').click(function () {
        var input = '<strong>' + $(this).parents('.dropDownSel').find('input').val() + '</strong>',
            msg = '<span class="msg">Hidden input value: ';
        $('.msg').html(msg + input + '</span>');
    });
};

function tab() {
    $(".tab_list + .tab_content_wrap > .tab_content").hide();
    $(".tab_list + .tab_content_wrap > .tab_content:first-child").show();
    $(".tab_list a").click(function (e) {
        e.preventDefault();
        $(this).closest(".tab_list").find("a").removeClass("active");
        $(this).addClass("active");
        $(this).closest(".tab_list").next().children().hide();
        var activeTab = $(this).attr("data-rel");
        $("#" + activeTab).fadeIn();
    });
}

function openDiv(id, callback) {
    var thisDiv = $('#openClose_' + id);
    var thisDiv_f = $('#openClose_' + id + '_f');
    thisDiv.slideToggle();
    thisDiv_f.slideToggle();
};


$(function () {
    dropDwon();
    dropDwonSel();
    tab();
});