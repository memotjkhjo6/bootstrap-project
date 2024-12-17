$(document).ready(function () {
    $(".gear-check").click(function () {
        $(".color-option").toggle();
    });

    $(window).on('load', function () {
        $(".Loading-overlay .sk-chase").fadeOut(2000, function () {
            $(this).parent().fadeOut(2000,
                function () {
                    $("body").css("overflow", "auto");
                    $(this).remove()
                }
            )
        });
    });


    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });
    scrollButton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


});
