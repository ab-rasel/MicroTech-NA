$(document).ready(function () {
 $('.Sslider').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    
    /*back to top by shagor*/
    $("body, html").on("click", "#backToTop", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
});

