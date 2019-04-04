$(function () {


});
$(window).scroll(function (event) {
    var currentScrollTop = $(document).scrollTop();
    var boxOffsetTop = $('.num-ani').offset().top;
    if ($('.num-ani').hasClass('aos-animate')) {
        Number.prototype.format = function (n) {
            var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
            return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
        };
        $('.count').each(function () {
            $(this).prop('counter', 0).animate({
                counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'easeOutExpo',
                step: function (step) {
                    $(this).text('$' + step.format());
                }
            });
        });
    }
});