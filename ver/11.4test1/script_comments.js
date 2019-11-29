/*! autosize 4.0.2 | MIT *
http://www.jacklmoore.com/autosize !*/

!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.autosize=n.exports}}(this,function(e,t){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return-1<n.indexOf(e)},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);-1<t&&(n.splice(t,1),o.splice(t,1))}}),c=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){c=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!p.has(r)){var e,n=null,o=null,i=null,d=function(){r.clientWidth!==o&&a()},l=function(t){window.removeEventListener("resize",d,!1),r.removeEventListener("input",a,!1),r.removeEventListener("keyup",a,!1),r.removeEventListener("autosize:destroy",l,!1),r.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach(function(e){r.style[e]=t[e]}),p.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",l,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",a,!1),window.addEventListener("resize",d,!1),r.addEventListener("input",a,!1),r.addEventListener("autosize:update",a,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",p.set(r,{destroy:l,update:a}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),n="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(n)&&(n=0),a()}function s(e){var t=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=t,r.style.overflowY=e}function u(){if(0!==r.scrollHeight){var e=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(r),t=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+n+"px",o=r.clientWidth,e.forEach(function(e){e.node.scrollTop=e.scrollTop}),t&&(document.documentElement.scrollTop=t)}}function a(){u();var e=Math.round(parseFloat(r.style.height)),t=window.getComputedStyle(r,null),n="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):r.offsetHeight;if(n<e?"hidden"===t.overflowY&&(s("scroll"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):"hidden"!==t.overflowY&&(s("hidden"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),i!==n){i=n;var o=c("autosize:resized");try{r.dispatchEvent(o)}catch(e){}}}}function i(e){var t=p.get(e);t&&t.destroy()}function d(e){var t=p.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return r(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default});

$(function() {
	
	var $document = $(document),
		$window = window,
		$queryWindow = $(window),
		
		$windowHeight = $window.innerHeight,
		
		$html = $("html"),
		$bodyID = $("body").attr("id").replace("tt-body-", ""),
		$globalNavigation = $("#global-navigation"),
		$footer = $("#footer");

	$("head").append('<link rel="stylesheet" href="' + imagesURL + "style_comment.css" + fcver + '">');
	
	
	$queryWindow.on("load resize", function(event) {
		
		$windowHeight = $window.innerHeight;
		
	});
	
	
	$window.setTimeout(function(event) {
		
		$windowHeight = $window.innerHeight;
		
	}, 1000);
	
	
	
	var loadAvatarEvent;
	
	function loadAvatar() {
		
		if($(".comment-avatar[data-style*='back']").length > 0) {
			
			$(".comment-avatar[data-style*='back']").each(function(event) {

				var $this = $(this);

				$this.attr("style", $this.attr("data-style")).removeAttr("data-style");

			});
			
			clearInterval(loadAvatarEvent);
			
		}
		
	};
	


	function inactiveComment() {

		$(".comment-toggle[aria-expanded='true']").attr("aria-expanded", "false");
		$(".comment-control[aria-hidden='false']").attr("aria-hidden", "true");
		$(".transparent-comment-active").attr("aria-hidden", "true").hide();

		$window.setTimeout(function(event) {

			$(".comment-wrap, .reply-wrap").removeClass("active");

		}, 300);

		$globalNavigation.attr("aria-hidden", "false");
		$footer.attr("aria-hidden", "false");

		$html.removeClass("active-comment");

	};
	
	
	
	if($window.location.hash.indexOf("comment") != -1) {

		$html.addClass("show-comments").removeClass("show-export show-info");
		
		var $hash = $($window.location.hash),
			$hashPosition = $hash.offset().top;


		
		function focusCommentPosition() {
			
			if($(".comment-guest-field input").length > 0) {
				
				$(".comment-guest-field input").blur();
				
			};
			
			if($("#comment-textarea").length > 0) {
				
				$("#comment-textarea").blur();
				
			};
			
			$hashPosition = $($hash).offset().top;
			$queryWindow.scrollTop($hashPosition - ($windowHeight/3));
			
		};
		
		focusCommentPosition();
		
		$queryWindow.on("load", function(event) {
			
			focusCommentPosition();
			$("html, body").animate({"scrollTop": $hashPosition - ($windowHeight/3)}, 400);
			$hash.addClass("located");
			
		});
		
		$window.setTimeout(function(event) {
			
			focusCommentPosition();
			$("html, body").animate({"scrollTop": $hashPosition - ($windowHeight/3)}, 400);
			$hash.addClass("located");
			
		}, 1000);

	};
	

	
	if($(".recent-comments-module").length > 0) {
		
		$(".recent-comments-module").find("a").each(function(event) {
			
			var $this = $(this),
				$thisHref = $this.attr("href").split("#"),
				$hash = "#" + $thisHref[1],
				$hashDom = $($hash);
			
			$thisHref = $thisHref[0];
			
			if($thisHref == $window.location.pathname) {
				
				var $thisParent = $this.parents("aside");
				
				if($thisParent.attr("id") == "sidebar") {
					
					$this.addClass("fc-button").attr("data-func", "close-sidebar");
					
				}
				
				else if($thisParent.attr("id") == "blog-info") {
					
					$this.addClass("fc-button").attr("data-func", "close-blog-info");
					
				};
			
				$this.on("click", function(event) {
					
					history.pushState(null, null, $hash);
					
					if($window.location.hash.indexOf("comment") != -1) {
						
						$($window.location.hash).removeClass("located");
						
					};
					
					$html.addClass("show-comments").removeClass("show-export show-info");

					$("#comments").attr("aria-hidden", "false").show();
					$("#export, #related").attr("aria-hidden", "true").hide();
					$(this).attr("aria-selected", "true");
					$(".fc-button[data-func='show-export'], .fc-button[data-func='show-related']").attr("aria-selected", "false");
					
					$("html, body").animate({"scrollTop": $hashDom.offset().top - ($windowHeight/3)}, 400);
					
					$window.setTimeout(function(event) {
						
						$hashDom.addClass("located");
						
					}, 400);

				});
				
			};
			
		});

	};



	$document.on("click", ".comment-toggle", function(event) {

		if($(this).parents(".comment-wrap, .reply-wrap").hasClass("active") == false) {

			$(this).attr("aria-expanded", "true").parents(".comment-wrap, .reply-wrap").addClass("active").find(".comment-control").attr("aria-hidden", "false");

			$globalNavigation.attr("aria-hidden", "true");
			$footer.attr("aria-hidden", "true");

			$(".transparent-comment-active").attr("aria-hidden", "false").show();

			$html.addClass("active-comment");

			if($(this).parent(".comment-info").find(".comment-date a").length > 0) {

				var $abuse = $(this).parent(".comment-info").find(".comment-date a"),
					$onClick = $abuse.attr("onclick"),
					$href = $abuse.attr("href");

				$(this).parents(".comment-wrap, .reply-wrap").find(".report-comment").attr({

					"href": $href,
					"onclick": $onClick

				});

			}

			else {

				$(this).parents(".comment-wrap, .reply-wrap").find(".report-comment").attr("aria-disabled", "true");

			};
			
			if($bodyID == "page") {
				
				loadAvatarEvent = setInterval(loadAvatar, 100);
				
			};

		}

		else {

			inactiveComment();

		}

	});



	$document.on("click", ".comment-control a", function(event) {

		inactiveComment();

	});
	
	
	
	if($bodyID == "page") {
		
		$document.on("click", ".submit-comment", function(event) {

			loadAvatarEvent = setInterval(loadAvatar, 100);

		});
		
	};
	
	
	
	$document.on("click", ".transparent-comment-active", function(event) {

		inactiveComment();
		clearInterval(loadAvatarEvent);

	});



	$(window).on("scroll", function(event) {

		if($html.hasClass("active-comment") == true) {

			inactiveComment();
			clearInterval(loadAvatarEvent);

		};

	});



	$document.on("click", ".tt_more_preview_comments_wrap", function(event) {


		$(".tt_more_preview_comments_text").html('<span class="loading-more-comments no-text icon">댓글 로드 중…</span>');
		
		loadAvatarEvent = setInterval(loadAvatar, 100);

	});



	$document.on("focus", "#comment-textarea", function(event) {

		$window.setTimeout(function(event) {

			if($("#innerBox").length > 0) {

				$("#textRefresh").attr("role", "button");

			};

		}, 200);

	});



	if($(".comment-form-wrap").length > 0) {

		$document.on("mouseover touchstart", "#comment-textarea, .comment-field-blank", function(event) {

			autosize($(this));

		});

	}

	else {

		if($(".comment-list").length <= 0) {

			$(".comments").append('<p class="disabled-comment">댓글을 사용할 수 없습니다.</p>');

		};

	};

});