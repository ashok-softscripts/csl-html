!function(t,e){var n=function(t,e,n){var i;return function(){function a(){n||t.apply(h,r),i=null}var h=this,r=arguments;i?clearTimeout(i):n&&t.apply(h,r),i=setTimeout(a,e||100)}};jQuery.fn[e]=function(t){return t?this.bind("resize",n(t)):this.trigger(e)}}(jQuery,"smartresize"),$(function(){"use strict";function t(){c.length>0&&c.matchHeight(!0),m.length>0&&m.matchHeight(!0),o.length>0&&o.matchHeight(!0),g.length>0&&g.matchHeight(!0),f.length>0&&f.matchHeight(!0),p.length>0&&p.matchHeight(!0),u.length>0&&u.matchHeight(!0),d.length>0&&d.matchHeight(!0),v.length>0&&v.matchHeight(!0),H.length>0&&H.matchHeight(!0),k.length>0&&k.matchHeight(!0)}function e(){if(_.length>0){var t=h.width(),e=r.width(),n=parseInt(t-e)/2;_.css("right",n)}}function n(){if(s.length>0){var t=h.width(),e=r.width(),n=parseInt(t-e)/2;h.hasClass("content--has-nav")?s.removeAttr("style"):s.css({"margin-left":n,"padding-left":0})}}function i(){e(),n()}var a=$(window),h=($("body"),$("html"),$("html, body"),$(".js-top"),$(".logo-thick"),$(".content")),r=$(".container"),s=$(".is-offset"),l=$(".nav__badge"),o=$(".pre-footer > div"),c=$(".features__block"),g=$(".news__excerpt"),m=$(".partners__item"),f=$(".alumni__excerpt"),p=$(".alumni__item"),u=$(".programs h3"),d=$(".programs__excerpt"),v=$(".programs__item"),_=$(".indexnav"),w=$("#overview"),y=$("img.inject-me"),H=$(".instructors__item"),k=$(".speakers__item");if(l.length>0&&l.click(function(){return $("#primary-nav").toggleClass("nav--open"),$(".content").toggleClass("content--has-nav"),t(),e(),n(),!1}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}),_.length>0&&$(_).find(".indexnav__link").click(function(){$(this).attr("href");$(_).find(".indexnav__link").removeClass("is-active"),$(this).addClass("is-active")}),t(),i(),a.smartresize(i),svgeezy.init("injectme","png"),new SVGInjector(y,{pngFallback:"."}),w.length>0&&_.length>0){var x=w.offset().top,b=_.find(".indexnav__item:last-child").children("a").attr("href"),j=$(b).offset().top+$(b).height()/2;$(window).scroll(function(){var t=jQuery(this).scrollTop();t>x&&j>t?_.addClass("fixed"):_.removeClass("fixed")})}});