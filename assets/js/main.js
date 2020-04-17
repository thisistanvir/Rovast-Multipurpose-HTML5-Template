(function ($) {
	"use strict";
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip()

// Nice Select
    $('select').niceSelect()
// End Nice Select

/* Standard Fixed header */
    // Static Class
    $('.header-bottom').addClass('visible-header no-transition static-header');
    // After scroll
    $(window).on('scroll', function () {
      var className = '.header-bottom';
      if ($(this).scrollTop() > 0) { 
        $(className).removeClass('static-header afterclickpopup no-transition');
        var previousTop = 0;
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop ) {
          $(className).addClass('visible-header');
        } else {
            $(className).removeClass('visible-header');
        }
        this.previousTop = currentTop;
      } else {
         $(className).addClass('static-header');
      }
      // End Standard header

      // Slider position 
      if ($(this).scrollTop() > 0) { 
          $('.slider-area, .breadcrumb-area').addClass('header-slider-bottom');
      } else {
          $('.slider-area, .breadcrumb-area').removeClass('header-slider-bottom');
      }
    });
    /* #End window scroll event */
// End Standard Fixed Header

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Start Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
// End Slick Nav

// WOW active
    var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
    });
    wow.init();
//  End Wow 

// Animated Headline
    $('.selector1').animatedHeadline({
        animationType: 'clip'
    });
    $('.selector2').animatedHeadline({
        animationType: 'rotate-3'
    });
    $('.selector3').animatedHeadline({
        animationType: 'rotate-2'
    });
// Animated Headline

 // Start Counter
    $('.counter').counterUp({
        delay: 3,
        time: 2000
    });
// End Counter

//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-arrow-up"></i>', 
        activeOverlay: false, 
    });
//   Scroll Up

// Slick Slider Home
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-angle-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-angle-right"></i> </button>',
            arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
// Slider

//  Start IsoTope
    $('#portfolio-grid').imagesLoaded(function () {
        // Start Init Isotope
        var $grid = $('#portfolio-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer'
            }
        });
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
    //  End Init IsoTope
    //Portfolio Menu Active
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
// End IsoTope

// Start Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        dots: true,
        thumbs: false,
        nav: false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 2
        },
        992:{
            items: 2
        },
    },
    });
// End Testimonial Carousel //

// Slider Carousel
    $('.slider-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: false,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
    });
// End Slider Carousel //

// Start Brand Carousel
    $('.brand-carousel').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
                autoplayTimeout:5000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1 
        },
        767:{
            items: 3
        },
        992:{
            items: 4
        },
        1200:{
            items: 5
        },
    },
    });
// End Brand Carousel

// Testimonial Slick Carousel Style-2
    $('.testimonial-text-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: false,
        asNavFor: '.testimonial-img-active',
    });
    /* Slick img */ 
    $('.testimonial-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        dots: true,
        arrows: false,
        autoplay: true,
        asNavFor: '.testimonial-text-active',
    });
// End Testimonial Slick Carousel 

// Magnific Popup
    $(".video-play").magnificPopup({
        type: 'iframe',
    });
//  End  Magnific Popup

// Magnific Image Gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
    });
// Image Gallery

// Start Progress bar
    if(typeof($.fn.knob) != 'undefined') {
        $('.knob').each(function () {
        var $this = $(this),
            knobVal = $this.attr('data-rel');

        $this.knob({
            'draw' : function () { 
            $(this.i).val(this.cv + '%')
            }
        });
        
        $this.appear(function() {
            $({
            value: 0
            }).animate({
            value: knobVal
            }, {
            duration : 2000,
            easing   : 'swing',
            step     : function () {
                $this.val(Math.ceil(this.value)).trigger('change');
            }
            });
        }, {accX: 0, accY: -150});
        });
    }
// End Progress Bar

// Video Background
    $(".ty_player").YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'.video-wrapper',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1, 
        showControls: false
    });
// Video Background

// Contact Map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, 
                { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, 
                { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, 
                { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, 
                { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, 
                { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, 
                { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, 
                { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, 
                { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, 
                { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, 
                { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, 
                { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, 
                { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, 
                { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }
// Contact Map

})(jQuery);
