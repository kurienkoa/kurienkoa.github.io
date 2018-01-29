function pr() {$(".preloader").addClass('active');}
function pr_finis() {$(".preloader").addClass('opacity');}
function pr_l() {$(".content-preloader__left").addClass('active');}
function pr_r() {$(".content-preloader__right").addClass('active');}
function finis() {$(".content-preloader").addClass('zIndex');}

window.setTimeout(pr, 500);
window.setTimeout(pr_r, 1000);
window.setTimeout(pr_l, 1000);
window.setTimeout(pr_finis, 2000);
window.setTimeout(finis, 2000);

$(function() {
	$('#fullpage').fullpage({
		verticalCentered: true,
		anchors: ['1thBlock', '2thBlock', '3thBlock', '4thBlock', '5thBlock', '6thBlock', '7thBlock', 'lastBlock'],
		menu: '#myMenu, nav',
		scrollingSpeed: 1000,
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
		// 	$('.fp-section').find('.fp-slidesContainer').fadeIn(700);
		// 	$.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
		// },

		// //Navigation
		// menu: '#menu-top',
		lockAnchors: false,
		// anchors:['firstPage', 'secondPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08'],
		showActiveTooltip: true,
		slidesNavigation: true,
		// slidesNavPosition: 'bottom',
		//
		// //Scrolling
		css3: true,
		// scrollingSpeed: 700,
		// autoScrolling: true,
		// fitToSection: true,
		// fitToSectionDelay: 1000,
		scrollBar: true,
		easing: 'easeInOutCubic',
		//animation-scroll
		// easingcss3: 'easeInOutCubic',
		// easingcss3: 'swing',
		// easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
		easingcss3: 'cubic-bezier(1.000, 0.000, 0.000, 1.005) 0.5s',


		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: 'nav, footer',
		// normalScrollElements: 'nav',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		// autoScrolling: false,
		//
		// //Accessibility
		// keyboardScrolling: true,
		// animateAnchor: true,
		// recordHistory: true,
		//
		// //Design
		// controlArrows: true,
		// verticalCentered: true,
		// sectionsColor : ['#fff', '#fff'],
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: '#myMenu, #copyright',
		responsiveWidth: 1170,
		responsiveHeight: 660,
		// parallax: false,
		// parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		// responsiveSlides: false,
		//
		// //Custom selectors
		// sectionSelector: '.section',
		// slideSelector: '.slide',
		//
		// lazyLoading: true,
		//
		// //events
		// onLeave: function(index, nextIndex, direction){},
		// afterLoad: function(anchorLink, index){},
		// afterRender: function(){},
		// afterResize: function(){},
		// afterResponsive: function(isResponsive){},
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		// onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}


		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		// css3:false,
		// Show/Hide fixed menu with Animate.css(.fixed-menu)
		afterRender: function () {
			// $(".content-preloader__mask").addClass('active');
			// $(".preloader").addClass('active');
			// $("#header .img").addClass("black_animation");
			// $("#header h3").addClass("active");

			function headerImg() {$("#header .img").addClass('black_animation');}
			window.setTimeout(headerImg, 2000);
		},
		afterLoad: function (anchorLink, index) {
			// $(".content-preloader").addClass('active');
			if (index === 1) {
				// function headerImg() {$("#header .img").addClass('black_animation');}
				// window.setTimeout(headerImg, 2000);
				$("#header .img").addClass("black_animation");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '01';
				$(".animation-word").addClass('is-active');
				$("#header h1").addClass("active");
				$("#header a.btn").addClass("active");
				// var num = document.getElementById('num');
				// num.innerHTML = '01';
				// $(".num").addClass('hidden');
			} else if (index === 2) {
				$("#fp-nav").addClass("black");
				$("#section1 .img").addClass("black_animation");
				$("#section1 h3").addClass("active");

				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '02';
				$("#section1 .animation-word").addClass('is-active');
				// var num = document.getElementById('num');
				// num.innerHTML = '02';
			} else if (index === 3) {
				// $("#fp-nav").addClass("white");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '03';
				$("#section2 .animation-word").addClass('is-active');
				$("#subscribe").addClass("white");
				$(".section_num").addClass("white");
				// var num = document.getElementById('num');
				// num.innerHTML = '03';
			} else if (index === 4) {
				$("#section3 h3").addClass("active");
				$("#fp-nav").addClass("black");
				$("#section3 .img").addClass("black_animation");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '04';
				$("#section3 .animation-word").addClass('is-active');

				// var num = document.getElementById('num');
				// num.innerHTML = '04';
				// $(".num").addClass('hidden');
			} else if (index === 5) {
				$("#fp-nav").addClass("hidden");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '05';


				function section4_active() {$("#section4").addClass('section4_active');}
				window.setTimeout(section4_active, 700);


				// var num = document.getElementById('num');
				// num.innerHTML = '05';
			} else if (index === 6) {
				$("#section5 h3").addClass("active");
				$("#section5 .img").addClass("black_animation");
				$("#subscribe").addClass("white");
				$(".section_num").addClass("white");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '06';
				$("#section5 .animation-word").addClass('is-active');

				// var num = document.getElementById('num');
				// num.innerHTML = '06';
			} else if (index === 7) {
				$("#section6 h3").addClass("active");
				// $("#fp-nav").addClass("hidden");
				$(".add-comment").addClass("active");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '07';
				$("#section6 .animation-word").addClass('is-active');
				// var num = document.getElementById('num');
				// num.innerHTML = '07';
			} else if (index === 8) {
				$("#subscribe").addClass("hidden");
				$("#copyright").addClass("hidden");
				var numbr = document.getElementById('section_num');
				numbr.innerHTML = '08';
				// var num = document.getElementById('num');
				// num.innerHTML = '08';
			}
		},
		onLeave: function (index, nextIndex, direction) {
			if (index === 1) {
				$("#header .img").removeClass("black_animation");
				$(".animation-word").removeClass('is-active');
				$("#header h1").removeClass("active");
				$("#header a.btn").removeClass("active");
			} else if (index === 2) {
				$("#fp-nav").removeClass("black");
				$("#section1 .img").removeClass("black_animation");
				$("#section1 h3").removeClass("active");
				$("#section1 .animation-word").removeClass('is-active');
			} else if (index === 3) {
				$("#section2 .animation-word").removeClass('is-active');
				$("#subscribe").removeClass("white");
				$(".section_num").removeClass("white");
				$(".window-pop-up").removeClass("active");
				$("#fp-nav").removeClass("hidden");
			} else if (index === 4) {
				$("#section3 h3").removeClass("active");
				$("#section3 .img").removeClass("black_animation");
				$("#section3 .animation-word").removeClass('is-active');
				$("#fp-nav").removeClass("black");
			} else if (index === 5) {
				$("#fp-nav").removeClass("hidden");
				$("#section4").removeClass('section4_active');
			} else if (index === 6) {
				$("#section5 h3").removeClass("active");
				$("#section5 .img").removeClass("black_animation");
				$("#subscribe").removeClass("white");
				$(".section_num").removeClass("white");
				$("#section5 .animation-word").removeClass('is-active');
			} else if (index === 7) {
				$("#section6 h3").removeClass("active");
				// $("#fp-nav").removeClass("hidden");
				$(".add-comment").removeClass("active");
				$("#section6 .animation-word").removeClass('is-active');
			} else if (index === 8) {
				$("#subscribe").removeClass("hidden");
				$("#copyright").removeClass("hidden");

			}

		}


	});


	if($('.window-pop-up').hasClass('active') === true) {
		// alert('1');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
        $("#fp-nav").addClass("black");

	} else {
		$("#fp-nav").removeClass("black");
	}



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

// fancybox
	$("a.modal").fancybox();
	$("a.modall_pad").fancybox({
		padding: 0,
		margin: 0
	});
// моб-меню
	$("#sandwich, .menu_item, nav ul li a").click(function() {
		$("#sandwich").toggleClass("active");
		// $("nav ul").toggleClass("active");
		$(".navbar").toggleClass("navbar--opened");
	});

// карусель слайдер
	var wowl = $('.window-owl-carousel.owl-carousel');
	wowl.owlCarousel({
		// center: true,
		stagePadding: 0,
		items:1,
		loop:true,
		animateOut: 'fadeOut',
		margin:0,
		padding: 0,
		autoplay:true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		lazyLoad:true,
		nav: false,
		dots: false,
		// autoHeight: true,
		responsiveClass:true,
		responsive:{
			0:{
				nav: false,
				dots: true,
				items: 1
			},
			768:{
				nav: false,
				dots: true,
				items: 1
			},
			960:{
				nav: false,
				dots: true,
				items: 1
			}
		}
	});


	var owl = $('.owl-carousel');
	owl.owlCarousel({
		// center: true,
		stagePadding: 0,
		items:1,
		loop:true,
		animateOut: 'fadeOut',
		margin:0,
		padding: 0,
		// autoplay:true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		lazyLoad:true,
		nav: true,
		dots: false,
		// autoHeight: true,
		responsiveClass:true,
		responsive:{
			0:{
				nav: true,
				dots: false,
				items: 1
			},
			960: {
				items: 2
			},
			1170:{
				nav: true,
				items: 2
			},
			1300:{
				nav: true,
				items: 3
			}
		}
	});


// слайдер Range
	var elem = document.querySelector('input[type="range"]');

	var rangeValue = function(){
		// var newValue = elem.value;
		// var target = document.querySelector('.value');
		// target.innerHTML = newValue;

		if(elem.value==1) {
			$('.category-1, .category-2, .category-3, .category-4, .category-5, .category-6').removeClass('active');
			$('.category-1').addClass('active');

			var number_img = document.getElementById('number-img');
				number_img.innerHTML = '01';

		} else if (elem.value==2) {
			$('.category-1, .category-2, .category-3, .category-4, .category-5, .category-6').removeClass('active');
			$('.category-2').addClass('active');

			var number_img = document.getElementById('number-img');
				number_img.innerHTML = '01';

			var my_image1 = document.getElementById('my_image1');
			my_image1.click();

		} else if (elem.value==3) {
			$('.category-1, .category-2, .category-3, .category-4, .category-5, .category-6').removeClass('active');
			$('.category-3').addClass('active');

			var number_img = document.getElementById('number-img');
				number_img.innerHTML = '02';

		} else if (elem.value==4) {
			$('.category-1, .category-2, .category-3, .category-4, .category-5, .category-6').removeClass('active');
			$('.category-4').addClass('active');

			var number_img = document.getElementById('number-img');
				number_img.innerHTML = '02';

			var my_image2 = document.getElementById('my_image2');
			my_image2.click();

		} else if (elem.value==5) {
			$('.category-1, .category-2, .category-3, .category-4, .category-5, .category-6').removeClass('active');
			$('.category-5').addClass('active');

			var number_img = document.getElementById('number-img');
				number_img.innerHTML = '03';

		} else if (elem.value==6) {
			$('.category-1, .category-2, .category-3, .category-4, .category-5, .category-6').removeClass('active');
			$('.category-6').addClass('active');

			var number_img = document.getElementById('number-img');
				number_img.innerHTML = '03';

			var my_image3 = document.getElementById('my_image3');
			my_image3.click();

		}
	}

	elem.addEventListener("input", rangeValue);


// обработчик для точек на продуктах
	// камера - 1
	$('#dotted-1-1').click(function () {
		if ($('#dotted-1-1').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-1 .information .name-1').removeClass('hidden');
			$('.category-1 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-1 .information .item').removeClass('active');
			$('#dotted-1-1').addClass('active');
			$('.category-1 .information .name-1').addClass('hidden');
			$('.category-1 .information .cam-1-1').addClass('active');
		}
	});
	$('#dotted-1-2').click(function () {
		if ($('#dotted-1-2').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-1 .information .name-1').removeClass('hidden');
			$('.category-1 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-1 .information .item').removeClass('active');
			$('#dotted-1-2').addClass('active');
			$('.category-1 .information .name-1').addClass('hidden');
			$('.category-1 .information .cam-1-2').addClass('active');
		}
	});
	$('#dotted-1-3').click(function () {
		if ($('#dotted-1-3').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-1 .information .name-1').removeClass('hidden');
			$('.category-1 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-1 .information .item').removeClass('active');
			$('#dotted-1-3').addClass('active');
			$('.category-1 .information .name-1').addClass('hidden');
			$('.category-1 .information .cam-1-3').addClass('active');
		}
	});

	// камера - 2
	$('#dotted-2-1').click(function () {
		if ($('#dotted-2-1').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-3 .information .name-2').removeClass('hidden');
			$('.category-3 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-3 .information .item').removeClass('active');
			$('#dotted-2-1').addClass('active');
			$('.category-3 .information .name-2').addClass('hidden');
			$('.category-3 .information .cam-2-1').addClass('active');
		}
	});
	$('#dotted-2-2').click(function () {
		if ($('#dotted-2-2').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-3 .information .name-2').removeClass('hidden');
			$('.category-3 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-3 .information .item').removeClass('active');
			$('#dotted-2-2').addClass('active');
			$('.category-3 .information .name-2').addClass('hidden');
			$('.category-3 .information .cam-2-2').addClass('active');
		}
	});
	$('#dotted-2-3').click(function () {
		if ($('#dotted-2-3').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-3 .information .name-2').removeClass('hidden');
			$('.category-3 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-3 .information .item').removeClass('active');
			$('#dotted-2-3').addClass('active');
			$('.category-3 .information .name-2').addClass('hidden');
			$('.category-3 .information .cam-2-3').addClass('active');
		}
	});

	// камера - 3
	$('#dotted-3-1').click(function () {
		if ($('#dotted-3-1').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-5 .information .name-3').removeClass('hidden');
			$('.category-5 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-5 .information .item').removeClass('active');
			$('#dotted-3-1').addClass('active');
			$('.category-5 .information .name-3').addClass('hidden');
			$('.category-5 .information .cam-3-1').addClass('active');
		}
	});
	$('#dotted-3-2').click(function () {
		if ($('#dotted-3-2').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-5 .information .name-3').removeClass('hidden');
			$('.category-5 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-5 .information .item').removeClass('active');
			$('#dotted-3-2').addClass('active');
			$('.category-5 .information .name-3').addClass('hidden');
			$('.category-5 .information .cam-3-2').addClass('active');
		}
	});
	$('#dotted-3-3').click(function () {
		if ($('#dotted-3-3').hasClass('active') === true) {
			$('.dotted').removeClass('active');
			$('.category-1 .information .name-3').removeClass('hidden');
			$('.category-1 .information .item').removeClass('active');
		} else {
			$('.dotted').removeClass('active');
			$('.category-5 .information .item').removeClass('active');
			$('#dotted-3-3').addClass('active');
			$('.category-5 .information .name-3').addClass('hidden');
			$('.category-5 .information .cam-3-3').addClass('active');
		}
	});


// секция 2 откритие попапа с товаром
	$('.close-carts').click(function () {
		$('.pop-up-preloader').removeClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").removeClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").removeClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#fp-nav').removeClass('hidden');
		$('.section_num').addClass('white');
		$('#subscribe').addClass('white');
	});

	$('#section2 .category-1 a').click(function () {
		event.preventDefault();
		$('.pop-up-preloader').addClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").addClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").addClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		function window_pop_up_remove_active() {$(".window-pop-up").removeClass('active');}
		window.setTimeout(window_pop_up_remove_active, 2000);

		function window_pop_up_ready() {$("#pop-up-1").addClass('ready');}
		window.setTimeout(window_pop_up_ready, 2000);

		function pop_up_preloader() {$(".pop-up-preloader").removeClass('active');}
		window.setTimeout(pop_up_preloader, 2300);




		$('#pop-up-1').addClass('active');

		$('#fp-nav').addClass('hidden');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
	});
	$('#section2 .category-3 a').click(function () {
		event.preventDefault();
		$('.pop-up-preloader').addClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").addClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").addClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		function window_pop_up_remove_active() {$(".window-pop-up").removeClass('active');}
		window.setTimeout(window_pop_up_remove_active, 2000);

		function window_pop_up_ready() {$("#pop-up-2").addClass('ready');}
		window.setTimeout(window_pop_up_ready, 2000);

		function pop_up_preloader() {$(".pop-up-preloader").removeClass('active');}
		window.setTimeout(pop_up_preloader, 2300);

		$('#pop-up-2').addClass('active');
		$('#fp-nav').addClass('hidden');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
	});
	$('#section2 .category-5 a').click(function () {
		event.preventDefault();
		$('.pop-up-preloader').addClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").addClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").addClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		function window_pop_up_remove_active() {$(".window-pop-up").removeClass('active');}
		window.setTimeout(window_pop_up_remove_active, 2000);

		function window_pop_up_ready() {$("#pop-up-3").addClass('ready');}
		window.setTimeout(window_pop_up_ready, 2000);

		function pop_up_preloader() {$(".pop-up-preloader").removeClass('active');}
		window.setTimeout(pop_up_preloader, 2300);

		$('#pop-up-3').addClass('active');
		$('#fp-nav').addClass('hidden');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
	});
	
	$('#pop-up-1 .next').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-2').addClass('active');
		$('#pop-up-2').addClass('ready');
	});
	$('#pop-up-2 .next').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-3').addClass('active');
		$('#pop-up-3').addClass('ready');
	});
	$('#pop-up-3 .next').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-1').addClass('active');
		$('#pop-up-1').addClass('ready');
	});
	$('#pop-up-1 .prev').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-3').addClass('active');
		$('#pop-up-3').addClass('ready');
	});
	$('#pop-up-2 .prev').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-1').addClass('active');
		$('#pop-up-1').addClass('ready');
	});
	$('#pop-up-3 .prev').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-2').addClass('active');
		$('#pop-up-2').addClass('ready');
	});
	
