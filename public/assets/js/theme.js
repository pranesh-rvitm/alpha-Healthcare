$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $('#nav').css("background", "#333");

        } else {
            $('#nav').css("background", "transparent");
        }
    })
})



$('document').ready(function() {
    $('#doctorSlideshow').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

$('document').ready(function() {
    $("a[data-role='smoothscroll']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top - nav_height;

        $("body, html").animate({
            scrollTop: position
        }, 1000);
        return false;
    });
});

$('document').ready(function() {
    // Back to top
    var backTop = $(".back-to-top");

    $(window).scroll(function() {
        if ($(document).scrollTop() > 400) {
            backTop.css('visibility', 'visible');
        } else if ($(document).scrollTop() < 400) {
            backTop.css('visibility', 'hidden');
        }
    });

    backTop.click(function() {
        $('html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});


$('document').ready(function() {
    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Popovers
    $('[data-toggle="popover"]').popover();

    // Page scroll animate
    new WOW().init();
});


function validateForm() {

    var UserDate = document.getElementById("userdate").value;
    var phon = document.getElementById("phone").value;
    if (phon.length != 10) {
        alert("invalid phone number");
        return false;
    }
    var ToDate = new Date();

    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
        alert("Invalid date or time !");
        return false;
    }
    return true;
}

function validateContact() {
    var phon = document.getElementById("phone").value;
    if (phon.length != 10) {
        alert("invalid phone number");
        return false;
    }
    return true;
}