;(function($, window, undefined){

	'use strict';


	if('undefined' === typeof window.NrvPub){
		var NrvPub = window.NrvPub = {
			Init : function(){
				/* 주요 변수 선언 */
				var NrvObj	= window.NrvObj = {
					html		:	$('html'),
					body		:	$('body'),
					wrap		:	$('#wrap'),
					header		:	$('#header'),
					gnb			:	$('#gnb'),
					container	:	$('#container'),
					main		:	$('#main'),
					contents	:	$('#contents'),
					footer		:	$('#footer')
				};
			}
		};
		var NrvSbj	= window.NrvSbj = {};
	}


	$(document).on({
		'ready' : function(){
			NrvPub.Init();
			NrvPub.Util.LoadMotion();
		}
	});


	$(window).on({
		'load' : function(){
			NrvSbj.wsx = $(window).scrollLeft();
			NrvSbj.wsy = $(window).scrollTop();
			NrvSbj.wow = $(window).outerWidth();
			NrvSbj.woh = $(window).outerHeight();
		},
		'scroll' : function(){
			NrvSbj.wsx = $(window).scrollLeft();
			NrvSbj.wsy = $(window).scrollTop();
		},
		'resize' : function(){
			NrvSbj.wow = $(window).outerWidth();
			NrvSbj.woh = $(window).outerHeight();
		}
	});


	NrvPub.AjaxPopup = function(url, options){
		var defaults = {
			className : {
				wrap : 'layer-wrap',
				back : 'layer-back'
			},
			position : {
				top : false,
				left : false
			},
			transition : true,
			tiemout : 10000,
			data : null,
			async : true, /* 비동기 : true, 동기 : false */
			method : null,
			datatype : 'html',
			background : true,
			openCall : function(target, resize){},
			closeCall : function(target){}
		}

		var obj = {};
		var opt = $.extend({}, defaults, options);

		var makePopup = function(){
			obj.resize	= 'resize.AjaxPopup'+NrvSbj.ajaxPopIdx++;
			obj.wrap	= NrvObj.body.append('<div class="'+opt.className.wrap+'">').children('.'+opt.className.wrap+':last-child');
			if(opt.background){
				obj.back = obj.wrap.append('<div class="'+opt.className.back+'">').children('.'+opt.className.back).attr({'layer':'close'});
			}
			if(!opt.transition){
				obj.wrap.css({'transition' : 'initial'})
			}
		}

		var closePopup = function(){
			obj.close = obj.wrap.find('[layer="close"]');
			
			obj.close.on('click', function(){
				opt.closeCall(obj.data);
				obj.wrap.remove();
				$(window).off(obj.resize);
			});
		}

		var popupSize = function(){
			obj.wrap.w = obj.wrap.outerWidth();
			obj.wrap.h = obj.wrap.height();
			obj.wrap.t = obj.wrap.h > NrvSbj.woh * 0.8 ? NrvSbj.wsy + NrvSbj.woh * 0.1 : NrvSbj.wsy + (NrvSbj.woh - obj.wrap.h) / 2;
			obj.wrap.l = (NrvSbj.wow - obj.wrap.w) / 2;

			obj.wrap.css({
				'top' : opt.position.top ? opt.position.top : obj.wrap.t,
				'left' : opt.position.left ? opt.position.left : obj.wrap.l,
				'padding-bottom' : NrvSbj.woh * 0.1
			}).addClass('open');

			$(window).on(obj.resize, function(){
				if(!opt.position.left){
					obj.wrap.l = (NrvSbj.wow - obj.wrap.w) / 2;
					obj.wrap.css({'left' : obj.wrap.l});
				}
			});

			obj.wrap.on('resize', function(){
				obj.wrap.h = obj.wrap.height();
				obj.wrap.t = obj.wrap.h > NrvSbj.woh * 0.8 ? NrvSbj.wsy + NrvSbj.woh * 0.1 : NrvSbj.wsy + (NrvSbj.woh - obj.wrap.h) / 2;
			});
		}

		NrvPub.AjaxPopup.popupSize = popupSize;
		NrvPub.AjaxPopup.closePopup = function(){
			obj.wrap.remove();
			$(window).off(obj.resize);
		};

		$.ajax({
			url : url,
			timeout : opt.tiemout,
			data : opt.data,
			async : opt.async,
			method : opt.method, /* GET or POST */
			dataType : opt.datatype,
			success : function(data){
				makePopup();
				obj.data = $(data);
				obj.wrap.append(obj.data).ImagesLoaded().then(function(){
					opt.openCall(obj.data, popupSize);
					closePopup();
					popupSize();
				});
			},
			error : function(xhr){
				//alert('['+xhr.status+'] 서버전송오류가 발생했습니다.');
			}
		});

		NrvPub.AjaxPopup.Resize = function(){
			popupSize();
		}
	};


	NrvPub.Util = {
		CheckDevice : (function(){
			var md = new MobileDetect(window.navigator.userAgent);

			return {
				device	: md.mobile(),
				mobile : md.phone() ? true : false,
				tablet : md.tablet() ? true : false,
				desktop : !md.mobile() ? true : false
			}
		})(),

		MapApi : function(lat, lng, name, target){
			// API 호출 : <script src="http://maps.google.com/maps/api/js?key=키값넣는곳&sensor=false"></script>
			var myOptions = {
				  center : new google.maps.LatLng(lat, lng),
				  mapTypeControl : false,
				  zoom : 17,
				  mapTypeId : google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById(target), myOptions);
			var myLatlng = new google.maps.LatLng(lat, lng);
			var marker = new google.maps.Marker({
				position : myLatlng,
				map : map,
				title : name
			});
		},

		MatchMedia : function(function1, function2, resize){
			var media = window.matchMedia('(max-width: 768px)');
			var ready = false;

			function matchesAction(paramse){
				if(!paramse.matches){
					if(!ready && resize){return;}
					function1();
				}else{
					if(!ready && resize){return;}
					function2();
				}
			}

			if(matchMedia){
				matchesAction(media);
				media.addListener(function(parameter){
					matchesAction(parameter);
				});
				ready = true;
			}


			/* 
			//실행문
			NrvPub.Util.MatchMedia(
				function(){
					console.log('pc');
				},	
				function(){
					console.log('mobile');
				}
			);

			NrvPub.Util.MatchMedia(
				function(){
					window.location.reload(true);
				},	
				function(){
					window.location.reload(true);
				}
			, true);
			
			*/
		},

		/*CheckDevice : (function(){
			var md = new MobileDetect(window.navigator.userAgent);
			var viewport = document.querySelector('meta[name=viewport]');

			if(md.tablet()){
				viewport.setAttribute('content', 'width=1200, user-scalable=no');
			}else if(md.mobile()){
				viewport.setAttribute('content', 'width=750, user-scalable=no');
			}else{
				viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
			}
		})(),*/

		LoadMotion : function(){
			var $motion = $('.n-motion');
			var windowT;
			if($motion.length){
				$motion.each(function(i){
					var $this = $(this);
					var thisT = $this.offset().top;
					var thisH = $this.height() / 2;
					var thisP = thisT + thisH;
					var event = 'load.'+i+' scroll.'+i;

					$(window).on(event, function(){
						windowT = $(window).scrollTop() + $(window).outerHeight();
						if(windowT > thisP){
							$this.addClass('n-active');
							$(window).off(event);
						}
					});
				});
			}
		},

		TabAction : function(tab, con){
			var $tab = $(tab).children(),
				$con = $(con).children();

			$tab.on('click', function(){
				$(this).addClass('on').siblings().removeClass('on');
				$con.eq($(this).index()).addClass('on').siblings().removeClass('on');
			});
		}
	}


	$.fn.YJtarget = function(options){
		/*$(target).YJtarget({
			target : false,
			action : function(target){}
		});*/

		if(!this.length) return this;

		if(this.length > 1){
			this.each(function(){
				$(this).YJtarget(options);
			});
			return this;
		}

		var defaults = {
			target : false,
			action : function(){}
		}

		var opt = $.extend({}, defaults, options);
		var p = this[0];
		var t;

		$(document).on('click', function(e){
			t = e.target;

			if(t === p && opt.target){
				opt.action(p);
				return;
			}else{
				while(t !== p){
					if(t === this){
						break;
					}else{
						t = t.parentNode;
					}
				}
				if(t === p){
					if(opt.target){
						opt.action(p);
					}
				}else{
					if(!opt.target){
						opt.action(p);
					}
				}
				return;
			}
		});
	}


	$.fn.ImagesLoaded = function(){
		var $imgs = this.find('img[src!=""]');
		if (!$imgs.length) {return $.Deferred().resolve().promise();}

		var dfds = [];

		$imgs.each(function(){
			var dfd = $.Deferred();
			dfds.push(dfd);
			var img = new Image();
			img.onload = function(){dfd.resolve();}
			img.onerror = function(){dfd.resolve();}
			img.src = this.src;
		});

		return $.when.apply($,dfds);
	}


})(jQuery, window);