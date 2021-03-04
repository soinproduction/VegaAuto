$(function () {
  $('.baner__slider').slick({
    accessibility: true,
    arrows: false,
    dots: true,
    speed: 1500,
    dotsClass: "baner__slider-dots",
  });

  $('.position__slider').slick({
    accessibility: true,
    prevArrow: '<button class="slick__slider-left slick__slider__btn"></button>',
    nextArrow: '<button class="slick__slider-right slick__slider__btn"></button>',
    dots: false,
    infinite: true,
    dotsClass: "baner__slider-dots2",
    mobileFirst: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1479,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: true,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  $('.feed__box1').slick({
    accessibility: false,
    arrows:false,
    dots: false,
    infinite: true,
    dotsClass: "baner__slider-dots2",
    mobileFirst: false,
    responsive: [{
        breakpoint: 1479,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  $('.top__brand-slider').slick({
    accessibility: true,
    prevArrow: '<button class="slick__slider-left slick__slider__btn"></button>',
    nextArrow: '<button class="slick__slider-right slick__slider__btn"></button>',
    dots: false,
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    dotsClass: "baner__slider-dots2",
    mobileFirst: false,
    responsive: [
      {
        breakpoint: 1479,
        settings: {
          slidesToShow: 11,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });


  $('.product__slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
  });
  $('.product__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider',
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    draggable: false,
    infinite: false,
    vertical: true,
    swipe: false,
    verticalSwiping: false,
    responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          swipe: false,
          draggable: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          swipe: false,
          draggable: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          swipe: false,
        }
      }
    ]
  });


  $('.product-item__favorite').click(function () {
    $(this).toggleClass('product-item__favorite-active')
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion__active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  };


  $('.input__plus').click(function () {
    var max_qty = Number($(this).parent().find('.input__count').attr('max'));
    var qty = Number($(this).parent().find('.input__count').val());
    if (qty > max_qty) {
      qty = max_qty;
    } else if (qty == max_qty) {
      qty = max_qty;
    } else {
      qty += 1;
    }
    $(this).parent().find('.input__count').val(qty);
  });



  $('.input__minus').click(function () {
    if ($(this).parent().find('.input__count').val() > 1) {
      var plus = Number($(this).parent().find('.input__count').val()) - 1;
      $(this).parent().find('.input__count').val(plus);
    }
  });

  $(".hamburger").click(function(event) {
    $(".hamburger").toggleClass('hamburger__active'),
    $(".mobile__menu ").toggleClass('mobile__menu__active');
  });

  $(".filter-mobile").click(function(event) {
    $(".filter-mobile").toggleClass('filter-mobile__active'),
    $(".mobile-filter__block").toggleClass('mobile-filter__block__active');
    $(".overlay").toggleClass('overlay__active');
  });

  $('[data-modal=confirm]').on('click', function(){
    $('.overlay-mode, #modal-wrapp').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
      $('.overlay-mode, #modal-wrapp').fadeOut('slow');
  });


  $('.content_toggle').click(function(){
		$('.content_block').toggleClass('hide');
		if ($('.content_block').hasClass('hide')) {
			$('.content_toggle').html('Читать полностью');
		} else {
			$('.content_toggle').html('Скрыть описание');
		}
		return false;
	});




});
