$(function() {

	var $html = $("html"),
		$window = window,
		$queryWindow =$(window);
	
	$("head").append('<link rel="stylesheet" href="' + imagesURL + "style_sidebar.css" + fcver + '">');
	
	$(".module").each(function(event) {

		if($(this).find("ul").length > 0 || $(this).find("ol").length > 0) {

			if($(this).find("li").length == 0) {

				$(this).remove();

			};

		};

	});



	function $replaceEllepsis(className) {
		
		if($(className).length > 0) {

			$(className).find("a").each(function(event) {

				$(this).text($(this).text().replaceAll("...", "…").replaceAll("..", "…"));

			});

		};
		
	};
	
	$replaceEllepsis(".recent-module");
	$replaceEllepsis(".recent-comments-module");
	$replaceEllepsis(".notice-module");
	$replaceEllepsis(".tags-module");
	$replaceEllepsis(".link-module");

	
	
	
	/* 메뉴 모듈 이벤트 */
	
	if($(".menu-module").length > 0) {
		
		var $menuModule = $(".menu-module");
		
			if($menuModule.has(".t_menu_medialog, .t_menu_location").length > 0) {

				$menuModule.find(".t_menu_medialog, .t_menu_location").remove();

			};
		
		$menuModule.find("a").attr("role", "button");

	};
	
	
	
	/* 카테고리 모듈 이벤트 */
		
	if($(".category-module").length > 0) {

		var $categoryModule = $(".category-module");
		


		$categoryModule.find(".category_list li:has('.sub_category_list')").each(function(event) {

			$(this).prepend('<button class="fc-icon fc-appearance category-toggle">카테고리 토글</button>');

		});

		$categoryModule.find(".category-toggle").each(function(event) {

			$(this).on("click", function(event){

				event.preventDefault();

				$(this).closest("li").toggleClass("closed open").find(".sub_category_list").slideToggle(200);

			});

		});



		if($categoryModule.hasClass("close-sub-category") == true) {

			$categoryModule.find(".category_list li:has('.sub_category_list')").each(function(event) {

				$(this).addClass("closed").find(".sub_category_list").hide();

			});

		}

		else {

			$categoryModule.find(".category_list li:has('.sub_category_list')").each(function(event) {

				$(this).addClass("open").find(".sub_category_list").show();

			});

		};
		
		
		
		$categoryModule.find(".link_sub_item").addClass("icon");
		
		
		
		$categoryModule.find("a").attr("role", "button");
		
		if($categoryModule.has(".c_cnt").length > 0) {
			
			$(".c_cnt").attr("aria-hidden", "true");
			
		};

	};
	
	
	
	/* 검색 모듈 이벤트 */
	
	if($(".search-module").length > 0) {
		
		var $searchModule = $(".search-module"),
			$searchField = $searchModule.find(".search-field"),
			$searchButton = $searchModule.find(".search-button");
		
		function $searchValue() {
		
			if($searchField.val() == "") {

				$searchModule.addClass("empty");
				$searchButton.attr("aria-disabled", "true");

			}

			else {

				$searchModule.removeClass("empty");
				$searchButton.attr("aria-disabled", "false");

			};

		}

		$searchValue();


		
		$searchField.on("keyup", function(event) {

			$searchValue();

		});
		
		if($(".search-module:last-child").length > 0) {
			
			$(".sidebar-contents").addClass("lastchild");
			
		};
		
	};
	
	
	
	/* 인기 글 모듈 이벤트 */
	
	if($(".famous-module").length > 0) {
		
		if($(".recent-module").length <= 0) {
			
			$(".famous-module").addClass("recent-module").removeClass("famous-module");
			
		};
		
	};
	
	
	
	/* 링크 모듈 이벤트 */

	if($(".link-module").length > 0) {
		
		function loadFavicon() {

			if($(".link-module").hasClass("favicon-loaded") == false) {

				var $linkModule = $(".link-module");

				$linkModule.addClass("favicon-loaded");

				$linkModule.find("li").each(function(){

					var $this = $(this).find("a"),
						$thisLink = $this.attr("href").replace("://", ":--").split(/[/?#]/)[0].replace(":--", "://").replace("http:", "").replace("https:", ""),
						$imgElement = '<img class="favicon" style="display:none" src="link" alt="링크의 아이콘" width="16" height="16" aria-hidden="true">';



					function preventNoimage() {

						$this.find(".favicon").on("error", function(event) {

							$(this).attr("src", $thisLink + "/favicon.ico");

						});

					};



					if($thisLink.indexOf("blog.me") != -1) {

						$this.prepend($imgElement.replace("link", "https://blog.naver.com/favicon.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("twitter.com") != -1) {
						
						$this.prepend($imgElement.replace("link", "https://abs.twimg.com/favicons/favicon.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("facebook.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("instagram.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("tumblr.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://assets.tumblr.com/images/favicons/favicon.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("youtube.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("dribbble.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://cdn.dribbble.com/assets/favicon-63b2904a073c89b52b19aa08cebc16a154bcf83fee8ecc6439968b1e6db569c7.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("linkedin.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("pinterest") != -1) {

						$this.prepend($imgElement.replace("link", "https://s.pinimg.com/webapp/style/images/favicon-9f8f9adf.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("paddle.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://vendors.paddle.com/assets/images/favicons/apple-touch-icon-72x72.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("github.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://assets-cdn.github.com/apple-touch-icon.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("soundcloud.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14b.ico"));

						preventNoimage();

					}

					else if($thisLink.indexOf("brunch.co.kr") != -1) {

						$this.prepend($imgElement.replace("link", "https://t1.daumcdn.net/brunch/static/icon/ios/icon120.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("britg.kr") != -1) {

						$this.prepend($imgElement.replace("link", "https://britg.kr/wp-content/uploads/britg/appicon/apple-touch-icon.png"));

						preventNoimage();

					}

					else if($thisLink.indexOf("bandcamp.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://s4.bcbits.com/img/bc_favicon.ico"));

						preventNoimage();

					}
					
					else if($thisLink.indexOf("deviantart.com") != -1) {

						$this.prepend($imgElement.replace("link", "https://st.deviantart.net/eclipse/icons/favicon-32x32.png"));

						preventNoimage();

					}

					else {

						$this.prepend($imgElement.replace("link", $thisLink + "/favicon.ico"));

					};



					$this.find(".favicon").on({

						"error": function(event) {

							$(this).remove();
							$this.addClass("no-favicon");
							console.log("The favicon located at " + $thisLink + " cannot be found because there isn't a file. It will be shown as a default icon.");

						},


						"load": function(event) {

							$(this).show();
							$this.removeClass("icon");

						}

					});

				});

			};
			
		};
		
		var $sidebarToggle = $(".open-sidebar, .blogger-toggle"),
			$waitForFavicon;

		function checkFavicon() {
			
			if($html.hasClass("fixed-sidebar") == true || $html.hasClass("show-sidebar") == true || $html.hasClass("show-blog-info") == true) {

				loadFavicon();

			};
			
		};
		
		
		
		checkFavicon();
		
		$queryWindow.on("load", function(event) {
			
			checkFavicon();
			
		});
		
		$window.setTimeout(function(event) {
			
			checkFavicon();
			
		}, 1000);
		
		
		
		function waitForFavicon() {
			
			if($html.hasClass("no-touch") == true) {
			
				$sidebarToggle.on("mouseover", function(event) {

					loadFavicon();

				});
				
				clearInterval($waitForFavicon);

			}

			else {

				$sidebarToggle.on("touchstart touchend", function(event) {

					loadFavicon();

				});
				
				clearInterval($waitForFavicon);

			}
			
		}
		
		$waitForFavicon = setInterval(waitForFavicon, 100);
		
		
		
		$queryWindow.on("resize", function(event) {
			
			loadFavicon();
			
		});
		
	};
	
	
	
	/* 지도 플러그인 제거 */
	
	if($(".tt-mapsidebar-module").length > 0) {
			
		$(".tt-mapsidebar-module").remove();
		
	};
	
	
	
	/* 구독 */
	
	if($(".menu_toolbar .btn_menu_toolbar.btn_subscription").length > 0) {
		
		if($(".fc-subscribe").length > 0) {

			var $fcSubscribe = $(".fc-subscribe"),
				$tistorySubscribe = $(".menu_toolbar .btn_menu_toolbar.btn_subscription"),
				$blogID = $tistorySubscribe.attr("data-blog-id"),
				$blogUrl = $tistorySubscribe.attr("data-url"),
				$blogDevice = $tistorySubscribe.attr("data-device");

			function subscription() {
				
				$blogID = $tistorySubscribe.attr("data-blog-id");
				$blogUrl = $tistorySubscribe.attr("data-url");
				$blogDevice = $tistorySubscribe.attr("data-device");
				
				$fcSubscribe.attr({

					"data-blog-id": $blogID,
					"data-url": $blogUrl,
					"data-device": $blogDevice

				});
				
				if($tistorySubscribe.hasClass("following") == true) {
					
					$fcSubscribe.addClass("following").find(".txt_state").text("구독중");
					
				};
				
			};
			
			subscription();
			
			$queryWindow.on("load", function(event) {
				
				subscription();
				
			});
			
			$window.setTimeout(function(event) {
				
				subscription();

			}, 1000);
			
			
		};
		
	}
	
	else {
		
		if($(".subscribe-module").length > 0) {
			
			$(".enable-subscription").remove();
			
		};
		
		if($(".ft-subscribe").length > 0) {
			
			$(".ft-subscribe").remove();
			$(".ft-left").html('<a class="fc-icon fc-circle fc-appearance ft-tistory" href="https://www.tistory.com" target="_blank" role="button">티스토리 홈</a>');
			
		};
		
		if($(".export-content").length > 0) {
			
			$(".export-content .subscribe-item").remove();
			
		}
		
	};
	
	
	
	/* 툴바 이벤트 */
	
	if($(".tistory-account").length > 0) {
		
		if($(".btn_tool .header_layer").length > 0) {
		
			var $TistoryHeaderLayer = $(".btn_tool .header_layer"),
				$TistoryHeaderInner = 0;
				$sidebarTistoryFunction = $(".tistory-account");

			function HeaderInner() {

				$TistoryHeaderInner = $TistoryHeaderLayer.clone();

				$sidebarTistoryFunction.html("");
				$TistoryHeaderInner.appendTo(".tistory-account");
				$sidebarTistoryFunction.find("*").removeAttr("style");

			};

			HeaderInner();

			$queryWindow.on("load", function(event) {

				HeaderInner();

			});

			$window.setTimeout(function(event) {

				HeaderInner();

			}, 1000);

		}
		
	};

});