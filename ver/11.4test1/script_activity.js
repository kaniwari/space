$(function() {
	
	var $html = $("html");
	
	function getCSS(fn) {

		$("head").append('<link rel="stylesheet" href="' + imagesURL + fn + fcver + '">');

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
	
	
	
	getCSS("style_activity.css");
	getCSS("style_index.css");
		
	if($html.hasClass("show-comments") == true) {

		$("#comments").attr("aria-hidden", "false").show();

	}

	else if($html.hasClass("show-export") == true) {

		$("#export").attr("aria-hidden", "false").show();

	}

	else if($html.hasClass("show-info") == true) {

		$("#related").attr("aria-hidden", "false").show();

	};



	var $itemLength = $(".related-item:not(.blank-item)").length;

	$("#related ul").addClass("itemlength" + $itemLength);


	if($itemLength < 4) {

		$("#related .more-contents").attr("href", blogLink + "category");

	};



	if($itemLength > 0) {

		$(".related-item").each(function(event) {

			var $this = $(this),
				$summary = $this.find(".index-item-summary");

			$.ajax({

				url: $this.find(".index-item-link").attr("href"),
				dataType: "html",
				success: function(res) {

					if(res.match('<meta property="og:description" content="(.*?)"') != null) {

						var $desc = res.match('<meta property="og:description" content="(.*?)"')[0];
						$desc = $desc.substring(41, $desc.length - 1).replaceAll("...", "…").replaceAll("..", "…");

						$summary.html($desc);

					}

					else {
						$this.toggleClass("protected-item article-item");
						$summary.text("이 글은 보호되어 있습니다.");
						$this.find(".index-item-thumbnail").removeAttr("style");
					};

				}

			});

		});

	};



	var $categoryKeyword = "," + ($(".gh-text a[href*='category']").text().toLowerCase()) + ",",
		$itemWrap = $(".fc-index-width, .related-content");

	preSetting(galleryKeyword, $itemWrap, "gallery", "large small poster-type card-type text-type");
	preSetting(largeGalleryKeyword, $itemWrap, "gallery", "large small poster-type card-type text-type");
	preSetting(smallGalleryKeyword, $itemWrap, "gallery", "large small poster-type card-type text-type");
	preSetting(posterTypeKeyword, $itemWrap, "gallery poster-type", "large small card-type text-type");
	preSetting(cardTypeKeyword, $itemWrap, "card-type", "gallery large small poster-type text-type");
	preSetting(textTypeKeyword, $itemWrap, "text-type", "gallery large small poster-type card-type");
	preSetting(hiddenTextKeyword, $itemWrap, "hide-text", "");
	preSetting(showTextKeyword, $itemWrap, "", "hide-text");



	if($html.hasClass("no-touch") == true) {

		$("#export .mobile").remove();

	};

});