// секция 4 откритие попапа с товаром

	$('#section4 .item-1 a').click(function () {
		// event.preventDefault();
		$('.pop-up-preloader').addClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").addClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").addClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		function window_pop_up_remove_active() {$(".window-pop-up").removeClass('active');}
		window.setTimeout(window_pop_up_remove_active, 2000);

		function window_pop_up_ready() {$("#pop-up-4").addClass('ready');}
		window.setTimeout(window_pop_up_ready, 2000);

		function pop_up_preloader() {$(".pop-up-preloader").removeClass('active');}
		window.setTimeout(pop_up_preloader, 2300);


		$('#section4 .item').addClass('m-hidden-block');

		$('#pop-up-4').addClass('active');

		$('#fp-nav').addClass('hidden');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
	});
	$('#section4 .item-2 a').click(function () {
		// event.preventDefault();
		$('.pop-up-preloader').addClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").addClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").addClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		function window_pop_up_remove_active() {$(".window-pop-up").removeClass('active');}
		window.setTimeout(window_pop_up_remove_active, 2000);

		function window_pop_up_ready() {$("#pop-up-5").addClass('ready');}
		window.setTimeout(window_pop_up_ready, 2000);

		function pop_up_preloader() {$(".pop-up-preloader").removeClass('active');}
		window.setTimeout(pop_up_preloader, 2300);

		$('#section4 .item').addClass('m-hidden-block');

		$('#pop-up-5').addClass('active');
		$('#fp-nav').addClass('hidden');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
	});
	$('#section4 .item-3 a').click(function () {
		// event.preventDefault();
		$('.pop-up-preloader').addClass('active');

		function pop_up_preloader_left() {$(".pop-up-preloader__left").addClass('active');}
		window.setTimeout(pop_up_preloader_left, 500);

		function pop_up_preloader_right() {$(".pop-up-preloader__right").addClass('active');}
		window.setTimeout(pop_up_preloader_right, 500);

		function window_pop_up_remove_active() {$(".window-pop-up").removeClass('active');}
		window.setTimeout(window_pop_up_remove_active, 2000);

		function window_pop_up_ready() {$("#pop-up-6").addClass('ready');}
		window.setTimeout(window_pop_up_ready, 2000);

		function pop_up_preloader() {$(".pop-up-preloader").removeClass('active');}
		window.setTimeout(pop_up_preloader, 2300);

		$('#section4 .item').addClass('m-hidden-block');

		$('#pop-up-6').addClass('active');
		$('#fp-nav').addClass('hidden');
		$('.section_num').removeClass('white');
		$('#subscribe').removeClass('white');
	});

	$('#pop-up-4 .next').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-5').addClass('active');
		$('#pop-up-5').addClass('ready');
	});
	$('#pop-up-5 .next').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-6').addClass('active');
		$('#pop-up-6').addClass('ready');
	});
	$('#pop-up-6 .next').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-4').addClass('active');
		$('#pop-up-4').addClass('ready');
	});
	$('#pop-up-4 .prev').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-6').addClass('active');
		$('#pop-up-6').addClass('ready');
	});
	$('#pop-up-5 .prev').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-4').addClass('active');
		$('#pop-up-4').addClass('ready');
	});
	$('#pop-up-6 .prev').click(function () {
		$('.window-pop-up').removeClass('active');
		$('.window-pop-up').removeClass('ready');
		$('#pop-up-5').addClass('active');
		$('#pop-up-5').addClass('ready');
	});


