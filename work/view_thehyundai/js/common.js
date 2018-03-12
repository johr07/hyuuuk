$(function() {
    $(".gnbBtn").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("on");
        $(".gnb").toggleClass("toggle");
        $(".gnbBg").toggleClass("toggle");
        $("body").toggleClass("toggle");
    })

    $(".gnbBg").on("click", function() {
        $(".gnbBtn").toggleClass("on");
        $(".gnb").toggleClass("toggle");
        $(".gnbBg").toggleClass("toggle");
        $("body").toggleClass("toggle");
    })

    $(".hart").on("click", function() {
        $(this).toggleClass("on");
    })

    $(".togledownWrap").find("input:checkbox").on("click tap", function() {        
        var chk = $(this).is(":checked");
        if (chk) {
            $(this).parent().find("label i").addClass("fa-angle-up")
            $(this).parent().find("label i").removeClass("fa-angle-down")
        } else {
            $(this).parent().find("label i").addClass("fa-angle-down")
            $(this).parent().find("label i").removeClass("fa-angle-up")
        }
    });

    $('#write_file').bind('change', function() {
        var filename = $("#write_file").val();
        if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen...");
        } else {
            $(".file-upload").addClass('active');
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });

    $(".tab").on("click", function(e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        target = $(this).children("a").attr('href');
        $('.tab-content > div').not(target).hide();
        $(target).fadeIn(600);
    });

    var $container = $('.grid');
    $container.imagesLoaded(function() {
        $container.masonry({
            columnWidth: '.grid-item',
            itemSelector: '.grid-item'
        });
    });
    //Reinitialize masonry inside each panel after the relative tab link is clicked -
    $('.tab').each(function() {
        var $this = $(this);
        $this.on('click', function() {
            $container.imagesLoaded(function() {
                $container.masonry({
                    columnWidth: '.grid-item',
                    itemSelector: '.grid-item'
                });
            });
        });
    });



    var textarea = document.querySelector('textarea');
    function autosize() {
        var el = this;
        setTimeout(function() {
            el.style.cssText = 'height:auto;';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    }
    $('#write_comment').keyup(function() {
        textarea.addEventListener('keydown', autosize);
    });

    //** Page Loading
    var loading_container = $('.loading_container');
    if (loading_container.length) {
        $('body').imagesLoaded(function() {
            loading_container.removeClass('toggle');
            $(".wrapper").addClass("on");
        });
    }

    var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    var swiper = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        slidesPerView: 'auto'
    });

    var swiper = new Swiper('.swiper-container3', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        slidesPerView: '2'
    });

    var swiper = new Swiper('.swiper-container4', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        paginationClickable: true,
        slidesPerView: '1',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    var swiper = new Swiper('.swiper-container5', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        slidesPerView: '2'
    });

    var swiper = new Swiper('.swiper-container6', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        slidesPerView: '4'
    });








});
