/* jshint devel:true */
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100);
          };
      };
      // smartresize
      jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');
$(function() {
    'use strict';
    
	var $containerMax = 1248;
	var $window = $(window);
    var $body = $('body');
    var $html = $('html');
    var $scrollTarget = $('html, body');
    var $backToTop = $('.js-top');
    var $logoThick = $('.logo-thick');
    var $page = $('.content');
	var $container = $('.container');
	var $offsetContainer = $('.is-offset');
	var $navToggle = $('.nav__badge');
	var $pre_footer = $('.pre-footer > div');
	var $features = $('.features__block');
	var $news_excerpt = $('.news__excerpt');
	var $partners_item = $('.partners__item');	
	var $alumni_excerpt = $('.alumni__excerpt');		
	var $alumni_item = $('.alumni__item');
	var $programs_title = $('.programs h3');
	var $programs_excerpt = $('.programs__excerpt');		
	var $programs_item = $('.programs__item');
	var $section_nav = $('.sectionsNav');
	var $section_overview = $('#overview');
	var $injectedSVGs = $('img.inject-me');
	var $instructors_item = $('.instructors__item');
	var $speakers_item = $('.speakers__item');
	
	// Nav togggle
	if($navToggle.length > 0) {
		$navToggle.click(function(){
			$('#primary-nav').toggleClass('nav--open');
			$('.content').toggleClass('content--has-nav');			
			adjustHeight();
			setSectionNav();
			offsetContainer();
			return false;	
		});
	}
	
	// Anchor spots
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  //console.log(target);
	      if (target.length) {
	        $('html,body').animate({ scrollTop: target.offset().top }, 1000);
			return false;
	      }
	    }
	  });
	
	if ($section_nav.length > 0) {	
		$($section_nav).find('.sectionsNav__link').click(function(){
			var section_id = $(this).attr('href');
			$($section_nav).find('.sectionsNav__link').removeClass('current');
			$(this).addClass('current');
		});
	}
	function adjustHeight(){
		// match height of feature blocks
		if ($features.length > 0) {
			$features.matchHeight(true);
		}
		// match height of partners blocks
		if ($partners_item.length > 0) {
			$partners_item.matchHeight(true);
		}
		// match height of footer blocks
		if ($pre_footer.length > 0) {
			$pre_footer.matchHeight(true);
		}
		// match height of news excerpt
		if ($news_excerpt.length > 0) {
			$news_excerpt.matchHeight(true);
		}
		// match height of alumni excerpt
		if ($alumni_excerpt.length > 0) {
			$alumni_excerpt.matchHeight(true);
		}
		// match height of alumni item
		if ($alumni_item.length > 0) {
			$alumni_item.matchHeight(true);
		}
		// match height of programs title
		if ($programs_title.length > 0) {
			$programs_title.matchHeight(true);
		}
		// match height of programs excerpt
		if ($programs_excerpt.length > 0) {
			$programs_excerpt.matchHeight(true);
		}
		// match height of programs item
		if ($programs_item.length > 0) {
			$programs_item.matchHeight(true);
		}
		// match height of instructors item
		if ($instructors_item.length > 0) {
			$instructors_item.matchHeight(true);
		}
		// match height of instructors item
		if ($speakers_item.length > 0) {
			$speakers_item.matchHeight(true);
		}
				
	}
	
	function setSectionNav(){
		if ($section_nav.length > 0) {
			var page_width = $page.width();
			var cont_width = $container.width();
			var p_right = parseInt(page_width - cont_width)/2;
			$section_nav.css('right', p_right);
		}
	}
	
	function offsetContainer(){
		if ($offsetContainer.length > 0) {
			var page_width = $page.width();
			var cont_width = $container.width();			
			var $offsetRight = parseInt(page_width - cont_width)/2;
			if($page.hasClass('content--has-nav')){
				$offsetContainer.removeAttr('style');
			}
			else{
				$offsetContainer.css({'margin-left':$offsetRight, 'padding-left': 0 });
			}
		}
	}
	
	
	// init resize functions
	function resizeUpdates(){
		setSectionNav();
		offsetContainer();
	}
	
	
	// init
	adjustHeight();
	resizeUpdates();
	
	
	$window.smartresize(resizeUpdates);
	
	// png fallback on svg imgs
    svgeezy.init('injectme', 'png');
	
    // Do SVG injection
    new SVGInjector($injectedSVGs, {
        pngFallback: '.'
    });
	
	if (($section_overview.length > 0) && ($section_nav.length > 0) ) {
		var firstScrollTop = $section_overview.offset().top;
		var lastSection = $section_nav.find('.sectionsNav__item:last-child').children('a').attr('href');
		var lastScrollTop = $(lastSection).offset().top + ($(lastSection).height()/2); 
		$(window).scroll(function(event){
			var st = jQuery(this).scrollTop();
			if (st > firstScrollTop && st < lastScrollTop){
				$section_nav.addClass('fixed');
			} else {
				$section_nav.removeClass('fixed');
			} 
			
		});       
	}
	
});
