/*-----------------------------------------------------------------------------------
    
Template Name: Foodix - Fast Foods & Restaurants HTML Template
URI: site.com 
Description: Foodix is a versatile and innovative website template tailored for a wide range of food-related businesses including restaurants, cafes, pubs, fast food outlets, bistros, bakeries, and more. Whether you specialize in pizzas, burgers, coffees, or offer food booking services, Foodix is designed to meet your needs with its clean and creative layout.This is highly customizable and looks awesome on tablets and mobile devices. We have included best practices of web development and you can create a great website layout based on Bootstrap or Grid 1320px.
Author: Pixelfit
Author URI: https://themeforest.net/user/pixelfit
Version: 1.0 

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Document Ready
    ## Nav Overlay
    ## Preloader
    ## Sticky
    ## Back to top
    ## Magnific-popup js
    ## Nice select
    ## Slick Slider
    ## Quantity Number js
    ## Parallax js
    ## Datepicker js
    ## WOW Js
    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        
        // Variables
        var var_window = $(window),
        navContainer = $('.header-navigation'),
        navbarToggler = $('.navbar-toggler'),
        navMenu = $('.foodix-nav-menu'),
        navMenuLi = $('.foodix-nav-menu ul li ul li'),
        closeIcon = $('.navbar-close');

        // navbar toggler: a real <button> whose aria-expanded mirrors the
        // drawer state. Below 1200px the drawer is off-canvas, so while it is
        // closed it is made inert (no tab stops, hidden from assistive tech).

        var overlay = $('.offcanvas__overlay'),
            drawerQuery = window.matchMedia('(max-width: 1199px)');

        function isOpen() {
            return navMenu.hasClass('menu-on');
        }

        function syncInert() {
            navMenu.prop('inert', drawerQuery.matches && !isOpen());
        }

        function setMenu(open, focusTarget) {
            navMenu.toggleClass('menu-on', open);
            navbarToggler.toggleClass('active', open).attr('aria-expanded', open ? 'true' : 'false');
            overlay.toggleClass('overlay-open', open);
            syncInert();
            if (open && focusTarget !== false) {
                navMenu.find('a[href]').first().trigger('focus');
            } else if (!open && focusTarget === 'toggler') {
                navbarToggler.trigger('focus');
            }
        }

        navbarToggler.on('click', function() {
            setMenu(!isOpen(), isOpen() ? 'toggler' : undefined);
        });

        // close icon

        closeIcon.on('click', function() {
            setMenu(false, 'toggler');
        });

        // Escape closes the drawer and returns focus to the toggler
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape' && isOpen() && drawerQuery.matches) {
                setMenu(false, 'toggler');
            }
        });

        // Keep Tab inside the open drawer (links, then the toggler, then wrap)
        $(document).on('keydown', function(e) {
            if (e.key !== 'Tab' || !isOpen() || !drawerQuery.matches) {
                return;
            }
            var stops = navMenu.find('a[href]').add(navbarToggler).filter(':visible'),
                first = stops.first()[0],
                last = stops.last()[0];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });

        // a click anywhere outside the open drawer closes it
        $(document).on('click', function(e) {
            if (isOpen() && drawerQuery.matches && !$(e.target).closest('.foodix-nav-menu, .navbar-toggler').length) {
                setMenu(false, false);
            }
        });

        // resizing past the breakpoint resets the drawer state
        var onQueryChange = function() {
            if (!drawerQuery.matches && isOpen()) {
                setMenu(false, false);
            }
            syncInert();
        };
        if (drawerQuery.addEventListener) {
            drawerQuery.addEventListener('change', onQueryChange);
        } else {
            drawerQuery.addListener(onQueryChange);
        }
        syncInert();

        // adds toggle button to li items that have children

        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });

        // expands the dropdown menu on each click

        navMenu.find(".dd-trigger").on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(!0, !0).slideToggle(350);
            $(this).toggleClass('sub-menu-open')
        });

        // check browser width in real-time

    };

    // Document Ready

    $(document).ready(function() {
        mainMenu();
    });


    // Offcanvas Overlay

    $(".cart-button").on("click", function() {
        $(".sidemenu-wrapper-cart").addClass("info-open");
    });
    $(".cart-button").on('click', function (e) {
        $(".offcanvas__overlay").toggleClass("overlay-open");
    });
    $(".offcanvas__overlay").on('click', function (e) {
        $(".sidemenu-wrapper-cart").removeClass("info-open");
    }); 
    $(".sidemenu-cart-close").on("click", function() {
        $(".sidemenu-wrapper-cart").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });

    //===== Preloader
    
    $(window).on('load', function(event) {
        $('.fd-preloader').delay(400).fadeOut('400');
    })
    
    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

    //===== Back to top

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Magnific-popup js
    
    if ($('.video-popup').length){
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    if ($('.img-popup').length){
        $(".img-popup").magnificPopup({
            type: "image",
             gallery: { 
              enabled: true 
            }
        });
    }

    //===== Nice select js
    
    if ($('select').length){
        $('select').niceSelect();
    }
    
    //===== Slick slider js

    if ($('.menu-slider-one').length) {
        $('.menu-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if ($('.testimonial-slider-one').length) {
        $('.testimonial-slider-one').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-two').length) {
        $('.testimonial-slider-two').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-three').length) {
        $('.testimonial-slider-three').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.special-off-slider').length) {
        $('.special-off-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i></span></div>',
            nextArrow: '<div class="next"><span><i class="far fa-arrow-right"></i></span></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if ($('.gallery-slider-one').length) {
        $('.gallery-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1   
                    }
                }
            ]
        });
    }
    if ($('.gallery-slider-two').length) {
        $('.gallery-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1   
                    }
                }
            ]
        });
    }
    if ($('.instagram-slider-one').length) {
        $('.instagram-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                }
            ]
        });
    }
    if ($('.instagram-slider-two').length) {
        $('.instagram-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                }
            ]
        });
    }
    //======= Quantity Number js
    
    $('.quantity-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 1) $(this).next().val(numProduct - 1);
    });
    $('.quantity-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    //====== Parallax js

    $('.scene').each(function () {
        new Parallax($(this)[0]);
    });


    //===== Datepicker
    $( function() {
        $( "#datepicker" ).datepicker();
    } );


    //===== Simply Countdown

    if ($('.simply-countdown').length){
        simplyCountdown('.simply-countdown', {
            year: 2025,
            month: 12,
            day: 31,
            words: { //words displayed into the countdown
                days: { singular: 'day', plural: 'Days' },
                hours: { singular: 'hour', plural: 'Hours' },
                minutes: { singular: 'minute', plural: 'Min' },
                seconds: { singular: 'second', plural: 'Sec' }
            },
        });
    }

    //===== Wow js
    
    new WOW().init();
    

})(window.jQuery);

/* DoorDash ordering: click tracking and sticky mobile order bar */
(function () {
    var STORE = "https://www.doordash.com/store/bayou-fork-houston-51974027/119334546/";

    function track(link) {
        if (typeof window.gtag !== "function") return;
        var href = link.getAttribute("href") || "";
        window.gtag("event", "doordash_click", {
            order_type: href.indexOf("pickup=true") > -1 ? "pickup" : "delivery",
            link_text: (link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40),
            page_path: window.location.pathname
        });
    }

    document.addEventListener("click", function (e) {
        var link = e.target.closest ? e.target.closest('a[href*="doordash.com"]') : null;
        if (link) track(link);
    });

    if (!document.querySelector(".bf-sticky-order")) {
        var bar = document.createElement("div");
        bar.className = "bf-sticky-order";
        bar.innerHTML =
            '<a href="' + STORE + '" target="_blank" rel="noopener">Order Delivery</a>' +
            '<a href="' + STORE + '?pickup=true" target="_blank" rel="noopener">Order Pickup</a>';
        document.body.appendChild(bar);
    }
})();
