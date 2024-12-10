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

  // hamlist

$(".hambergur").on("click",function(){
  $(".hamlist").fadeToggle();
  $(".ham_list_ul li").toggleClass("on");
})



});

// 페이지별 공통 적용------------------------------

// visual
$(function () {
  $(" .v_txt_wrap h2:first-child ").addClass("on");
  $(" .v_txt_wrap2 h2:first-child ").addClass("on");
  $(" .v_txt_wrap2 ").addClass("on");
  $(" .txt1 ").addClass("on");
});

$(function () {
  $(window).on("scroll", function () {
    let con1 = $(this).scrollTop();
    // console.log(con1);
    let con2 = $(this).scrollTop();
    // console.log(con2);
    let con3 = $(this).scrollTop();
    // console.log(con3);
    let con5 = $(this).scrollTop();
    // console.log(con5);
    let fo = $(this).scrollTop();
    console.log(fo);

    if (con1 >= 530 && con1 <= 600) {
      $(".img1").addClass("on");
    } else if (con1 >= 980 && con1 <= 1100) {
      $(".img2").addClass("on");
    } else if (con1 >= 1410 && con1 <= 1500) {
      $(".img3").addClass("on");
    } else if (con2 >= 1670 && con2 <= 1750) {
      $(".con2_bg").addClass("on");
    } else if (con2 >= 2150 && con2 <= 2250) {
      $(".con2_txt h2:first-child").addClass("on");
      $(".con2_txt h2:last-child").addClass("on");
    } else if (con3 >= 2700 && con3 <= 2800) {
      $(" .con3_ul li:nth-child(2)").addClass("on");
      $(".con3_ul li:nth-child(1)").addClass("on");
      $(".con3_ul li:nth-child(3)").addClass("on");
      $(".color1").addClass("on");
      $(".color2").addClass("on");
    } else if (con5 >= 3910 && con5 <= 4100) {
      $(".con5 ul").addClass("on");
      $(".c5_txt1").addClass("on");
      $(".c5_txt2").addClass("on");
      $(" .con5 li:first-child ").addClass("on");
    } else if (fo >= 4200 && fo <= 4500) {
      $(" footer > img").addClass("on");
      $(" .footer_txt li:first-child h2 ").addClass("on");
      $(" .footer_txt li:last-child h2 ").addClass("on");
      $(".snsicon ").addClass("on");
    }
  });
});

// con1 530 , 980 , 1410
// con2 1670 , 2150
// con3 2700
// con5 3910
