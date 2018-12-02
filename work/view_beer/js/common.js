function loadMotion() {
    var $motion = $('.n-motion');
    var windowT;
    if ($motion.length) {
        $motion.each(function (i) {
            var $this = $(this);
            var thisT = $this.offset().top;
            var thisH = $this.height() / 2;
            var thisP = thisT + thisH;
            var event = 'load.' + i + ' scroll.' + i;

            $(window).on(event, function () {
                windowT = $(window).scrollTop() + $(window).outerHeight();
                if (windowT > thisP) {
                    $this.addClass('n-active');
                    $(window).off(event);
                }
            });
        });
    }
};

function QuickActive() {
    var $quickBtn = $('.header > .gnb > ul.right > li > a');
    var headerH = $('.header').height();

    $quickBtn.on('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top - headerH
        }, 500);
    });
};

function keydowncheck() {
    var result = true;
    var keycode = event.keyCode;
    if (123 == keycode) //F12 키코드
    {
        result = false;
    }
    return result;
}

function parallaxScroll() {
    var currentScrollTop = $(window).scrollTop();
    $('.con1 .bg1').css('top', (0 + (currentScrollTop * .1)) + 'px');
    $('.con1 .bg2').css('top', (0 + (currentScrollTop * .1)) + 'px');
    $('.con3 .bg1').css('top', (0 + ((currentScrollTop) * .1)) + 'px');
    $('.con3 .bg2').css('top', (0 + ((currentScrollTop) * .1)) + 'px');
}

$(function () {
    /* $(document).bind("contextmenu", function(e) {
		return false;
	});
    $(document)[0].oncontextmenu = function() { return false; }
    $(document).mousedown(function(e) {
        if( e.button == 2 ) {
                alert('내용을 복사할 수 없습니다.');
                return false;
        } else {
                return true;
        }
    });
    */
    $(window).scroll(function (e) {
        parallaxScroll();
        var ccc = $('.con3 .bg2').offset().top;
        console.log(ccc);
    });
    var ccc = $('.con3 .bg2').offset().top;
    console.log(ccc);
    loadMotion();
    QuickActive();
});