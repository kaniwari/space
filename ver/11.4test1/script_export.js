$(function() {

	if($("meta[property*='plink']").length > 0) {
		
		var $window = window,
			$postID = $("meta[property*='plink']").attr("content"),
			$encodeArticleURL = encodeURIComponent($postID),
			$postIDOrig = $postID.replace("http://", "").replace("https://", "").replace("/notice/", "/").split("/"),
			$headline = $("meta[property='og:title']").attr("content"),
			$encodeHead = encodeURIComponent($headline),
			$encodeHeadPlus = $encodeHead.replace(/%20/g, "+"),
			$encodeTitle = encodeURIComponent(title),
			$encodeTitlePlus = $encodeTitle.replace(/%20/g, "+"),
			$popupEvent = ",toolbar=no,menubar=no,status=no,scrollbars=no";





		$(".export-link").on("click", function(event) {

			event.preventDefault();

			var eventData = $(this).data("export");

			switch (eventData) {

				case "kakaotalk":	

				var templateArgs = {
					TITLE: $headline,
					DESCRIPTION: $("meta[property='og:description']").attr("content"),
					PROFILE_IMAGE: "https:" + $("link[sizes='152x152']").attr("href"),
					PROFILE_NAME: $("meta[name='by']").attr("content"),
					BUTTON1_PC_URL: $("meta[property='og:url']").attr("content"),
					BUTTON1_MO_URL: $("meta[property='og:url']").attr("content"),
					BUTTON1_TITLE: title + "에서 읽기"
				};

				if($("meta[property='og:image']").attr("content") != "https://t1.daumcdn.net/cssjs/icon/557567EA016E200001") {

					templateArgs.IMAGE1_URL = $("meta[property='og:image']").attr("content"), Kakao.Link.sendCustom({

						templateId: 7461,
						templateArgs: templateArgs

					});

				}

				else {

					Kakao.Link.sendCustom({
						templateId: 7469,
						templateArgs: templateArgs
					})

				}

				break;

				case "line":
				location.href = "line://msg/text/" + encodeURIComponent("[공유] ") + $encodeHead + "%20-%20" + $encodeTitle + "%20" + $encodeArticleURL;
				break;

				case "twitter":
				$window.open("https://twitter.com/intent/tweet?text=" + $encodeHeadPlus + "+-+" + $encodeTitlePlus + "&url=" + $encodeArticleURL, "트위터", "width=640,height=446" + $popupEvent);
				break;

				case "facebook":
				$window.open("https://www.facebook.com/sharer/sharer.php?u=" + $encodeArticleURL, "Facebook", "width=640,height=624" + $popupEvent);
				break;

				case "kakaostory":
				Kakao.Story.share({
					url: $postID,
					text: $headline + " - " + title
				});
				break;

				case "band":
				$window.open("http://band.us/plugin/share?body=" + $encodeHead + "%20-%20" + $encodeTitle + "%20" + $encodeArticleURL + "&route=" + $encodeArticleURL, "Band", "width=600,height=655" + $popupEvent);
				break;

				case "naver":
				$window.open("http://share.naver.com/web/shareView.nhn?url=" + $encodeArticleURL + "&title=" + encodeURIComponent("[스크랩] ") + $encodeTitle + "%20-%20" + $encodeHead, "NAVER", "width=640,height=640" + $popupEvent);
				break;

				case "pocket":
				$window.open("https://getpocket.com/edit?url=" + $encodeArticleURL + "&title=" + $encodeHeadPlus + "+-+" + $encodeTitlePlus, "Pocket");
				break;

				case "evernote":
				$window.open("https://www.evernote.com/clip.action?url=" + $encodeArticleURL + "&title=" + $encodeHeadPlus + "+-+" + $encodeTitlePlus, "Evernote");
				break;

			}

		});
		
	}
	
	else {
		
		$("#export").addClass("disabled");
		$(".export-link").attr("aria-disabled", "true");
		
	};

});