!function(e,t){var n=function(e,t,n){var i;return function(){function a(){n||e.apply(o,r),i=null}var o=this,r=arguments;i?clearTimeout(i):n&&e.apply(o,r),i=setTimeout(a,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize"),function(e){"use strict";function t(){g.length>0&&g.matchHeight(!0),u.length>0&&u.matchHeight(!0),v.length>0&&(_.matchHeight(!0),k.matchHeight(!0),v.matchHeight(!0)),p.length>0&&p.matchHeight(!0),m.length>0&&m.matchHeight(!0),f.length>0&&f.matchHeight(!0),w.length>0&&w.matchHeight(!0),x.length>0&&x.matchHeight(!0),b.length>0&&b.matchHeight(!0),y.length>0&&y.matchHeight(!0),C.length>0&&C.matchHeight(!0),H.length>0&&H.matchHeight(!0),Q.length>0&&Q.matchHeight(!0),I.length>0&&I.matchHeight(!0),q.length>0&&q.matchHeight(!0),N.length>0&&N.matchHeight(!0)}function n(){if(T.length>0){var e=l.width(),t=c.width(),n=parseInt(e-t)/2;r.width()>=1148?T.css("right",n):T.css("right",0)}}function i(){if(s.length>0){var e=l.width(),t=c.width(),n=parseInt(e-t)/2;l.hasClass("content--has-nav")?s.removeAttr("style"):s.css({"margin-left":n,"padding-left":0})}}function a(){n(),i()}function o(t){if("success"===t.result)e("#mc-form").empty(),e("#mc-form").html("<p>"+Newsletter.success_msg+"</p>");else if(S===!1&&(S=!0,e("<p class='message_error'></p>").appendTo("#mc-form")),t.msg.indexOf("0 - ")>=0){var n=t.msg.replace("0 - ","");console.log(n),e(".message_error").text(n)}else e(".message_error").html(t.msg);g.matchHeight(!0)}var r=e(window),l=(e("body"),e("html"),e("html, body"),e(".js-top"),e(".logo-thick"),e(".content")),c=e(".container"),s=e(".is-offset"),h=e(".nav__badge"),d=e(".content"),p=e(".pre-footer > div"),g=e(".features__block"),m=e(".news__item h3"),f=e(".news__excerpt"),w=e(".news__item"),u=e(".partners__item"),v=e(".all_partners__item"),_=e(".all_partners__logo"),k=e(".all_partners__item h3"),x=e(".alumni__excerpt"),b=e(".alumni__item"),y=e(".programs h3"),C=e(".programs__excerpt"),H=e(".programs__item"),j=e(".header"),T=e(".indexnav"),z=(e("#overview"),e("img.inject-me")),Q=e(".instructors__item"),I=e(".speakers__item"),N=e(".program-applicants__item"),q=e(".program-applicants__item blockquote"),A=e("select.dob-month"),D=e("select.dob-year"),F=e("select.dob-day");if(h.length>0&&(h.click(function(){return e("#primary-nav").toggleClass("nav--open"),e(".content").toggleClass("content--has-nav"),t(),n(),i(),!1}),d.click(function(){e("#primary-nav").removeClass("nav--open"),e(".content").removeClass("content--has-nav"),t(),n(),i()})),T.length>0&&e(T).find(".indexnav__link").click(function(){var t=e(this).attr("data-target");if(t.length){var n=e("#"+t);e("html,body").animate({scrollTop:n.offset().top},1e3),e(T).find(".indexnav__link").removeClass("is-active"),e(this).addClass("is-active")}return!1}),e(".drop-down").each(function(){var t=e(this),n=t.find(".label span");t.find(".filter").hasClass("active")&&n.text(t.find(".filter.active").text())}),e(".drop-down").on("click",function(t){var n,i=e(this);i.hasClass("expanded")?(i.removeClass("expanded"),n=e(".drop-down").not(this).find(".label span"),n.text(n.attr("data-label")),i.find(".label span").text(e(t.target).text())):(i.addClass("expanded"),n=i.find(".label span"),n.text(n.attr("data-label")))}),e(".drop-down").mouseleave(function(){e(this).removeClass("expanded")}),e(".filter-by-programs .filter").on("click",function(){window.location.origin||(window.location.origin=window.location.protocol+"//"+(window.location.port?":"+window.location.port:""));var t=window.location.origin+window.location.pathname,n=e(this).data("filter");location.href=t+"?filter_program="+n}),e(".filter-by-role .filter").on("click",function(){window.location.origin||(window.location.origin=window.location.protocol+"//"+(window.location.port?":"+window.location.port:""));var t=window.location.origin+window.location.pathname,n=e(this).data("filter");location.href=t+"?filter_role="+n}),e("input[type=radio]").wrap('<div class="radio-wrapper"></div>'),e("input[type=radio]:checked").parent(".radio-wrapper").addClass("checked"),e("input[type=checkbox]").wrap('<div class="checkbox-wrapper"></div>'),e("input[type=checkbox]:checked").parent(".checkbox").addClass("checked"),e(".radio-wrapper input[type=radio]").click(function(){e(".radio-wrapper").removeClass("checked"),e(this).parent().addClass("checked")}),e(".checkbox-wrapper input[type=checkbox]").click(function(){e(this).parent(".checkbox-wrapper").toggleClass("checked")}),D.length>0&&D.prepend('<option value="" selected="selected">Year</option>'),A.length>0&&A.prepend('<option value="" selected="selected">Month</option>'),F.length>0&&F.prepend('<option value="" selected="selected">Day</option>'),t(),a(),r.smartresize(a),svgeezy.init("injectme","png"),new SVGInjector(z,{pngFallback:"."}),j.length>0&&T.length>0){var G=j.outerHeight(),M="#"+T.find(".indexnav__item:last-child").children("a").attr("data-target"),O=e(M).offset().top;e(window).scroll(function(){var e=jQuery(this).scrollTop();e>G&&O>e?T.addClass("fixed"):T.removeClass("fixed")})}var S=!1;e("#mc-form").ajaxChimp({url:Newsletter.campaign_url,callback:o})}(jQuery);