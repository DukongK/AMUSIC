// 페이지별 공통 적용------------------------------

// header hambergur click

$(function () {
  $(".hambergur").on("click", function () {
    $(".hambergur li:first-child").toggleClass("on");
    $(".hambergur li:last-child").toggleClass("on");
  });

  // header hambergur mouseenter

  $(".hambergur").on("mouseenter", function () {
    $(".hambergur li:first-child").addClass("co");
    $(".hambergur li:last-child").addClass("co");
  });
  $(".hambergur").on("mouseleave", function () {
    $(".hambergur li:first-child").removeClass("co");
    $(".hambergur li:last-child").removeClass("co");
  });

  //top button

  $(".scrollUp").on("click", function () {
    let button = $("header").offset().top;
    // console.log(button);
    $("html,body").stop().animate({ scrollTop: button });
  });
});

// 페이지별 공통 적용------------------------------

$(function () {
  // visual
  $("#visual img").addClass("on");
  $("#visual p").addClass("on");
});

$(function () {
  $(window).on("scroll", function () {
    let con1 = $(this).scrollTop();
    // console.log(con1);
    let con2 = $(this).scrollTop();
    // console.log(con2);
    let con3 = $(this).scrollTop();
    // console.log(con3);
    let con4 = $(this).scrollTop();
    // console.log(con4);
    let footer = $(this).scrollTop();
    console.log(footer);
    if (con1 >= 350 && 400 <= con1) {
      $(".con1 img").addClass("on");
      $(".gra_txt ").addClass("on");
      $(".con1 h2 ").addClass("on");
      $(".cog ").addClass("on");
    }
    if (con2 >= 1360 && 1450 <= con2) {
      $(".con2 ul:first-child li h2:last-child").addClass("on");
      $(".con2 ul:first-child li h2:first-child").addClass("on");
      $(".con2 ul:first-child li:nth-child(2) p ").addClass("on");
      $(".logo1").addClass("on");
      $(".ul2").addClass("on");
    }
    if (con3 >= 2300 && 2500 <= con3) {
      $(".c3_center").addClass("on");
      $(".ring_left div:nth-child(3)").addClass("on");
      $(".ring_left div:nth-child(2)").addClass("on");
      $(".ring_left div:nth-child(1)").addClass("on");
      $(".ring_left div:nth-child(4)").addClass("on");
      $(".ring_right div:nth-child(3)").addClass("on");
      $(".ring_right div:nth-child(2)").addClass("on");
      $(".ring_right div:nth-child(1)").addClass("on");
      $(".ring_right div:nth-child(4)").addClass("on");
    }
    if (con4 >= 3200 && 3300 <= con4) {
      $(".con4 img").addClass("on");
    }
    if (footer >= 4100 && 4200 <= footer) {
      $(" footer > img").addClass("on");
      $(" .footer_txt li:first-child h2 ").addClass("on");
      $(" .footer_txt li:last-child h2 ").addClass("on");
      $(".snsicon ").addClass("on");
    }
  });
});
