
$(document).ready(function () {
    $('.sSlider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        pagination: false,
        touchDrag: false,
        responsiveClass: true,
        navigationText: false,
        navigation: false,
        autoPlay: true,
        mouseDrag: false,
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
    /*FixHeader Start By Shagor */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0)
        {
            $(".Mfix").addClass('fixedHeader');
        } else
        {
            $(".Mfix").removeClass('fixedHeader');
        }
    });

    /*FixHeader End By Shagor */

    /*MobileMenu Start By Shagor */
    $('.scrolls a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - (100)}, 1000);
        return false;
    });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.Menu').find('.scrolls > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top(200));
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function (i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.MainMenu li.scrolls')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }

    $(".MobileMenu").on('click', function () {
        $(".Menu > ul").slideToggle('slow');
    });
    $(".SubSer").on('click', function () {
        $(".Menu ul li .Submenu").slideToggle('slow');
    });

    /*MobileMenu End By Shagor */

    /*back to top by shagor*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100)
        {
            $(".BackTo").fadeIn('slow');
        } else
        {
            $(".BackTo").fadeOut('slow');
        }

    });
    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
});


