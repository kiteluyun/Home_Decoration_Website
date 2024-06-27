
(function ($) {
    "use strict";
    
    /*======================================================================================================================
    ************************************************ Pre-loader Script *****************************************************
    ========================================================================================================================*/
    if ($('.preloader').length) {
        $(window).on('load', function() {
            $('.preloader').delay(500).fadeOut(500);
        });
    }


    /* ---------------------------------------------------- */
    /*  Main Navigation                                     */
    /* ---------------------------------------------------- */
    $('ul.navbar-nav li.dropdown').hover(function() {
        //console.log(this);
      $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
    });
    
    /*======================================================================================================================
    ************************************************ Sticky Nav Script *****************************************************
    ========================================================================================================================*/
    $(window).on('scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 50) {
            $('.ku-header').addClass('sticky');
        } else{
            $('.ku-header').removeClass('sticky');
        }
    });

    
    /*======================================================================================================================
    *********************************************** Scroll Top button Script  **********************************************
    ========================================================================================================================*/
    if ($('#scroll-top-area').length) {
        var scrollTopBtn = $("#scroll-top-area");
        scrollTopBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });
        $(window).on("scroll", function () {
            var top2 = $(window).scrollTop();
            if (top2 < 150) {
                $("#scroll-top-area").css('display', 'none');
            }
            else if (top2 >= 150) {
                $("#scroll-top-area").css('display', 'block');
            }
        });
    }

   

    /*======================================================================================================================
    *********************************************** Price Range  **********************************************************
    ========================================================================================================================*/
    if ($('#price-range').length) {
        $( '#price-range').each(function(){
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if( separator !== -1 ){
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[ i ] = parseFloat( item );
                });
            } else {
                value = parseFloat( value );
            }
            $( this ).slider({
                formatter: function(value) {
                    return '$' + value;
                },
                min: parseFloat( $( this ).attr('data-slider-min') ),
                max: parseFloat( $( this ).attr('data-slider-max') ), 
                range: $( this ).attr('data-slider-range'),
                value: value,
                tooltip_split: $( this ).attr('data-slider-tooltip_split'),
                tooltip: $( this ).attr('data-slider-tooltip')
            });
        });
    }

    /*======================================================================================================================
    *********************************************** Floor Range  ***********************************************************
    ========================================================================================================================*/
    if ($('#floor-range').length) {
        $( '#floor-range').each(function(){
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if( separator !== -1 ){
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[ i ] = parseFloat( item );
                });
            } else {
                value = parseFloat( value );
            }
            $( this ).slider({
                formatter: function(value) {
                    return value + ' sqr' ;
                },
                min: parseFloat( $( this ).attr('data-slider-min') ),
                max: parseFloat( $( this ).attr('data-slider-max') ), 
                range: $( this ).attr('data-slider-range'),
                value: value,
                tooltip_split: $( this ).attr('data-slider-tooltip_split'),
                tooltip: $( this ).attr('data-slider-tooltip')
            });
        });
    }

    /*======================================================================================================================
    ************************************************* Counter Script *******************************************************
    ========================================================================================================================*/
    if ($('.zweb-counter .number-count').length) {
        var CountTo = function () {
        var _initInstances = function () {
            var itemCount = $('.zweb-counter .number-count');
            $(itemCount).waypoint({
                handler: function (direction) {
                    $(this.element).countTo({
                        from: 0,
                        speed: 2000,
                        refreshInterval: 50,
                        formatter: function (value, options) {
                            return numeral(value).format('0,0');
                        }
                    });
                },
                offset: '100%',
                triggerOnce: true,
            });
        };

        return {
            init: function () {
                _initInstances();
            }
        };
        }();

        CountTo.init();
    }


    /*======================================================================================================================
    ********************************************* Testimonial Slider *******************************************************
    ========================================================================================================================*/
    if ($('.testimonial-list').length) {
        $(".testimonial-list").owlCarousel({
            items: 2
            , autoPlay: true
            , navigation: false
            , itemsDesktop: [1199, 2]
            , itemsDesktopSmall: [980, 2]
            , itemsTablet: [768, 2]
            , itemsTabletSmall: false
            , itemsMobile: [479, 1 ]
            , pagination: true
            , autoHeight: true
        , });
    }

    /*======================================================================================================================
    ********************************************* Property Places Slider ***************************************************
    ========================================================================================================================*/
    if ($('.property-slide').length) {
        $(".property-slide").owlCarousel({
            items: 1
            , autoPlay: false
            , navigation: false
            , itemsDesktop: [1199, 1]
            , itemsDesktopSmall: [980, 1]
            , itemsTablet: [768, 1]
            , itemsTabletSmall: false
            , itemsMobile: [479, 1 ]
            , pagination: true
            , autoHeight: true
        , });
    }

    /*======================================================================================================================
    ********************************************* All Property list slider *************************************************
    ========================================================================================================================*/
    if ($('.property-list-slide').length) {
        $(".property-list-slide").owlCarousel({
            items: 3
            , autoPlay: true
            , navigation: false
            , itemsDesktop: [1199, 1]
            , itemsDesktopSmall: [980, 1]
            , itemsTablet: [768, 2]
            , itemsTabletSmall: false
            , itemsMobile: [479, 1 ]
            , pagination: true
            , autoHeight: true
        , });
    }

    /*======================================================================================================================
    ********************************************* Google Map ***************************************************************
    ========================================================================================================================*/
    if ($('.google_map').length) {
        $(".google_map").gMap({
            address: 'Bogra, Bangladesh',   
            markers: [
                    {'address' : 'Bogra, Bangladesh'}          // Street
                ],
            zoom: 14,                                      // 0 - 21    
            scrollwheel: false,                            // Boolean: true / false
            maptype : 'roadmap' 
        });
    }
   
    
    /*======================================================================================================================
    ********************************************* Mailchamp ***************************************************************
    ========================================================================================================================*/
    if ($('#mc-form').length) {
        $('#mc-form').ajaxChimp({
            url: 'http://zwebtheme.us14.list-manage.com/subscribe/post?u=db7691ab21bec0b5bdaf4080c&amp;id=149bd01728', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                   
                }
            }
        });
    }

    /*======================================================================================================================
    ********************************************* WOW **********************************************************************
    ========================================================================================================================*/
    new WOW().init();

    
})(jQuery);

