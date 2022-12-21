$(document).ready(function () {
  $(".c-mainvisual__slides").slick({
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
  });
  $(".c-intro__content1").addClass("c-intro__content--active");
  let tab1 = $(".c-intro__tab1");
  let tab2 = $(".c-intro__tab2");
  tab1.click(function () {
    if (!tab1.hasClass("c-intro__tab--active")) {
      $(this).addClass("c-intro__tab--active");
      tab2.removeClass("c-intro__tab--active");
      $(".c-intro__content1").addClass("c-intro__content--active");
      $(".c-intro__content2").removeClass("c-intro__content--active");
    }
  });
  tab2.click(function () {
    if (!tab2.hasClass("c-intro__tab--active")) {
      $(this).addClass("c-intro__tab--active");
      tab1.removeClass("c-intro__tab--active");
      $(".c-intro__content2").addClass("c-intro__content--active");
      $(".c-intro__content1").removeClass("c-intro__content--active");
    }
  });
});
