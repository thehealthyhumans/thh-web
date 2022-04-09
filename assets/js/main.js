/* FIXED SCROLL STARTS */

$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 60) {
    $('#header-wrap').addClass('fixed-header');
  } else {
    $('#header-wrap').removeClass('fixed-header');
  }
});

/* FIXED SCROLL ENDS */

/* JQUERY CODE */

$(document).ready(function () {

  /* OWL CAROUSEL STARTS */
  $(".owl-carousel").owlCarousel();
  /* OWL CAROUSEL ENDS */

  /* NAVBAR ACTIVE STARTS */
  $("a.nav-link").click(function () {
    $("a.nav-link").removeClass("navbar-active");
    $(this).addClass("navbar-active");
  });
  /* NAVBAR ACTIVE ENDS */
});

