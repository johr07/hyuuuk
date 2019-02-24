function openPopup(id, callback) {
    var thisPopup = $('#popup_' + id);
    // $('.popupWrap').fadeIn();
    $('html, body').addClass('on');
    thisPopup.fadeIn();
    $(document).mouseup(function (e) {
      if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0){
        // $('.popupWrap').fadeOut();
        // $('.popup').fadeOut();
        $('html, body').removeClass('on');
      };
    });
  };
  function closePopup(){
    // $('.popupWrap').fadeOut();
    // $('.popup').fadeOut();
    $('html, body').removeClass('on');
  };
  