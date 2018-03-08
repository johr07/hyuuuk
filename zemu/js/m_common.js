$(function() {
    $(".menu-toggle").on('click', function() {
        $('.menu-toggle').toggleClass("on");
        $('.menu-section').toggleClass("on");
        $(".menu-section nav ul").toggleClass('hidden');
        $("body").toggleClass('on');
    });
    $(".menu-section nav ul li a").on('click', function() {
        $('.menu-toggle').toggleClass("on");
        $('.menu-section').toggleClass("on");
        $(".menu-section nav ul").toggleClass('hidden');
        $("body").toggleClass('on');
    });



    $(window).scroll(function() {
        var topWindow = $(window).scrollTop();
        var topWindow = topWindow * 1.5;
        var windowHeight = $(window).height();
        var position = topWindow / windowHeight;
        position = 1 - position;
    });
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
        return false;
    });
})
