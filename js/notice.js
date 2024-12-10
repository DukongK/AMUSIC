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
    $("#visual h2:first-child").addClass("on");
    $("#visual h2:nth-child(2)").addClass("on");
    $("#visual h2:nth-child(3)").addClass("on");
});

$(function () {
    $(window).on("scroll", function () {
        let Visual = $(this).scrollTop();
        // console.log(Visual);
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
        let footer = $(this).scrollTop();
        console.log(footer);

        if (Visual >= 100 && 120 <= Visual) {
            $("#visual h2:nth-child(4)").addClass("on");
        }
        if (Visual >= 400 && 500 <= Visual) {
            $("#visual h2:nth-child(5)").addClass("on");
        }
        if (Visual >= 500 && 600 <= Visual) {
            $("#visual h2:nth-child(6)").addClass("on");
            $("#visual h2:nth-child(7)").addClass("on");
            $("#visual h2:nth-child(8)").addClass("on");
        }
        if (con1 >= 1200 && 1300 <= con1) {
            $(".con1 ul li p").addClass("on");
        }
        if (con2 >= 2700 && 2800 <= con2) {
            $(".con2 h2").addClass("on");
        }
        if (con3 >= 3200 && 3300 <= con3) {
            $(".con3 ul:first-child li:first-child h2").addClass("on");
            $(".con3 ul:first-child li:nth-child(2)").addClass("on");
            $(".con3 ul:first-child li:nth-child(3)").addClass("on");
            $(".con3 .up_txt").addClass("on");
            $(".con3 .up_txt li:nth-child(2) img").addClass("on");
            $(".ring_right div:nth-child(3)").addClass("on");
            $(".ring_right div:nth-child(2)").addClass("on");
            $(".ring_right div:nth-child(1)").addClass("on");
            $(".ring_right div:nth-child(4)").addClass("on");
        }
        if (con4 >= 3900 && 4000 <= con4) {
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
        }
        if (con5 >= 4700 && 4800 <= con5) {
            $(".con5 ul li:nth-child(2)").addClass("on");
            $(".oph2").addClass("on");
            $(".oph2_2").addClass("on");
            $(".con5 ul li:first-child").addClass("on")
            $(".con5 ul li:last-child").addClass("on")
        }
        if(footer >= 4900 && 5100 <= footer){
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
