$(function() {

new WOW().init();

$('.home-screen__bg-wrap').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  swipe: false,
  accessibility: false
});

$('.js-phone-input').mask('+7 (999) 999-99-99');

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
  if ( $(e.target).is($(this)) ) {
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
    navigateByImgClick: true
  }
});

});
