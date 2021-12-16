

$(function(){

$('.video-wrapper__overlay').click(function(){
  $(this).fadeOut();
})



	$('.menu__btn').click(function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('.header').toggleClass('active');
	})

	$('.header__lenguage-container').click(function(){
		$(this).toggleClass('active');

	})
 if( window.innerWidth >= 768 ){
$('.brands__card').click(function(){
    $(this).toggleClass('active');
    $(this).find('p').slideToggle();
  })
}
	$(".down-arrow, .top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".menu__btn"); 
    var div2 = $(".menu");
    var div3 =$('.header')
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.removeClass('active');
  div.removeClass('active');
  div3.removeClass('active');

    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".header__lenguage"); 
    var div2 = $(".header__lenguage-container");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.removeClass('active');

    }
  });
});

$('.slick-carousel').on('init beforeChange', function(e, slick, curr, next) {
  const
  item = $('slider-item'),
    count = slick.slideCount,
    show = slick.options.slidesToShow,
    center = slick.options.centerMode,
    index = (next | 0) - center * (count > show ? show / 2 | 0 : 0),
    selector = shift => `[data-slick-index="${index + shift * count}"]`;

  $('.slick-xxx', this).removeClass('slick-xxx');
  $([ 0, 1, -1 ].map(selector).join(', '), this).addClass('slick-xxx');
}).slick({
  slidesToShow: 7,
  infinite: true,
  centerMode: true,
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true
     
    }
  }
  ]
});


 $('.slider-for').slick({
 

  arrows: false,
  centerMode: true,
  infinite: false,
  slidesToShow: 3,
  asNavFor: '.slider-nav',
  prevArrow: $('.prev-nav2'),
  nextArrow: $('.next-nav2'),
  initialSlide: 1,
   responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true
     
    }
  }
  ]
});
$('.slider-nav').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  prevArrow: $('.prev-nav'),
  nextArrow: $('.next-nav'),
  dots: false,
  infinite: false,
  initialSlide: 1,
  draggable: false,

  focusOnSelect: true
});
// $(document).ready(function(){




    // $.fn.showPage = function(hash) {


    //     if (hash === '#hr' || hash === '') {
    //         if ($('#hr').is(':hidden')) {
    //             $('#hr').show();
    //             $('#outplacement, #coaching, #consultancy, #software-development, #nederland, #belgië, #pro').hide();
    //         }
    //     } else if (hash === '#outplacement') {
    //         if ($('#outplacement').is(':hidden')) {
    //             $('#outplacement').show();
    //             $('#hr, #coaching, #consultancy, #software-development, #nederland, #belgië, #pro').hide();
    //         }
    //     } else if (hash === '#coaching') {
    //         if ($('#coaching').is(':hidden')) {
    //             $('#coaching').show();
    //             $('#outplacement, #hr, #consultancy, #software-development, #nederland, #belgië, #pro').hide();
    //         }       
    //     }   else if (hash === '#consultancy') {
    //         if ($('#consultancy').is(':hidden')) {
    //             $('#consultancy').show();
    //             $('#outplacement, #coaching, #hr, #software-development, #nederland, #belgië, #pro').hide();
    //         }       
    //     }   else if (hash === '#software-development') {
    //         if ($('#software-development').is(':hidden')) {
    //             $('#software-development').show();
    //             $('#outplacement, #coaching, #consultancy, #hr, #nederland, #belgië, #pro').hide();
    //         }       
    //     } else if (hash === '#nederland') {
    //         if ($('#nederland').is(':hidden')) {
    //             $('#nederland').show();
    //             $('#outplacement, #coaching, #consultancy, #software-development, #hr, #belgië, #pro').hide();
    //         }       
    //     } else if (hash === '#belgië') {
    //         if ($('#belgië').is(':hidden')) {
    //             $('#belgië').show();
    //             $('#outplacement, #coaching, #consultancy, #software-development, #hr, #nederland, #pro').hide();
    //         }       
    //     } else if (hash === '#pro') {
    //         if ($('#pro').is(':hidden')) {
    //             $('#pro').show();
    //             $('#outplacement, #coaching, #consultancy, #software-development, #hr, #belgië, #nederland').hide();
    //         }       
    //     }

    // }

//     $('.news-tab-nav').click(function(e){
//         e.preventDefault();
//         var hash = $(this).attr('id');
//         window.location.href = '' + hash;
//         $(document).showPage(hash);
//     });

//     var hash = location.hash;
//     $(window).bind('hashchange', function(){
//     $(document).showPage(location.hash); // does include the # for the record
// });
// });


$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});