// удаление класа для блоков
	$('#section4 .close-carts').click(function () {
		$('#section4 .item').removeClass('m-hidden-block');
	});

});

//Форма отправки 2.0
$(function() {
	$("[name=send]").click(function () {
		$(":input.error").removeClass('error');
		$(".allert").remove();

		var error;
		var btn = $(this);
		var ref = btn.closest('form').find('[required]');
		var msg = btn.closest('form').find('input, textarea');
		var send_btn = btn.closest('form').find('[name=send]');
		var send_options = btn.closest('form').find('[name=campaign_token]');

		$(ref).each(function() {
			if ($(this).val() == '') {
				var errorfield = $(this);
				$(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
				error = 1;
				$(":input.error:first").focus();
				return;
			} else {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if ($(this).attr("type") == 'email') {
					if(!pattern.test($(this).val())) {
						$("[name=email]").val('');
						$(this).addClass('error error_email').parent('.field').append('<div class="allert"><span>Некоректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
						error = 1;
						$(":input.error:first").focus();
					}
				}
				var patterntel = /^()[+0-9]{9,18}/i;
				if ( $(this).attr("type") == 'tel') {
					if(!patterntel.test($(this).val())) {
						$("[name=phone]").val('');
						$(this).addClass('error error_tel').parent('.field').append('<div class="allert"><span>Некоректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
						error = 1;
						$(":input.error:first").focus();
					}
				}
			}
		});
		if(!(error==1)) {
			$(send_btn).each(function() {
				$(this).attr('disabled', true);
			});
			$(send_options).each(function() {
        		var form = $(this).closest('form'), name = form.find('.name').val();
				if ($(this).val() == '') {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: msg,
						success: function() {
							$( "#modal_callback_ok .top h4" ).remove();
							$( "#modal_callback_ok .top" ).append("<h4>"+name+"</h4>");
							$('form').trigger("reset");
							setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                            // Настройки модального окна после удачной отправки
                            $(".fancybox-close").click();
                            $('div.md-show').removeClass('md-show');
                            $("#call_ok")[0].click();
                        },
                        error: function(xhr, str) {
                        	alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
				} else {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: msg,
						success:
						$.ajax({
							type: 'POST',
							url: 'https://app.getresponse.com/add_subscriber.html',
							data: msg,
							statusCode: {0:function() {
								$( "#modal_callback_ok .top h4" ).remove();
								$( "#modal_callback_ok .top" ).append("<h4>"+name+"</h4>");
								$('form').trigger("reset");
								setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
								$(".fancybox-close").click();
								// Настройки модального окна после удачной отправки
								$('div.md-show').removeClass('md-show');
								$("#call_ok")[0].click();
							}}
						}),
						error:  function(xhr, str) {
							alert('Возникла ошибка: ' + xhr.responseCode);
						}
					});
				}
			});
		}
		return false;
	})
});
/*
 Copyright (c) 2009-2013 Petr Vostrel (http://petr.vostrel.cz/)
 Licensed under the MIT License (LICENSE.txt).

 jQuery Reel
 http://reel360.org
 Version: 1.3.0
 Updated: 2013-11-04

 Requires jQuery 1.6.2 or higher
 */
(function(k){var U=typeof define=="function"&&define.amd&&(define(["jquery"],k)||true),X=!U&&typeof module=="object"&&typeof module.exports=="object"&&(module.exports=k);!U&&!X&&k()})(function(){return jQuery.reel||function(k,U,X,s){function Bc(f){return n.instances.push(f[0])&&f}function Cc(f){return(n.instances=n.instances.not(Ca(f.attr(ka))))&&f}function Y(f){return n.instances.first().data(f)}function Dc(f){return"data:image/gif;base64,R0lGODlh"+f}function V(f){return"<"+f+"/>"}function x(f){return"."+
		(f||"")}function Va(f){return f.replace(Da,n.cdn)}function Ea(f){return"url('"+$b(f)+"')"}function ac(f,j){return typeof j==tb?j[f]:j}function Fa(f,j,o){return ub(f,Ga(j,o))}function Ha(f,j){return H(f)*(j?-1:1)}function Wa(f){return f.touch||f.originalEvent.touches&&f.originalEvent.touches[0]||f}function vb(f){return f.originalEvent}function y(f){return f===s?0:typeof f==wb?f:f+"px"}function Ca(f){return"#"+f}function bc(f,j,o){for(;f.length<j;)f=o+f;return f}function xb(f){return bc(f,2,"0")}function $b(f){return encodeURI(decodeURI(f))}
		function yb(f){return n.re.array.exec(f)?f.split(n.re.array):f}function Ec(f){return!f.parents(zb).length}function cc(f){return typeof f==wb?f:k.each(f,function(j,o){f[j]=o?+o:s})}function Ab(f){try{console.error("[ Reel ] "+f)}catch(j){}}if(k){var Z=k&&k().jquery.split(/\./);if(!Z||+(xb(Z[0])+xb(Z[1])+xb(Z[2]||""))<10602)return Ab("Too old jQuery library. Please upgrade your jQuery to version 1.6.2 or higher");var n=k.reel={version:"1.3.0",def:{frame:1,frames:36,loops:true,clickfree:false,draggable:true,
			scrollable:true,steppable:true,throwable:true,wheelable:true,orientable:false,cw:false,revolution:s,stitched:0,directional:false,row:1,rows:0,rowlock:false,framelock:false,orbital:0,vertical:false,inversed:false,footage:6,spacing:0,horizontal:true,suffix:"-reel",image:s,images:"",path:"",preload:"fidelity",shy:false,speed:0,delay:0,timeout:2,duration:s,rebound:0.5,entry:s,opening:0,brake:0.23,velocity:0,tempo:36,laziness:6,cursor:s,hint:"",indicator:0,klass:"",preloader:2,area:s,attr:{},annotations:s,
			responsive:false,graph:s,monitor:s},scan:function(){return k(x(z)+":not("+x(Bb)+" > "+x(z)+")").each(function(f,j){f=k(j);j=f.data();j.images=yb(j.images);var o={};k(x(dc)+"[data-for="+f.attr(ka)+"]").each(function(t,r){t=k(r);r=t.data();r.x=cc(yb(r.x));r.y=cc(yb(r.y));var g=t.attr(ka);r.node=t.removeData();o[g]=r});j.annotations=o;f.removeData().reel(j)})},fn:{reel:function(){var f=arguments,j=k(this),o=j.data(),t=f[0]||{},r=f[1];if(typeof t!="object")if(t.slice(0,1)==":")return j.trigger(t.slice(1),
			r);else if(f.length==1)return o[t];else{if(r!==s){n.normal[t]&&(r=n.normal[t](r,o));if(o[t]===s)o[t]=r;else if(o[t]!==r)j.trigger(t+"Change",[s,o[t]=r])}return j}else{var g=k.extend({},n.def,t),K=[];j.filter(Xa).unreel().filter(function(){var h=k(this),e=g.attr,a=e.src||h.attr(ra),I=e.width||h.attr(L)||h.width();h=e.height||h.attr(D)||h.height();if(!a)return Ab("`src` attribute missing on target image");if(!I||!h)return Ab("Dimension(s) of the target image unknown");return true}).each(function(){var h=
				k(this),e=function(c,d){return h.reel(c,d)&&a(c)},a=function(c){return h.data(c)},I={setup:function(){if(!(h.hasClass(z)&&h.parent().hasClass(Bb))){e(Ia,g);var c={src:h.attr(ra),width:h.attr(D)||null,height:h.attr(L)||null,style:h.attr($)||null,"class":h.attr(ec)||null},d=h.attr(g.attr).attr(ra),b=e(ka,h.attr(ka)||h.attr(ka,z+"-"+ +new Date).attr(ka)),i=k.extend({},h.data()),p=e(aa,g.images||[]),m=e(W,g.stitched),l=!p.length||m;l=e(Ya,g.responsive&&(Fc?true:!l));var q=e(fc,{}),u=g.loops,v=g.orbital,
			E=g.revolution,ba=g.rows,ca=e(sa,Ga(g.footage,g.frames));e(Za,g.spacing);var Cb=e(D,+h.attr(D)||h.width()),Db=e(L,+h.attr(L)||h.height()),Gc=e(Ja,g.shy),gc=e(O,v&&ca||ba<=1&&p.length||g.frames),Hc=ba>1||v;e(Ka,ac("x",E)||m/2||Cb*2);e(Eb,!Hc?0:ac("y",E)||(ba>3?Db:Db/(5-ba)));ba=m?1:la(gc/ca);e(Fb,m-(u?0:Cb));e($a,0);b=Ca(b+g.suffix);u=h.attr(ec);u=!u?P:u+A;u=k(V(ta),{id:b.substr(1),"class":u+A+Bb+A+hc+"0"});u=h.wrap(u.addClass(g.klass)).addClass(z);K.push(Bc(u)[0]);u=u.parent().bind(I.instance);e(Gb,
			p.length?P:g.image||d.replace(n.re.image,"$1"+g.suffix+".$2"));e(ab,k(V(ta),{"class":Hb}).appendTo("body"));e(La,k());e(ic,[]);e(J,null);e(B,null);e(Q,g.row);e(ua,0);e(Ib,ba);e(jc,g.rowlock);e(kc,g.framelock);e(bb,e(Ma,e(cb,0)));e(db,1/gc);e(lc,b);e(M,e(va,g.speed)<0);e(Na,false);e(ma,0);e(wa,g.vertical);e(da,0);e(xa,Ha(1,!g.cw&&!m));e(eb,{});e(ea,false);e(fb,e(Jb,0));e(gb,e(hb,0));e(Oa,false);e(Kb,false);e(fa,false);e(mc,g.brake);e(Lb,!!v);e(ga,g.tempo/(n.lazy?g.laziness:1));e(ya,-1);e(ib,-1);e(Pa,
				g.annotations||u.unbind(x(Pa))&&{});e(Mb,1);e(nc,{attr:c,data:i});g.steppable||u.unbind("up.steppable");g.indicator||u.unbind(".indicator");C(P,{overflow:Nb,position:"relative"});l||C(P,{width:Cb,height:Db});l&&k.each(Ic,function(cd,oc){q[oc]=a(oc)});C(na+A+x(z),{display:Ob});C(x(Hb),{position:"fixed",left:y(-100),top:y(-100)},true);C(x(Hb)+A+Xa,{position:Qa,width:10,height:10},true);ha.bind(I.pool);h.trigger(Gc?"prepare":"setup")}},instance:{teardown:function(){var c=h.data(nc);h.parent().unbind(I.instance);
				if(a(Ja))h.parent().unbind(jb,ia);else a($).remove()&&a(La).unbind(F);a(ab).empty();clearTimeout(Pb);clearTimeout(Qb);k(U).unbind(pc,qc);k(U).unbind(F);ha.unbind(I.pool);oa.unbind(ja);h.siblings().unbind(F).remove();kb();h.removeAttr("onloaded");Cc(h.unbind(F).removeData().unwrap().attr(c.attr).data(c.data));h.attr($)==P&&h.removeAttr($)},setup:function(){function c(q){return h.trigger("down",[Wa(q).clientX,Wa(q).clientY,q])&&q.give}function d(q,u){return!u||h.trigger("wheel",[u,q])&&q.give}var b=
				h.parent().append(za()),i=e(La,k(g.area||b)),p=g.rows>1,m=g.cursor,l=m==rc?Jc:m||Kc;m=m==rc?Lc+A+"!important":s;C(A+x(z),{MozUserSelect:lb,WebkitUserSelect:lb,MozTransform:"translateZ(0)"});h.unbind(jb,ia);i.bind(Mc,c).bind(g.clickfree?Nc:Oc,c).bind(g.wheelable?Pc:null,d).bind(Qc,function(){return false});C(P,{cursor:Va(l)});C(x(Rb),{cursor:"wait"});C(x(mb)+na+x(mb)+" *",{cursor:Va(m||l)},true);if(a(Ya)){C(A+x(z),{width:"100%",height:Sb});k(U).bind(pc,qc)}g.hint&&i.attr("title",g.hint);g.indicator&&
			b.append(Ra("x"));p&&g.indicator&&b.append(Ra("y"));g.monitor&&b.append(sc=k(V(ta),{"class":tc}))&&C(A+x(tc),{position:Qa,left:0,top:0})},preload:function(){function c(){var q=l.children(":not([src]):first");return q.attr(ra,q.data(ra))}var d=h.parent(),b=a(aa),i=!b.length,p=n.preload[g.preload]||n.preload[n.def.preload];b=i?[a(Gb)]:p(b.slice(0),g,a);e(da,i?0.5:0);var m=0,l=a(ab).empty();i=[];d.addClass(Rb);e($,a($)||k("<"+$+' type="text/css">'+C.rules.join("\n")+"</"+$+">").prependTo(Tb));e(Na,true);
				h.trigger("stop");g.responsive&&Ub();for(h.trigger("resize",true);b.length;){p=n.substitute(g.path+b.shift(),a);k(V(Xa)).data(ra,p).appendTo(l).bind("load error abort",function(q){q.type!="load"&&h.trigger(q.type);return!Ec(d)&&h.trigger("preloaded")&&c()&&false});i.push(p)}setTimeout(function(){for(;++m<n.concurrent_requests;)c()},0);e(ic,i);e(Ja,false)},preloaded:function(){var c=a(aa).length||1,d=e(da,Ga(a(da)+1,c));d===1&&h.trigger("frameChange",[s,a(J)]);if(d===c){h.parent().removeClass(Rb);
				h.trigger("loaded")}},loaded:function(){a(aa).length>1||h.css({backgroundImage:Ea(n.substitute(g.path+a(Gb),a))}).attr({src:Va(uc)});a(W)&&h.attr({src:Va(uc)});a(Kb)||e(ma,g.velocity||0);e(Na,false);pa=true},prepare:function(){h.css("display",Ob).parent().one(jb,ia)},opening:function(){if(!g.opening)return h.trigger("openingDone");e(fa,true);e(Vb,!a(va));var c=g.entry||g.speed,d=a(B),b=g.opening;e(B,d-c*b);e(ya,la(b*Y(ga)))},openingDone:function(){function c(b){return h.trigger("orient",[vb(b).alpha,
					vb(b).beta,vb(b).gamma,b])&&b.give}e(Sa,false);e(fa,false);var d=nb+x(fa);ha.unbind(d,I.pool[d]);g.orientable&&k(U).bind(Rc,c);if(g.delay>0)Pb=setTimeout(function(){h.trigger("play")},g.delay*1E3);else h.trigger("play")},play:function(c,d){d=d?e(va,d):a(va)*Ha(1,a(M));(c=g.duration)&&e(ib,la(c*Y(ga)));e(M,d<0);d=e(Sa,!!d);e(Vb,!d);Aa()},reach:function(c,d,b){if(d!=a(J)){c=a(O);e(Q,la(d/c));var i=e(bb,a(J));d=e(Ma,d);d=e(cb,n.math.distance(i,d,c));b=H(b||a(va))*Ha(1,d<0);h.trigger("play",b)}},pause:function(){w()},
				stop:function(){var c=e(Vb,true);e(Sa,!c)},down:function(c,d,b,i){function p(l){return h.trigger("pan",[Wa(l).clientX,Wa(l).clientY,l])&&l.give}function m(l){return h.trigger("up",[l])&&l.give}if(!(!g.clickfree&&i&&i.button!==s&&i.button!=Sc))if(g.draggable){e(ea,a(J));c=g.clickfree;e(ma,0);i=c?a(La):oa;ob=pb(a(Ka),d,b);w();kb();G=0;k(zb,oa).addClass(mb);i.bind(Tc+A+Uc,p).bind(Vc+A+Wc,m).bind(c?Xc:Yc,m)}},up:function(){e(ea,false);e(Oa,false);var c=g.throwable,d=H(Ta[0]+Ta[1])/60;N=e(ma,!c?0:c===
				true?d:Ga(c,d))?1:0;w();kb();k(zb,oa).removeClass(mb);(g.clickfree?a(La):oa).unbind(ja)},pan:function(c,d,b,i){if(g.draggable&&Ua){Ua=false;w();c=g.rows;var p=g.orbital,m=!a(Oa)&&c<=1&&!p&&g.scrollable,l={x:d-ob.x,y:b-ob.y},q={x:H(l.x),y:H(l.y)};if(i&&m&&q.x<q.y)return i.give=true;if(q.x>0||q.y>0){i&&(i.give=false);G=ub(q.x,q.y);ob={x:d,y:b};i=a(Ka);m=a(eb);q=a(wa);if(!a(kc)){var u=e(B,vc(q?b-m.y:d-m.x,a(fb),i,a(gb),a(hb),a(xa),q?b-m.y:d-m.x));e(Oa,a(Oa)||a(J)!=a(ea));(l=wc(q?l.y:l.x||0))&&e(M,l<
					0)}if(p&&a(Lb)){e(wa,H(b-m.y)>H(d-m.x));m=pb(i,d,b)}if(c>1&&!a(jc)){c=a(Eb);p=a(Jb);l=-p*c;e(ua,n.math.envelope(b-m.y,p,c,l,l+c,-1))}!(u%1)&&!g.loops&&pb(i,d,b)}}},wheel:function(c,d,b){if(d){qb=true;c=la(qa.sqrt(H(d))/2);c=Ha(c,d>0);d=0.0833*a(Ka);pb(d);c&&e(M,c<0);e(ma,0);e(B,vc(c,a(fb),d,a(gb),a(hb),a(xa)));b&&b.preventDefault();b&&(b.give=false);w();h.trigger("up",[b])}},orient:function(c,d){if(!(!Ua||R)){xc=true;c=d/360;fraction=e(B,+(g.stitched||g.cw?1-c:c).toFixed(2));Ua=false}},fractionChange:function(c,
																																																																																																																																					   d,b){if(d===s){c=1+rb(b/a(db));d=g.rows>1;b=g.orbital;e(Lb,!!b&&(c<=b||c>=a(sa)-b+2));if(d)c+=(a(Q)-1)*a(O);e(J,c)}},tierChange:function(c,d,b){if(d===s){c=e(Q,S(Wb(b,1,g.rows)));d=a(O);b=a(J)%d||d;e(J,b+c*d-d)}},rowChange:function(c,d,b){d===s&&Xb(ua,s,b,g.rows)},frameChange:function(c,d,b){if(d===s){this.className=this.className.replace(n.re.frame_klass,hc+b);c=a(O);d=g.rows;var i=g.path,p=b%c||c,m=((b-p)/c+1-1)/(d-1),l=a(Q);!d?a(ua):Xb(ua,m,l,d);var q=Xb(B,s,p,c),u=a(sa);if(g.orbital&&a(wa)){b=
					g.inversed?u+1-b:b;b+=u}var v=a(W);c=a(aa);if(!c.length||v){p=a(Za);var E=a(D);m=a(L);if(v){b=e($a,S(Wb(q,0,a(Fb)))%v);d=d<=1?0:(m+p)*(d-l);b=[y(-b),y(-d)];c=c.length>1&&c[l-1];d=n.substitute(i+c,a);c&&h.css("backgroundImage").search(d)<0&&h.css({backgroundImage:Ea(d)})}else{i=g.horizontal;l=b%u-1;l=l<0?u-1:l;b=rb((b-0.1)/u);b+=d>1?0:a(M)?0:!g.directional?0:a(Ib);b=b*((i?m:E)+p);d=l*((i?E:m)+p);b=c.length?[0,0]:i?[y(-d),y(-b)]:[y(-b),y(-d)]}h.css({backgroundPosition:b.join(A)})}else{a(Ya)&&Ub();a(da)&&
				h.attr({src:$b(n.substitute(i+c[b-1],a))})}}},"frameChange.reach":function(c,d,b){if(!(!a(Ma)||d!==s)){c=n.math.distance(a(bb),b,a(O));if(H(c)>=H(a(cb))){e(J,e(Ma));e(Ma,e(cb,e(bb,0)));h.trigger("stop")}}},"imageChange imagesChange":function(){h.trigger("preload")},"fractionChange.indicator":function(c,d,b){if(g.indicator&&d===s){c=g.indicator;var i=g.orbital;d=i&&a(wa)?a(L):a(D);i=i?a(sa):g.images.length||a(O);i=la(d/i);d-=i;b=S(Wb(b,0,d));b=!g.cw||a(W)?b:d-b;Ra.$x.css(a(wa)?{left:0,top:y(b),bottom:Sb,
					width:c,height:i}:{bottom:0,left:y(b),top:Sb,width:i,height:c})}},"tierChange.indicator":function(c,d,b){if(g.rows>1&&g.indicator&&d===s){var i=a(L);c=g.indicator;d=la(i/g.rows);i-=d;b=S(b*i);Ra.$y.css({left:0,top:b,width:c,height:d})}},"setup.annotations":function(){var c=h.parent();k.each(a(Pa),function(d,b){var i=typeof b.node==wb?k(b.node):b.node||{};i=i.jquery?i:k(V(ta),i);i=i.attr({id:d}).addClass(dc);var p=b.image?k(V(Xa),b.image):k(),m=b.link?k(V("a"),b.link).click(function(){h.trigger("up.annotations",
				{target:m})}):k();C(Ca(d),{display:lb,position:Qa},true);b.image||b.link&&i.append(m);b.link||b.image&&i.append(p);b.link&&b.image&&i.append(m.append(p));i.appendTo(c)})},"prepare.annotations":function(){k.each(a(Pa),function(c){k(Ca(c)).hide()})},"frameChange.annotations":function(c,d){if(!(!a(da)||d!==s)){var b=a(D),i=a(W),p=a($a);k.each(a(Pa),function(m,l){m=k(Ca(m));var q=l.start||1,u=l.end,v=v||a(J),E=v-1,ba=l.at?l.at[E]=="+":false;E=l.at?E:E-q+1;v=typeof l.x!=tb?l.x:l.x[E];var ca=typeof l.y!=
				tb?l.y:l.y[E];l=v!==s&&ca!==s&&(l.at?ba:E>=0&&(!u||E<=u-q));if(i){q=v>i-b&&p>=0&&p<b;v=!(v<b&&p>i-b)?v:v+i;v=!q?v:v-i;v-=p}if(a(Ya)){q=a(Mb);v=v&&v*q;ca=ca&&ca*q}v={display:l?Ob:lb,left:y(v),top:y(ca)};m.css(v)})}},"up.annotations":function(c,d){if(!(G>10||qb)){c=k(d.target);(c.is("a")?c:c.parents("a")).attr("href")&&(G=10)}},"up.steppable":function(){G||qb||h.trigger(a(eb).x-h.offset().left>0.5*a(D)?"stepRight":"stepLeft")},"stepLeft stepRight":function(){w()},stepLeft:function(){e(M,false);e(B,
					a(B)-a(db)*a(xa))},stepRight:function(){e(M,true);e(B,a(B)+a(db)*a(xa))},stepUp:function(){e(Q,a(Q)-1)},stepDown:function(){e(Q,a(Q)+1)},resize:function(c,d){if(!(a(Na)&&!d)){var b=a(W),i=a(Za);c=a(L);var p=!a(aa).length||b,m=g.rows||1;b=a(aa).length?!b?s:y(b)+A+y(c):b&&y(b)+A+y((c+i)*m-i)||y((a(D)+i)*a(sa)-i)+A+y((c+i)*a(Ib)*m*(g.directional?2:1)-i);h.css({height:p?y(c):null,backgroundSize:b||null});d||h.trigger("imagesChange")}},"setup.fu":function(){e(J,g.frame+(a(Q)-1)*a(O));h.trigger("preload")},
				"wheel.fu":function(){qb=false},"clean.fu":function(){h.trigger("teardown")},"loaded.fu":function(){h.trigger("opening")}},pool:{"tick.reel.preload":function(){if(!(!(pa||a(Na))||a(Ja))){var c=a(D),d=Zc(za.$.css(D)),b=a(aa).length||1,i=S(1/b*a(da)*c);za.$.css({width:d+(i-d)/3+1});if(a(da)===b&&d>c-1){pa=false;za.$.fadeOut(300,function(){za.$.css({opacity:1,width:0})})}}},"tick.reel":function(c){if(!a(Ja)){var d=a(ma),b=Y(ga),i=g.monitor;if(!(!n.intense&&$c())){if(N){d=d-a(mc)/b*N;d=e(ma,d>0.1?d:(N=
				R=0))}i&&sc.text(a(i));d&&N++;R&&R++;wc(0);Ua=true;if(R&&!d)return T(c);if(a(ea))return T(c,w());if(!(a(ya)>0)){if(!g.loops&&g.rebound){!R&&!(a(B)%1)?Yb++:(Yb=0);Yb>=g.rebound*1E3/b&&e(M,!a(M))}c=a(xa)*Ha(1,a(M));b=a(ib);d=(!a(Sa)||xc||!b?d:H(a(va))+d)/Y(ga);e(B,a(B)-d*c);b=!g.duration?b:b>0&&e(ib,b-1);!b&&a(Sa)&&h.trigger("stop")}}}},"tick.reel.opening":function(){if(a(fa)){var c=(g.entry||g.speed)/Y(ga)*(g.cw?-1:1),d=e(ya,a(ya)-1);e(B,a(B)+c);d||h.trigger("openingDone")}}}},pa=false,T=function(c,
																																																																																																																																	 d){return c.stopImmediatePropagation()||d},ia=function(){h.trigger("setup")},R,N=0,Aa=function(){return R=0},w=function(){clearTimeout(Pb);ha.unbind(nb+x(fa),I.pool[nb+x(fa)]);e(ya,0);e(Kb,true);return R=-g.timeout*Y(ga)},G=0,qb=false,xc=false,sc=k(),za=function(){C(A+x(yc),{position:Qa,left:0,bottom:0,height:g.preloader,overflow:Nb,backgroundColor:"#000"});return za.$=k(V(ta),{"class":yc})},Ra=function(c){C(A+x(zc)+x(c),{position:Qa,width:0,height:0,overflow:Nb,backgroundColor:"#000"});return Ra["$"+
			c]=k(V(ta),{"class":zc+A+c})},C=function(c,d,b){function i(p){var m=[];k.each(p,function(l,q){m.push(l.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+y(q)+";")});return"{"+m.join(P)+"}"}b=b?P:a(lc);c=c.replace(/^/,b).replace(na,na+b);return C.rules.push(c+i(d))&&d},$c=function(){var c=a(L),d=a(D),b=h[0].getBoundingClientRect();return b.top<-c||b.left<-d||b.right>d+k(U).width()||b.bottom>c+k(U).height()},Yb=0,ob={x:0,y:0},wc=function(c){return Ta.push(c)&&Ta.shift()&&c},kb=function(){return Ta=[0,0]},
			Ta=kb(),vc=g.graph||n.math[g.loops?"hatch":"envelope"],qc=function(){clearTimeout(Qb);Qb=setTimeout(Ub,n.resize_gauge)},Ub=function(){if(h.width()!=a(D)){var c=a(fc),d=e(Mb,h.width()/c.width);k.each(c,function(b,i){e(b,S(i*d))});h.trigger("resize")}},Pb,Qb,pb=function(c,d,b){var i=e(fb,a(B));e(Jb,a(ua));var p=g.loops;e(gb,p?0:-i*c);e(hb,p?c:c-i*c);return d!==s&&e(eb,{x:d,y:b})||s},Ua=true,Xb=function(c,d,b,i){if(i){var p=a(c)||0;b=d!==s?d:(b-1)/(i-1);b=c!=B?b:Ga(b,0.9999);return d=+H(p-b).toFixed(8)>=
			+(1/(i-1)).toFixed(8)?e(c,b):d||p}},oa=ha;try{if(ha[0]!=top.document)oa=ha.add(top.document)}catch(dd){}top===self?k():function(c){k("iframe",oa.last()).each(function(){try{if(k(this).contents().find(Tb).html()==k(Tb).html())return(c=k(this))&&false}catch(d){}});return c}();C.rules=[];I.setup()});sb=sb||function h(){var e=+new Date,a=Y(ga);if(!a)return sb=null;ha.trigger(nb);n.cost=(+new Date+n.cost-e)/2;return sb=setTimeout(h,ub(4,1E3/a-n.cost))}();return k(K)}},unreel:function(){return this.trigger("teardown")}},
			re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,ua:[/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i,/(webkit)\/([\d.]+)/i,/(mozilla)\/([\d.]+)/i],array:/ *, */,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,frame_klass:/frame-\d+/,substitution:/(@([A-Z]))/g,no_match:/^(undefined|)$/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.net/",math:{envelope:function(f,j,o,t,r,g){return j+Fa(t,r,-f*g)/o},hatch:function(f,j,o,t,r,g){f=(f<t?r:0)+
				f%r;f=j+-f*g/o;return f-rb(f)},interpolate:function(f,j,o){return j+f*(o-j)},distance:function(f,j,o){var t=o/2;f=j-f;return f<-t?f+o:f>t?f-o:f}},preload:{fidelity:function(f,j,o){function t(e,a,I){function pa(G){for(;!(G>=1&&G<=N);)G+=G<1?+N:-N;return h[I+G]||(h[I+G]=!!T.push(G))}if(!e.length)return[];var T=[],ia=4*a,R=j.frame,N=e.length;a=true;for(var Aa=N/ia,w=0;w<ia;w++)pa(R+S(w*Aa));for(;Aa>1;){w=0;ia=T.length;Aa/=2;for(a=!a;w<ia;w++)pa(T[w]+(a?1:-1)*S(Aa))}for(w=0;w<=N;w++)pa(w);for(w=0;w<T.length;w++)T[w]=
				e[T[w]-1];return T}var r=j.orbital,g=r?2:j.rows||1,K=r?o(sa):o(O);o=(j.row-1)*K;r=[].concat(f);var h=new Array(f.length+1);f=g<2?[]:r.slice(o,o+K);return t(f,1,o).concat(t(r,g,0))},linear:function(f){return f}},substitute:function(f,j){return f.replace(n.re.substitution,function(o,t,r){return typeof n.substitutes[r]=="function"?n.substitutes[r](j):Ac[r]?j(Ac[r]):t})},substitutes:{T:function(){return+new Date}},normal:{fraction:function(f,j){if(f===null)return f;return j[Ia].loops?f-rb(f):Fa(0,1,f)},
				tier:function(f){if(f===null)return f;return Fa(0,1,f)},row:function(f,j){if(f===null)return f;return S(Fa(1,j[Ia].rows,f))},frame:function(f,j){if(f===null)return f;var o=j[Ia];j=j[O]*(o.orbital?2:o.rows||1);f=S(o.loops?f%j||j:Fa(1,j,f));return f<0?f+j:f},images:function(f,j){var o=n.re.sequence.exec(f);return!o?f:n.sequence(o,j[Ia])}},sequence:function(f,j){if(f.length<=1)return j.images;var o=[],t=j.orbital,r=f[1],g=f[2],K=f[4];K=n.re.no_match.test(K+P)?1:+K;var h=t?2:j.rows||1;j=t?j.footage:j.stitched?
				1:j.frames;h=+(f[5]||h*j)-K;f=+f[7]||1;for(j=0;j<=h;){o.push(r.replace(g,bc(K+j+P,g.length,"0")));j+=f}return o},instances:k(),leader:Y,resize_gauge:300,concurrent_requests:4,cost:0},ha=k(X);X=navigator.userAgent;var Ba=n.re.ua[0].exec(X)||n.re.ua[1].exec(X)||n.re.ua[2].exec(X);Z=+Ba[2].split(".").slice(0,2).join(".");Ba=Ba[1]=="MSIE";var ad=!(Ba&&Z<8),Fc=!(Ba&&Z<9),sb,z="reel",Bb=z+"-overlay",Hb=z+"-cache",zc=z+"-indicator",yc=z+"-preloader",tc=z+"-monitor",dc=z+"-annotation",mb=z+"-panning",Rb=
				z+"-loading",hc="frame-",qa=Math,S=qa.round,rb=qa.floor,la=qa.ceil,Ga=qa.min,ub=qa.max,H=qa.abs,Zc=parseInt,Wb=n.math.interpolate,Pa="annotations",La="area",Sb="auto",nc="backup",M="backwards",db="bit",mc="brake",ab="cache",ic=ab+"d",Lb="center",ec="class",jb="click",ea=jb+"ed",eb=ea+"_location",fb=ea+"_on",Jb=ea+"_tier",xa="cwish",bb="departure",Ma="destination",cb="distance",sa="footage",B="fraction",J="frame",kc="framelock",O="frames",L="height",hb="hi",Nb="hidden",Gb="image",aa="images",gb="lo",
			Na="loading",fa="opening",ya=fa+"_ticks",Ia="options",Sa="playing",da="preloaded",Mb="ratio",Oa="reeling",Kb="reeled",Ya="responsive",Ka="revolution",Eb="revolution_y",Q="row",jc="rowlock",Ib="rows",Ja="shy",Za="spacing",va="speed",ra="src",lc="stage",W="stitched",$a=W+"_shift",Fb=W+"_travel",Vb="stopped",$="style",ga="tempo",ib="ticks",ua="tier",fc="truescale",ma="velocity",wa="vertical",D="width",F=x(z),ja=x("pan")+F,Rc="deviceorientation"+F,Qc="dragstart"+F,Oc="mousedown"+F,Nc="mouseenter"+F,Xc=
				"mouseleave"+ja,Uc="mousemove"+ja,Yc="mouseup"+ja,Pc="mousewheel"+F,nb="tick"+F,Wc="touchcancel"+ja,Vc="touchend"+ja,Mc="touchstart"+F,Tc="touchmove"+ja,pc="resize"+F,P="",A=" ",na=",",Qa="absolute",Ob="block",Da="@CDN@",ta="div",rc="hand",Tb="head",zb="html",ka="id",Xa="img",Zb="jquery."+z,lb="none",tb="object",wb="string",Ic=[D,L,Za,Ka,Eb,W,$a,Fb],Ac={W:D,H:L},uc=ad?Dc("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):Da+"blank.gif",Kc=Ea(Da+Zb+".cur")+na+"move",Jc=Ea(Da+Zb+"-drag.cur")+
				na+"move",Lc=Ea(Da+Zb+"-drag-down.cur")+na+"move";n.lazy=n.re.lazy_agent.test(X);var Sc=Ba&&Z<9?1:0,bd=k.cleanData;k.cleanData=function(f){k(f).each(function(){k(this).triggerHandler("clean")});return bd.apply(this,arguments)};k.extend(k.fn,n.fn)&&k(n.scan);return n}}(jQuery,window,document)});
