/*
Author: webthemez.com
Author URL: http://webthemez.com
*/
jQuery(function($) {
    'use strict';

    $(window).scroll(function() {
        Scroll();
    });

    $('.navbar-collapse ul li a').on('click', function() {
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 5
            }, 1000, function() {
                // Callback function after animation
                $('.navbar-collapse').collapse('hide');
            });

            return false;
        }
    });

    function Scroll() {
        var contentTop = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;

        // Update the contentTop array
        $('.navbar-collapse ul li a').each(function() {
            var target = $($(this).attr('href'));
            if (target.length) {
                contentTop.push(target.offset().top);
            }
        });

        // Check which section is currently in view
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse ul li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        });
    }

    // Handle the click event for the #tohash element
    $('#tohash').on('click', function() {
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 5
            }, 1000, function() {
                // Callback function after animation
                $('.navbar-collapse').collapse('hide');
            });

            return false;
        }
    });

    // Handle the click event for other navbar items
    $('.navbar-collapse ul li:not(.scroll) a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});



    new WOW().init();
     
    smoothScroll.init();

    
    $(window).load(function() {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });

    $(document).ready(function() {
   
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };

        $('.business-stats').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {
                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                $this.unbind('inview');
            }
        });
    });

 
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
 

