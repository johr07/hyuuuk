$(function () {});

function openPopup(id, callback) {
    var thisPopup = $('#popup-' + id);
    thisPopup.after('<div class="popup_overlay"></div>')
    thisPopup.fadeIn(200);
    $('html,body').addClass('popup_open');
    $('.popup_overlay').fadeIn(100);
    $(document).mouseup(function (e) {
        if (!$('.popup_inner').is(e.target) && $('.popup_inner').has(e.target).length === 0) {
            $('.popup').fadeOut(100);
            $('.popup_overlay').fadeOut(200, function () {
                $('.popup_overlay').remove();
            });
            $('body').removeClass('popup_open');
        };
    });
};

function closePopup() {
    $('.popup').fadeOut(100);
    $('.popup_overlay').fadeOut(200, function () {
        $('.popup_overlay').remove();
    });
    $('body').removeClass('popup_open');
};