$(document).ready(function(){
    layerPopup();
    faq()
    openNav();
    openCalendar()
})

/* layer popup*/
function layerPopup(){
    var popup = $('.popup');
    var modal = $('.layer-popup')
    var btnOpenPopup = $('.btn-open-popup');
    var btnClosePopup = $('.btn-close-popup');
    btnOpenPopup.each(function(){
        $(this).click(function(e){
            e.preventDefault();
                modal.fadeIn();
            $('body').append('<div class="dim"></div>');
            var dim = $('body').find('.dim');
            dim.click(function(e){
                e.preventDefault();
                popup.fadeOut();
                modal.fadeOut();
                $('.dim').remove();
            })        
        })
    })
    btnClosePopup.click(function(e){
        e.preventDefault();
        popup.fadeOut();
        modal.fadeOut();
        $('.dim').remove();
    });
    var dim = $('body').find('.dim');
    dim.click(function(e){
        e.preventDefault();
        popup.fadeOut();
        modal.fadeOut();
        $('.dim').remove();
    })        
}

/* faq */
function faq(){
    var faqList=jQuery('.faq ul');
    faqList.find('.answer').hide();
    faqList.find('h4').click(function(){
        if(jQuery(this).next().css('display')=='none'){
            faqList.find('.answer').slideUp('fast');
            jQuery(this).removeClass().addClass('on');
        }
        else{
            jQuery(this).removeClass('on');
        }
        if((jQuery('.on').length)>=2){
            faqList.find('dt').removeClass();
            jQuery(this).removeClass().addClass('on');
        }
        jQuery(this).next().slideToggle('slow');
        })
}

//상단메뉴 2Depth메뉴 열림
function openNav(){
	$("nav .submenu").hide();
	$("nav>ul>li").hover(function(){
		$("ul:not(:animated)",this).slideDown("fast");
	},
	function(){
		$("ul",this).slideUp("fast");
	});
};

function openCalendar(){
    var btnCal = $('.cal-group .btn-cal');
    var calender = $('.pop-calender');
    btnCal.each(function(n,index){
        $(this).click(function(){
            console.log(n)
            if($(this).hasClass('on')){
                calender.hide();
                $(this).removeClass('on');
            } else {
                console.log('weried');
                calender.eq(n).show();
                $(this).addClass('on');
            }
        });
    });
}