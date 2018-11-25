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


$(function(){

    loadMotion();
    QuickActive();
});