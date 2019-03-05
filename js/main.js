new WOW().init();

$(document).ready(function() {

$('.js-btn-send').click(function() {
  var $input = $(this).siblings('input');
  if ($input.val() == "") {
    console.log('!');
    $input.addClass('error');
  }
});

$('.js-phone-input').mask('+7 (999) 999-99-99');

$('.slider-preview').slick({
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        draggable: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.slider').slick({
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: '.slider-preview',
  nextArrow: '<div class="slick-arrow slick-prev"></div>',
  prevArrow: '<div class="slick-arrow slick-next"></div>',
});

$('.reviews-slider').slick({
  slidesToShow: 3,
  focusOnSelect: true,
  variableWidth: true,
  centerMode: true
});

$('.reviews-wrapper').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  }
});

});