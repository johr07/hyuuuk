$(function () {
  tab();
});

function openPopup(id, callback) {
  var thisPopup = $('#popup_' + id);
  $('.popupWrap').fadeIn();
  $('html, body').addClass('on');
  thisPopup.fadeIn();
  $(document).mouseup(function (e) {
    if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
      $('.popupWrap').fadeOut();
      $('.popup').fadeOut();
    };
  });
};

function closePopup() {
  $('.popupWrap').fadeOut();
  $('.popup').fadeOut();
  $('html, body').removeClass('on');
};

function tab() {
  $(".tab_list + .tab_content_wrap > .tab_content").hide();
  $(".tab_list + .tab_content_wrap > .tab_content:first-child").show();
  $(".tab_list a").click(function (e) {
    e.preventDefault();
    $(this).closest(".tab_list").find("a").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".tab_list").next().children().hide();
    var activeTab = $(this).attr("data-rel");
    $("#" + activeTab).fadeIn();
  });
}