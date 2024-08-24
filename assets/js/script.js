// window scroll
$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header');
  }
});

// doc ready
$(document).ready(function () {
  //typing anim
  new Typed('#type', {
    strings: ['Student'],
    typeSpeed: 50,
  });
});
