$(function () {
  $('.btn_banner_01').click(function () {
    $('.banner-top-2').toggleClass('on');
  })

  $("[type=file]").on("change", function () {
    // Name of file and placeholder
    var file = this.files[0].name;
    var fileName = $(this).attr("placeholder");
    if ($(this).val() != "") {
      $(this).next().text(file);
    } else {
      $(this).next().text(fileName);
    }
  });
  $('.tab_header').each(function (element) {
    var slider_width,
      tab_width,
      left_position,
      $active,
      $content,
      $links = $(this).find('a'),
      $currentTab = $(this).find('a.on')

    $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('on');
    $content = $($active[0].hash);
    $links.not($active).each(function () {
      $(this.hash).hide();
    });
    // Binds the click event handler
    $(this).on('click', 'a', function (e) {
      $active.removeClass('on');
      $content.hide();
      $active = $(this);
      $content = $(this.hash);
      $active.addClass('on');
      $content.show();
      e.preventDefault();
    });
  });
});



function openPopup(id, callback) {
  var thisPopup = $('#popup-' + id);
  $('html, body').css({
    overflow: 'hidden'
  });
  thisPopup.after('<div class="popup_overlay"></div>')
  thisPopup.fadeIn(200);
  $('.popup_overlay').fadeIn(100);
  $(document).mouseup(function (e) {
    if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
      $('.popup').fadeOut(100);
      $('.popup_overlay').fadeOut(200, function () {
        $('.popup_overlay').remove();
      });
      $('html, body').removeAttr('style');
    };
  });
  console.log($(this));
};

function closePopup() {
  $('.popup').fadeOut(100);
  $('.popup_overlay').fadeOut(200, function () {
    $('.popup_overlay').remove();
  });
  $('html, body').removeAttr('style');
};