
$(function(){
		$("header").load("template/header.html",function(){
			$(".btn_nav_open").click(function(){
				$(".nav").toggleClass("toggle");
				$(".wrapper").toggleClass("toggle");
			});
		});
		$("footer").load("template/footer.html");
		$(".nav").load("template/nav.html",function(){
			$(".btn_close").click(function(){
				$(".nav").toggleClass("toggle");
				$(".wrapper").toggleClass("toggle");
			});
			$(".btn_category").click(function(){
				$(".btn_category").toggleClass("toggle");
			});
		});


	//---cover
		$(".btn_cover_close").click(function(){
			$(".cover").toggleClass("toggle");
			$(".wrapper").toggleClass("toggle");
		});



	//---userComment
		$(".cmt_wrap > span").click(function(){
		$(this).parent().toggleClass("toggle");
		return false;
		});


	//---category-page,brand-page
		$(".brand_list > li").click(function(){
			$(this).toggleClass("toggle");
		});


	//---thumb_toggle
		$(".thumb").click(function(){
			$(this).toggleClass("on");
			return false;
		});


	//---btn_follow
		$(".btn.follow").click(function(){
			$(this).toggleClass("toggle");
			return false;
		});


	//---btn_bookmark
		$(".btn.bookmark").click(function(){
			$(this).toggleClass("toggle");
			return false;
		});


	//---btn_close
		$(".btn_close").click(function(){
			window.close();
		});

	//---select
		var fz = $("#sel_1").css("fontSize");
		var h = $("#sel_1").css("height");
		$(".sel_1 span").css("fontSize",fz);
		$(".sel_1 span").css("height",h);
		$(".sel_1 span").css("lineHeight",h);
		$("#sel_1").on("change", function(){
			var thisv =$(this).val();
			$(".sel_1 span").html(thisv);
		});
		var fz = $("#sel_2").css("fontSize");
		var h = $("#sel_2").css("height");
		$(".sel_2 span").css("fontSize",fz);
		$(".sel_2 span").css("height",h);
		$(".sel_2 span").css("lineHeight",h);
		$("#sel_2").on("change", function(){
			var thisv =$(this).val();
			$(".sel_2 span").html(thisv);
		});
		var fz = $("#sel_3").css("fontSize");
		var h = $("#sel_3").css("height");
		$(".sel_3 span").css("fontSize",fz);
		$(".sel_3 span").css("height",h);
		$(".sel_3 span").css("lineHeight",h);
		$("#sel_3").on("change", function(){
			var thisv =$(this).val();
			$(".sel_3 span").html(thisv);
		});
		var fz = $("#sel_4").css("fontSize");
		var h = $("#sel_4").css("height");
		$(".sel_4 span").css("fontSize",fz);
		$(".sel_4 span").css("height",h);
		$(".sel_4 span").css("lineHeight",h);
		$("#sel_4").on("change", function(){
			var thisv =$(this).val();
			$(".sel_4 span").html(thisv);
		});

});

