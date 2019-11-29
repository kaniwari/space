$(function() {

	var $document = $(document),
		$window = window,
		$queryWindow = $(window),
		$scrollPosition = $queryWindow.scrollTop(),
		$windowWidth = $window.innerWidth,
	
		$html = $("html"),
		$head = $("head"),
		$wrap = $("#wrap"),
		$gnbCenter = $(".gnb-center"),
		$categoryKeyword = ",guestbook,";
	
	
	
	$("head").append('<link rel="stylesheet" href="' + imagesURL + "style_guestbook.css" + fcver + '">');

	
	
	function preSetting(keyword, selecter, add, remove) {

		if(keyword != "") {

			keyword = ("," + keyword + ",").replaceAll(", ", ",").toLowerCase();

			if($categoryKeyword.indexOf("/") != -1) {

				$categoryKeyword = $categoryKeyword.split("/");

				if(keyword.indexOf($categoryKeyword.join("/")) != -1) {

					selecter.addClass(add).removeClass(remove);

				}

				else if(keyword.indexOf("*/" + $categoryKeyword[1]) != -1) {

					selecter.addClass(add).removeClass(remove);

				}

				else if(keyword.indexOf($categoryKeyword[0] + "/*") != -1) {

					selecter.addClass(add).removeClass(remove);

				}

				else if(keyword.indexOf("*/*") != -1) {

					selecter.addClass(add).removeClass(remove);

				}

				$categoryKeyword = $categoryKeyword.join("/");

			}

			else {

				if(keyword.replaceAll("/**", "").indexOf($categoryKeyword) != -1) {

					selecter.addClass(add).removeClass(remove);

				};

			};

		};

	};
	
	preSetting(dayKeyword, $html, "day", "sysui dynamic dawn night");
	preSetting(dawnKeyword, $html, "dawn", "sysui dynamic day night");
	preSetting(nightKeyword, $html, "night", "sysui dynamic day dawn");
	preSetting(pageCoverKeyword, $html, "page-cover-support", "fullscreen-page-cover");
	
	
	
	if($themeColorOrig == "transparent") {

		if($html.hasClass("sysui") == false) {
			
			var $themeColor;

			if($html.hasClass("day") == true) {

				$themeColor = "#f4f4f4";

			}

			else if($html.hasClass("dawn") == true) {

				$themeColor = "#d9d0c3";

			}

			else if($html.hasClass("night") == true) {

				$themeColor = "#0e0e0e";

			};

			if($head.find("meta[name='theme-color']").length > 0) {

				$head.find("meta[name='theme-color']").attr("content", $themeColor);

			}

			else {

				var theme = document.createElement("meta");
					theme.setAttribute('name', 'theme-color');
					theme.setAttribute('content', $themeColor);

					document.head.appendChild(theme);

			};
			
		};
		
	};
	
	

	if($wrap.has(".comment-wrap, .reply-wrap").length > 0) {

		var avatarTimer;

		function clearAvatar() {

			clearInterval(avatarTimer);

		}

		function getAvatar() {

			if($("#global-header").hasClass("refreshed") == false) {

				$("#global-header").addClass("refreshed");
				
				if($html.hasClass("page-cover-support altcover-support") == true) {

					$(".page-cover").show();

				}

				$(".comment-wrap .comment-username, .reply-wrap .comment-username").find("a:not(.load)").each(function() {

					var $this = $(this),
						$thisHref = $this.attr("href").replace("http:", "").replace("https:", ""),
						$guestAvatar = $this.parents(".comment-wrap, .reply-wrap").find(".comment-avatar");

					$guestAvatar.append('<img class="avatar-image" src="' + $thisHref + '/index.gif" alt="이 댓글을 작성한 사용자의 이미지" width="36" height="36">');

					$guestAvatar.find(".avatar-image").on("error", function() {

						$guestAvatar.addClass("no-image icon");
						$(this).remove();

					});
					$guestAvatar.addClass("load").removeClass("loading");

				});

				$(".comment-wrap .comment-avatar:not(.load), .reply-wrap .comment-avatar:not(.load)").addClass("load no-image icon").removeClass("loading");

				clearAvatar();

		   };

		};

		getAvatar();

		$document.on("click", ".comment-control a", function(event) {

			getAvatar();

			clearAvatar();
			avatarTimer = setInterval(getAvatar, 500);

		});

	};
	
	
	
	if($("#global-header").length > 0) {

		if($html.hasClass("fullscreen-page-cover") == true) {

			$html.removeClass("fullscreen-page-cover").addClass("page-cover-support");

		};

		if($html.hasClass("page-cover-support altcover-support") == true) {
			
			preSetting(altCoverKeyword, $html, "altcover-only alt1", "alt2 alt3 alt4");
			preSetting(secondCoverKeyword, $html, "altcover-only alt2", "alt1 alt3 alt4");
			preSetting(thirdCoverKeyword, $html, "altcover-only alt3", "alt1 alt2 alt4");
			preSetting(fourthCoverKeyword, $html, "altcover-only alt4", "alt1 alt2 alt3");
			
			$(".page-cover").show();

		}

		else {

			$html.removeClass("page-cover-support altcover-support");

		}
		
		
		var $globalHeader = $("#global-header"),
			$globalHeaderHeight = $(".header-height").offset().top,
			$globalNavigationHeight,
			timer;

		function clearTimer() {

			clearInterval(timer);

		};

		function setGHGuestbook() {

			$globalHeader = $("#global-header");
			ghPosition();

		};

		$document.on("click", ".comment-control a", function(event) {

			setGHGuestbook();
			clearTimer();

			var timer = setInterval(setGHGuestbook, 500);

		});

		$document.on("click", ".transparent-comment-active", function(event) {

			clearTimer();

		});

		$queryWindow.on("scroll", function(event) {

			clearTimer();

		});
		
		
		
		function ghPosition() {

			$globalHeaderHeight = $(".header-height").offset().top;

			if($windowWidth > 760) {

				$globalNavigationHeight = 60;

			}

			else {

				$globalNavigationHeight = 50;

			}

			if($scrollPosition > $globalHeaderHeight - $globalNavigationHeight) {

				$html.removeClass("gh-top");
				$gnbCenter.attr("aria-hidden", "false");

			}

			else {

				$html.addClass("gh-top");
				$gnbCenter.attr("aria-hidden", "true");

			};

		};

		$queryWindow.on("load scroll resize", function(event) {

			$scrollPosition = $queryWindow.scrollTop();
			ghPosition();

		});



		$window.setTimeout(function(event) {

			$scrollPosition = $queryWindow.scrollTop();
			ghPosition();

		}, 1000);

	};
	
	$("#global-navigation").addClass("ready");

});