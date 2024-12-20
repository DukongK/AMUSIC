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

    $(".hambergur").on("click", function () {
        $(".hamlist").fadeToggle();
        $(".ham_list_ul li").toggleClass("on");
    });
});

// 페이지별 공통 적용------------------------------

$(function () {
    //   visual
    $("#visual h2").addClass("on");
    $(".visual_bg img").addClass("on");
    $("#visual p").addClass("on");

    // con3 mouseenter
    $(".con3 ul li").on("mouseenter", function () {
        let i = $(this).index();
        $(".opa").eq(i).addClass("on");
        $("  .con3 ul li p ").eq(i).addClass("on");
    });
    $(".con3 ul li").on("mouseleave", function () {
        let i = $(this).index();
        $(".opa").removeClass("on");
        $(".con3 ul li p ").removeClass("on");
    });
});

$(function () {
    $(window).on("scroll", function () {
        let con1 = $(".con1").offset().top + -400,
            con2 = $(".con2").offset().top + -50,
            con3 = $(".con3").offset().top + -450,
            con4 = $(".con4").offset().top + -380,
            con5 = $(".con5").offset().top + -400,
            footer = $("footer").offset().top + -450;
        console.log(footer);

        let scroll = $(this).scrollTop();

        if (scroll >= con1 && scroll < con2) {
            $(".con1 ul li:first-child h2").addClass("on");
            $(".con1 ul li:last-child h2").addClass("on");
            $(".con1 ul li:first-child").addClass("on");
            $(".con1 ul li:last-child").addClass("on");
            $(".con1_txt_top p").addClass("on");
            $(".con1_txt_bottom p").addClass("on");
            $(".con1_txt_center h2").addClass("on");
        } else if (scroll >= con2 && scroll < con3) {
            $(".con2_txt h2").addClass("on");
            $(".con2_txt img").addClass("on");
        } else if (scroll >= con3 && scroll < con4) {
            $(".con3 ul").addClass("on");
        } else if (scroll >= con4 && scroll < con5) {
            $(".con4_box h2:first-child ").addClass("on");
            $(".con4_box h2:last-child ").addClass("on");
            $(".con4_box img").addClass("on");
        } else if (scroll >= con5 && scroll < footer) {
            $(".con5_txt h2").addClass("on");
        } else {
            $(" footer > img").addClass("on");
            $(" .footer_txt li:first-child h2 ").addClass("on");
            $(" .footer_txt li:last-child h2 ").addClass("on");
            $(".snsicon ").addClass("on");
        }
    });
});

// con1 600
// con3 2400
// con4 3140
// con5 4150
