$(function(){
    map();
    select();
    toggle();
    family();
})
function map(){

	// // $(window).on("resize load",function(){
	// // 	var imgH=$(".map-box img").height();
	// // 	var mapTbox=$(".map-box .text-box");
	// // 	mapTbox.outerHeight(imgH)
	// // })
	
	// var mapMenu=$(".map-box .menu-box .map-lnb li");
	// var mapBt=$(".map-box .menu-box .map-lnb li .btn-box");
	// mapMenu.on("click",function(){
	// 	var w=$(window).width();
	// 	if(w>1024){
	// 		// alert("jo")
	// 		mapMenu.removeClass("on");
	// 		$(this).addClass("on");
	// 		mapBt.hide();
	// 		$(this).children(".btn-box").show();
	// 	}else{
			
	// 	}
	// })

	
}
function select(){
	var choice=$(".select-type02 .choice");
	var optionList=$(".select-type02 ul");
	var option=$(".select-type02 ul li");
	var optionText="";
	choice.on("click",function(){
		optionList.stop().slideUp();
		$(this).next().stop().slideToggle();

	})
	option.on("click",function(){
		optionText=$(this).text();
		$(this).parent().prev().text(optionText);
		optionList.stop().slideUp();

	})

}
function family(){
	var familyTit=$("#footer .f-bottom .link-box .family a");
	familyTit.on("click",function(){
		$(this).next().slideToggle();
	})
}
function toggle(){
	var q=$(".toggle-list dl dt");
	var a=$(".toggle-list dl dd");
	q.on("click",function(){
		q.removeClass("on");
		$(this).addClass("on");
		q.not(this).next().slideUp();
		$(this).next().slideToggle();
	})
}