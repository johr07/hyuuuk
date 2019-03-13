<? include $_SERVER['DOCUMENT_ROOT']."/inc/header.php"; ?>


<?


	if (get_device() == "P") {
		//include $_SERVER['DOCUMENT_ROOT']."/include/popup.inc.php";
	}
	
?>

<div class="main">
	<!-- main_visual -->
	<section id="main_visual">
		<div class="visual_slide">
			<div class="visual_img" style="background:url(../img/main/main_visual.png)no-repeat center;"></div>
			<div class="visual_img" style="background:url(../img/main/main_visual.png)no-repeat center;"></div>
			<div class="visual_img" style="background:url(../img/main/main_visual.png)no-repeat center;"></div>
			<div class="visual_img" style="background:url(../img/main/main_visual.png)no-repeat center;"></div>
			<div class="visual_img" style="background:url(../img/main/main_visual.png)no-repeat center;"></div>
			<div class="visual_img" style="background:url(../img/main/main_visual.png)no-repeat center;"></div>
		</div>
		<div class="visual_navi">
			<div style="background-color:rgba(0, 129, 203, 0.6);"><a href="#!">YOLO Life Event</a></div>
			<div style="background-color:rgba(225, 49, 41, 0.6);"><a href="#!">Wonjin’s Face Countour</a></div>
			<div style="background-color:rgba(12, 220, 208, 0.6);"><a href="#!">2018 MVP Memeber</a></div>
			<div style="background-color:rgba(214, 23, 255, 0.6);"><a href="#!">Motiva</a></div>
			<div style="background-color:rgba(255, 119, 212, 0.6);"><a href="#!">medical asia 2017</a></div>
			<div style="background-color:rgba(101, 123, 165, 0.6);"><a href="#!">Tax refund Hospital</a></div>
		</div>
	</section>

	<script type="text/javascript">
		$(function(){
			$('.visual_slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.visual_navi'
			});
			$('.visual_navi').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.visual_slide',
				dots: false,
				centerMode: false,
				focusOnSelect: true
			});
			$('.mb_list').slick({
				autoplay: true,
				autoplaySpeed: 2000,
				vertical:true,
				speed: 300
			});
			$(".oc .prev a").click(function(){$(".oc .mb_list .slick-prev").click()});
			$(".oc .next a").click(function(){$(".oc .mb_list .slick-next").click()});
			$(".ne .prev a").click(function(){$(".ne .mb_list .slick-prev").click()});
			$(".ne .next a").click(function(){$(".ne .mb_list .slick-next").click()});
		});
	</script>
	<!-- main_visual_end -->

	<!-- before&after -->
	<section id="before_afte" class="gray_bg01">
		<div class="container">
			<div class="sec_top tac">
				<div>
					<h3>before <strong>After</strong></h3>
				</div>
			</div>
			<div class="ba_box">
				<ul class="ba_list">
					<li><a href="#!" class="on">Eye</a></li>
					<li><a href="#!">Nose</a></li>
					<li><a href="#!">face contour</a></li>
					<li><a href="#!">tow jaw</a></li>
					<li><a href="#!">berast</a></li>
					<li><a href="#!">body contour</a></li>
					<li><a href="#!">Anti-aging</a></li>
					<li><a href="#!">dental</a></li>
					<li><a href="#!">micro make up</a></li>
				</ul>
				<div class="ba_con">
					<ul>
						<li>
							<a href="#!">
								<img src="../img/main/ba01.png" alt="">
							</a>
						</li>
						<li>
							<a href="#!">
								<img src="../img/main/ba02.png" alt="">
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- before&after_end -->

	<!-- New Program -->
	<section id="new_program" class="gray_bg02">
		<div class="container">
			<div class="sec_top">
				<h3><strong>New</strong> Program</h3>
				<p>you can read more about our promotions and current consulting programs here</p>
				<a href="#!" class="more">More view</a>
			</div>
			<ul class="np_list">
				<li>
					<a href="#!">
						<div class="np_img">
							<img src="../img/main/program01.png" alt="">
						</div>
						<div class="np_txt">
							<h4>Elastic Band Lift</h4>
							<p>The secret of Soft Elasticity<br>Bandbagi Elasticum</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#!">
						<div class="np_img">
							<img src="../img/main/program02.png" alt="">
						</div>
						<div class="np_txt">
							<h4>Motiva Breast</h4>
							<p>Texture,Volume,Line Up<br>with WonJin</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#!">
						<div class="np_img">
							<img src="../img/main/program03.png" alt="">
						</div>
						<div class="np_txt">
							<h4>1year Face contour</h4>
							<p>1year Face contouring<br>with Dr.WonJin</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#!">
						<div class="np_img">
							<img src="../img/main/program04.png" alt="">
						</div>
						<div class="np_txt">
							<h4>Elastic Band Lift</h4>
							<p>The secret of Soft Elasticity<br>Bandbagi Elasticum</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
	<!-- New Program_end -->

	<!-- Real Diary -->
	<section id="real_diary" class="gray_bg01">
		<div class="container">
			<div class="sec_top tac">
				<div>
					<h3><strong>Real</strong> Story</h3>
					<p>The real story of our customers with Wonjin</p>
				</div>	
			</div>
			<ul class="rd_list">
				<li>
					<a href="#!">
						<div class="rd_img">
							<img src="../img/main/diary01.png" alt="">
						</div>
						<div class="rd_con">
							<div><h4>120days after<br>the surgery</h4></div>
							<div><p>friends become surprised</p></div>
							<div class="more_arrow"></div>
						</div>
					</a>
				</li>
				<li>
					<a href="#!">
						<div class="rd_img">
							<img src="../img/main/diary02.png" alt="">
						</div>
						<div class="rd_con">
							<div><h4>After 9 months</h4></div>
							<div><p>very satisfied! Really<br>really satisfied!</p></div>
							<div class="more_arrow"></div>
						</div>
					</a>
				</li>
				<li>
					<a href="#!">
						<div class="rd_img">
							<img src="../img/main/diary03.png" alt="">
						</div>
						<div class="rd_con">
							<div><h4>One year <br>after surgery</h4></div>
							<div><p> I do not regret having<br>undergone surgery.</p></div>
							<div class="more_arrow"></div>
						</div>
					</a>
				</li>
				<li>
					<a href="#!">
						<div class="rd_img">
							<img src="../img/main/diary04.png" alt="">
						</div>
						<div class="rd_con">
							<div><h4>60 days after<br>the surgery</h4></div>
							<div><p>I could loose weight<br>naturally</p></div>
							<div class="more_arrow"></div>
						</div>
					</a>
				</li>
			</ul>
			<div class="hash_tag">
				<a href="#!">#Wonjin Plastic Surgery</a>
				<a href="#!">#Beautiful face</a>
				<a href="#!">#Perfect surgery</a>
				<a href="#!">#Confidence</a>
				<a href="#!">#Challenge now</a>
				<a href="#!">#you can be beautibul too</a>
				<a href="#!">#Plastic surgery without accident</a>
				<a href="#!">#The Perfect Selfie</a>
				<a href="#!">#Confidence</a>
				<a href="#!">#Challenge now</a>
				<a href="#!">#you can beautibul</a>
			</div>
		</div>
	</section>
	<!-- Real Diary_end -->

	<!-- cscenter -->
	<section id="cscenter">
		<div class="sec_top">
			<div class="container">
				<h3>
					<strong>Doctor</strong> Wonjin<br>
					20 years of experience <br>
					and technology
				</h3>
				<p>
					Our skills and knowledge will guarantee your satisfaction<br>
					Your smile is our motivation<br>
					Plastic surgery involves more than just changing the outward appearance. <br>
					We strive to bring out the inner beauty within you, <br>
					bringing balance and total satisfaction.
				</p>
				<a href="#!" class="more">More detail</a>
			</div>
		</div>
		<div class="container">
			<ul class="cs_link">
				<li>
					<a href="#!">
						<h4>
							International <br>
							<strong>Clients <br>Service</strong>
						</h4>
						<p>More detail</p>
					</a>
				</li>
				<li>
					<a href="#!">
						<h4>
							Professional <br>
							<strong>Medical <br>Surgeons</strong>
						</h4>
						<p>More detail</p>
					</a>
				</li>
				<li>
					<a href="#!">
						<h4>
							Wonjin <br>
							<strong>Safe <br>System</strong>
						</h4>
						<p>More detail</p>
					</a>
				</li>
				<li>
					<a href="#!">
						<h4>
							Ask to <br>
							<strong>Wonjin’s <br>Dr.!</strong>
						</h4>
						<p>More detail</p>
					</a>
				</li>
			</ul>
		</div>
				
		<div class="cs_con">
			<div class="container">
				<div class="main_board oc">
					<a href="#!" class="mb_tit">Online Consultation</a>
					<div class="mb_list">
						<div>
							<a href="#!">
								<p class="mb_val">Eye(Eyelid)</p>
								<p class="mb_subj">Want consultation for double eyelid surgery..</p>
							</a>
						</div>
						<div>
							<a href="#!">
								<p class="mb_val">2</p>
								<p class="mb_subj">1</p>
							</a>
						</div>
						<div>
							<a href="#!">
								<p class="mb_val">1</p>
								<p class="mb_subj">2</p>
							</a>
						</div>
					</div>
					<ul class="mb_con">
						<li class="prev"><a href="#!"></a></li>
						<li class="next"><a href="#!"></a></li>
					</ul>
				</div>
				<div class="main_board ne">
					<a href="#!" class="mb_tit">News & Events</a>
					<div class="mb_list">
						<div>
							<a href="#!">
								<p class="mb_val">[Notice]</p>
								<p class="mb_subj">[Academy Exchange] Dr. Mark Magnusson, the president of the Australasian ...</p>
							</a>
						</div>
						<div>
							<a href="#!">
								<p class="mb_val">3</p>
								<p class="mb_subj">1</p>
							</a>
						</div>
						<div>
							<a href="#!">
								<p class="mb_val">1</p>
								<p class="mb_subj">222</p>
							</a>
						</div>
					</div>
					<ul class="mb_con">
						<li class="prev"><a href="#!"></a></li>
						<li class="next"><a href="#!"></a></li>
					</ul>
				</div>
				<ul class="p_contact">
					<li>
						<img src="../img/main/main_contact01.png" alt="">
						<p class="p_country">AMerica</p>
						<p class="p_call">+ 82-10-4918-3309</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
					<li>
						<img src="../img/main/main_contact02.png" alt="">
						<p class="p_country">China</p>
						<p class="p_call">+ 82-10-5746-3301</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
					<li>
						<img src="../img/main/main_contact03.png" alt="">
						<p class="p_country">Japan</p>
						<p class="p_call">+ 82-10-4918-3309</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
					<li>
						<img src="../img/main/main_contact04.png" alt="">
						<p class="p_country">Russia</p>
						<p class="p_call">+ 82-10-4918-3309</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
					<li>
						<img src="../img/main/main_contact05.png" alt="">
						<p class="p_country">Vietnam</p>
						<p class="p_call">+ 82-10-4918-3309</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
					<li>
						<img src="../img/main/main_contact06.png" alt="">
						<p class="p_country">Indonesia</p>
						<p class="p_call">+ 82-10-4918-3309</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
					<li>
						<img src="../img/main/main_contact07.png" alt="">
						<p class="p_country">Mongolia</p>
						<p class="p_call">+ 82-10-4918-3309</p>
						<a href="#!" class="p_email">crazy830727@naver.com</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<!-- cscenter_end -->

	<!-- Celebrities -->
	<section id="celebrities" class="gray_bg02">
		<div class="container">
			<div class="sec_top">
				<h3><strong>Celebrities</strong> with WONJIN</h3>
				<p>Many celebrities were with Wonjin.</p>
				<a href="#!" class="more">More view</a>
			</div>
		</div>
		<div class="celebrities_con">
			<!--<div class="container">-->
				<div class="celebrities_list">
					<div class="c_padding">
						<div class="cel_piece"><img src="../img/main/Celebrities01.png" alt=""></div>
						<div class="cel_piece"><img src="../img/main/Celebrities02.png" alt=""></div>
						<div class="cel_piece"><img src="../img/main/Celebrities03.png" alt=""></div>
						<div class="cel_piece"><img src="../img/main/Celebrities04.png" alt=""></div>
						<div class="cel_piece"><img src="../img/main/Celebrities01.png" alt=""></div>
						<div class="cel_piece"><img src="../img/main/Celebrities02.png" alt=""></div>
						<div class="cel_piece"><img src="../img/main/Celebrities03.png" alt=""></div>
					</div>
				</div>
			<!--</div>-->
		</div>
		<script type="text/javascript">
			(function($){
				$(window).load(function(){
					$(".celebrities_list").mCustomScrollbar({
						axis:"x",
						theme:"light-3",
						autoDraggerLength: false,
						scrollType: "stepped",
						//mouseWheel:{ deltaFactor: 1050},
						advanced:{autoExpandHorizontalScroll:true}
					});
				});
			})(jQuery);
			$(function(){
				$('.c_padding').css({"padding-left": $(window).innerWidth()/2 - 1400/2, "padding-right": $(window).innerWidth()/2 - 1400/2});
			});
		</script>
	</section>
	<!-- Celebrities_end -->

	<!-- fp --
	<section class="fp" id="fp">
		<div class="container">
			<div class="main_top">
				<h3>FX WEGO</h3>
				<h4><?=$_lang_main_main_008[$_lang]?></h4>
				<p><?=$_lang_main_main_009[$_lang]?>
					
				</p>
				<a href="#!" class="more_btn"><?=$_lang_main_main_003[$_lang]?></a>
			</div>
		</div>
		<div class="fp_slider">

			<?
				$sql = "  select bbs_idx, code, subject, ufile6, rfile6 from tbl_bbs_list where 1=1 and category = '16' and code = 'banner' ";
				$result = mysqli_query($connect, $sql) or die (mysql_error());																		
				while($row=mysqli_fetch_array($result)){
			?>
					<div><a href="<?=$row["url"]?>"><img src="/data/bbs/<?=$row["ufile6"]?>" alt=""></a></div>
			<?
					
				}
			?>

		</div>
		<script type="text/javascript">
			$(function(){
				$('.fp_slider').slick({
					autoplay:true,
					dots: true,
					infinite: true,
					speed: 500,
					autoplaySpeed: 2000,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding:'19.9vw'//420px
				});
			})
		</script>
	</section>
	!-- fp end -->


		<div class="quick_link">
			<div class="container">
				<ul>
					<li>
						<a href="#!">
							<div class="ico_box"></div>
							Price Enquiry
						</a>
					</li>
					<li>
						<a href="#!">
							<div class="ico_box"></div>
							Online Consultation
						</a>
					</li>
					<li>
						<a href="#!">
							<div class="ico_box"></div>
							Make an Appointment
						</a>
					</li>
					<li>
						<a href="#!">
							<div class="ico_box"></div>
							Location
						</a>
					</li>
				</ul>
			</div>
		</div>

</div>
<? include $_SERVER['DOCUMENT_ROOT']."/inc/footer.php"; ?>
