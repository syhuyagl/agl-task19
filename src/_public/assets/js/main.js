$(document).ready(function () {
  var $form = $("#form");
  $(".c-mainvisual__slides").slick({
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: true,
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
    if ($(".c-header__open").hasClass("c-header__icon--active")) {
      $(".c-header__open").removeClass("c-header__icon--active");
      $(".c-header__close").addClass("c-header__icon--active");
      $(".c-header__overlay").addClass("c-header__overlay--active");
      disableScroll();
    } else {
      $(".c-header__open").addClass("c-header__icon--active");
      $(".c-header__close").removeClass("c-header__icon--active");
      $(".c-header__overlay").removeClass("c-header__overlay--active");
      enableScroll();
    }
  });
  $("#form").submit(function (e) {
    e.preventDefault();
  });

  $form.validate({
    groups: {
      phone: "phone1 phone2 phone3",
    },
    rules: {
      phone1: {
        required: true,
      },
      phone2: {
        required: true,
      },
      phone3: {
        required: true,
      },
      address: {
        required: true,
      },
      name: {
        required: true,
      },
      furigana: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      emailConfirm: {
        required: true,
        email: true,
        equalTo: '[name="email"]',
      },
      inquiryType: {
        required: true,
      },
    },
    errorPlacement: function (error, $element) {
      var name = $element.attr("name");
      if (name === "phone1" || name === "phone2" || name === "phone3") {
        error.insertAfter("#phone1");
      } else {
        error.insertAfter($element);
      }
    },
    messages: {
      name: "お名前を入力してください。",
      email: {
        required: "有効なメールアドレスを入力してください。",
        email: "正しいメール形式を入力してください",
      },
      content: "内容を入力してください。",
      furigana: "この項目は必須です。",
      address: "住所を入力してください。",
      inquiryType: "質問の種類を選択してください。",
      phone1: "電話番号を入力してください。",
      phone2: "電話番号を入力してください。",
      phone3: "電話番号を入力してください。",
      emailConfirm: {
        required: "有効なメールアドレスを入力してください。",
        email: "正しいメール形式を入力してください",
        equalTo: "上記と同じメールアドレスを入力してください。",
      },
    },
  });
  $("#postal").keyup(function () {
    AjaxZip3.zip2addr(this, "", "postal2", "postal2");
  });
  $(".c-faq__topic")
    .slice(0, 3)
    .each(function () {
      $(this)
        .find(".c-faq__topicitem")
        .find(".c-faq__answer")
        .first()
        .addClass("c-faq__answer--expand")
        .slideDown();
    });
  $(".c-faq__question").click(function () {
    var answer = $(this).parent().find(".c-faq__answer");
    if (answer.hasClass("c-faq__answer--expand")) {
      answer.removeClass("c-faq__answer--expand");
      answer.slideUp();
      $(this).get(0).style.setProperty("--deg", "0deg");
    } else {
      answer.addClass("c-faq__answer--expand");
      answer.slideDown();
      $(this).get(0).style.setProperty("--deg", "180deg");
    }
  });
  $(".c-faq__navitem").click(function () {
    var href = $(this).attr("id");
    if ($(window).width() < 1024 && $(window).width() > 767) {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 95,
        },
        "300"
      );
    } else if ($(window).width() < 768) {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 57,
        },
        "300"
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        "300"
      );
    }
  });
});
