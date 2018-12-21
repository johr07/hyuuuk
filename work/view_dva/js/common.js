$(function () {
    tab();
    dropDown();
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    var swiper = new Swiper('.swiper-container1', {
        direction: 'vertical',
        autoHeight: true,
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000
        }
    });
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 2,
        loop: true,
        autoplay: {
            delay: 5000
        },
        breakpoints: {
            1300: {
                slidesPerView: 1
            }
        }
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

function dropDown() {
    $(".dropDown .drop").click(function () {
        $(this).toggleClass('on');
        //var thisNext = $(this).next(".down");
        //thisNext.toggleClass('on');
        // if (thisNext.css("height") == 0) {
        //     thisNext.removeClass('on');
        // } else {
        //     $(this).parent().siblings().children(".down").removeClass('on');
        //     thisNext.addClass('on');
        // };
    });
}

function hambuger_open() {
    $('.wrapper').addClass('on');
}

function hambuger_close() {
    $('.wrapper').removeClass('on');
}