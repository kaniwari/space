$(function() {
	
	var $document = $(document),
		$window = window,
		$queryWindow = $(window),
	
		$html = $("html"),
		$head = $("head"),
		$measuring = $("#measuring"),
		$scrollbarWidth = $measuring.width() - $measuring.find(".measuring span").width(),
		$measuringFrameHeight = $measuring.innerHeight(),
		$article = $("#article"),
		$sidebarFuncList = $(".sidebar-func-list"),
		
		$windowWidth = $window.innerWidth,
		$windowHeight = $window.innerHeight,
		$orientation,
		$changedOrientation,
		$portrait = 0,
		$landscape = 0,

		$scrollPosition,
		$globalNavigationHeight,
		$articleHeight,
		$articlePosition,
		$ttAdsenseBottom,
		$ttAdsenseBottomHeight = 0;
	
	
	
	function orientation() {
		
		if($windowHeight < $windowWidth) {
			
			$orientation = "landscape";
			
		}
		
		else {
			
			$orientation = "portrait";
			
		};
		
	}
	
	orientation();
	$changedOrientation = $orientation;
	
	
	
	if($orientation == "portrait") {
		$portrait = $measuringFrameHeight;
	}
	
	else {
		$landscape = $measuringFrameHeight;
	}
	
	
	$queryWindow.on({
		
		"load resize": function(event) {

			$windowWidth = $window.innerWidth;
			$windowHeight = $window.innerHeight;

			orientation();

		},
		
		"load resize scroll": function(event) {
			
			$measuringFrameHeight = $measuring.innerHeight();
			
		}
	
	});
	
	
	
	$window.setTimeout(function(event) {
		
		$windowWidth = $window.innerWidth;
		$windowHeight = $window.innerHeight;
		
		$measuringFrameHeight = $measuring.innerHeight();
		orientation();
		
	}, 1000);
	
	
	function getCSS(fn) {

		$head.append('<link rel="stylesheet" href="' + imagesURL + fn + fcver + '">');

	};
	
	function preSetting(keyword, selecter, add, remove) {

		if(keyword !== "") {

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
	
	
	
	if($(".gh-text a[href*='category']").length > 0) {

		var $categoryKeyword = "," + ($(".gh-text a[href*='category']").text().toLowerCase()) + ",";

		preSetting(dayKeyword, $html, "day", "sysui dynamic dawn night");
		preSetting(dawnKeyword, $html, "dawn", "sysui dynamic day night");
		preSetting(nightKeyword, $html, "night", "sysui dynamic day dawn");
		preSetting(pageCoverKeyword, $html, "page-cover-support", "fullscreen-page-cover");
		preSetting(fullscreenPageCoverKeyword, $html, "page-cover-support fullscreen-page-cover", "");
		preSetting(disabledPageCoverKeyword, $html, "", "page-cover-support fullscreen-page-cover");
		preSetting(serifKeyword, $article, "serif", "");
		preSetting(sanSerifKeyword, $article, "", "serif");
		
		if($html.hasClass("altcover-support") == true) {
			
			preSetting(altCoverKeyword, $html, "altcover-only alt1", "alt2 alt3 alt4");
			preSetting(secondCoverKeyword, $html, "altcover-only alt2", "alt1 alt3 alt4");
			preSetting(thirdCoverKeyword, $html, "altcover-only alt3", "alt1 alt2 alt4");
			preSetting(fourthCoverKeyword, $html, "altcover-only alt4", "alt1 alt2 alt3");
			
		};

	};
	
	
	
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
	
	
	
	getCSS("style_article.css");
	
	
	
	if($("#global-header .admin-func").length > 0) {

		var $globalHeader = $("#global-header"),
			$adminFunc = $globalHeader.find(".admin-func"),
			$adminFuncInner = $adminFunc.find(".admin-func-list").html();

		$sidebarFuncList.find(".sidebar-go-to-index-inner").after($adminFuncInner);
		
		if(fixedSidebar == "true") {
			
			$globalHeader.addClass("has-admin-func");
			$adminFunc.attr("aria-hidden", "false");
			
		}
		
		else {
			
			$adminFunc.remove();
			
		};

	};
	
	
	
	/* 진행 바 */
	
	
	if($html.hasClass("progress-bar-support") == true || $(".recommendation").length > 0) {
		
		if($(".tt_adsense_bottom").length > 0) {

			$ttAdsenseBottom = $(".tt_adsense_bottom");
			$ttAdsenseBottomHeight = $ttAdsenseBottom.innerHeight();

		};
		
		function windowEvent() {
			
			$scrollPosition = $queryWindow.scrollTop();

			if($windowWidth > 760) {

				$globalNavigationHeight = 60;

			}

			else {

				$globalNavigationHeight = 50;

			};
			
			if($(".tt_adsense_bottom").length > 0) {

				$ttAdsenseBottomHeight = $ttAdsenseBottom.innerHeight();

			};
			
			$articleHeight = $article.innerHeight() - $windowHeight - $ttAdsenseBottomHeight + 100;
			
		};
		
		
		
		$queryWindow.on({
			
			"load resize": function(event) {
				
				if($(".tt_adsense_bottom").length > 0) {

					$ttAdsenseBottomHeight = $ttAdsenseBottom.innerHeight();

				};
				
				windowEvent();

			},
			
			"scroll": function(event) {
				
				$articlePosition = $article.offset().top - $globalNavigationHeight;
				
				windowEvent();
				
			}
		
		});
		
		
		
		$window.setTimeout(function(event) {

			if($(".tt_adsense_bottom").length > 0) {

				$ttAdsenseBottomHeight = $ttAdsenseBottom.innerHeight();

			};
			
			$articlePosition = $article.offset().top - $globalNavigationHeight;
			
			windowEvent();
			
		}, 1000);
		
	};
	
	
	
	if($html.hasClass("progress-bar-support") == true) {
		
		$("#global-navigation").after('<div class="progress-bar-wrap" aria-hidden="true"><div class="progress-bar" style="transform:scaleX(0)"></div>');
		
		var $progressBar = $(".progress-bar");

		function progress() {
			
			if($windowHeight + $windowHeight - 100 < $articleHeight) {
				
				if($scrollPosition >= $articlePosition) {
					
					if($scrollPosition >= $articlePosition + $articleHeight) {
						
						$progressBar.css("transform", "scaleX(1)");
						
					}
					
					else {
						
						$progressBar.css("transform", "scaleX(" + ($scrollPosition - $articlePosition)/$articleHeight + ")");
						
					};
					
				}
				
				else {
					
					$progressBar.css("transform", "scaleX(0)");
					
				};
				
			}
			
			else {
				
				$progressBar.css("transform", "scaleX(0)");
				
			};
			
		};
		
		
		$queryWindow.on("load resize scroll", function(event) {

			progress();

		});
		
		
		
		$window.setTimeout(function(event) {

			$articlePosition = $article.offset().top - $globalNavigationHeight;
			progress();
			
		}, 1000);
		
	};
	
	
	
	/* 본문 - 추천 */
	
	if($(".recommendation").length > 0) {
		
		var $recommendation = $(".recommendation"),
			$recommendationTimeout;
		
		function recommendationTimeout() {
			
			$recommendation.addClass("closed");
			$html.removeClass("show-recommendation");
			$recommendation.css("display", "none").attr("aria-hidden", "true");
			clearTimeout($recommendationTimeout);
			
			$window.setTimeout(function(event) {
				
				$recommendation.remove();
				
			}, 650);
			
		};
		
		function recommendationCheck() {
			
			if($recommendation.hasClass("on") == true) {
				
				clearTimeout($recommendationTimeout);
				
			}
			
			else {
				
				clearTimeout($recommendationTimeout);
				$recommendationTimeout = setTimeout(recommendationTimeout, 5000);
				
			};
			
		};
		
		function recommendationEvent() {
			
			if($recommendation.hasClass("closed") == false) {
				
				if($windowWidth > articleWidth + 800) {
					
					if($scrollPosition >= ($articlePosition + $articleHeight)/4*3) {

						$html.addClass("show-recommendation");
						$recommendation.css("display", "block").attr("aria-hidden", "false");
						
						recommendationCheck();

					};
					
				}
				
				else {
					
					$html.removeClass("show-recommendation");
					$recommendation.css("display", "none").attr("aria-hidden", "true");
					
					clearTimeout($recommendationTimeout);
					
				};
				
			};
			
		};
		
		
		
		$(".fc-button[data-func='open-sidebar'],.fc-button[data-func='open-blog-info']").on("click", function(event) {
			
			$html.removeClass("show-recommendation");
			$recommendation.css("display", "none").attr("aria-hidden", "true");

			clearTimeout($recommendationTimeout);
			
			
			
			if($html.hasClass("overflow") == true) {
				
				$recommendation.css("right", $scrollbarWidth + 20 + "px");
				
			};
			
		});
		
		
		
		$(".fc-button[data-func='close-sidebar'],.fc-button[data-func='close-blog-info']").on("click", function(event) {
			
			recommendationEvent();
			$recommendation.css("right", "");
			
		});
		
		
		
		$queryWindow.on("load resize scroll", function(event) {
			
			recommendationEvent();
			
		});
		
		
		$window.setTimeout(function(event) {

			recommendationEvent();
			
		}, 1000);
		
		
		
		$recommendation.find(".recommendation-link").on({
			
			"mouseover": function(event) {
				
				$recommendation.addClass("on");
				recommendationCheck();
				
			},
			
			"mouseout": function(event) {
				
				$recommendation.removeClass("on");
				recommendationCheck();
				
			}
			
		});
		
		
		
		$recommendation.find(".close-alert").on("click", function(event) {
			
			event.preventDefault();
			recommendationTimeout();
			
		});
		
	};
	


	if($article.find("*[style*='Nanum']").length > 0 || $article.find("*[style*='Noto']").length > 0 || $article.find("*[style*='GungSeo']").length > 0) {

		$article.find("*[style*='Nanum'], *[style*='Noto'], *[style*='GungSeo']").addClass("set-font");

	};


	if($article.find("*[style*='font'],*[style*='FONT']").not(".set-font").length > 0) {

		$article.find("*[style*='font'],*[style*='FONT']").not(".set-font").css({"font-family": "", "FONT-FAMILY": ""});

	};

	if($article.find("font").length > 0) {

		$article.find("font").removeAttr("face");

	};



	if($article.find("*[class*='fraccino-']").length > 0) {

		if($article.has(".fraccino-enabledcover").length > 0 || $article.has(".fraccino-enable-pagecover").length > 0 || $article.has(".fraccino-enabledfullcover").length > 0 || $article.has(".fraccino-disabledfullcover").length > 0 || $article.has(".fraccino-enable-fullscreenpagecover").length > 0) {

			$html.addClass("page-cover-support");

			if($article.has(".fraccino-enabledfullcover").length > 0 || $article.has(".fraccino-enable-fullscreenpagecover").length > 0) {

				$html.addClass("fullscreen-page-cover");

			}

			else {

				$html.removeClass("fullscreen-page-cover");

			};

		}

		else if($article.has(".fraccino-disabledcover").length > 0 || $article.has(".fraccino-disable-pagecover").length > 0) {
			$html.removeClass("page-cover-support");
		};

		if($article.has(".fraccino-enable-pagealtcover").length > 0) {
			$html.addClass("altcover-only");
		}

		if($article.has(".fraccino-enabledserif").length > 0 || $article.has(".fraccino-enable-serif").length > 0) {
			$article.addClass("serif");
		}

		else if($article.has(".fraccino-disabledserif").length > 0 || $article.has(".fraccino-disable-serif").length > 0) {
			$article.removeClass("serif");
		};

		if($article.has(".fraccino-setbrightcolor").length > 0 || $article.has(".fraccino-setas-day").length > 0) {
			$html.addClass("day").removeClass("dynamic dawn night");
		}

		else if($article.has(".fraccino-setwarmcolor").length > 0 || $article.has(".fraccino-setas-dawn").length > 0) {
			$html.addClass("dawn").removeClass("dynamic day night");
		}

		else if($article.has(".fraccino-setdarkcolor").length > 0 || $article.has(".fraccino-setas-night").length > 0) {
			$html.addClass("night").removeClass("dynamic day dawn");
		};



		$("*[class*='fraccino-']").remove();

	};



	if($article.hasClass("serif") == true) {

		$head.append(
			'<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700&amp;subset=latin-ext">' +
			'<link rel="stylesheet" href="' + imagesURL + 'style_serif.css' + fcver + '">'
		);

	};



	if($("#global-header").length > 0) {
		
		if($html.hasClass("page-cover-support") == true) {

			var $globalHeader = $("#global-header"),
				$pageCover = $(".page-cover");


			if($pageCover.length <= 0) {

				$globalHeader.prepend(

					'<div class="page-cover" aria-hidden="true">' +
						'<div class="parent-page-cover">' +
							'<div class="small-cover"></div>' +
							'<div class="medium-cover"></div>' +
							'<div class="large-cover"></div>' +
						'</div>' +
					'</div>'

				);
				
				$pageCover = $(".page-cover");

			};


			function fullScreenCover() {

				if($html.hasClass("fullscreen-page-cover") == true) {

					function ghHeight(value) {
						
						$globalHeader.css("min-height", value + "px");
						
					};
					
					ghHeight($measuringFrameHeight);

					$queryWindow.on({
						
						"load resize": function(event) {

							if($html.hasClass("no-touch")) {

								ghHeight($measuringFrameHeight);

							}

							else {

								if($orientation !== $changedOrientation) {

									if($orientation == "portrait") {

										if($portrait == 0) {

											$portrait = $measuringFrameHeight;
											ghHeight($portrait);

										}

										else {

											ghHeight($portrait);

										}

									}

									else {

										if($landscape == 0) {

											$landscape = $measuringFrameHeight;
											ghHeight($landscape);

										}

										else {

											ghHeight($landscape);

										}

									};

									$changedOrientation = $orientation;

								};

							};

						},
						
						"scroll": function(event) {
							
							if($html.hasClass("touch")) {

								if($orientation == "portrait") {
									
									if($measuringFrameHeight < $portrait) {

										$portrait = $measuringFrameHeight;
										ghHeight($portrait);

									};
									
								}
								
								else {
									
									if($measuringFrameHeight < $landscape) {

										$landscape = $measuringFrameHeight;
										ghHeight($landscape);

									};
									
								};

							};
							
						}
					
					});

				};

			}
			
			function WaitingForfullSereenCover() {
				
				if($html.hasClass("no-touch") == true || $html.hasClass("touch") == true) {
					
					fullScreenCover();
					clearInterval(fullScreenCoverEvent);
					
				};
				
			};

			var fullScreenCoverEvent;
			
			

			if(generalThumb !== "") {
				
				$pageCover = $(".page-cover");
				generalThumb = encodeURIComponent(generalThumb);

				if($html.hasClass("altcover-only") == false) {

					if($article.hasClass("for-page") == false) {

						$(".page-cover,.parent-page-cover").css("background-image", "url(//img1.daumcdn.net/thumb/R48x0/?fname=" + generalThumb + ")");
						$(".small-cover").css("background-image", "url(//img1.daumcdn.net/thumb/R800x0/?fname=" + generalThumb + ")");
						$(".medium-cover").css("background-image", "url(//img1.daumcdn.net/thumb/R1280x0/?fname=" + generalThumb + ")");
						$(".large-cover").css("background-image", "url(//img1.daumcdn.net/thumb/R1920x0/?fname=" + generalThumb + ")");

					};

					fullScreenCover();
					fullScreenCoverEvent = setInterval(WaitingForfullSereenCover, 100);
					$pageCover.show();

				}

				else {

					if($html.hasClass("altcover-support") == false) {

						$html.removeClass("page-cover-support");
						$pageCover.remove();

					}

					else {

						fullScreenCover();
						fullScreenCoverEvent = setInterval(WaitingForfullSereenCover, 100);
						$pageCover.show();

					};

				};

			}

			else {

				$pageCover = $(".page-cover");
				
				if($html.hasClass("altcover-support") == false) {

					$html.removeClass("page-cover-support");
					$pageCover.remove();

				}

				else {

					fullScreenCover();
					fullScreenCoverEvent = setInterval(WaitingForfullSereenCover, 100);
					$pageCover.show();

				}

			};

		};
		
	};
	
	
	
	$("#global-navigation").addClass("ready");



	/* 여백 적용 */

	if($article.has(".tt_article_useless_p_margin").length > 0) {

		$article.find(".tt_article_useless_p_margin > *:first-child").unwrap();
		$article.addClass("useless-margin");

	}

	else {

		$article.addClass("margin");

	};



	/* 포스트 버튼 */

	if($(".container_postbtn").length > 0) {

		var $postButton = $(".container_postbtn");

		$postButton.find(".wrap_btn.wrap_btn_share, .wrap_btn.wrap_btn_etc").remove();

		if($postButton.find(".wrap_btn:has(.ico_statistics)").length > 0) {


			var $statistics = $postButton.find(".wrap_btn:has(.ico_statistics) .btn_post"),
				$postID = $statistics.attr("data-entry-id");

			$sidebarFuncList.append('<li><a class="fc-icon post-statistics" href="' + manageLink + '/statistics/entry/' + $postID + '" target="_blank" role="button">이 글의 통계</a></li>');
			
			if(fixedSidebar == "true") {

				if($("#global-header").length > 0) {
					
					var $globalHeader = $("#global-header");
					
					if($globalHeader.find(".admin-func").length > 0) {
						
						$globalHeader.find(".admin-func").prepend('<a class="fc-icon post-statistics" href="' + manageLink + '/statistics/entry/' + $postID + '" target="_blank" role="button">이 글의 통계</a>');
						
						
					}
					
					else {
						
						$globalHeader.addClass("has-admin-func").append('<div class="admin-func"><a class="fc-icon post-statistics" href="' + manageLink + '/statistics/entry/' + $postID + '" target="_blank" role="button">이 글의 통계</a></div>');
						
					};
					
				};

			};

			$postButton.find(".wrap_btn:has(.ico_statistics)").remove();

		};



		if($postButton.find(".btn_subscription").length > 0) {

			$postButton.addClass("has-subscriptionbtn");

			if($("meta[property*='plink']").length > 0) {

				var $postID = $("meta[property*='plink']").attr("content");

				$postID = $postID.replace("http://", "").replace("https://", "").replace("/notice/", "/").split("/");
				$postID = $postID[1];

				$postButton.addClass("has-morebtn").find(".postbtn_like").after(

					'<div class="btn_more_inner"><button class="icon post_more" aria-label="이 글의 옵션 토글"><span aria-hidden="true">옵션 토글</span></button><div class="more-field" aria-hidden="true"><button class="icon abuse-report" aria-label="이 글을 티스토리에 신고하기"><span aria-hidden="true">신고하기</span></button></div></div>'

				);

				var $abuseReport = $postButton.find(".abuse-report"),
					$postMore = $postButton.find(".post_more");

				var showMore;

				function hideMoreBtn() {

					$postButton.removeClass("show-more").find(".btn_subscription, .btn_naver_subscription, .postbtn_ccl").attr("aria-hidden", "false");
					$postButton.find(".more-field").attr("aria-hidden", "true");

				};



				$postMore.on("click", function(event) {

					event.preventDefault();

					if($postButton.hasClass("show-more") == true) {

						hideMoreBtn();
						clearTimeout(showMore);

					}

					else {

						$postButton.addClass("show-more").find(".btn_subscription, .btn_naver_subscription, .postbtn_ccl").attr("aria-hidden", "true");
						$postButton.find(".more-field").attr("aria-hidden", "false");

						showMore = setTimeout(hideMoreBtn, 5000);

					};

				});

				$abuseReport.on("click", function(event) {

					event.preventDefault();

					$window.open('/toolbar/popup/abuseReport/?entryId=' + $postID, '티스토리 글 신고하기','width=550,height=530,toolbar=no,menubar=no,status=no,scrollbars=no');

					clearTimeout(showMore);
					showMore = setTimeout(hideMoreBtn, 500);

				});

			}



			if($html.hasClass("enable-naver-subscription") == true) {

				$postButton.find(".btn_subscription").after(

					'<button class="btn_naver_subscription subscribe-on-naver" aria-label="네이버 이웃 추가하기"><span aria-hidden="true">이웃</span></button>'

				);

			};

		};



		var $articleLike = $postButton.find(".postbtn_like .like_btn").length,
			$articleSubsc = $postButton.find(".btn_subscription").length,
			$articleCCL = $postButton.find(".postbtn_ccl").length;

		if($articleLike + $articleSubsc + $articleCCL == 0) {

			$(".container_postbtn").remove();

		}

		else {

			if($articleLike <= 0) {

				$postButton.find(".postbtn_like").remove();

				if($articleSubsc <= 0) {
					$postButton.addClass("ccl-only");
				};

			}

			else {

				$postButton.addClass("has-likebtn");

			};

		};



		if($articleCCL > 0) {
			
			if($postButton.find(".postbtn_ccl .ico_postbtn").length > 0) {
				
				
				var $ccl = $postButton.find(".postbtn_ccl"),
				$cclLink = $postButton.find(".link_ccl"),
				$cclText = $cclLink.html();

				$postButton.addClass("has-ccl");

				$ccl.append('<div class="ccl-icons-group" aria-hidden="true"></div>');
				$cclLink.prepend("이 글은 ");


				var $cclIcons = $article.find(".ccl-icons-group");

				if($cclLink.find(".bundle_ccl span").length < 3) {

					$cclIcons.append('<div class="cc-logo no-text icon">Creative Commons</div>');

				};


				if($cclText.indexOf("저작자표시") != -1) {

					$cclIcons.append('<div class="cc-by no-text icon">본 저작자 표시</div>');
					$cclLink.append("본 저작자 표시");

				};



				if($cclText.indexOf("비영리") != -1) {

					if($cclText.indexOf("저작자표시") != -1) {

						$cclLink.append(", ");

					};

					$cclIcons.append('<div class="cc-nc no-text icon">비영리</div>');
					$cclLink.append("비영리");

				};



				if($cclText.indexOf("변경금지") != -1) {

					if($cclText.indexOf("저작자표시") != -1) {

						$cclLink.append(", ");

					};

					$cclIcons.append('<div class="cc-nd no-text icon">변경 금지</div>');
					$cclLink.append("변경 금지");

				};



				if($cclText.indexOf("동일조건") != -1) {

					if($cclText.indexOf("저작자표시") != -1) {

						$cclLink.append(", ");

					};

					$cclIcons.append('<div class="cc-sa no-text icon">동일 조건 변경 허락</div>');
					$cclLink.append("동일 조건 변경 허락");

				};



				$cclLink.find(".bundle_ccl").remove();

				$cclLink.addClass("no-text").append(" 규칙 하에 배포할 수 있습니다. 자세한 내용은 Creative Commons 라이선스를 확인하세요.").removeAttr("style").attr({

					"aria-label": $cclLink.text().replace("Creative Commons", "크리에이티브 커먼즈"),
					"role": "button"

				});
				
			};

		};

	};



	/* iframe 컨텐츠 반응형으로 변형 */

	if($article.find("iframe").length > 0) {

		$article.find("p, span").has("iframe").children("iframe").removeAttr("style").unwrap();

		$article.children('iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="tvpot"], iframe[src*="tv.kakao.com"], iframe[src*="videofarm.daum.net"], iframe[src*="nmv.naver.com"]').wrap('<div class="imageblock iframe"><div class="iframe-content video"></div></div>');

		$article.children('iframe[src*="soundcloud"]').wrap('<div class="imageblock iframe"><div class="iframe-content sound"></div></div>');

		$article.children('iframe[src*="google.com/maps"], iframe[src*="maps.google"]').wrap('<div class="imageblock iframe"><div class="iframe-content google-maps"></div></div>');
		
		if($article.find(".tt-youtube-plugin:has(iframe)").length > 0) {
			
			$article.find(".tt-youtube-plugin:has(iframe)").each(function(event) {

				var $this = $(this),
					$iframe = $this.find("iframe");
				
				$this.addClass("imageblock iframe").removeAttr("style");
				$iframe.wrap('<div class="iframe-content video"></div>');

		   });
			
		};

		if($article.find("figure[data-ke-type='video']").length > 0) {

			if($article.find("figure[data-ke-type='video'] iframe[width='860']").length > 0) {

			   $article.find("figure[data-ke-type='video'] iframe[width='860']").each(function(event) {

				   $(this).removeAttr("width");

			   });

			};
			
			$article.find("figure[data-ke-type='video']").each(function(event) {

				var $this = $(this),
					$iframe = $this.find("iframe"),
					$iframeWidth = $iframe.attr("width");

				$iframe.wrap('<div class="iframe-content video"></div>');

				if($this.hasClass("no-expand") == false) {

					if($this.attr("data-ke-style") == "alignCenter") {

						if(articleWidth < expandedImgWidth) {

							if($iframeWidth == undefined || $iframeWidth >= articleWidth) {

								$this.addClass("expand");

							}
							
							else {
								
								$this.addClass("no-edge").attr("style", "max-width:" + $iframeWidth + "px!important");
								
							};

						};

					}
					
					else {
						
						$this.addClass("no-edge").attr("style", "max-width:" + $iframeWidth + "px!important");
						
					}

				}

				else if ($iframeWidth !== undefined) {

					$this.addClass("no-edge").attr("style", "max-width:" + $iframeWidth + "px!important");

				};

			});

		};

	};



	/* 레거시 이미지 블럭 변경 */

	if($article.find(".imageblock:not(figure)").length > 0) {

		var $imageblock = $article.find(".imageblock"),
			$imageblockInside = $imageblock.find("img, span");

		$imageblock.removeAttr("style");
		$imageblockInside.removeAttr("style");


		function setImageblockAlign(property, value, setClass) {

			if($article.find('p[style*="' + property + ':' + value + '"]:has(.imageblock)').length > 0 || $article.find('p[style*="' + property + ': ' + value + '"]:has(.imageblock)').length > 0) {

				$article.find('p[style*="' + property + ':' + value + '"] > .imageblock, p[style*="' + property + ': ' + value + '"] > .imageblock').addClass(setClass).unwrap();

			};

		};

		setImageblockAlign("float", "left", "float float-left");
		setImageblockAlign("float", "right", "float float-right");
		setImageblockAlign("text-align", "left", "left-image no-edge");
		setImageblockAlign("text-align", "right", "right-image no-edge");



		if($article.find("p:has(.imageblock), span:has(.imageblock)").length > 0) {

			$article.find("p:has(.imageblock), span:has(.imageblock)").each(function(event) {

				var $this = $(this),
					$thisClass = $(this).attr("class");

				$this.find(".imageblock").addClass($thisClass).unwrap();

			});

		};



		if($article.find(".imageblock:has(.cap1)").length > 0 || $article.find(".imageblock:has(.ExifInfo)").length > 0) {

			$article.find(".imageblock:has(.cap1)").addClass("has-info");
			$article.find(".imageblock:has(.ExifInfo)").addClass("has-info");

		};



		if($article.find(".imageblock:has(a[href*='attachment'])").length > 0) {

			$article.find(".imageblock:has(a[href*='attachment'])").addClass("download no-edge").find("a").attr({

				"role": "button",
				"aria-label": "다운로드…"

			}).addClass("icon").find("img").remove();

		}


		if(articleWidth < expandedImgWidth) {

			function expand(element) {

				$(".imageblock").has(element).each(function(event) {

					var $this = $(this),
						$imgWidth = $this.find(element).attr("width");

					if(expandedImgWidth <= $imgWidth) {

						$this.addClass("expand");

					};

				});

			}

			expand("img");
			expand("iframe");

		};

	};



	/* 새로운 이미지 블럭 변경 */

	function newImgBlock() {

		if($article.find("figure.imageblock img[width='860']").length > 0) {
		   
		   $article.find("figure.imageblock img[width='860']").each(function(event) {
			   
			   $(this).removeAttr("width");
			   
		   });
		   
		};
		
		
		
		if(articleWidth < expandedImgWidth) {

			if($article.find("figure.imageblock.alignCenter:not(.no-expand)").length > 0) {

				$article.find("figure.imageblock.alignCenter:not(.no-expand)").each(function(event) {

					var $this = $(this),
						$thisImg = $this.find("img"),
						$thisImgNaturalWidth = $thisImg[0].naturalWidth,
						$thisImgNaturalHeight = $thisImg[0].naturalHeight,
						$thisImgWidth = $thisImg.attr("width");

					if($thisImgNaturalWidth > $thisImgNaturalHeight) {

						if($thisImgNaturalWidth >= expandedImgWidth) {

							if($thisImgWidth == undefined || $thisImgWidth >= articleWidth) {

								$this.addClass("expand");

							};

						};

					};

				});

			};

			if($article.find("figure.imagegridblock:not(.no-expand)").length > 0) {

				$article.find("figure.imagegridblock:not(.no-expand)").each(function(event) {

					var $this = $(this),
						$thisImg = $this.find("img"),
						$totalImgNaturalWidth = 0;

					$thisImg.each(function(event) {

						$totalImgNaturalWidth = $totalImgNaturalWidth + $(this)[0].naturalWidth;

					});

					if($totalImgNaturalWidth >= expandedImgWidth) {

						$this.addClass("expand");

					};

				});

			};

		};

		if($article.find("p:empty").length > 0) {

			$article.find("p:empty").remove();

		};

	};

	newImgBlock();

	$queryWindow.on("load", function(event) {

		newImgBlock();

	});



	$window.setTimeout(function(event) {

		newImgBlock();

	}, 1000);



	if($article.find("figure:has(figcaption)").length > 0) {

		$article.find("figure:has(figcaption)").addClass("has-info");

	};
	
	
	
	/* 본문 - 레거시 더 보기 프로세스 */
	
	if($article.has(".btn_more").length > 0) {
		
		$article.find(".btn_more, .btn_less").wrap('<p class="moreless_btn"></p>');
		
	};



	/* 본문 - 리뷰 */

	if($article.has(".txc-info").length > 0) {

		var $txcInfo = $article.find(".txc-info"),
			$txcInfoRating = $txcInfo.find(".rating"),
			$txcInfoRatingText = $txcInfoRating.attr("title");

		$txcInfo.removeAttr("style").find("*").removeAttr("style");

		$txcInfo.find("a:has(img[alt*='가격'])").addClass("compare icon fade-icon").attr("role", "button").text("가격비교…").parent("div").addClass("txc-more-info");

		$txcInfoRating.addClass("no-text").attr("aria-label", "글쓴이의 평점은 " + $txcInfoRatingText + "점입니다.").removeAttr("title");

	};



	/* 본문 - 주석 */

	if($article.has(".footnotes").length > 0) {

		$article.find(".footnote a").removeAttr("style");

		$article.find(".footnote a, .footnotes a").each(function(event) {

			var $this = $(this),
				$thisHref = $this.attr("href");

			$this.on("click", function(event) {

				event.preventDefault();

				$("html, body").animate({"scrollTop": $($thisHref).offset().top - ($windowHeight/3)}, 400);

			});

		});

	};




	/* 본문 - 지도 */

	if($article.has("iframe[id*=emap]").length > 0) {

		$article.find("iframe[id*=emap]").wrap('<div class="imageblock daum-map"></div>');

	}

	if($article.has("iframe[data-ke-type=map]").length > 0) {

		$article.find("iframe[data-ke-type=map]").wrap('<div class="imageblock daum-map"></div>');

	}

	else if($article.has(".map_attach").length > 0) {

		$article.find(".map_attach").addClass("imageblock");

	};



	/* 본문 - 표 */

	if($article.find("table:not([class*='hljs'])").length > 0) {

		$article.find("table:not([class*='hljs'])").wrap('<div class="table-content"><div></div></div>');

	}



	/* 본문 - 다른 카테고리 */

	if($article.find(".another_category").length > 0) {

		$article.find(".another_category table").unwrap().unwrap();
		$article.find(".another_category").attr("class", "another-category");

		if($(".another-category tr").length <= 1) {

			$(".another-category").addClass("single");

		}

	};



	/* Android용 티스토리 모바일 앱 */

	if($article.children("div[style*='text-align:left']:first-child") .length > 0 || $article.children("div[style*='text-align:LEFT']:first-child") .length > 0 || $article.children("div[style*='text-align: left']:first-child") .length > 0 || $article.children("div[style*='text-align: LEFT']:first-child") .length > 0 || $article.children("div[style*='TEXT-ALIGN:LEFT']:first-child") .length > 0 || $article.children("div[style*='TEXT-ALIGN:left']:first-child") .length > 0 || $article.children("div[style*='TEXT-ALIGN: LEFT']:first-child") .length > 0 || $article.children("div[style*='TEXT-ALIGN: left']:first-child") .length > 0 || $article.children(".tt_adsense_top+div[style*='text-align:left']") .length > 0 || $article.children(".tt_adsense_top+div[style*='text-align:LEFT']") .length > 0 || $article.children(".tt_adsense_top+div[style*='text-align: left']") .length > 0 || $article.children(".tt_adsense_top+div[style*='text-align: LEFT']") .length > 0 || $article.children(".tt_adsense_top+div[style*='TEXT-ALIGN:LEFT']") .length > 0 || $article.children(".tt_adsense_top+div[style*='TEXT-ALIGN:left']") .length > 0 || $article.children(".tt_adsense_top+div[style*='TEXT-ALIGN: LEFT']") .length > 0 || $article.children(".tt_adsense_top+div[style*='TEXT-ALIGN: left']") .length > 0) {

		$article.addClass("useless-margin").removeClass("margin");

		var $app = $article.children("div[style*='text-align:left']:first-child,div[style*='text-align:LEFT']:first-child,div[style*='text-align: left']:first-child,div[style*='text-align: LEFT']:first-child,div[style*='TEXT-ALIGN:LEFT']:first-child,div[style*='TEXT-ALIGN:left']:first-child,div[style*='TEXT-ALIGN: LEFT']:first-child,div[style*='TEXT-ALIGN: left']:first-child,.tt_adsense_top+div[style*='text-align:left'],.tt_adsense_top+div[style*='text-align:LEFT'],.tt_adsense_top+div[style*='text-align: left'],.tt_adsense_top+div[style*='text-align: LEFT'],.tt_adsense_top+div[style*='TEXT-ALIGN:LEFT'],.tt_adsense_top+div[style*='TEXT-ALIGN:left'],.tt_adsense_top+div[style*='TEXT-ALIGN: LEFT'],.tt_adsense_top+div[style*='TEXT-ALIGN: left']");

		if($app.has("p").length <= 0) {

			var $splitBefore = '<span class="splitbefore"></span>',
				$splitAfter = '<span class="splitafter"></span>';

			$app.wrapInner('<p class="mobileapp-paragraph"></p>');

			$app.find(".mobileapp-paragraph>div, .mobileapp-paragraph>span").before($splitBefore).after($splitAfter);

			var $appInner = $app.html().replaceAll($splitBefore, "</p>").replaceAll($splitAfter, "<p>");

			$app.html($appInner);

			$app.find(".mobileapp-paragraph").unwrap();

		}

		else {
			$app.find("p:first-child").unwrap();
		}

	};
	
	
	
	/* 본문 - 오래된 소셜 공유 버튼 무력화 */
	
	if($(".tt-share-entry-with-sns").length > 0) {
		
		$(".tt-share-entry-with-sns").remove();
		
	};



	/* 본문 - 사용 태그 */

	if($(".tags-trail").length > 0) {

		var $tagsTrail = $(".tags-trail"),
			$tagsTrailInner = $tagsTrail.html().replaceAll(",", "");

		$tagsTrail.html($tagsTrailInner);


		$tagsTrail.find("a").each(function(event) {

			var $this = $(this),
				$thisText = $this.text();

			$this.attr({

				"role": "button",
				"aria-label": $thisText + " 태그"

			});

		});

		if($tagsTrail.find("div:empty").length > 0) {

			$tagsTrail.remove();

		}

	};

});