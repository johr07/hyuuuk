$(function(){
    function header(){
        var $header  = $('#header');
        var $gnb	 = $('#gnb > ul');
        var $depth1  = $('#gnb > ul > li');
        var $showGnb = $('#showGnb');
        var x, y;
        var supportPageOffset = window.pageXOffset !== undefined;

        $header.on({
            'mouseover' : function(){
                $(this).addClass('active');
            },
            'mouseleave' : function(){
                if(y == 0){
                    $(this).removeClass('active open');
                }
            }
        });

        $depth1.on('mouseover focusin', function(){
            $header.addClass('active open');
            $showGnb.children('.type').eq($(this).index()).addClass('on').siblings().removeClass('on');
        });

        $gnb.on('mouseleave focusout', function(){
            $header.removeClass('open');
        });

        $(window).on('load scroll', function(){
            x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
            y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTOp : document.body.scrollTop;

            $header.css({'left':-x});
            
            if(y > 0){
                $header.addClass('active');
            }else{
                $header.removeClass('active');
            }
        });
    };
    function gnb(){
        $('#gnb > ul > li > a').click(function(){
            $(this).next().toggleClass('on');
        });
        $('#trg_aside').click(function(){
            $('#gnb').addClass('on');
        });
        $('.aside_close').click(function(){
            $('#gnb').removeClass('on');
        });
        $('.gnb_bg').click(function(){
            $('#gnb').removeClass('on');
        });
    };
    function mobile_open_close(){
        $('.aside_open').click(function(){
            $('html').addClass('on');
        })
        $('.aside_close').click(function(){
            $('html').removeClass('on');
        })
        $('.gnb_bg').click(function(){
            $('html').removeClass('on');
        })
    };
    function slick(){
        $('.main_visual .slick_wrap').slick({
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $('.main_visual .arrows_wrap'),
            appendDots: $('.main_visual .dots_wrap')
        });
        $('.sub02 .con_1 .slick_wrap').slick({
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $('.sub02 .con_1 .arrows_wrap'),
            appendDots: $('.sub02 .con_1 .dots_wrap')
        });
        $('.sns_wrap .slick_wrap').slick({
            arrows : true,
            dots : false,
            infinite : true,
            autoplay : true,
            autoplaySpeed : 4000,
            slidesToShow : 5,
            slidesToScroll : 1,
            swipe : false,
            appendArrows: $('.sns_wrap .arrows_wrap'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });
    };
    function loadMotion(){
        var $motion = $('.n-motion');
        var windowT;
        if($motion.length){
            $motion.each(function(i){
                var $this = $(this);
                var thisT = $this.offset().top;
                var thisH = $this.height() / 2;
                var thisP = thisT + thisH;
                var event = 'load.'+i+' scroll.'+i;

                $(window).on(event, function(){
                    windowT = $(window).scrollTop() + $(window).outerHeight();
                    if(windowT > thisP){
                        $this.addClass('n-active');
                        $(window).off(event);
                    }
                });
            });
        }
    };
    header();
    gnb();
    mobile_open_close();
    slick();
    loadMotion();
});