$(function(){

  var scrollTop = 0;



  function menuToggleClass(){
    $(".menuBtn").toggleClass("on");
    $(".gnb").toggleClass("on");
    $("html").toggleClass("no_scroll");
  };

  function hederColor(){
    if( scrollTop >= $('.main_visual').outerHeight() ){
      $(".menuBtn").add($(".logo")).removeClass('onVisual');
    }else{
      $(".menuBtn").add($(".logo")).addClass('onVisual');
    }
  };

  function scrollTo(where){
    $('html,body').stop().animate({scrollTop:where});
  };

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
  };

  function visualTitleFindN(){
    $(".title_text").html( //비주얼 타이틀 쪼개기
      $(".title_text").html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;")
    );
    $(".title_text").children().each(function(){ //N을 찾아서 i 태그로 감싸기
      if($(this).text().indexOf('R')>-1 || $(this).text().indexOf('r')>-1){
        $(this).wrapInner('<i></i>');
      }
    });
  };

  function visualTitle_ani(){
    var visualTxt = ['rhyme', 'brilliant', 'remember', 'remain', 'master', 'remedy'];
    var index = Math.floor( Math.random()*visualTxt.length-1 );
    $(".title_text").text(visualTxt[index]);
    visualTitleFindN();

    setInterval(function(){
      var oldIndex = index;
      index = Math.floor( Math.random()*visualTxt.length-1 );
      if (oldIndex === index) {
        index++;
      }
      if (index < 0) {
        index = 0;
      }
      //console.log('인덱스',index);
      $(".title_text").text(visualTxt[index]);
      visualTitleFindN();
    },4300);
  };

  function visualLogo_ani(){
    $(".visual_inner .title_logo").addClass("on");
  };








  $('.scroll_down').on('click',function(){
    scrollTo($('.con_hello').offset().top);
    return false;
  });

  $('.logo').on('click',function(){
    scrollTo(0);
    return false;
  });

  $(".menuBtn").on('click',function(){
    menuToggleClass()
  });



  $(window).on('scroll',function(){
    if ($(".wrap.home").length){
      scrollTop = $(window).scrollTop();
      showTitle();
      hederColor();
    }
    if ($(".wrap.about").length){
      showTitle();
    }
  });

  $(window).on('load',function(){
    setTimeout(function(){
      $(".loading").fadeOut(800);
    },100);
    if ($(".wrap.home").length){
      hederColor();
      setTimeout(function(){
        visualLogo_ani(); //로고 등장
      },800);
      setTimeout(function(){
        visualTitle_ani(); //타이틀 애니메이션 시작
      },1000);
      setTimeout(function(){
        $(".visual_el").addClass("on");
      },1200);
      $('.menu_work a').on('click',function(){
        menuToggleClass();
        scrollTo($('.con_work').offset().top);
        return false;
      });
    }
    if ($(".wrap.about").length){
      $(".menuBtn").add($(".logo")).removeClass('onVisual');
    }
  });
})
