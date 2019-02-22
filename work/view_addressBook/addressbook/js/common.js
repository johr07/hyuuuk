function dropdown() {
    $(".drop").click(function () {
        $(this).toggleClass('on');
    });
}

function openLayer(id, callback) {
    var thisLayer = $('#layer_' + id);
    thisLayer.fadeIn();
    $(document).mouseup(function (e) {
        if (!$('.layer').is(e.target) && $('.layer').has(e.target).length === 0) {
            $('.layer').fadeOut();
        };
    });
};

function closeLayer() {
    $('.layer').fadeOut();
};

$(function () {
    dropdown();

    $(".left_toggle").click(function(){
        $(".container").toggleClass("on");
    })
});