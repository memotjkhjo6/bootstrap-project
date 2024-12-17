$(document).ready(function () {
    $(".gear-check").click(function () {
        $(".color-option").toggle();
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
