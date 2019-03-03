$(function () {
    $(document).on("scroll", onScroll);
    tab();
    $('.right_fix a').on('click', function (e) {
        e.preventDefault();
        var id = $(e.currentTarget).attr('href');
        var $dest = $(id);

        $('html,body').animate({
            scrollTop: ($dest.offset().top)
        }, 1000);
    });
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

function onScroll(){
    var scrollPos = $(document).scrollTop();
    $('.right_fix a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.right_fix a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}