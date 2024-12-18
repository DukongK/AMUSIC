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

// visual
$(function () {
    $(" #visual h2:nth-child(2) ").addClass("on");
    $(" #visual h2:nth-child(4) ").addClass("on");
    $(" #visual h2:first-child ").addClass("on");
    $(" #visual h2:nth-child(3) ").addClass("on");
});

$(function () {
    $(window).on("scroll", function () {
        let con1 = $(".con1").offset().top + -400,
            con2 = $(".con2").offset().top + -400,
            con3 = $(".con3").offset().top + -450,
            con4 = $(".con4").offset().top + -380,
            con5 = $(".con5").offset().top + -400,
            footer = $("footer").offset().top + -450;
        console.log(footer);

        let scroll = $(this).scrollTop();

        if (scroll >= con1 && scroll < con2) {
            $(".con1_line1").addClass("on");
            $(".con1_line2").addClass("on");
            $(".con1_line3").addClass("on");
            $(".con1_line4").addClass("on");
        } else if (scroll >= con2 && scroll < con3) {
            $(".con2 ul li:nth-child(3) img").addClass("on");
            $(".con2 ul li:nth-child(2) img").addClass("on");
            $(".con2 ul li:nth-child(1) img").addClass("on");
        } else if (scroll >= con3 && scroll < con4) {
            $(".c3_txt li:first-child").addClass("on");
            $(".c3_txt li:last-child").addClass("on");
            $(".s_txt").addClass("on");
            $(".it3_h2").addClass("on");
            $(".con3 img").addClass("on");
        } else if (scroll >= con4 && scroll < con5) {
            $(".con4 h2").addClass("on");
            $(".con4 img").addClass("on");
        } else if (scroll >= con5 && scroll < footer) {
            $(".petten div:nth-child(1)").addClass("on");
            $(".petten div:nth-child(2)").addClass("on");
            $(".petten div:nth-child(3)").addClass("on");
            $(".petten div:nth-child(4)").addClass("on");
            $(".petten div:nth-child(5)").addClass("on");
            $(".petten div:nth-child(6)").addClass("on");
            $(".con5 h2").addClass("on");
            $(".petten").addClass("on");
        } else {
            $(" footer > img").addClass("on");
            $(" .footer_txt li:first-child h2 ").addClass("on");
            $(" .footer_txt li:last-child h2 ").addClass("on");
            $(".snsicon ").addClass("on");
        }
    });
});

// con1 500
// con2 1400
// con3 2300
// con4 3230
// con5 4140
// footer 4700
