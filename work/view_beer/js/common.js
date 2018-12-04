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

// makes the parallax elements
function parallaxIt() {
    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var $contents = [];
    var $backgrounds = [];

    // for each of content parallax element
    $('[data-type="content"]').each(function (index, e) {
        var $contentObj = $(this);

        $contentObj.__speed = ($contentObj.data('speed') || 1);
        $contentObj.__fgOffset = $contentObj.offset().top;
        $contents.push($contentObj);
    });

    // for each of background parallax element
    $('[data-type="background"]').each(function () {
        var $backgroundObj = $(this);

        $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
        $backgroundObj.__fgOffset = $backgroundObj.offset().top;
        $backgrounds.push($backgroundObj);
    });

    // update positions
    $fwindow.on('scroll resize', function () {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        $contents.forEach(function ($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

            $contentObj.css('top', yPos);
        })

        $backgrounds.forEach(function ($backgroundObj) {
            var yPos = ((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
                backgroundPosition: '50% ' + yPos + 'px'
            });
        });
    });

    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
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
$(function () {
    $(document).bind("contextmenu", function(e) {
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
    
    parallaxIt();
    loadMotion();
    QuickActive();
});