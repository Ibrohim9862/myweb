$(document).ready(function () {
  $(".carousel1").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
  $(".carusel_context").slick({
    speed: 500,
    Infinity: true,
    prevArrow: '<i class="left-button fa-thin fa-arrow-left-long"></i>',
    nextArrow: '<i class="right-button fa-thin fa-arrow-right-long"></i>',
  });
});

$(".toggle-menu").click(function () {
  $(this).toggleClass("active");
  $(".menu_bar").css("visibility", "visible");
  $(".menu_bar").toggleClass("animation");
  $(".header_menu_1").toggleClass("animation visible");
  $(".toggle-menu .fa-close,.toggle-menu .fa-bars").toggleClass(
    "fa-close fa-bars"
  );
});
