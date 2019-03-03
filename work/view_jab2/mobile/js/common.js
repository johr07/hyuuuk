$(function () {
    tab();
    openNav();
    closeNav();
})

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

function onScroll() {
    var scrollPos = $(document).scrollTop();
    $('.right_fix a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.right_fix a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

function openNav() {
    $('.open_menu').click(function(){
        $('.menu').addClass('on');
    });
}
function closeNav() {
    $('.gnb_close').click(function(){
        $('.menu').removeClass('on');
    });
}