$(function () {
    copy();
    clickOn();
    owlInitialize();
});

$(window).resize(function () {
    owlInitialize();
});

function copy() {
    $(".click_copy > div").click(function () {
        $(this).after('<span class="success"><b>Copied</b></span>');
        setTimeout(function () {
            $('.success').addClass('show');
            setTimeout(function () {
                $('.success').fadeOut(function () {
                    $('.success').remove();
                });
            }, 1000);
        }, 0);
    });
};

function clickOn() {
    $(".clickOn").click(function () {
        $(this).toggleClass("on");
    });
    $(document).mouseup(function (e) {
        if (!$('.clickOn').is(e.target) && $('.clickOn').has(e.target).length === 0) {
            $('.clickOn').removeClass("on");
        };
    });
};

function owlInitialize() {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (isMobile) {
        $('.tag_wrap').addClass("owl-carousel").addClass("owl-carousel_1");
        $('.banner_wrap').addClass("owl-carousel").addClass("owl-carousel_2");
        $('.owl-carousel_1').owlCarousel({
            autoWidth: true,
            margin: 0,
            dots: false
        });
        $('.owl-carousel_2').owlCarousel({
            autoWidth: true,
            margin: 0,
            dots: false
        });
    } else {
        $('.owl-carousel').owlCarousel('destroy');
        $('.tag_wrap').removeClass("owl-carousel");
        $('.banner_wrap').removeClass("owl-carousel");
    }
}