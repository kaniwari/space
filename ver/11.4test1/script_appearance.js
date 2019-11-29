$(function() {
	
	var cssArticleWidth = articleWidth,
		cssExpandedImgWidth = expandedImgWidth;
	
	if(limitedWidth == "true") {
		
		if(cssArticleWidth > 970) {

			cssArticleWidth = 970;

		}
		
		else if(cssArticleWidth < 728) {
			
			cssArticleWidth = 728;
			
		};
		
		
		
		if(cssExpandedImgWidth > 1280) {

			cssExpandedImgWidth = 1280;

		}

		else if(cssExpandedImgWidth < cssArticleWidth) {

			cssExpandedImgWidth = cssArticleWidth;

		};
		
	};
	
	if (dayColor.toLowerCase() == "transparent") {
		
		dayColor = "#349aff";
		
	}
	
	if (dawnColor.toLowerCase() == "transparent") {
		
		dawnColor = "#2284d9";
		
	}
	
	if (nightColor.toLowerCase() == "transparent") {
		
		nightColor = "#74d5ff";
		
	}
	
	if (dayPageColor.toLowerCase() == "transparent") {
		
		dayPageColor = "#647788";
		
	};
	
	if (dawnPageColor.toLowerCase() == "transparent") {
		
		dawnPageColor = "#59656d";
		
	};
	
	if (nightPageColor.toLowerCase() == "transparent") {
		
		nightPageColor = "#748a96";
		
	};
	
	
	
	var cssHtml = "html",
		cssDay = ".day",
		cssDawn = ".dawn",
		cssNight = ".night",
		cssNoTouch = ".no-touch",
		cssTouch = ".touch",
		cssFixedSidebar = ".fixed-sidebar",
		cssOrigModuleColor = ".original-module-color",
		cssArticle = " #article.fc",
		
		htmlDay = cssHtml + cssDay,
		htmlDawn = cssHtml + cssDawn,
		htmlNight = cssHtml + cssNight,
		
		cssColor = "color:",
		cssBGColor = "background-color:",
		cssBGImg = "background-image:url(//img1.daumcdn.net/thumb/",
		cssImportant = "!important",
		
		cssTrademark = "",
		cssDawnTrademark = "",
		cssNightTrademark = "",
		cssCoverTrademark = "",
		cssSidebarTrademark = "",
		cssJacketColor = ".sidebar .info-module:before{" +
				cssBGColor + jacketColor +
			"}",
		cssJacketImage = "",
		cssDayPageColor = htmlDay + cssArticle + " *:not(.download) a{" +
				cssColor + dayPageColor +
			"}" +

			htmlDay + cssArticle + " .footnote a{" +
				cssColor + dayPageColor + cssImportant +
			"}",
		cssDayColor = htmlDay + cssNoTouch + " a:hover," +
			htmlDay + cssNoTouch + cssArticle + " *:not(.download) a:hover," +
			htmlDay + cssNoTouch + " .fc-icon:hover:before," +
			htmlDay + cssNoTouch + " .fc-icon:hover:after," +
			htmlDay + cssNoTouch + " .gnb-blog-link:hover+p," +
			htmlDay + cssNoTouch + " .gnb-blog-link:hover+p+span," +
			htmlDay + cssNoTouch + " .text-type .index-item-link:hover+.index-item-visual .index-item-text h3," +
			htmlDay + cssNoTouch + " .card-type .index-item-link:hover+.index-item-visual .index-item-text h3," +
			htmlDay + cssNoTouch + " .tt_more_preview_comments_text:hover," +
			htmlDay + cssNoTouch + " #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after," +
			htmlDay + cssNoTouch + cssFixedSidebar + " .sidebar-title-link:hover + .sidebar-title-inner p," +
			htmlDay + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory:hover:before," +
			htmlDay + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a:hover," +
			htmlDay + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a:hover + .post-module-visual p," +
			htmlDay + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory:hover:before," +
			htmlDay + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button:hover:before," +
			htmlDay + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button:hover:after," +
			htmlDay + cssTouch + " a.hover," +
			htmlDay + cssTouch + cssArticle + " *:not(.download) a.hover," +
			htmlDay + cssTouch + " .fc-icon.hover:before," +
			htmlDay + cssTouch + " .fc-icon.hover:after," +
			htmlDay + cssTouch + " .gnb-blog-link.hover+p," +
			htmlDay + cssTouch + " .gnb-blog-link.hover+p+span," +
			htmlDay + cssTouch + " .text-type .index-item-link.hover+.index-item-visual .index-item-text h3," +
			htmlDay + cssTouch + " .card-type .index-item-link.hover+.index-item-visual .index-item-text h3," +
			htmlDay + cssTouch + " .tt_more_preview_comments_text.hover," +
			htmlDay + cssTouch + " #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after," +
			htmlDay + cssTouch + cssFixedSidebar + " .sidebar-title-link.hover + .sidebar-title-inner p," +
			htmlDay + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory.hover:before," +
			htmlDay + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a.hover," +
			htmlDay + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a.hover + .post-module-visual p," +
			htmlDay + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory.hover:before," +
			htmlDay + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button.hover:before," +
			htmlDay + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button.hover:after," +
			htmlDay + ' .comment-toggle[aria-expanded="true"]:before,' +
			htmlDay + ' .comment-item.located .comment-desc:after{' +
				cssColor + dayColor +
			"}" +
			
			htmlDay + cssNoTouch + cssArticle + " .footnote a:hover," +
			htmlDay + cssNoTouch + cssArticle + ' figure[data-ke-type="opengraph"] a:hover div.og-text p.og-title,' +
			htmlDay + cssNoTouch + cssArticle + " .another-category a:hover," +
			htmlDay + cssNoTouch + cssArticle + " .txc-info a:hover:not(.compare)," +
			htmlDay + ".sysui" + cssNoTouch + " #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after," +
			htmlNight + cssNoTouch + " #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after," +
			htmlDay + cssTouch + cssArticle + " .footnote a.hover," +
			htmlDay + cssTouch + cssArticle + ' figure[data-ke-type="opengraph"] a.hover div.og-text p.og-title,' +
			htmlDay + cssTouch + cssArticle + " .another-category a.hover," +
			htmlDay + cssTouch + cssArticle + " .txc-info a.hover:not(.compare)," +
			htmlDay + ".sysui" + cssTouch + " #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after," +
			htmlNight + cssTouch + " #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after{" +
				cssColor + dayColor + cssImportant +
			"}" +
			
			htmlDay + cssNoTouch + cssArticle + ' button.btn_more:hover,' +
			htmlDay + cssNoTouch + cssArticle + ' button.btn_less:hover,' +
			htmlDay + cssNoTouch + cssArticle + ' div[data-ke-type*="moreLess"] a.btn-toggle-moreless:hover,' +
			htmlDay + cssNoTouch + cssArticle + " .download a:hover," +
			htmlDay + cssNoTouch + cssArticle + " figure.fileblock a:hover," +
			htmlDay + cssNoTouch + " #view-more-next:hover," +
			htmlDay + cssNoTouch + " #view-more-prev:hover," +
			htmlDay + cssNoTouch + " .tag-cloud li a:hover," +
			htmlDay + cssNoTouch + " .tags-trail a:hover," +
			cssHtml + cssNoTouch + ":not(" + cssDawn + ")" + cssArticle + " .container_postbtn .btn_subscription:hover," +
			htmlDay + cssNoTouch + " .alert.error a:hover," + 
			htmlDay + cssTouch + cssArticle + ' button.btn_more.hover,' +
			htmlDay + cssTouch + cssArticle + ' button.btn_less.hover,' +
			htmlDay + cssTouch + cssArticle + ' div[data-ke-type*="moreLess"] a.btn-toggle-moreless.hover,' +
			htmlDay + cssTouch + cssArticle + " .download a.hover," +
			htmlDay + cssTouch + cssArticle + " figure.fileblock a.hover," +
			htmlDay + cssTouch + " #view-more-next.hover," +
			htmlDay + cssTouch + " #view-more-prev.hover," +
			htmlDay + cssTouch + " .tag-cloud li a.hover," +
			htmlDay + cssTouch + " .tags-trail a.hover," +
			cssHtml + cssTouch + ":not(" + cssDawn + ")" + cssArticle + " .container_postbtn .btn_subscription.hover," +
			htmlDay + cssTouch + " .alert.error a.hover{" +
				cssBGColor + dayColor + 
			"}" +
			
			htmlDay + cssNoTouch + ":not(.sysui) #textRefresh:hover," +
			htmlDay + cssTouch + ":not(.sysui) #textRefresh.hover{" +
				"background:" + dayColor + cssImportant +
			"}",
		cssDawnPageColor = htmlDawn + cssArticle + " *:not(.download) a{" +
				cssColor + dawnPageColor +
			"}" +
			
			htmlDawn + cssArticle + " .footnote a{" +
				cssColor + dawnPageColor + cssImportant +
			"}",
		cssDawnColor = htmlDawn + cssNoTouch + " a:hover," +
			htmlDawn + cssNoTouch + cssArticle + " *:not(.download) a:hover," +
			htmlDawn + cssNoTouch + " .fc-icon:hover:before," +
			htmlDawn + cssNoTouch + " .fc-icon:hover:after," +
			htmlDawn + cssNoTouch + " .gnb-blog-link:hover+p," +
			htmlDawn + cssNoTouch + " .gnb-blog-link:hover+p+span," +
			htmlDawn + cssNoTouch + " .text-type .index-item-link:hover+.index-item-visual .index-item-text h3," +
			htmlDawn + cssNoTouch + " .card-type .index-item-link:hover+.index-item-visual .index-item-text h3," +
			htmlDawn + cssNoTouch + " .tt_more_preview_comments_text:hover," +
			htmlDawn + cssNoTouch + " #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after," +
			htmlDawn + cssNoTouch + cssFixedSidebar + " .sidebar-title-link:hover + .sidebar-title-inner p," +
			htmlDawn + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory:hover:before," +
			htmlDawn + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a:hover," +
			htmlDawn + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a:hover + .post-module-visual p," +
			htmlDawn + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory:hover:before," +
			htmlDawn + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button:hover:before," +
			htmlDawn + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button:hover:after," +
			htmlDawn + cssTouch + " a.hover," +
			htmlDawn + cssTouch + cssArticle + " *:not(.download) a.hover," +
			htmlDawn + cssTouch + " .fc-icon.hover:before," +
			htmlDawn + cssTouch + " .fc-icon.hover:after," +
			htmlDawn + cssTouch + " .gnb-blog-link.hover+p," +
			htmlDawn + cssTouch + " .gnb-blog-link.hover+p+span," +
			htmlDawn + cssTouch + " .text-type .index-item-link.hover+.index-item-visual .index-item-text h3," +
			htmlDawn + cssTouch + " .card-type .index-item-link.hover+.index-item-visual .index-item-text h3," +
			htmlDawn + cssTouch + " .tt_more_preview_comments_text.hover," +
			htmlDawn + cssTouch + " #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after," +
			htmlDawn + cssTouch + cssFixedSidebar + " .sidebar-title-link.hover + .sidebar-title-inner p," +
			htmlDawn + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a.hover," +
			htmlDawn + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a.hover + .post-module-visual p," +
			htmlDawn + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory.hover:before," +
			htmlDawn + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button.hover:before," +
			htmlDawn + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button.hover:after," +
			htmlDawn + ' .comment-toggle[aria-expanded="true"]:before,' +
			htmlDawn + ' .comment-item.located .comment-desc:after {' +
				cssColor + dawnColor +
			"}" +
			
			htmlDawn + cssNoTouch + cssArticle + " .footnote a:hover," +
			htmlDawn + cssNoTouch + cssArticle + ' figure[data-ke-type="opengraph"] a:hover div.og-text p.og-title,' +
			htmlDawn + cssNoTouch + cssArticle + " .another-category a:hover," +
			htmlDawn + cssNoTouch + cssArticle + " .txc-info a:hover:not(.compare)," +
			htmlDawn + cssTouch + cssArticle + " .footnote a.hover," +
			htmlDawn + cssTouch + cssArticle + ' figure[data-ke-type="opengraph"] a.hover div.og-text p.og-title,' +
			htmlDawn + cssTouch + cssArticle + " .another-category a.hover," +
			htmlDawn + cssTouch + cssArticle + " .txc-info a.hover:not(.compare){" +
				"color: " + dawnColor + cssImportant +
			"}" +
			
			htmlDawn + cssNoTouch + cssArticle + ' button.btn_more:hover,' +
			htmlDawn + cssNoTouch + cssArticle + ' button.btn_less:hover,' +
			htmlDawn + cssNoTouch + cssArticle + ' div[data-ke-type*="moreLess"] a.btn-toggle-moreless:hover,' +
			htmlDawn + cssNoTouch + cssArticle + " .download a:hover," +
			htmlDawn + cssNoTouch + cssArticle + " figure.fileblock a:hover," +
			htmlDawn + cssNoTouch + " #view-more-next:hover," +
			htmlDawn + cssNoTouch + " #view-more-prev:hover," +
			htmlDawn + cssNoTouch + " .tag-cloud li a:hover," +
			htmlDawn + cssNoTouch + " .tags-trail a:hover," +
			htmlDawn + cssNoTouch + cssArticle + " .container_postbtn .btn_subscription:hover," +
			htmlDawn + cssNoTouch + " .alert.error a:hover," +
			htmlDawn + cssTouch + cssArticle + ' button.btn_more.hover,' +
			htmlDawn + cssTouch + cssArticle + ' button.btn_less.hover,' +
			htmlDawn + cssTouch + cssArticle + ' div[data-ke-type*="moreLess"] a.btn-toggle-moreless.hover,' +
			htmlDawn + cssTouch + cssArticle + " .download a.hover," +
			htmlDawn + cssTouch + cssArticle + " figure.fileblock a.hover," +
			htmlDawn + cssTouch + " #view-more-next.hover," +
			htmlDawn + cssTouch + " #view-more-prev.hover," +
			htmlDawn + cssTouch + " .tag-cloud li a.hover," +
			htmlDawn + cssTouch + " .tags-trail a.hover," +
			htmlDawn + cssTouch + cssArticle + " .container_postbtn .btn_subscription.hover," +
			htmlDawn + cssTouch + " .alert.error a.hover{" +
				cssBGColor + dawnColor +
			"}" +
			
			htmlDawn + cssNoTouch + " #textRefresh:hover," +
			htmlDawn + cssTouch + " #textRefresh.hover{" +
				"background: " + dawnColor + cssImportant +
			"}",
		cssNightPageColor = htmlNight + cssArticle + " *:not(.download) a{" +
				cssColor + nightPageColor +
			"}" +
			
			htmlNight + cssArticle + " .footnote a{" +
				cssColor + nightPageColor + cssImportant +
			"}",
		cssNightColor = htmlNight + cssNoTouch + " a:hover," +
			htmlNight + cssNoTouch + cssArticle + " *:not(.download) a:hover," +
			htmlNight + cssNoTouch + " .fc-icon:hover:not(.fc-circle):before," +
			htmlNight + cssNoTouch + " .fc-icon:hover:not(.fc-circle):after," +
			htmlNight + cssNoTouch + " .gnb-blog-link:hover+p," +
			htmlNight + cssNoTouch + " .gnb-blog-link:hover + p + span," +
			htmlNight + cssNoTouch + " .text-type .index-item-link:hover+.index-item-visual .index-item-text h3," +
			htmlNight + cssNoTouch + " .card-type .index-item-link:hover+.index-item-visual .index-item-text h3," +
			htmlNight + cssNoTouch + cssArticle + " .download a:hover," +
			htmlNight + cssNoTouch + cssArticle + " figure.fileblock a:hover *," +
			htmlNight + cssNoTouch + " #view-more-next:hover," +
			htmlNight + cssNoTouch + " #view-more-prev:hover," +
			htmlNight + cssNoTouch + " .tag-cloud li a:hover," +
			htmlNight + cssNoTouch + " .tt_more_preview_comments_text:hover," +
			htmlNight + cssNoTouch + " #export:not(.disabled) .export-link:hover + .export-visual.subscribe-on-tistory:after," +
			htmlNight + cssNoTouch + cssFixedSidebar + " .sidebar-title-link:hover + .sidebar-title-inner p," +
			htmlNight + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a:hover," +
			htmlNight + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a:hover + .post-module-visual p," +
			htmlNight + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory:hover:before," +
			htmlNight + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button:hover:before," +
			htmlNight + cssNoTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button:hover:after," +
			htmlNight + cssTouch + " a.hover," +
			htmlNight + cssTouch + cssArticle + " *:not(.download) a.hover," +
			htmlNight + cssTouch + " .fc-icon.hover:not(.fc-circle):before," +
			htmlNight + cssTouch + " .fc-icon.hover:not(.fc-circle):after," +
			htmlNight + cssTouch + " .gnb-blog-link.hover+p," +
			htmlNight + cssTouch + " .gnb-blog-link.hover+p+span," +
			htmlNight + cssTouch + " .text-type .index-item-link.hover+.index-item-visual .index-item-text h3," +
			htmlNight + cssTouch + " .card-type .index-item-link.hover+.index-item-visual .index-item-text h3," +
			htmlNight + cssTouch + cssArticle + " .download a.hover," +
			htmlNight + cssTouch + cssArticle + " figure.fileblock a.hover *," +
			htmlNight + cssTouch + " #view-more-next.hover," +
			htmlNight + cssTouch + " #view-more-prev.hover," +
			htmlNight + cssTouch + " .tag-cloud li a:hover," +
			htmlNight + cssTouch + " .tt_more_preview_comments_text.hover," +
			htmlNight + cssTouch + " #export:not(.disabled) .export-link.hover + .export-visual.subscribe-on-tistory:after," +
			htmlNight + cssTouch + cssFixedSidebar + " .sidebar-title-link.hover + .sidebar-title-inner p," +
			htmlNight + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a.hover," +
			htmlNight + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar a.hover + .post-module-visual p," +
			htmlNight + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .inner_header_layer .img_common_tistory.hover:before," +
			htmlNight + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button.hover:before," +
			htmlNight + cssTouch + cssFixedSidebar + cssOrigModuleColor + " .sidebar button.hover:after," +
			htmlNight + ' .comment-toggle[aria-expanded="true"]:before,' +
			htmlNight + ' .comment-item.located .comment-desc:after{' +
				cssColor + nightColor +
			"}" +

			htmlNight + cssNoTouch + cssArticle + " .footnote a:hover," +
			htmlNight + cssNoTouch + " #textRefresh:hover," +
			htmlNight + cssNoTouch + cssArticle + ' figure[data-ke-type="opengraph"] a:hover div.og-text p.og-title,' +
			htmlNight + cssNoTouch + cssArticle + " .another-category a:hover," +
			htmlNight + cssNoTouch + cssArticle + " .txc-info a:hover:not(.compare)," +
			cssHtml + cssNoTouch + " .close-sidebar:hover:before," +
			cssHtml + cssNoTouch + " .close-blog-info:hover:before," +
			cssHtml + cssNoTouch + ":not(" + cssFixedSidebar + ") .search-button:hover:before," +
			cssHtml + cssNoTouch + ":not(" + cssFixedSidebar + ") .sidebar-func-list a:hover:before," +
			cssHtml + cssNoTouch + " .lb-close:hover:before," +
			cssHtml + cssNoTouch + " .index-item-slider button:hover:before," +
			cssHtml + cssNoTouch + " .reply-wrap .comment-desc a:hover," +
			cssHtml + cssNoTouch + ":not(" + cssFixedSidebar + ") .inner_header_layer>.info_profile .link_setting:hover," +
			cssHtml + cssNoTouch + ":not(" + cssFixedSidebar + ") .inner_header_layer .img_common_tistory:hover:before," +
			htmlNight + cssNoTouch + cssArticle + ' button.btn_more:hover,' +
			htmlNight + cssNoTouch + cssArticle + ' button.btn_less:hover,' +
			htmlNight + cssNoTouch + cssArticle + ' div[data-ke-type="moreLess"] a.btn-toggle-moreless:hover,' +
			cssHtml + cssNoTouch + ".page-cover-support.gh-top #tt-body-page .open-sidebar:hover:before," +
			cssHtml + cssNoTouch + ".page-cover-support.gh-top #tt-body-page .open-sidebar:hover:after," +
			cssHtml + cssNoTouch + ".page-cover-support.gh-top #tt-body-guestbook .open-sidebar:hover:before," +
			cssHtml + cssNoTouch + ".page-cover-support.gh-top #tt-body-guestbook .open-sidebar:hover:after," +
			cssHtml + cssNoTouch + ".page-cover-support #tt-body-page #global-header a:hover," +
			cssHtml + cssNoTouch + cssFixedSidebar + ".page-cover-support #global-header .admin-func a:hover:before," +
			htmlNight + cssNoTouch + cssArticle + " .download a:hover," +
			htmlNight + cssNoTouch + cssArticle + " figure.fileblock a:hover," +
			htmlNight + cssNoTouch + cssArticle + " figure.fileblock a:hover *," +
			htmlNight + cssNoTouch + " .tags-trail a:hover," +
			htmlNight + cssNoTouch + " #textRefresh:hover," +
			htmlNight + cssNoTouch + " .tag-cloud li a:hover," +
			htmlNight + cssTouch + cssArticle + " .footnote a.hover," +
			htmlNight + cssTouch + " #textRefresh.hover," +
			htmlNight + cssTouch + cssArticle + ' figure[data-ke-type="opengraph"] a.hover div.og-text p.og-title,' +
			htmlNight + cssTouch + cssArticle + " .txc-info a.hover:not(.compare)," +
			htmlNight + cssTouch + cssArticle + " .another-category a.hover," +
			cssHtml + cssTouch + " .close-sidebar.hover:before," +
			cssHtml + cssTouch + " .close-blog-info.hover:before," +
			cssHtml + cssTouch + ":not(" + cssFixedSidebar + ") .search-button.hover:before," +
			cssHtml + cssTouch + ":not(" + cssFixedSidebar + ") .sidebar-func-list a.hover:before," +
			cssHtml + cssTouch + " .lb-close.hover:before," +
			cssHtml + cssTouch + " .index-item-slider button.hover:before," +
			cssHtml + cssTouch + " .reply-wrap .comment-desc a.hover," +
			cssHtml + cssTouch + ":not(" + cssFixedSidebar + ") .inner_header_layer>.info_profile .link_setting.hover," +
			cssHtml + cssTouch + ":not(" + cssFixedSidebar + ") .inner_header_layer .img_common_tistory.hover:before," +
			htmlNight + cssTouch + cssArticle + " .download a.hover," +
			htmlNight + cssTouch + cssArticle + " figure.fileblock a.hover," +
			htmlNight + cssTouch + cssArticle + " figure.fileblock a.hover *," +
			htmlNight + cssTouch + cssArticle + ' button.btn_more.hover,' +
			htmlNight + cssTouch + cssArticle + ' button.btn_less.hover,' +
			htmlNight + cssTouch + cssArticle + ' div[data-ke-type="moreLess"] a.btn-toggle-moreless.hover,' +
			htmlNight + cssTouch + " .tags-trail a.hover," +
			htmlNight + cssTouch + " #textRefresh.hover," +
			htmlNight + cssTouch + " .tag-cloud li a.hover," +
			cssHtml + cssTouch + ".page-cover-support.gh-top #tt-body-page .open-sidebar.hover:before," +
			cssHtml + cssTouch + ".page-cover-support.gh-top #tt-body-page .open-sidebar.hover:after," +
			cssHtml + cssTouch + ".page-cover-support.gh-top #tt-body-guestbook .open-sidebar.hover:before," +
			cssHtml + cssTouch + ".page-cover-support.gh-top #tt-body-guestbook .open-sidebar.hover:after," +
			cssHtml + cssTouch + ".page-cover-support #tt-body-page #global-header a.hover," +
			cssHtml + cssNoTouch + cssFixedSidebar + ".page-cover-support #global-header .admin-func a.hover:before{" +
				cssColor + nightColor + cssImportant +
			"}" +
			
			htmlNight + cssNoTouch + " .fc-circle:hover:before," +
			htmlNight + cssTouch + " .fc-circle.hover:before{" +
				cssBGColor + nightColor +
			"}",
		cssAltCover = "",
		cssSecondCover = "",
		cssThirdCover = "",
		cssFourthCover = "",
		cssExpand = "",
		cssSidebarButtonColor = "",
		cssSidebarHover = "",
		cssSidebarColor = "",
		cssSidebarImage = "";
	
	
	
	if (trademark != "undefined") {
		
		cssTrademark = ".gnb-title .trademark{" +
		cssBGImg + "R600x0/?fname=" + trademark + ")" + cssImportant +
		"}" +
		".trademark-header{" +
		cssBGImg + "R900x0/?fname=" + trademark + ")" + cssImportant +
		"}";
		
		if (dawnTrademark != "undefined") {

			cssDawnTrademark = htmlDawn + " .gnb-title .trademark{" +
				cssBGImg + "R600x0/?fname=" + dawnTrademark + ")" + cssImportant +
			"}" +
			
			htmlDawn + " .trademark-header{" +
				cssBGImg + "R900x0/?fname=" + dawnTrademark + ")" + cssImportant +
			"}";

		};
		
		if (nightTrademark != "undefined") {

			cssNightTrademark = htmlNight + " .gnb-title .trademark{" +
				cssBGImg + "R600x0/?fname=" + nightTrademark + ")" + cssImportant +
			"}" +
			
			htmlNight + " .trademark-header{" +
				cssBGImg + "R900x0/?fname=" + nightTrademark + ")" + cssImportant +
			"}";

		};
		
		if (coverTrademark != "undefined") {

			cssCoverTrademark = cssHtml + ".page-cover-support:not(.alert-support) #tt-body-page .go-to-index-visual .gnb-title .trademark," +
			cssHtml + ".page-cover-support:not(.alert-support) #tt-body-guestbook .go-to-index-visual .gnb-title .trademark{" +
				cssBGImg + "R600x0/?fname=" + coverTrademark + ")" + cssImportant +
			"}";

		};
		
	};
	
	
	
	if(jacketImage != "undefined") {
		
		cssJacketImage = ".info-module .align-center{" +
			"text-shadow:0 5px 10px rgba(0,0,0,.1)" +
		"}" +

		".info-module-icon{" +
			"box-shadow:0 5px 10px rgba(0,0,0,.1)" +
		"}" +

		".sidebar div.info-module:before{" +
			cssBGImg + "R1000x0/?fname=" + jacketImage + ")" + cssImportant +
		"}" +

		".info-module:after{" +
			'content:"";' +
			"pointer-events:none;" +
			"position:absolute;" +
			"top:0;" +
			"left:0;" +
			"width:100%;" +
			"height:100%;" +
			"background:linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,0.6))" +
		"}";
		
	};
	
	
	
	if(jacketImage != "undefined" || jacketColor.toLowerCase() != "transparent") {
		
		cssJacketColor = cssJacketColor + ".info-module{color:#fff!important}";
		
	};
	
	
	
	if(altCover != "undefined") {
		
		cssAltCover = "#wrap div.page-cover,#wrap div.parent-page-cover{" +
				cssBGImg + "R48x0/?fname=" + altCover + ")" +
			"}" +
			
			"#wrap div.small-cover{" +
				cssBGImg + "R800x0/?fname=" + altCover + ")" +
			"}" +
			
			"#wrap div.medium-cover{" +
				cssBGImg + "R1280x0/?fname=" + altCover + ")" +
			"}" +
			
			"#wrap div.large-cover{" +
				cssBGImg + "R1920x0/?fname=" + altCover + ")" +
			"}";
		
	};
	
	
	
	if(secondAltCover != "undefined") {
		
		cssSecondCover = cssHtml + ".alt2 #wrap div.page-cover," + cssHtml + ".alt2 #wrap div.parent-page-cover{" +
				cssBGImg + "R48x0/?fname=" + secondAltCover + ")" +
			"}" +
			
			cssHtml + ".alt2 #wrap div.small-cover{" +
				cssBGImg + "R800x0/?fname=" + secondAltCover + ")" +
			"}" +
			
			cssHtml + ".alt2 #wrap div.medium-cover{" +
				cssBGImg + "R1280x0/?fname=" + secondAltCover + ")" +
			"}" +
			
			cssHtml + ".alt2 #wrap div.large-cover{" +
				cssBGImg + "R1920x0/?fname=" + secondAltCover + ")" +
			"}";
		
	};
	
	
	
	if(thirdAltCover != "undefined") {
		
		cssThirdCover = cssHtml + ".alt3 #wrap div.page-cover," + cssHtml + ".alt3 #wrap div.parent-page-cover{" +
				cssBGImg + "R48x0/?fname=" + thirdAltCover + ")" +
			"}" +
			
			cssHtml + ".alt3 #wrap div.small-cover{" +
				cssBGImg + "R800x0/?fname=" + thirdAltCover + ")" +
			"}" +
			
			cssHtml + ".alt3 #wrap div.medium-cover{" +
				cssBGImg + "R1280x0/?fname=" + thirdAltCover + ")" +
			"}" +
			
			cssHtml + ".alt3 #wrap div.large-cover{" +
				cssBGImg + "R1920x0/?fname=" + thirdAltCover + ")" +
			"}";
		
	};
	
	
	
	if(fourthAltCover != "undefined") {
		
		cssFourthCover = cssHtml + ".alt4 #wrap div.page-cover," + cssHtml + ".alt4 #wrap div.parent-page-cover{" +
				cssBGImg + "R48x0/?fname=" + fourthAltCover + ")" +
			"}" +
			
			cssHtml + ".alt4 #wrap div.small-cover{" +
				cssBGImg + "R800x0/?fname=" + fourthAltCover + ")" +
			"}" +
			
			cssHtml + ".alt4 #wrap div.medium-cover{" +
				cssBGImg + "R1280x0/?fname=" + fourthAltCover + ")" +
			"}" +
			
			cssHtml + ".alt4 #wrap div.large-cover{" +
				cssBGImg + "R1920x0/?fname=" + fourthAltCover + ")" +
			"}";
		
	};
	
	if(sidebarButtonColor.toLowerCase() != "transparent") {

		var cssSidebarDawnButtonColor = "",
			cssSidebarNightButtonColor = "";
		
		cssSidebarButtonColor = cssHtml + cssFixedSidebar + " body .sidebar-area," +
			cssHtml + cssFixedSidebar + " .sidebar," +
			cssHtml + cssFixedSidebar + " .sidebar a," +
			cssHtml + cssFixedSidebar + " .sidebar a:before," +
			cssHtml + cssFixedSidebar + " .sidebar a:after," +
			cssHtml + cssFixedSidebar + " .sidebar input," +
			cssHtml + cssFixedSidebar + " .sidebar button:before," +
			cssHtml + cssFixedSidebar + ".day.sysui .sidebar button:before," +
			cssHtml + cssFixedSidebar + " .sidebar button:after," +
			cssHtml + cssFixedSidebar + ".day.sysui .sidebar button:after," +
			cssHtml + cssFixedSidebar + " .inner_header_layer .txt_email," +
			cssHtml + cssFixedSidebar + " .inner_header_layer .tit_list_type," +
			cssHtml + cssFixedSidebar + " .category-module .c_cnt," +
			cssHtml + cssFixedSidebar + ".day.sysui .category-module .c_cnt," +
			cssHtml + cssFixedSidebar + ".day.sysui .thumbnail-module-type .post-module-visual span," +
			cssHtml + cssFixedSidebar + " .thumbnail-module-type .post-module-visual span{" +
			cssColor + sidebarButtonColor +
			"}" +
			
			cssHtml + cssFixedSidebar + " .inner_header_layer > .info_profile .txt_id {" +
			cssColor + sidebarButtonColor + cssImportant +
			"}" +
			
			cssHtml + cssFixedSidebar + " .sidebar .module:before," +
			cssHtml + cssFixedSidebar + " .inner_header_layer .wrap_list+.wrap_toolbar:before{" +
			"border-top-color:" + sidebarButtonColor +
			"}" +
		
			cssHtml + cssFixedSidebar + " .search-module:before," +
			cssHtml + cssFixedSidebar + " .thumbnail-module-type .post-module-visual figure:before," +
			cssHtml + cssFixedSidebar + " .sidebar-scrollbar-inner{" +
			cssBGColor + sidebarButtonColor +
			"}";
		
		if(sidebarDawnButtonColor.toLowerCase() != "transparent") {

			cssSidebarDawnButtonColor = cssSidebarButtonColor.replaceAll("html", "html.dawn").replaceAll(sidebarButtonColor, sidebarDawnButtonColor);

		};
		
		if(sidebarNightButtonColor.toLowerCase() != "transparent") {

			cssSidebarNightButtonColor = cssSidebarButtonColor.replaceAll("html", "html.night").replaceAll(sidebarButtonColor, sidebarNightButtonColor);
			
			cssSidebarNightButtonColor = cssSidebarNightButtonColor + "@media (prefers-color-scheme: dark) {" + cssSidebarNightButtonColor.replaceAll(".night", ".day.sysui") + "}";

		};
		
		cssSidebarButtonColor = cssSidebarButtonColor + cssSidebarDawnButtonColor + cssSidebarNightButtonColor;

	}
	
	else {
		
		$("html").addClass("original-module-color");
		
	}

	if(sidebarHoverColor.toLowerCase() != "transparent") {

		var cssSidebarDawnHover = "",
			cssSidebarNightHover = "";
		
		cssSidebarHover = cssHtml + cssNoTouch + cssFixedSidebar + " .sidebar-area a:hover:not(.txt_id_type2)," +
			cssHtml + cssNoTouch + cssFixedSidebar + " .sidebar-area button:hover:before," +
			cssHtml + cssNoTouch + cssFixedSidebar + " .sidebar-area button:hover:after," +
			cssHtml + cssNoTouch + cssFixedSidebar + " .sidebar-title-link:hover + .sidebar-title-inner p," +
			cssHtml + cssNoTouch + cssFixedSidebar + " .inner_header_layer .img_common_tistory:hover:before," +
			cssHtml + cssNoTouch + cssFixedSidebar + " .sidebar a:hover + .post-module-visual p," +
			cssHtml + cssTouch + cssFixedSidebar + " .sidebar-area a.hover:not(.txt_id_type2)," +
			cssHtml + cssTouch + cssFixedSidebar + " .sidebar-area button.hover:before," +
			cssHtml + cssTouch + cssFixedSidebar + " .sidebar-area button.hover:after," +
			cssHtml + cssTouch + cssFixedSidebar + " .sidebar-title-link.hover + .sidebar-title-inner p," +
			cssHtml + cssTouch + cssFixedSidebar + " .inner_header_layer .img_common_tistory.hover:before," +
			cssHtml + cssTouch + cssFixedSidebar + " .sidebar a.hover + .post-module-visual p{" +
			cssColor + sidebarHoverColor + cssImportant +
			"}";
	
		if(sidebarDawnHoverColor.toLowerCase() != "transparent") {

			cssSidebarDawnHover = cssSidebarHover.replaceAll("html", "html.dawn").replaceAll(sidebarHoverColor, sidebarDawnHoverColor);

		};
		
		if(sidebarNightHoverColor.toLowerCase() != "transparent") {

			cssSidebarNightHover = cssSidebarHover.replaceAll("html", "html.night").replaceAll(sidebarHoverColor, sidebarNightHoverColor);
			
			cssSidebarNightHover = cssSidebarNightHover + "@media (prefers-color-scheme: dark) {" + cssSidebarNightHover.replaceAll(".night", ".day.sysui") + "}";

		};
		
		cssSidebarHover = cssSidebarHover + cssSidebarDawnHover + cssSidebarNightHover;

	};
	
	if(sidebarColor.toLowerCase() != "transparent") {
		
		var cssSidebarDawnColor = "",
			cssSidebarNightColor = "";
		
		cssSidebarColor = cssHtml + cssFixedSidebar + " body .sidebar-area{" +
			cssBGColor + sidebarColor + cssImportant +
			"}";
		
		if(sidebarDawnColor.toLowerCase() != "transparent") {
		
			cssSidebarDawnColor = cssSidebarColor.replaceAll("html", "html.dawn").replaceAll(sidebarColor, sidebarDawnColor);

		};
		
		if(sidebarNightColor.toLowerCase() != "transparent") {
		
			cssSidebarNightColor = cssSidebarColor.replaceAll("html", "html.night").replaceAll(sidebarColor, sidebarNightColor);
			
			cssSidebarNightColor = cssSidebarNightColor + "@media (prefers-color-scheme: dark) {" + cssSidebarNightColor.replaceAll(".night", ".day.sysui") + "}";

		};
		
		cssSidebarColor = cssSidebarColor + cssSidebarDawnColor + cssSidebarNightColor;
		
	};
	
	if(sidebarImage != "undefined") {
		
		$(".sidebar-area").prepend('<div class="sidebar-image" aria-hidden="true"></div>');
		
		var cssSidebarDawnImage = "",
			cssSidebarNightImage = "";
		
		cssSidebarImage = cssHtml + cssFixedSidebar + " .sidebar-image," +
			cssHtml + cssFixedSidebar + " .sidebar-image:before," +
			cssHtml + cssFixedSidebar + " .sidebar-image:after{" +
			cssBGImg + "R900x0/?fname=" + sidebarImage + ");" +
			"background-position:" + sidebarImgPosition + ";" +
			"background-size:" + sidebarImgSize + ";" +
			"background-repeat:" + sidebarImgRepeat +
			"}";
		
		if(sidebarDawnImage != "undefined") {
		
			cssSidebarDawnImage = cssSidebarImage.replaceAll("html", "html.dawn").replaceAll(sidebarImage, sidebarDawnImage);

		};
		
		if(sidebarNightImage != "undefined") {
		
			cssSidebarNightImage = cssSidebarImage.replaceAll("html", "html.night").replaceAll(sidebarImage, sidebarNightImage);
			
			cssSidebarNightImage = cssSidebarNightImage + "@media (prefers-color-scheme: dark) {" + cssSidebarNightImage.replaceAll(".night", ".day.sysui") + "}";

		};
		
		cssSidebarImage = cssSidebarImage + cssSidebarDawnImage + cssSidebarNightImage;
		
	};
	
	
	
	if (sidebarTrademark != "undefined") {
		
		var cssSidebarDawnTrademark = "",
			cssSidebarNightTrademark = "";
		
		cssSidebarTrademark = cssHtml + cssFixedSidebar + " .sidebar-title-inner.sidebar-trademark{" +
		cssBGImg + "R700x0/?fname=" + sidebarTrademark + ")" + cssImportant +
		"}";
		
		if (sidebarDawnTrademark != "undefined") {

			cssSidebarDawnTrademark = cssSidebarTrademark.replaceAll("html", "html.dawn").replaceAll(sidebarTrademark, sidebarDawnTrademark);

		};
		
		if (sidebarNightTrademark != "undefined") {

			cssSidebarNightTrademark = cssSidebarTrademark.replaceAll("html", "html.night").replaceAll(sidebarTrademark, sidebarNightTrademark);
			
			cssSidebarNightTrademark = cssSidebarNightTrademark + "@media (prefers-color-scheme: dark) {" + cssSidebarNightTrademark.replaceAll(".night", ".day.sysui") + "}";

		};
		
		cssSidebarTrademark = cssSidebarTrademark + cssSidebarDawnTrademark + cssSidebarNightTrademark;
		
	};
	
	
	
	if($("#article").length > 0) {
		
		if($("#article").hasClass("expand-support") == true) {
			
			cssExpand = "@media (min-width:761px) and (min-width:" + cssArticleWidth + "px){" +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support figure.expand:not(.no-edge)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".hljs-expand>pre.procode-wrap{" +
					"margin-left:-20px;" +
					"margin-right:-20px" +
				"}" +
			"}" +
				
			"@media (min-width:761px) and (min-width:" + (cssArticleWidth + 40) + "px) and (max-width:" + (cssExpandedImgWidth + 39) + "px){" +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support .imageblock.no-edge.expand:not(.float):not(figure)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support figure.no-edge.expand," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ":not(.edge-support) .imageblock.expand:not(.float):not(figure)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ":not(.edge-support) figure.expand{" +
					"margin-left:calc((100vw - " + (cssArticleWidth + 40) + "px)/-2);" +
					"margin-right:calc((100vw - " + (cssArticleWidth + 40) + "px)/-2)" +
				"}" +

				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support figure.expand:not(.no-edge)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".hljs-expand>pre.procode-wrap{" +
					"margin-left:calc((100vw - " + cssArticleWidth + "px)/-2);" +
					"margin-right:calc((100vw - " + cssArticleWidth + "px)/-2)" +
				"}" +
			"}" +

			"@media (min-width:761px) and (min-width:" + cssExpandedImgWidth + "px){" +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support figure.expand:not(.no-edge)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".hljs-expand>pre.procode-wrap," +
				cssHtml + ".msie:not(" + cssFixedSidebar + ")" + cssArticle + " .imageblock.expand:not(.float)," +
				cssHtml + ".msie:not(" + cssFixedSidebar + ")" + cssArticle + " figure.expand," +
				cssHtml + ".msie:not(" + cssFixedSidebar + ")" + cssArticle + ".hljs-expand>pre.procode-wrap," +
				cssHtml + ".edge-browser:not(" + cssFixedSidebar + ")" + cssArticle + " .imageblock.expand:not(.float)," +
				cssHtml + ".edge-browser:not(" + cssFixedSidebar + ")" + cssArticle + " figure.expand," +
				cssHtml + ".edge-browser:not(" + cssFixedSidebar + ")" + cssArticle + ".hljs-expand>pre.procode-wrap{" +
					"margin-left:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant + ";" +
					"margin-right:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant +
				"}" +
			"}" +

			"@media (min-width:761px) and (min-width:" + (cssExpandedImgWidth + 40) + "px){" +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support .imageblock.no-edge.expand:not(figure):not(.float)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ".edge-support figure.no-edge.expand," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ":not(.edge-support) .imageblock.expand:not(.float):not(figure)," +
				cssHtml + ":not(" + cssFixedSidebar + ")" + cssArticle + ":not(.edge-support) figure.expand{" +
					"margin-left:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant + ";" +
					"margin-right:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant +
				"}" +
			"}";
			
			if(fixedSidebar == "true") {
				
				cssExpand = cssExpand + "@media (min-width:1041px) and (min-width:" + (cssArticleWidth + 280) + "px){" +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support figure.expand:not(.no-edge)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".hljs-expand>pre.procode-wrap{" +
						"margin-left:-20px;" +
						"margin-right:-20px" +
					"}" +
				"}" +

				"@media (min-width:1041px) and (min-width:" + (cssArticleWidth + 320) + "px) and (max-width:" + (cssExpandedImgWidth + 319) + "px){" +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support .imageblock.no-edge.expand:not(.float):not(figure)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support figure.no-edge.expand," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ":not(.edge-support) .imageblock.expand:not(.float):not(figure)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ":not(.edge-support) figure.expand{" +
						"margin-left:calc((100vw - " + (cssArticleWidth + 320) + "px)/-2);" +
						"margin-right:calc((100vw - " + (cssArticleWidth + 320) + "px)/-2)" +
					"}" +

					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support figure.expand:not(.no-edge)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".hljs-expand>pre.procode-wrap{" +
						"margin-left:calc((100vw - " + (cssArticleWidth + 280) + "px)/-2);" +
						"margin-right:calc((100vw - " + (cssArticleWidth + 280) + "px)/-2)" +
					"}" +
				"}" +

				"@media (min-width:1041px) and (min-width:" + (cssExpandedImgWidth + 280) + "px){" +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support figure.expand:not(.no-edge)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".hljs-expand>pre.procode-wrap," +
					cssHtml + cssFixedSidebar + ".msie" + cssArticle + " .imageblock.expand:not(.float)," +
					cssHtml + cssFixedSidebar + ".msie" + cssArticle + " figure.expand," +
					cssHtml + cssFixedSidebar + ".msie" + cssArticle + ".hljs-expand>pre.procode-wrap," +
					cssHtml + cssFixedSidebar + ".edge-browser" + cssArticle + " .imageblock.expand:not(.float)," +
					cssHtml + cssFixedSidebar + ".edge-browser" + cssArticle + " figure.expand," +
					cssHtml + cssFixedSidebar + ".edge-browser" + cssArticle + ".hljs-expand>pre.procode-wrap{" +
						"margin-left:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant + ";" +
						"margin-right:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant +
					"}" +
				"}" +

				"@media (min-width:1041px) and (min-width:" + (cssExpandedImgWidth + 320) + "px){" +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support .imageblock.no-edge.expand:not(figure):not(.float)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ".edge-support figure.no-edge.expand," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ":not(.edge-support) .imageblock.expand:not(.float):not(figure)," +
					cssHtml + cssFixedSidebar + "" + cssArticle + ":not(.edge-support) figure.expand{" +
						"margin-left:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant + ";" +
						"margin-right:calc(" + (cssExpandedImgWidth - cssArticleWidth) + "px/-2)" + cssImportant +
					"}" +
				"}";
				
			};
			
		};
		
	};
	
	
	$("head").append("<style>" +
		cssTrademark + cssDawnTrademark + cssNightTrademark + cssCoverTrademark + cssJacketColor + cssJacketImage +	cssDayPageColor + cssDayColor + cssDawnPageColor + cssDawnColor + cssNightPageColor + cssNightColor + cssAltCover + cssSecondCover + cssThirdCover + cssFourthCover + cssSidebarButtonColor + cssSidebarHover + cssSidebarColor + cssSidebarImage + cssSidebarTrademark + 
		
		"pre{-moz-tab-size:" + tabSize + ";tab-size:" + tabSize + "}" +

		'.imageblock:not(figure) img[width="' + cssArticleWidth + '"]{' +
			"width:100%" +
		"}" +

		".comments{" +
			"max-width:calc(" + cssArticleWidth + "px + 80px)" + cssImportant +
		"}" +

		cssArticle + ' hr:not([data-ke-type="hr"]):not([data-ke-type="horizontalRule"]){' +
			"width: calc(100vw + 40px)" + cssImportant + ";" +
			"margin-left:calc((100vw - " + cssArticleWidth + "px + 40px)/-2)" + cssImportant +
		"}" +

		"@media (max-width:" + cssArticleWidth + "px){" +

			cssArticle + ' hr:not([data-ke-type="hr"]):not([data-ke-type="horizontalRule"]){' +
				"width:auto" + cssImportant + ";" +
				"margin-left:-20px" + cssImportant + ";" +
				"margin-right:-20px" + cssImportant +
			"}" +

		"}" +

		"@media (min-width:401px) and (min-width:calc(" + cssArticleWidth + "px + 40px)) and (max-width:760px){" +

			cssArticle + " pre," +
			cssArticle + " .table-content," +
			cssArticle + " .imageblock:not(figure):not(.no-edge)," +
			cssArticle + " .txc-info," +
			cssArticle + ' p[class*="moreless"],' +
			cssArticle + ' div[class*="tt_adsense"],' +
			cssArticle + " .another-category{" +
				"margin-left:calc((100vw - " + cssArticleWidth + "px)/-2)" + cssImportant + ";" +
				"margin-right:calc((100vw - " + cssArticleWidth + "px)/-2)" + cssImportant +
			"}" +

			cssArticle + " pre," +
			cssArticle + " .txc-info," +
			cssArticle + " .table-content>div," +
			cssArticle + ' p[class*="moreless"],' +
			cssArticle + " .another-category," +
			cssArticle + " .imageblock:not(figure):not(.no-edge) .ExifInfo," +
			cssArticle + " .imageblock:not(figure):not(.no-edge) .cap1{" +
				"padding-left:calc((100vw - " + cssArticleWidth + "px)/2)" + cssImportant + ";" +
				"padding-right:calc((100vw - " + cssArticleWidth + "px)/2)" + cssImportant +
			"}" +

			cssArticle + " .txc-info .photo{" +
				"right:calc((100vw - " + cssArticleWidth + "px)/2)" + cssImportant +
			"}" +

		"}" +

		 cssArticle + " figure figcaption{" +
			"max-width:" + cssArticleWidth + "px;" +
			"margin-left:auto;" +
			"margin-right:auto" +
		"}" +

		".page-limit-width{max-width:" + cssArticleWidth + "px" + cssImportant + "}" +

		 cssExpand +

		"@media (prefers-color-scheme: dark) {" +
			
			(cssNightTrademark + cssNightPageColor + cssNightColor + cssSidebarNightTrademark).replaceAll(".night", ".day.sysui") +
					 
		 "}" +
	"</style>");
	
});