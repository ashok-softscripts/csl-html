/* jshint devel:true */

$(function() {
    'use strict';
    
	var $window = $(window);
    var $body = $('body');
    var $html = $('html');
    var $scrollTarget = $('html, body');
    var $backToTop = $('.js-top');
    var $logoThick = $('.logo-thick');
    var $page = $('.page');
	var $features = $('.features__block');
	var $navToggle = $('.nav__badge');
		
	if($navToggle.length > 0) {
		$navToggle.click(function(){
			$('#primary-nav').toggleClass('nav--open');
			$('.content').toggleClass('content--has-nav');
			if ($features.length > 0) {
				$features.matchHeight(true);
			}
			return false;
		});
	}
		
	// match height of feature blocks
    if ($features.length > 0) {
        $features.matchHeight(true);
    }
		
});
