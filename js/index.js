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

// visual 첫 화면
$(function () {
  $(".top_txt").addClass("on");
  $(".zin2").addClass("on");
  $(".center_txt img").addClass("on");
  $(".center_line").addClass("on");
  $(".banner").addClass("on");
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
    let con5 = $(this).scrollTop();
    // console.log(con5);
    let con6 = $(this).scrollTop();
    // console.log(con6);
    let fo = $(this).scrollTop();
    console.log(fo);

    // con1
    if (con1 >= 800 && con1 <= 820) {
      $(".img_txt").addClass("on");
    } else if (con2 >= 1600 && con2 <= 1700) {
      $(".ring_left div:nth-child(3)").addClass("on");
      $(".ring_left div:nth-child(2)").addClass("on");
      $(".ring_left div:nth-child(1)").addClass("on");
      $(".ring_left div:nth-child(4)").addClass("on");
      $(".ring_right div:nth-child(3)").addClass("on");
      $(".ring_right div:nth-child(2)").addClass("on");
      $(".ring_right div:nth-child(1)").addClass("on");
      $(".ring_right div:nth-child(4)").addClass("on");
      $(".c2_center img").addClass("on");
      $(".cof").addClass("on");
      $(".cog").addClass("on");
    } else if (con6 >= 5600 && con6 <= 5700) {
      $(".txt1 h2").addClass("on");
      $(".txt2 h2").addClass("on");
      $(".txt1").addClass("on");
      $(".txt2").addClass("on");
      $(".txt3 h2").addClass("on");
    } else if (con3 >= 2320 && con3 <= 2400) {
      $(".line1").addClass("on");
      $(".line2").addClass("on");
    } else if (con4 >= 2610 && con4 <= 2700) {
      $(".c4_txt h2:first-child").addClass("on");
      $(".c4_txt h2:last-child").addClass("on");
    } else if (con5 >= 5140 && con5 <= 5200) {
      $(".con5 ul li .c5_p1").addClass("on");
      $(".con5 ul li:first-child ").addClass("on");
      $(".con5 ul li img").addClass("on");
      $(".con5 .c5_txt .p2").addClass("on");
      $(" .con5 .c5_txt h2").addClass("on");
      $(" .con5 .c5_txt .p3 ").addClass("on");
      $(".con5 li:nth-child(2)").addClass("on");
    } else if (fo >= 6000 && fo <= 6300) {
      $(" footer > img").addClass("on");
      $(" .footer_txt li:first-child h2 ").addClass("on");
      $(" .footer_txt li:last-child h2 ").addClass("on");
      $(".snsicon ").addClass("on");
    }
  });
});

// con2 1600
// con3 2320
// con4 2610
// con5 5140
// con6 4200
// footer 6200
