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
    // visual
    $("#visual img").addClass("on");
    $("#visual p").addClass("on");
});

$(function () {
    let con1 = $(".con1").offset().top + -500,
        con2 = $(".con2").offset().top + -400,
        con3 = $(".con3").offset().top + -50,
        con4 = $(".con4").offset().top + -400,
        footer = $("footer").offset().top + -450;
        console.log(footer);
       
      
    // console.log(con1);
    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        if (scroll >= con1 && scroll < con2) {
            $(".con1 img").addClass("on");
            $(".gra_txt ").addClass("on");
            $(".con1 h2 ").addClass("on");
            $(".cog ").addClass("on");
        } else if (scroll >= con2 && scroll < con3) {
            $(".con2 ul:first-child li h2:last-child").addClass("on");
            $(".con2 ul:first-child li h2:first-child").addClass("on");
            $(".con2 ul:first-child li:nth-child(2) p ").addClass("on");
            $(".logo1").addClass("on");
            $(".ul2").addClass("on");
        } else if (scroll >= con3 && scroll < con4) {
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
        else if (scroll >= con4 && scroll < footer){
          $(".con4 img").addClass("on");

        }
        else { $(" footer > img").addClass("on");
          $(" .footer_txt li:first-child h2 ").addClass("on");
          $(" .footer_txt li:last-child h2 ").addClass("on");
          $(".snsicon ").addClass("on");}
    });
});
