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
    $("#visual h2:first-child").addClass("on");
    $("#visual h2:nth-child(2)").addClass("on");
    $("#visual h2:nth-child(3)").addClass("on");
    $("#visual h2:nth-child(4)").addClass("on");
    $("#visual h2:nth-child(5)").addClass("on");
    $("#visual h2:nth-child(6)").addClass("on");
    $("#visual h2:nth-child(7)").addClass("on");
    $("#visual h2:nth-child(8)").addClass("on");
});

$(function () {
    $(window).on("scroll", function () {
        let con1 = $(".con1").offset().top + -400,
            con2 = $(".con2").offset().top + -500,
            con3 = $(".con3").offset().top + -500,
            con4 = $(".con4").offset().top + -380,
            con5 = $(".con5").offset().top + -400,
            footer = $("footer").offset().top + -450;
        console.log(footer);

        let scroll = $(this).scrollTop();

        if (scroll >= con1 && scroll < con2) {
            $(".con1 ul li p").addClass("on");
        } else if (scroll >= con2 && scroll < con3) {
            $(".con2 h2").addClass("on");
        } else if (scroll >= con3 && scroll < con4) {
            $(".con3 ul:first-child li:first-child h2").addClass("on");
            $(".con3 ul:first-child li:nth-child(2)").addClass("on");
            $(".con3 ul:first-child li:nth-child(3)").addClass("on");
            $(".con3 .up_txt").addClass("on");
            $(".con3 .up_txt li:nth-child(2) img").addClass("on");
            $(".ring_right div:nth-child(3)").addClass("on");
            $(".ring_right div:nth-child(2)").addClass("on");
            $(".ring_right div:nth-child(1)").addClass("on");
            $(".ring_right div:nth-child(4)").addClass("on");
        } else if (scroll >= con4 && scroll < con5) {
            $(".ring_left div:nth-child(3)").addClass("on");
            $(".ring_left div:nth-child(2)").addClass("on");
            $(".ring_left div:nth-child(1)").addClass("on");
            $(".ring_left div:nth-child(4)").addClass("on");
            $(".con4 ul li:first-child h2").addClass("on");
            $(".con4 ul li:nth-child(2) img").addClass("on");
            $(".con4 ul li:nth-child(3) h2").addClass("on");

            // con4 count
            let count = 0;
            stop = setInterval(function () {
                count++;
                if (count >= 101) {
                    clearInterval(stop);
                } else {
                    $(".con4 ul li:nth-child(3) span").text(count);
                }
            }, 10); // 숫자 속도 조절
        } else if (scroll >= con5 && scroll < footer) {
            $(".con5 ul li:nth-child(2)").addClass("on");
            $(".oph2").addClass("on");
            $(".oph2_2").addClass("on");
            $(".con5 ul li:first-child").addClass("on");
            $(".con5 ul li:last-child").addClass("on");
        } else {
            $(" footer > img").addClass("on");
            $(" .footer_txt li:first-child h2 ").addClass("on");
            $(" .footer_txt li:last-child h2 ").addClass("on");
            $(".snsicon ").addClass("on");
        }
    });
});

// visual 100
// visual 400
//  visual 500
// con2 2700
// con3 3200
// con4 3900
// con5 4500
// footer 5200
