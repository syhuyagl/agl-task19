$(document).ready(function () {
  $(".c-mainvisual__slides").slick({
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: false,
    cssEase: "linear",
    arrows: false,
    dots: false,
  });
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header__overlay").data("ycoord"));
  }
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
  $(".c-header__menu").click(function () {
    if($('.c-header__open').hasClass('c-header__icon--active')){
      $('.c-header__open').removeClass('c-header__icon--active')
      $('.c-header__close').addClass('c-header__icon--active')
      $('.c-header__overlay').addClass('c-header__overlay--active')
      disableScroll()
    }
    else {
      $('.c-header__open').addClass('c-header__icon--active')
      $('.c-header__close').removeClass('c-header__icon--active')
      $('.c-header__overlay').removeClass('c-header__overlay--active')
      enableScroll()
    }
  });
});
