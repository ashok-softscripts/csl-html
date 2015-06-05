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
    
	var $window = $(window);
    var $body = $('body');
    var $html = $('html');
    var $scrollTarget = $('html, body');
    var $backToTop = $('.js-top');
    var $logoThick = $('.logo-thick');
    var $page = $('.page');
	var $navToggle = $('.nav__badge');
	var $pre_footer = $('.pre-footer > div');
	var $features = $('.features__block');
	var $news_excerpt = $('.news__excerpt');
	var $partners_item = $('.partners__item');	
	var $alumni_excerpt = $('.alumni__excerpt');		
	var $alumni_item = $('.alumni__item');		
	var $injectedSVGs = $('img.inject-me');
	
	if($navToggle.length > 0) {
		$navToggle.click(function(){
			$('#primary-nav').toggleClass('nav--open');
			$('.content').toggleClass('content--has-nav');			
			resizeUpdate();
			return false;	
		});
	}
	
	resizeUpdate();
	
	function resizeUpdate(){
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
	}
	// png fallback on svg imgs
    svgeezy.init('injectme', 'png');
	
    // Do SVG injection
    new SVGInjector($injectedSVGs, {
        pngFallback: '.'
    });
	
});
