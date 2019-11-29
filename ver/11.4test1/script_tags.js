$(function() {
	
	$("head").append('<link rel="stylesheet" href="' + imagesURL + "style_tags.css" + fcver + '">');
	
	var $html = $("html"),
		$head = $("head"),
		$tagCloud = $(".tag-cloud"),
		$tagItem = $tagCloud.find("li:not(.blank-tag)").length,
		$categoryKeyword = ",tags,";
	
	
	
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

	$tagCloud.addClass("taglength" + $tagItem);

});