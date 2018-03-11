/*visual.js*/
$(function(){

    // 전역변수 선언
    var tl_visual = null;
    var $title_text = null;
    var visualTxt = null;

    // 전역에서 사용할 요소 초기화

    $title_text = $(".title_text");
    visualTxt = ['unique', 'brilliant', 'notable', 'amazing', 'splendid', 'unlimited']; //비주얼 타이틀에 쓰일 문구
    function init(){

    }

    function visual_ani() {
        $(".visual_el").addClass("on");


    }


    function visualTitle_ani(){

        var index = Math.floor( Math.random()*visualTxt.length-1 );
        $title_text.text(visualTxt[index]);
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
            $title_text.text(visualTxt[index]);
            visualTitleFindN();
        },4300);

	}

    function visualTitleFindN(){



        $title_text.html( //비주얼 타이틀 쪼개기
            $title_text.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;")
        );

        $title_text.children().each(function(){ //N을 찾아서 i 태그로 감싸기
            if($(this).text().indexOf('N')>-1 || $(this).text().indexOf('n')>-1){
                $(this).wrapInner('<i></i>');
            }
        });

    }




    ////////////////////////////////////////////////

    function visualLogo_ani(){

        $(".visual_inner .title_logo").addClass("on");

    }


    function initEvent(){



    }



    $(window).on('load',function(){

        init();


        setTimeout(function(){
            visualLogo_ani(); //로고 등장
        },800);
        setTimeout(function(){
            visualTitle_ani(); //타이틀 애니메이션 시작
        },1100);
        setTimeout(function(){
            visual_ani();  //비주얼 애니메이션(구름, 나무) 시작
        },1000);

    });







});
