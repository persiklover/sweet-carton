$(function() {

new WOW().init();

$('.home-screen__bg').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  swipe: false,
  accessibility: false
});

$('.js-phone-input').mask('+7 (999) 999-99-99');

$('.form').submit(function(e) {
  var $input = $(this).children('input');
  if ($input.val() == '') {
    $input.addClass('error');
    $input.focus();
    e.preventDefault();
  }
});

$('.js-btn-call').click(function() {
  $('.modal').addClass('active');
  $('body').addClass('scroll-disabled');
});

function closeModal() {
  $('.modal').removeClass('active');
  $('body').removeClass('scroll-disabled');
}

$('.modal-close').click(function() {
  closeModal();
});

$('.modal').click(function(e) {
  if ($(e.target).is($(this))) {
    closeModal();
  }
});

$('.production-preview').slick({
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

$('.production-preview').magnificPopup({
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

$('.slider').slick({
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: '.production-preview',
  nextArrow: '<div class="slick-arrow slick-prev"></div>',
  prevArrow: '<div class="slick-arrow slick-next"></div>',
  accessibility: false
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
