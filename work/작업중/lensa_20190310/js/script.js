$(document).ready(function(){
    navOpenClose();
    layerPopup();
    setContainerPadding();
    responsiveFontsize();
    faq();
})

// browser size check
function browserSizeCheck(){
    var mWidth = $(document).width();
    var mHeight = $(document).height();
    alert(mWidth,mHeight);
}

// set container padding-top
function setContainerPadding(){
    var stepHeight = $('.step').height();
    $('.container.sub-wrap').css('margin-top',stepHeight);
    /*console.log(stepHeight);*/
}

// device width check and change font size
function responsiveFontsize(){
    var deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var headerFontSize = deviceWidth/16;
    var stepFontSize = deviceWidth/25;
    if(deviceWidth<=720){
        $(".sub-header h2").css({"font-size":headerFontSize+"px"});
        $(".has-popup .popup h2").css({"font-size":headerFontSize+"px"});
        $(".step>ol>li").css({"font-size":stepFontSize+"px"});
        /*wH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        pImgH = wH*0.2;
        $("dt.pImg").css({"height":pImgH +"px"});*/
        $(window).resize(function(){
            deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            rootSize = deviceWidth/16;
            rootSize2 = deviceWidth/25;
            $(".sub-header h2").css({"font-size":headerFontSize+"px"});
            $(".has-popup .popup h2").css({"font-size":headerFontSize+"px"});
            $(".step>ol>li").css({"font-size":stepFontSize+"px"});
            /*wH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            pImgH = wH*0.2;
            $("dt.pImg").css({"height":pImgH +"px"});*/
        });
    }
}

// navigation
function navOpenClose(){
    var nav = $('#wrap header nav');
    var btnOpen = $('.btn-open-nav');
    var btnClose = $('.btn-close-nav');
    var deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    btnOpen.click(function(){
        nav.addClass("navDisplay");
        // if(deviceWidth<=720){
        //     nav.show().stop().animate({'right':'0'});
        // } else {
        //     nav.show();
        // }
        $(this).fadeOut();
        $('body').append('<div class="dim"></div>').css('overflow','hidden');
        $('body').css('overflow-y','hidden');
        var dim = $('body').find('.dim');
        dim.click(function(e){
            e.preventDefault();
            // if(deviceWidth<=720){
            //     nav.stop().animate({'right':'-100%'});
            // } else {
            //     nav.hide();
            // }
            btnOpen.fadeIn();
            $('.dim').remove();
            $('body').css('overflow-y','auto');
        })   
    })
    btnClose.click(function(e){
        e.preventDefault();
        nav.removeClass("navDisplay");
        // if(deviceWidth<=720){
        //     nav.stop().animate({'right':'-100%'});
        // } else {
        //     nav.show().hide();
        // }
        btnOpen.fadeIn();
        $('.dim').remove();
        $('body').css('overflow-y','auto');
    })
}

// layer popup
function layerPopup(){
    var popup = $('.popup');
    var modal = $('.layer-popup')
    var btnOpenPopup = $('.btn-open-popup');
    var btnClosePopup = $('.btn-close-popup');
    btnOpenPopup.each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var btnData = $(this).data("value");
            //console.log(btnData);
            var popTop = (modal.height()/2)+$('.sub-header').height()-$('.step').height()+50;
            if(btnData==undefined){
                modal.fadeIn();
                modal.css('margin-top',-popTop);
                console.log(popTop);          
            } else {
                $('.popup.'+btnData).fadeIn();
            }
            $('body').append('<div class="dim"></div>');
            $('body').css('overflow-y','hidden')
            var dim = $('body').find('.dim');
            dim.click(function(e){
                e.preventDefault();
                popup.fadeOut();
                modal.fadeOut();
                $('.dim').remove();
                $('body').css('overflow-y','auto')
            })        
        })
    })
    btnClosePopup.click(function(e){
        e.preventDefault();
        popup.fadeOut();
        modal.fadeOut();
        $('.dim').remove();
        $('body').css('overflow-y','auto')
    });
    var dim = $('body').find('.dim');
    dim.click(function(e){
        e.preventDefault();
        popup.fadeOut();
        modal.fadeOut();
        $('.dim').remove();
        $('body').css('overflow-y','auto')
    })        
}

// attach file
function attchFile(){
    var fileArea = $('.input-file');
    fileArea.each(function(){
        $(this).find('input:file').change(function(){
            if($(this).val().length == 0){
            } else {
                var fileName = $(this).val().split('/').pop().split('\\').pop();
                $(this).parent('div').find('input:text').val(fileName);
            }
        });
    });
}

// faq 
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

