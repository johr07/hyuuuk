/*common.js*/
$(function(){

    //로딩 이미지 제거
    function removeLoading(){
       $(".loading").fadeOut(800);
       //$(".loading").css({'z-index':'-100'});
    }



    $(window).on('load',function(){


        setTimeout(function(){
            removeLoading();
        },100);



    });





    console.log('안녕하세요! :D');


});
$(function(){


    // 전역변수 선언
    var $body = null;
    var $burger = null;
    var $gnb = null;
    var $gnb_item = null;
    var isOnTop = false;

    // 전역에서 사용할 요소 초기화
    function init(){
        $body = $("body");
        $burger = $(".menuBtn");
        $gnb = $(".gnb");
        $gnb_item = $(".menu_item");
    }

    function openBurgerMenu(){
            $gnb.addClass('open'); //GNB배경 보이기
            $burger.addClass('open'); //버거 아이콘 바꾸기
            if($burger.hasClass('onTop')==true){ //onTop클래스가 있으면 제거
                isOnTop = true;
                $burger.removeClass('onTop');
            }
            tl_nav_show.play().timeScale(1); //애니메이션 실행
            $gnb.addClass('open'); //GNB배경 보이기
            preventScroll();

            function preventScroll(){
                $("html").addClass("no_scroll");
                $(".wrap").css({"margin-right":scrollBarWidth()});
                $(".footer").css({width:"calc(100% - "+scrollBarWidth()+"px)"});
                $(".menu").css({right:'+='+scrollBarWidth()});
            }

        	//브라우저별로 달라지는 스크롤바 너비 구하기
            function scrollBarWidth() {
                document.body.style.overflow = 'hidden';
                var width = document.body.clientWidth;

                document.body.style.overflow = 'scroll';
                width -= document.body.clientWidth;

                if(!width) width = document.body.offsetWidth - document.body.clientWidth;

                document.body.style.overflow = '';

                return width;
            }



    }

    function closeBurgerMenu(){

           function allowScroll(){
                $(".wrap, .menu, .footer").removeAttr("style");
                $("html").removeClass("no_scroll");
           }

           $burger.removeClass('open'); //버거 아이콘 바꾸기


           setTimeout(function(){
               $gnb.removeClass('open'); //GNB배경 숨기기

               if(isOnTop==true){ //메뉴를 열 때 onTop클래스가 있었으면 다시 추가
                   isOnTop = false;
                   $burger.addClass('onTop');
               }
           },300);

           setTimeout(function(){
               allowScroll();

           },520);

    }


    function initEvent(){

        $gnb.show();


        //메뉴 클릭 시 헤더 오픈/클로즈
        $burger.on('click',function(evt){
           evt.preventDefault();


           if(!$gnb.hasClass('open')){
               $burger.removeClass('open');
           }
        });

        //메뉴 아이템 클릭 시 버거 닫고 이동
        $gnb_item.on('click',function(evt){
            var href = $(this).children('a').attr('href');
            console.log(href);
            evt.preventDefault();
            closeBurgerMenu();
                setTimeout(function(){
                   window.location.href = href;
                }, 600);
        });
    }



    $(window).on('load',function(){
        init();
        initEvent();
    });

});


/*footer.js*/
$(function(){




    $(window).on('load resize',function(){


      siteFooter();

        function siteFooter() {
            var siteContent = $('.contents');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.footer');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();

            siteContent.css({
                "margin-bottom" : siteFooterHeight
            });
        };




    });

    $(window).on('load resize',function(){



    //문서 2/3이상 스크롤 시 on클래스 부여
	var scrollBottom = 0;
    var bodyHeight = $(document).height();
	var scrollOverBodyHeight = (bodyHeight/3)*2
	function toTop_or_toBottom(){
		scrollBottom = $(window).scrollTop()+$(window).height();
		if ( scrollBottom >= scrollOverBodyHeight ){
			$('.footer').addClass("on");
		}else{
			$('.footer').removeClass("on");
		}
	}

       $(window).on("scroll",function(){toTop_or_toBottom()});



    });



});



$(function(){

    // 전역변수 선언
    var $burger = null;
    var $logo = null;
    var scrollTop = 0;
    var topAreaHeight = 0;

    // 전역에서 사용할 요소 초기화
    function init(){
        $burger = $(".menu");
        $logo = $(".logo");
        topAreaHeight = $('.main_visual').outerHeight();
    }

     function showTitle(){
        $("[data-ani]").each(function(){


            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + ( $(window).height() / 1.5);
            var $titleLine = $(this).next('.title_line');

            function showElemLine(){
                $titleLine.addClass('on');
            }


            if ( windowBottom > objectBottom ) {
              $(this).addClass("on");
            }


        });


    }

    function burgerColor(){
        if( scrollTop >= topAreaHeight ){
            $burger.add($logo).removeClass('onTop');
        }else{
            $burger.add($logo).addClass('onTop');
        }
    }

    function scrollTo(where){
            $('html,body').stop().animate({scrollTop:where});

    }


    // 이벤트 초기화
    function initEvent(){

        $(window).on('scroll',function(){
            scrollTop = $(window).scrollTop();

            showTitle();
            if ($(".wrap.about").length){
                return false;
            }
            burgerColor();

        });

        $('h1').on('click',function(){
           // scrollToTop();
        });
    }

    $(window).on('load',function(){
        init();
        initEvent();
        scrollTop = $(window).scrollTop();
        burgerColor();

       if ($(".wrap.home").length){

           var posWork = $('.con_work').offset().top;

            $('h1').on('click',function(){
                scrollTo(0);
            });
            $('.menu_work').on('click',function(){
                scrollTo(posWork);
            });
            $('.menu_about').on('click',function(){
                window.location.href = 'about.html';
            });
        }
       if ($(".wrap.about").length){
            $burger.add($logo).removeClass('onTop');

            $('h1').on('click',function(){
                window.location.href = '/';
            });
        }
       if ($(".wrap.work").length){


            $('h1').on('click',function(){
                window.location.href = '/';
            });
        }
    });


    $(window).on('resize',function(){
        topAreaHeight = $('.topArea').outerHeight();
        console.log(topAreaHeight);
    });





});
