document.addEventListener("DOMContentLoaded",function(a){function r(a,b,c){d="html.no-touch.fixed-sidebar .sidebar-area a:hover:not(.txt_id_type2),html.no-touch.fixed-sidebar .sidebar-area button:hover:before,html.no-touch.fixed-sidebar .sidebar-area button:hover:after,html.no-touch.fixed-sidebar .sidebar-title-link:hover + .sidebar-title-inner p,html.no-touch.fixed-sidebar .inner_header_layer .img_common_tistory:hover:before,html.no-touch.fixed-sidebar .sidebar a:hover + .post-module-visual p,html.touch.fixed-sidebar .sidebar-area a.hover:not(.txt_id_type2),html.touch.fixed-sidebar .sidebar-area button.hover:before,html.touch.fixed-sidebar .sidebar-area button.hover:after,html.touch.fixed-sidebar .sidebar-title-link.hover + .sidebar-title-inner p,html.touch.fixed-sidebar .inner_header_layer .img_common_tistory.hover:before,html.touch.fixed-sidebar .sidebar a.hover + .post-module-visual p{color:"+
a+"!important}";"transparent"!=sidebarDawnHoverColor.toLowerCase()&&(t=d.replaceAll("html","html.dawn").replaceAll(a,b));"transparent"!=sidebarNightHoverColor.toLowerCase()&&(k=d.replaceAll("html","html.night").replaceAll(a,c),k=k+"@media (prefers-color-scheme: dark) {"+k.replaceAll(".night",".day.sysui")+"}");d=d+t+k}a=articleWidth;var b=expandedImgWidth,u="",l="",t="",k="",v="",m="",w="",n="",x="",c="";"true"==limitedWidth&&(970<a?a=970:728>a&&(a=728),1280<b?b=1280:b<a&&(b=a));"transparent"==dayColor.toLowerCase()&&
(dayColor="#349aff");"transparent"==dawnColor.toLowerCase()&&(dawnColor="#2284d9");"transparent"==nightColor.toLowerCase()&&(nightColor="#74d5ff");"transparent"==dayPageColor.toLowerCase()&&(dayPageColor="#647788");"transparent"==dawnPageColor.toLowerCase()&&(dawnPageColor="#59656d");"transparent"==nightPageColor.toLowerCase()&&(nightPageColor="#748a96");var y="",z="",q="",A="",e="",B=".sidebar .info-module:before{background-color:"+jacketColor+"}",C="",J="html.day #article.fc *:not(.download) a{color:"+
dayPageColor+"}html.day #article.fc .footnote a{color:"+dayPageColor+"!important}",K='html.day.no-touch a:hover,html.day.no-touch #article.fc *:not(.download) a:hover,html.day.no-touch .fc-icon:hover:before,html.day.no-touch .fc-icon:hover:after,html.day.no-touch .gnb-blog-link:hover+p,html.day.no-touch .gnb-blog-link:hover+p+span,html.day.no-touch .text-type .index-item-link:hover+.index-item-visual .index-item-text h2,html.day.no-touch .card-type .index-item-link:hover+.index-item-visual .index-item-text h2,html.day.no-touch .tt_more_preview_comments_text:hover,html.day.no-touch #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after,html.day.no-touch.fixed-sidebar .sidebar-title-link:hover + .sidebar-title-inner p,html.day.no-touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory:hover:before,html.day.no-touch.fixed-sidebar.original-module-color .sidebar a:hover,html.day.no-touch.fixed-sidebar.original-module-color .sidebar a:hover + .post-module-visual p,html.day.no-touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory:hover:before,html.day.no-touch.fixed-sidebar.original-module-color .sidebar button:hover:before,html.day.no-touch.fixed-sidebar.original-module-color .sidebar button:hover:after,html.day.touch a.hover,html.day.touch #article.fc *:not(.download) a.hover,html.day.touch .fc-icon.hover:before,html.day.touch .fc-icon.hover:after,html.day.touch .gnb-blog-link.hover+p,html.day.touch .gnb-blog-link.hover+p+span,html.day.touch .text-type .index-item-link.hover+.index-item-visual .index-item-text h2,html.day.touch .card-type .index-item-link.hover+.index-item-visual .index-item-text h2,html.day.touch .tt_more_preview_comments_text.hover,html.day.touch #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after,html.day.touch.fixed-sidebar .sidebar-title-link.hover + .sidebar-title-inner p,html.day.touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory.hover:before,html.day.touch.fixed-sidebar.original-module-color .sidebar a.hover,html.day.touch.fixed-sidebar.original-module-color .sidebar a.hover + .post-module-visual p,html.day.touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory.hover:before,html.day.touch.fixed-sidebar.original-module-color .sidebar button.hover:before,html.day.touch.fixed-sidebar.original-module-color .sidebar button.hover:after,html.day .comment-toggle[aria-expanded="true"]:before,html.day .comment-item.located .comment-desc:after{color:'+
dayColor+'}html.day.no-touch #article.fc .footnote a:hover,html.day.no-touch #article.fc figure[data-ke-type="opengraph"] a:hover div.og-text p.og-title,html.day.no-touch #article.fc .another-category a:hover,html.day.no-touch #article.fc .txc-info a:hover:not(.compare),html.day.sysui.no-touch #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after,html.night.no-touch #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after,html.day.touch #article.fc .footnote a.hover,html.day.touch #article.fc figure[data-ke-type="opengraph"] a.hover div.og-text p.og-title,html.day.touch #article.fc .another-category a.hover,html.day.touch #article.fc .txc-info a.hover:not(.compare),html.day.sysui.touch #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after,html.night.touch #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after{color:'+
dayColor+'!important}html.day.no-touch #article.fc button.btn_more:hover,html.day.no-touch #article.fc button.btn_less:hover,html.day.no-touch #article.fc div[data-ke-type*="moreLess"] a.btn-toggle-moreless:hover,html.day.no-touch #article.fc .download a:hover,html.day.no-touch #article.fc figure.fileblock a:hover,html.day.no-touch #view-more-next:hover,html.day.no-touch #view-more-prev:hover,html.day.no-touch .tag-cloud li a:hover,html.day.no-touch .tags-trail a:hover,html.no-touch:not(.dawn) #article.fc .container_postbtn .btn_subscription:hover,html.day.no-touch .alert.error a:hover,html.day.touch #article.fc button.btn_more.hover,html.day.touch #article.fc button.btn_less.hover,html.day.touch #article.fc div[data-ke-type*="moreLess"] a.btn-toggle-moreless.hover,html.day.touch #article.fc .download a.hover,html.day.touch #article.fc figure.fileblock a.hover,html.day.touch #view-more-next.hover,html.day.touch #view-more-prev.hover,html.day.touch .tag-cloud li a.hover,html.day.touch .tags-trail a.hover,html.touch:not(.dawn) #article.fc .container_postbtn .btn_subscription.hover,html.day.touch .alert.error a.hover{background-color:'+
dayColor+"}html.day.no-touch:not(.sysui) #textRefresh:hover,html.day.touch:not(.sysui) #textRefresh.hover{background:"+dayColor+"!important}",L="html.dawn #article.fc *:not(.download) a{color:"+dawnPageColor+"}html.dawn #article.fc .footnote a{color:"+dawnPageColor+"!important}",M='html.dawn.no-touch a:hover,html.dawn.no-touch #article.fc *:not(.download) a:hover,html.dawn.no-touch .fc-icon:hover:before,html.dawn.no-touch .fc-icon:hover:after,html.dawn.no-touch .gnb-blog-link:hover+p,html.dawn.no-touch .gnb-blog-link:hover+p+span,html.dawn.no-touch .text-type .index-item-link:hover+.index-item-visual .index-item-text h2,html.dawn.no-touch .card-type .index-item-link:hover+.index-item-visual .index-item-text h2,html.dawn.no-touch .tt_more_preview_comments_text:hover,html.dawn.no-touch #export:not(.disabled) .export-link:hover+.export-visual.subscribe-on-tistory:after,html.dawn.no-touch.fixed-sidebar .sidebar-title-link:hover + .sidebar-title-inner p,html.dawn.no-touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory:hover:before,html.dawn.no-touch.fixed-sidebar.original-module-color .sidebar a:hover,html.dawn.no-touch.fixed-sidebar.original-module-color .sidebar a:hover + .post-module-visual p,html.dawn.no-touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory:hover:before,html.dawn.no-touch.fixed-sidebar.original-module-color .sidebar button:hover:before,html.dawn.no-touch.fixed-sidebar.original-module-color .sidebar button:hover:after,html.dawn.touch a.hover,html.dawn.touch #article.fc *:not(.download) a.hover,html.dawn.touch .fc-icon.hover:before,html.dawn.touch .fc-icon.hover:after,html.dawn.touch .gnb-blog-link.hover+p,html.dawn.touch .gnb-blog-link.hover+p+span,html.dawn.touch .text-type .index-item-link.hover+.index-item-visual .index-item-text h2,html.dawn.touch .card-type .index-item-link.hover+.index-item-visual .index-item-text h2,html.dawn.touch .tt_more_preview_comments_text.hover,html.dawn.touch #export:not(.disabled) .export-link.hover+.export-visual.subscribe-on-tistory:after,html.dawn.touch.fixed-sidebar .sidebar-title-link.hover + .sidebar-title-inner p,html.dawn.touch.fixed-sidebar.original-module-color .sidebar a.hover,html.dawn.touch.fixed-sidebar.original-module-color .sidebar a.hover + .post-module-visual p,html.dawn.touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory.hover:before,html.dawn.touch.fixed-sidebar.original-module-color .sidebar button.hover:before,html.dawn.touch.fixed-sidebar.original-module-color .sidebar button.hover:after,html.dawn .comment-toggle[aria-expanded="true"]:before,html.dawn .comment-item.located .comment-desc:after {color:'+
dawnColor+'}html.dawn.no-touch #article.fc .footnote a:hover,html.dawn.no-touch #article.fc figure[data-ke-type="opengraph"] a:hover div.og-text p.og-title,html.dawn.no-touch #article.fc .another-category a:hover,html.dawn.no-touch #article.fc .txc-info a:hover:not(.compare),html.dawn.touch #article.fc .footnote a.hover,html.dawn.touch #article.fc figure[data-ke-type="opengraph"] a.hover div.og-text p.og-title,html.dawn.touch #article.fc .another-category a.hover,html.dawn.touch #article.fc .txc-info a.hover:not(.compare){color: '+
dawnColor+'!important}html.dawn.no-touch #article.fc button.btn_more:hover,html.dawn.no-touch #article.fc button.btn_less:hover,html.dawn.no-touch #article.fc div[data-ke-type*="moreLess"] a.btn-toggle-moreless:hover,html.dawn.no-touch #article.fc .download a:hover,html.dawn.no-touch #article.fc figure.fileblock a:hover,html.dawn.no-touch #view-more-next:hover,html.dawn.no-touch #view-more-prev:hover,html.dawn.no-touch .tag-cloud li a:hover,html.dawn.no-touch .tags-trail a:hover,html.dawn.no-touch #article.fc .container_postbtn .btn_subscription:hover,html.dawn.no-touch .alert.error a:hover,html.dawn.touch #article.fc button.btn_more.hover,html.dawn.touch #article.fc button.btn_less.hover,html.dawn.touch #article.fc div[data-ke-type*="moreLess"] a.btn-toggle-moreless.hover,html.dawn.touch #article.fc .download a.hover,html.dawn.touch #article.fc figure.fileblock a.hover,html.dawn.touch #view-more-next.hover,html.dawn.touch #view-more-prev.hover,html.dawn.touch .tag-cloud li a.hover,html.dawn.touch .tags-trail a.hover,html.dawn.touch #article.fc .container_postbtn .btn_subscription.hover,html.dawn.touch .alert.error a.hover{background-color:'+
dawnColor+"}html.dawn.no-touch #textRefresh:hover,html.dawn.touch #textRefresh.hover{background: "+dawnColor+"!important}",D="html.night #article.fc *:not(.download) a{color:"+nightPageColor+"}html.night #article.fc .footnote a{color:"+nightPageColor+"!important}",E='html.night.no-touch a:hover,html.night.no-touch #article.fc *:not(.download) a:hover,html.night.no-touch .fc-icon:hover:not(.fc-circle):before,html.night.no-touch .fc-icon:hover:not(.fc-circle):after,html.night.no-touch .gnb-blog-link:hover+p,html.night.no-touch .gnb-blog-link:hover + p + span,html.night.no-touch .text-type .index-item-link:hover+.index-item-visual .index-item-text h2,html.night.no-touch .card-type .index-item-link:hover+.index-item-visual .index-item-text h2,html.night.no-touch #article.fc .download a:hover,html.night.no-touch #article.fc figure.fileblock a:hover *,html.night.no-touch #view-more-next:hover,html.night.no-touch #view-more-prev:hover,html.night.no-touch .tag-cloud li a:hover,html.night.no-touch .tt_more_preview_comments_text:hover,html.night.no-touch #export:not(.disabled) .export-link:hover + .export-visual.subscribe-on-tistory:after,html.night.no-touch.fixed-sidebar .sidebar-title-link:hover + .sidebar-title-inner p,html.night.no-touch.fixed-sidebar.original-module-color .sidebar a:hover,html.night.no-touch.fixed-sidebar.original-module-color .sidebar a:hover + .post-module-visual p,html.night.no-touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory:hover:before,html.night.no-touch.fixed-sidebar.original-module-color .sidebar button:hover:before,html.night.no-touch.fixed-sidebar.original-module-color .sidebar button:hover:after,html.night.touch a.hover,html.night.touch #article.fc *:not(.download) a.hover,html.night.touch .fc-icon.hover:not(.fc-circle):before,html.night.touch .fc-icon.hover:not(.fc-circle):after,html.night.touch .gnb-blog-link.hover+p,html.night.touch .gnb-blog-link.hover+p+span,html.night.touch .text-type .index-item-link.hover+.index-item-visual .index-item-text h2,html.night.touch .card-type .index-item-link.hover+.index-item-visual .index-item-text h2,html.night.touch #article.fc .download a.hover,html.night.touch #article.fc figure.fileblock a.hover *,html.night.touch #view-more-next.hover,html.night.touch #view-more-prev.hover,html.night.touch .tag-cloud li a:hover,html.night.touch .tt_more_preview_comments_text.hover,html.night.touch #export:not(.disabled) .export-link.hover + .export-visual.subscribe-on-tistory:after,html.night.touch.fixed-sidebar .sidebar-title-link.hover + .sidebar-title-inner p,html.night.touch.fixed-sidebar.original-module-color .sidebar a.hover,html.night.touch.fixed-sidebar.original-module-color .sidebar a.hover + .post-module-visual p,html.night.touch.fixed-sidebar.original-module-color .inner_header_layer .img_common_tistory.hover:before,html.night.touch.fixed-sidebar.original-module-color .sidebar button.hover:before,html.night.touch.fixed-sidebar.original-module-color .sidebar button.hover:after,html.night .comment-toggle[aria-expanded="true"]:before,html.night .comment-item.located .comment-desc:after{color:'+
nightColor+'}html.night.no-touch #article.fc .footnote a:hover,html.night.no-touch #textRefresh:hover,html.night.no-touch #article.fc figure[data-ke-type="opengraph"] a:hover div.og-text p.og-title,html.night.no-touch #article.fc .another-category a:hover,html.night.no-touch #article.fc .txc-info a:hover:not(.compare),html.no-touch .close-sidebar:hover:before,html.no-touch .close-blog-info:hover:before,html.no-touch:not(.fixed-sidebar) .search-button:hover:before,html.no-touch:not(.fixed-sidebar) .sidebar-func-list a:hover:before,html.no-touch .lb-close:hover:before,html.no-touch .index-item-slider button:hover:before,html.no-touch .reply-wrap .comment-desc a:hover,html.no-touch:not(.fixed-sidebar) .inner_header_layer>.info_profile .link_setting:hover,html.no-touch:not(.fixed-sidebar) .inner_header_layer .img_common_tistory:hover:before,html.night.no-touch #article.fc button.btn_more:hover,html.night.no-touch #article.fc button.btn_less:hover,html.night.no-touch #article.fc div[data-ke-type="moreLess"] a.btn-toggle-moreless:hover,html.no-touch.page-cover-support.gh-top #tt-body-page .open-sidebar:hover:before,html.no-touch.page-cover-support.gh-top #tt-body-page .open-sidebar:hover:after,html.no-touch.page-cover-support.gh-top #tt-body-guestbook .open-sidebar:hover:before,html.no-touch.page-cover-support.gh-top #tt-body-guestbook .open-sidebar:hover:after,html.no-touch.page-cover-support #tt-body-page #global-header a:hover,html.no-touch.fixed-sidebar.page-cover-support #global-header .admin-func a:hover:before,html.night.no-touch #article.fc .download a:hover,html.night.no-touch #article.fc figure.fileblock a:hover,html.night.no-touch #article.fc figure.fileblock a:hover *,html.night.no-touch .tags-trail a:hover,html.night.no-touch #textRefresh:hover,html.night.no-touch .tag-cloud li a:hover,html.night.no-touch .alert.error a:hover,html.night.touch #article.fc .footnote a.hover,html.night.touch #textRefresh.hover,html.night.touch #article.fc figure[data-ke-type="opengraph"] a.hover div.og-text p.og-title,html.night.touch #article.fc .txc-info a.hover:not(.compare),html.night.touch #article.fc .another-category a.hover,html.touch .close-sidebar.hover:before,html.touch .close-blog-info.hover:before,html.touch:not(.fixed-sidebar) .search-button.hover:before,html.touch:not(.fixed-sidebar) .sidebar-func-list a.hover:before,html.touch .lb-close.hover:before,html.touch .index-item-slider button.hover:before,html.touch .reply-wrap .comment-desc a.hover,html.touch:not(.fixed-sidebar) .inner_header_layer>.info_profile .link_setting.hover,html.touch:not(.fixed-sidebar) .inner_header_layer .img_common_tistory.hover:before,html.night.touch #article.fc .download a.hover,html.night.touch #article.fc figure.fileblock a.hover,html.night.touch #article.fc figure.fileblock a.hover *,html.night.touch #article.fc button.btn_more.hover,html.night.touch #article.fc button.btn_less.hover,html.night.touch #article.fc div[data-ke-type="moreLess"] a.btn-toggle-moreless.hover,html.night.touch .tags-trail a.hover,html.night.touch #textRefresh.hover,html.night.touch .tag-cloud li a.hover,html.night.touch .alert.error a.hover,html.touch.page-cover-support.gh-top #tt-body-page .open-sidebar.hover:before,html.touch.page-cover-support.gh-top #tt-body-page .open-sidebar.hover:after,html.touch.page-cover-support.gh-top #tt-body-guestbook .open-sidebar.hover:before,html.touch.page-cover-support.gh-top #tt-body-guestbook .open-sidebar.hover:after,html.touch.page-cover-support #tt-body-page #global-header a.hover,html.touch.fixed-sidebar.page-cover-support #global-header .admin-func a.hover:before{color:'+
nightColor+"!important}html.night.no-touch .fc-circle:hover:before,html.night.touch .fc-circle.hover:before{background-color:"+nightColor+"}",F="",G="",H="",I="",p="",f="",d="",g="",h="";"undefined"!=trademark&&(y=".gnb-title .trademark{background-image:url(//img1.daumcdn.net/thumb/R600x0/?scode=mtistory2&fname="+trademark+")!important}.trademark-header{background-image:url(//img1.daumcdn.net/thumb/R900x0/?scode=mtistory2&fname="+trademark+")!important}","undefined"!=dawnTrademark&&(z="html.dawn .gnb-title .trademark{background-image:url(//img1.daumcdn.net/thumb/R600x0/?scode=mtistory2&fname="+
dawnTrademark+")!important}html.dawn .trademark-header{background-image:url(//img1.daumcdn.net/thumb/R900x0/?scode=mtistory2&fname="+dawnTrademark+")!important}"),"undefined"!=nightTrademark&&(q="html.night .gnb-title .trademark{background-image:url(//img1.daumcdn.net/thumb/R600x0/?scode=mtistory2&fname="+nightTrademark+")!important}html.night .trademark-header{background-image:url(//img1.daumcdn.net/thumb/R900x0/?scode=mtistory2&fname="+nightTrademark+")!important}"),"undefined"!=coverTrademark&&
(A="html.page-cover-support:not(.alert-support) #tt-body-page .go-to-index-visual .gnb-title .trademark,html.page-cover-support:not(.alert-support) #tt-body-guestbook .go-to-index-visual .gnb-title .trademark{background-image:url(//img1.daumcdn.net/thumb/R600x0/?scode=mtistory2&fname="+coverTrademark+")!important}"));"undefined"!=jacketImage&&(C=".info-module .align-center{text-shadow:0 5px 10px rgba(0,0,0,.1)}.info-module-icon{box-shadow:0 5px 10px rgba(0,0,0,.1)}.sidebar section.info-module:before{background-image:url(//img1.daumcdn.net/thumb/R1000x0/?scode=mtistory2&fname="+
jacketImage+')!important}.info-module:after{content:"";pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,0.6))}');if("undefined"!=jacketImage||"transparent"!=jacketColor.toLowerCase())B+=".info-module{color:#fff!important}";"undefined"!=altCover&&(F="#wrap div.base-page-cover, #wrap div.parent-page-cover{background-image:url(//img1.daumcdn.net/thumb/R48x0/?scode=mtistory2&fname="+altCover+")}#wrap div.small-cover{background-image:url(//img1.daumcdn.net/thumb/R1024x0/?scode=mtistory2&fname="+
altCover+")}#wrap div.medium-cover{background-image:url(//img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname="+altCover+")}#wrap div.large-cover{background-image:url(//img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname="+altCover+")}#wrap div.exlarge-cover{background-image:url(//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+altCover+")}");"undefined"!=secondAltCover&&(G="html.alt2 #wrap div.base-page-cover,html.alt2 #wrap div.parent-page-cover{background-image:url(//img1.daumcdn.net/thumb/R48x0/?scode=mtistory2&fname="+
secondAltCover+")}html.alt2 #wrap div.small-cover{background-image:url(//img1.daumcdn.net/thumb/R1024x0/?scode=mtistory2&fname="+secondAltCover+")}html.alt2 #wrap div.medium-cover{background-image:url(//img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname="+secondAltCover+")}html.alt2 #wrap div.large-cover{background-image:url(//img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname="+secondAltCover+")}html.alt2 #wrap div.exlarge-cover{background-image:url(//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+
secondAltCover+")}");"undefined"!=thirdAltCover&&(H="html.alt3 #wrap div.base-page-cover,html.alt3 #wrap div.parent-page-cover{background-image:url(//img1.daumcdn.net/thumb/R48x0/?scode=mtistory2&fname="+thirdAltCover+")}html.alt3 #wrap div.small-cover{background-image:url(//img1.daumcdn.net/thumb/R1024x0/?scode=mtistory2&fname="+thirdAltCover+")}html.alt3 #wrap div.medium-cover{background-image:url(//img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname="+thirdAltCover+")}html.alt3 #wrap div.large-cover{background-image:url(//img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname="+
thirdAltCover+")}html.alt3 #wrap div.exlarge-cover{background-image:url(//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+secondAltCover+")}");"undefined"!=fourthAltCover&&(I="html.alt4 #wrap div.base-page-cover,html.alt4 #wrap div.parent-page-cover{background-image:url(//img1.daumcdn.net/thumb/R48x0/?scode=mtistory2&fname="+fourthAltCover+")}html.alt4 #wrap div.small-cover{background-image:url(//img1.daumcdn.net/thumb/R1024x0/?scode=mtistory2&fname="+fourthAltCover+")}html.alt4 #wrap div.medium-cover{background-image:url(//img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname="+
fourthAltCover+")}html.alt4 #wrap div.large-cover{background-image:url(//img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname="+fourthAltCover+")}html.alt4 #wrap div.exlarge-cover{background-image:url(//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+secondAltCover+")}");"transparent"!=sidebarButtonColor.toLowerCase()?(f="html.fixed-sidebar body .sidebar-area,html.fixed-sidebar .sidebar,html.fixed-sidebar .sidebar a,html.fixed-sidebar .sidebar a:before,html.fixed-sidebar .sidebar a:after,html.fixed-sidebar .sidebar input,html.fixed-sidebar .sidebar button:before,html.fixed-sidebar.day.sysui .sidebar button:before,html.fixed-sidebar .sidebar button:after,html.fixed-sidebar.day.sysui .sidebar button:after,html.fixed-sidebar .inner_header_layer .txt_email,html.fixed-sidebar .inner_header_layer .tit_list_type,html.fixed-sidebar .category-module .c_cnt,html.fixed-sidebar.day.sysui .category-module .c_cnt,html.fixed-sidebar.day.sysui .thumbnail-module-type .post-module-visual span,html.fixed-sidebar .thumbnail-module-type .post-module-visual span{color:"+
sidebarButtonColor+"}html.fixed-sidebar .inner_header_layer > .info_profile .txt_id {color:"+sidebarButtonColor+"!important}html.fixed-sidebar .sidebar .module:before,html.fixed-sidebar .inner_header_layer .wrap_list+.wrap_toolbar:before{border-top-color:"+sidebarButtonColor+"}html.fixed-sidebar .search-module:before,html.fixed-sidebar .thumbnail-module-type .post-module-visual-image:before,html.fixed-sidebar .thumbnail-module-type .post-module-visual figure:before,html.fixed-sidebar .sidebar-scrollbar-inner{background-color:"+
sidebarButtonColor+"}","transparent"!=sidebarDawnButtonColor.toLowerCase()&&(u=f.replaceAll("html","html.dawn").replaceAll(sidebarButtonColor,sidebarDawnButtonColor)),"transparent"!=sidebarNightButtonColor.toLowerCase()&&(l=f.replaceAll("html","html.night").replaceAll(sidebarButtonColor,sidebarNightButtonColor),l=l+"@media (prefers-color-scheme: dark) {"+l.replaceAll(".night",".day.sysui")+"}"),f=f+u+l):document.getElementsByTagName("html")[0].classList.add("original-module-color");"transparent"!=
sidebarHoverColor.toLowerCase()?r(sidebarHoverColor,sidebarDawnHoverColor,sidebarNightHoverColor):(sidebarHoverColor=dayColor,sidebarDawnHoverColor=dawnColor,sidebarNightHoverColor=nightColor,r(dayColor,dawnColor,nightColor));"transparent"!=sidebarColor.toLowerCase()&&(g="html.fixed-sidebar body .sidebar-area{background-color:"+sidebarColor+"!important}","transparent"!=sidebarDawnColor.toLowerCase()&&(v=g.replaceAll("html","html.dawn").replaceAll(sidebarColor,sidebarDawnColor)),"transparent"!=sidebarNightColor.toLowerCase()&&
(m=g.replaceAll("html","html.night").replaceAll(sidebarColor,sidebarNightColor),m=m+"@media (prefers-color-scheme: dark) {"+m.replaceAll(".night",".day.sysui")+"}"),g=g+v+m);"undefined"!=sidebarImage&&(document.getElementsByClassName("sidebar-area")[0].insertAdjacentHTML("afterbegin",'<div class="sidebar-image" aria-hidden="true"></div>'),h="html.fixed-sidebar .sidebar-image,html.fixed-sidebar .sidebar-image:before,html.fixed-sidebar .sidebar-image:after{background-image:url(//img1.daumcdn.net/thumb/R900x0/?scode=mtistory2&fname="+
sidebarImage+");background-position:"+sidebarImgPosition+";background-size:"+sidebarImgSize+";background-repeat:"+sidebarImgRepeat+"}","undefined"!=sidebarDawnImage&&(w=h.replaceAll("html","html.dawn").replaceAll(sidebarImage,sidebarDawnImage)),"undefined"!=sidebarNightImage&&(n=h.replaceAll("html","html.night").replaceAll(sidebarImage,sidebarNightImage),n=n+"@media (prefers-color-scheme: dark) {"+n.replaceAll(".night",".day.sysui")+"}"),h=h+w+n);"undefined"!=sidebarTrademark&&(e="html.fixed-sidebar .sidebar-title-inner.sidebar-trademark{background-image:url(//img1.daumcdn.net/thumb/R700x0/?scode=mtistory2&fname="+
sidebarTrademark+")!important}","undefined"!=sidebarDawnTrademark&&(x=e.replaceAll("html","html.dawn").replaceAll(sidebarTrademark,sidebarDawnTrademark)),"undefined"!=sidebarNightTrademark&&(c=e.replaceAll("html","html.night").replaceAll(sidebarTrademark,sidebarNightTrademark),c=c+"@media (prefers-color-scheme: dark) {"+c.replaceAll(".night",".day.sysui")+"}"),e=e+x+c);0<document.querySelectorAll("#article").length&&document.getElementById("article").classList.contains("expand-support")&&(p="@media (min-width:761px) and (min-width:"+
a+"px){html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float),html:not(.fixed-sidebar) #article.fc.edge-support figure.expand:not(.no-edge),html:not(.fixed-sidebar) #article.fc.hljs-expand>pre.procode-wrap{margin-left:-20px;margin-right:-20px}}@media (min-width:761px) and (min-width:"+(a+40)+"px) and (max-width:"+(b+39)+"px){html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.no-edge.expand:not(.float):not(figure),html:not(.fixed-sidebar) #article.fc.edge-support figure.no-edge.expand,html:not(.fixed-sidebar) #article.fc:not(.edge-support) .imageblock.expand:not(.float):not(figure),html:not(.fixed-sidebar) #article.fc:not(.edge-support) figure.expand{margin-left:calc((100vw - "+
(a+40)+"px)/-2);margin-right:calc((100vw - "+(a+40)+"px)/-2)}html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float),html:not(.fixed-sidebar) #article.fc.edge-support figure.expand:not(.no-edge),html:not(.fixed-sidebar) #article.fc.hljs-expand>pre.procode-wrap{margin-left:calc((100vw - "+a+"px)/-2);margin-right:calc((100vw - "+a+"px)/-2)}}@media (min-width:761px) and (min-width:"+b+"px){html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.expand:not(figure):not(.edge):not(.no-edge):not(.float),html:not(.fixed-sidebar) #article.fc.edge-support figure.expand:not(.edge):not(.no-edge),html:not(.fixed-sidebar) #article.fc.hljs-expand>pre.procode-wrap:not(.edge),html.msie:not(.fixed-sidebar) #article.fc .imageblock.expand:not(.edge):not(.float),html.msie:not(.fixed-sidebar) #article.fc figure.expand:not(.edge),html.msie:not(.fixed-sidebar) #article.fc.hljs-expand>pre.procode-wrap:not(.edge),html.edge-browser:not(.fixed-sidebar) #article.fc .imageblock.expand:not(.edge):not(.float),html.edge-browser:not(.fixed-sidebar) #article.fc figure.expand:not(.edge),html.edge-browser:not(.fixed-sidebar) #article.fc.hljs-expand>pre.procode-wrap:not(.edge){margin-left:calc("+
(b-a)+"px/-2)!important;margin-right:calc("+(b-a)+"px/-2)!important}html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.edge.expand:not(figure):not(.no-edge):not(.float),html:not(.fixed-sidebar) #article.fc.edge-support figure.edge.expand:not(.no-edge),html:not(.fixed-sidebar) #article.fc.hljs-expand>pre.procode-wrap.edge{margin-left:calc((100vw - "+a+"px)/-2);margin-right:calc((100vw - "+a+"px)/-2)}}@media (min-width:761px) and (min-width:"+(b+40)+"px){html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.no-edge.expand:not(.edge):not(figure):not(.float),html:not(.fixed-sidebar) #article.fc.edge-support figure.no-edge.expand:not(.edge),html:not(.fixed-sidebar) #article.fc:not(.edge-support) .imageblock.expand:not(.edge):not(.float):not(figure),html:not(.fixed-sidebar) #article.fc:not(.edge-support) figure.expand:not(.edge){margin-left:calc("+
(b-a)+"px/-2)!important;margin-right:calc("+(b-a)+"px/-2)!important}html:not(.fixed-sidebar) #article.fc.edge-support .imageblock.edge.no-edge.expand:not(.float):not(figure),html:not(.fixed-sidebar) #article.fc.edge-support figure.edge.no-edge.expand,html:not(.fixed-sidebar) #article.fc:not(.edge-support) .imageblock.edge.expand:not(.float):not(figure),html:not(.fixed-sidebar) #article.fc:not(.edge-support) figure.edge.expand{margin-left:calc((100vw - "+(a+40)+"px)/-2);margin-right:calc((100vw - "+
(a+40)+"px)/-2)}}","true"==fixedSidebar&&(p=p+"@media (min-width:1041px) and (min-width:"+(a+280)+"px){html.fixed-sidebar #article.fc.edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float),html.fixed-sidebar #article.fc.edge-support figure.expand:not(.no-edge),html.fixed-sidebar #article.fc.hljs-expand>pre.procode-wrap{margin-left:-20px;margin-right:-20px}}@media (min-width:1041px) and (min-width:"+(a+320)+"px) and (max-width:"+(b+319)+"px){html.fixed-sidebar #article.fc.edge-support .imageblock.no-edge.expand:not(.float):not(figure),html.fixed-sidebar #article.fc.edge-support figure.no-edge.expand,html.fixed-sidebar #article.fc:not(.edge-support) .imageblock.expand:not(.float):not(figure),html.fixed-sidebar #article.fc:not(.edge-support) figure.expand{margin-left:calc((100vw - "+
(a+320)+"px)/-2);margin-right:calc((100vw - "+(a+320)+"px)/-2)}html.fixed-sidebar #article.fc.edge-support .imageblock.expand:not(figure):not(.no-edge):not(.float),html.fixed-sidebar #article.fc.edge-support figure.expand:not(.no-edge),html.fixed-sidebar #article.fc.hljs-expand>pre.procode-wrap{margin-left:calc((100vw - "+(a+280)+"px)/-2);margin-right:calc((100vw - "+(a+280)+"px)/-2)}}@media (min-width:1041px) and (min-width:"+(b+280)+"px){html.fixed-sidebar #article.fc.edge-support .imageblock.expand:not(figure):not(.edge):not(.no-edge):not(.float),html.fixed-sidebar #article.fc.edge-support figure.expand:not(.edge):not(.no-edge),html.fixed-sidebar #article.fc.hljs-expand>pre.procode-wrap:not(.edge),html.fixed-sidebar.msie #article.fc .imageblock.expand:not(.edge):not(.float),html.fixed-sidebar.msie #article.fc figure.expand:not(.edge),html.fixed-sidebar.msie #article.fc.hljs-expand>pre.procode-wrap:not(.edge),html.fixed-sidebar.edge-browser #article.fc .imageblock.expand:not(.edge):not(.float),html.fixed-sidebar.edge-browser #article.fc figure.expand:not(.edge),html.fixed-sidebar.edge-browser #article.fc.hljs-expand>pre.procode-wrap:not(.edge){margin-left:calc("+
(b-a)+"px/-2)!important;margin-right:calc("+(b-a)+"px/-2)!important}html.fixed-sidebar #article.fc.edge-support .imageblock.no-edge.edge.expand:not(.float):not(figure),html.fixed-sidebar #article.fc.edge-support figure.no-edge.edge.expand,html.fixed-sidebar #article.fc:not(.edge-support) .imageblock.edge.expand:not(.float):not(figure),html.fixed-sidebar #article.fc:not(.edge-support) figure.edge.expand{margin-left:calc((100vw - "+(a+320)+"px)/-2);margin-right:calc((100vw - "+(a+320)+"px)/-2)}}@media (min-width:1041px) and (min-width:"+
(b+320)+"px){html.fixed-sidebar #article.fc.edge-support .imageblock.no-edge.expand:not(.edge):not(figure):not(.float),html.fixed-sidebar #article.fc.edge-support figure.no-edge.expand:not(.edge),html.fixed-sidebar #article.fc:not(.edge-support) .imageblock.expand:not(.edge):not(.float):not(figure),html.fixed-sidebar #article.fc:not(.edge-support) figure.expand:not(.edge){margin-left:calc("+(b-a)+"px/-2)!important;margin-right:calc("+(b-a)+"px/-2)!important}html.fixed-sidebar #article.fc.edge-support .imageblock.expand.edge:not(figure):not(.no-edge):not(.float),html.fixed-sidebar #article.fc.edge-support figure.expand.edge:not(.no-edge),html.fixed-sidebar #article.fc.hljs-expand>pre.procode-wrap.edge{margin-left:calc((100vw - "+
(a+280)+"px)/-2);margin-right:calc((100vw - "+(a+280)+"px)/-2)}}"));document.head.insertAdjacentHTML("beforeend","<style>"+y+z+q+A+B+C+J+K+L+M+D+E+F+G+H+I+f+d+g+h+e+"pre{-moz-tab-size:"+tabSize+";tab-size:"+tabSize+'}.imageblock:not(figure) img[width="'+a+'"]{width:100%}.comments{max-width:calc('+a+'px + 80px)!important} #article.fc hr:not([data-ke-type="hr"]):not([data-ke-type="horizontalRule"]){width:calc(100vw + 40px)!important;margin-left:calc((100vw - '+a+"px + 40px)/-2)!important}@media (max-width:"+
a+'px){ #article.fc hr:not([data-ke-type="hr"]):not([data-ke-type="horizontalRule"]){width:auto!important;margin-left:-20px!important;margin-right:-20px!important}}@media (min-width:401px) and (min-width:calc('+a+'px + 40px)) and (max-width:760px){ #article.fc pre, #article.fc .table-content, #article.fc .imageblock:not(figure):not(.no-edge), #article.fc .txc-info, #article.fc p[class*="moreless"], #article.fc div[class*="tt_adsense"], #article.fc .another-category{margin-left:calc((100vw - '+a+"px)/-2)!important;margin-right:calc((100vw - "+
a+'px)/-2)!important} #article.fc pre, #article.fc .txc-info, #article.fc .table-content>div, #article.fc p[class*="moreless"], #article.fc .another-category, #article.fc .imageblock:not(figure):not(.no-edge) .ExifInfo, #article.fc .imageblock:not(figure):not(.no-edge) .cap1{padding-left:calc((100vw - '+a+"px)/2)!important;padding-right:calc((100vw - "+a+"px)/2)!important} #article.fc .txc-info .photo{right:calc((100vw - "+a+"px)/2)!important}} #article.fc figure figcaption{max-width:"+a+"px;margin-left:auto;margin-right:auto}.page-limit-width{max-width:"+
a+"px!important}"+p+"@media (prefers-color-scheme: dark) {"+(q+D+E+c).replaceAll(".night",".day.sysui")+"}</style>")});
