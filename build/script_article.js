$(function(){function e(){p=N<I?"landscape":"portrait"}function t(e,t,a,n){""!==e&&(e=(","+e+",").replaceAll(", ",",").toLowerCase(),-1!=O.indexOf("/")?(O=O.split("/"),-1!=e.indexOf(O.join("/"))?t.addClass(a).removeClass(n):-1!=e.indexOf("*/"+O[1])?t.addClass(a).removeClass(n):-1!=e.indexOf(O[0]+"/*")?t.addClass(a).removeClass(n):-1!=e.indexOf("*/*")&&t.addClass(a).removeClass(n),O=O.join("/")):-1!=e.replaceAll("/**","").indexOf(O)&&t.addClass(a).removeClass(n))}function a(){m=_.scrollTop(),v=I>760?60:50,$(".tt_adsense_bottom").length>0&&(G=y.innerHeight()),u=A.innerHeight()-N-G+100}function n(){N+N-100<u&&m>=b?m>=b+u?S.css("transform","scaleX(1)"):S.css("transform","scaleX("+(m-b)/u+")"):S.css("transform","scaleX(0)")}function i(){j.addClass("closed"),w.removeClass("show-recommendation"),j.css("display","none").attr("aria-hidden","true"),clearTimeout(z),C.setTimeout(function(e){j.remove()},650)}function s(){1==j.hasClass("on")?clearTimeout(z):(clearTimeout(z),z=setTimeout(i,5e3))}function l(){0==j.hasClass("closed")&&(I>articleWidth+800?m>=(b+u)/4*3&&(w.addClass("show-recommendation"),j.css("display","block").attr("aria-hidden","false"),s()):(w.removeClass("show-recommendation"),j.css("display","none").attr("aria-hidden","true"),clearTimeout(z)))}function r(){function e(e){D.css("min-height",e+"px")}1==w.hasClass("fullscreen-page-cover")&&(e(L),_.on({"load resize":function(t){w.hasClass("no-touch")?e(L):p!==g&&(e("portrait"==p?0==F?F=L:F:0==X?X=L:X),g=p)},scroll:function(t){w.hasClass("touch")&&("portrait"==p?L<F&&e(F=L):L<X&&e(X=L))}}))}function o(){1!=w.hasClass("no-touch")&&1!=w.hasClass("touch")||(r(),clearInterval(U))}function d(){M.removeClass("show-more").find(".btn_subscription, .btn_naver_subscription, .postbtn_ccl").attr("aria-hidden","false"),M.find(".more-field").attr("aria-hidden","true")}function c(e,t,a){(A.find('p[style*="'+e+":"+t+'"]:has(.imageblock)').length>0||A.find('p[style*="'+e+": "+t+'"]:has(.imageblock)').length>0)&&A.find('p[style*="'+e+":"+t+'"] > .imageblock, p[style*="'+e+": "+t+'"] > .imageblock').addClass(a).unwrap()}function f(e){$(".imageblock").has(e).each(function(t){var a=$(this),n=a.find(e).attr("width");expandedImgWidth<=n&&a.addClass("expand")})}function h(){A.find("figure.imageblock img[width='860']").length>0&&A.find("figure.imageblock img[width='860']").each(function(e){$(this).removeAttr("width")}),articleWidth<expandedImgWidth&&(A.find("figure.imageblock.alignCenter:not(.no-expand)").length>0&&A.find("figure.imageblock.alignCenter:not(.no-expand)").each(function(e){var t=$(this),a=t.find("img"),n=a[0].naturalWidth,i=a[0].naturalHeight,s=a.attr("width");n>i&&n>=expandedImgWidth&&(void 0==s||s>=articleWidth)&&t.addClass("expand")}),A.find("figure.imagegridblock:not(.no-expand)").length>0&&A.find("figure.imagegridblock:not(.no-expand)").each(function(e){var t=$(this),a=0;t.find("img").each(function(e){a+=$(this)[0].naturalWidth}),a>=expandedImgWidth&&t.addClass("expand")})),A.find("p:empty").length>0&&A.find("p:empty").remove()}$(document);var p,g,m,v,u,b,y,C=window,_=$(window),w=$("html"),x=$("head"),T=$("#measuring"),k=T.width()-T.find(".measuring span").width(),L=T.innerHeight(),A=$("#article"),E=$(".sidebar-func-list"),I=C.innerWidth,N=C.innerHeight,F=0,X=0,G=0;if(e(),g=p,"portrait"==p?F=L:X=L,_.on({"load resize":function(t){I=C.innerWidth,N=C.innerHeight,e()},"load resize scroll":function(e){L=T.innerHeight()}}),C.setTimeout(function(t){I=C.innerWidth,N=C.innerHeight,L=T.innerHeight(),e()},1e3),$(".gh-text a[href*='category']").length>0){var O=","+$(".gh-text a[href*='category']").text().toLowerCase()+",";t(dayKeyword,w,"day","sysui dynamic dawn night"),t(dawnKeyword,w,"dawn","sysui dynamic day night"),t(nightKeyword,w,"night","sysui dynamic day dawn"),t(pageCoverKeyword,w,"page-cover-support","fullscreen-page-cover"),t(fullscreenPageCoverKeyword,w,"page-cover-support fullscreen-page-cover",""),t(disabledPageCoverKeyword,w,"","page-cover-support fullscreen-page-cover"),t(serifKeyword,A,"serif",""),t(sanSerifKeyword,A,"","serif"),1==w.hasClass("altcover-support")&&(t(altCoverKeyword,w,"altcover-only alt1","alt2 alt3 alt4"),t(secondCoverKeyword,w,"altcover-only alt2","alt1 alt3 alt4"),t(thirdCoverKeyword,w,"altcover-only alt3","alt1 alt2 alt4"),t(fourthCoverKeyword,w,"altcover-only alt4","alt1 alt2 alt3"))}if("transparent"==$themeColorOrig&&0==w.hasClass("sysui")){var W;if(1==w.hasClass("day")?W="#f4f4f4":1==w.hasClass("dawn")?W="#d9d0c3":1==w.hasClass("night")&&(W="#0e0e0e"),x.find("meta[name='theme-color']").length>0)x.find("meta[name='theme-color']").attr("content",W);else{var H=document.createElement("meta");H.setAttribute("name","theme-color"),H.setAttribute("content",W),document.head.appendChild(H)}}if(function(e){x.append('<link rel="stylesheet" href="'+imagesURL+e+fcver+'">')}("style_article.css"),$("#global-header .admin-func").length>0){var K=(D=$("#global-header")).find(".admin-func"),R=K.find(".admin-func-list").html();E.find(".sidebar-go-to-index-inner").after(R),"true"==fixedSidebar?(D.addClass("has-admin-func"),K.attr("aria-hidden","false")):K.remove()}if((1==w.hasClass("progress-bar-support")||$(".recommendation").length>0)&&($(".tt_adsense_bottom").length>0&&(y=$(".tt_adsense_bottom"),G=y.innerHeight()),_.on({"load resize":function(e){$(".tt_adsense_bottom").length>0&&(G=y.innerHeight()),a()},scroll:function(e){b=A.offset().top-v,a()}}),C.setTimeout(function(e){$(".tt_adsense_bottom").length>0&&(G=y.innerHeight()),b=A.offset().top-v,a()},1e3)),1==w.hasClass("progress-bar-support")){$("#global-navigation").after('<div class="progress-bar-wrap" aria-hidden="true"><div class="progress-bar" style="transform:scaleX(0)"></div>');var S=$(".progress-bar");_.on("load resize scroll",function(e){n()}),C.setTimeout(function(e){b=A.offset().top-v,n()},1e3)}if($(".recommendation").length>0){var z,j=$(".recommendation");$(".fc-button[data-func='open-sidebar'],.fc-button[data-func='open-blog-info']").on("click",function(e){w.removeClass("show-recommendation"),j.css("display","none").attr("aria-hidden","true"),clearTimeout(z),1==w.hasClass("overflow")&&j.css("right",k+20+"px")}),$(".fc-button[data-func='close-sidebar'],.fc-button[data-func='close-blog-info']").on("click",function(e){l(),j.css("right","")}),_.on("load resize scroll",function(e){l()}),C.setTimeout(function(e){l()},1e3),j.find(".recommendation-link").on({mouseover:function(e){j.addClass("on"),s()},mouseout:function(e){j.removeClass("on"),s()}}),j.find(".close-alert").on("click",function(e){e.preventDefault(),i()})}if((A.find("*[style*='Nanum']").length>0||A.find("*[style*='Noto']").length>0||A.find("*[style*='GungSeo']").length>0)&&A.find("*[style*='Nanum'], *[style*='Noto'], *[style*='GungSeo']").addClass("set-font"),A.find("*[style*='font'],*[style*='FONT']").not(".set-font").length>0&&A.find("*[style*='font'],*[style*='FONT']").not(".set-font").css({"font-family":"","FONT-FAMILY":""}),A.find("font").length>0&&A.find("font").removeAttr("face"),A.find("*[class*='fraccino-']").length>0&&(A.has(".fraccino-enabledcover").length>0||A.has(".fraccino-enable-pagecover").length>0||A.has(".fraccino-enabledfullcover").length>0||A.has(".fraccino-disabledfullcover").length>0||A.has(".fraccino-enable-fullscreenpagecover").length>0?(w.addClass("page-cover-support"),A.has(".fraccino-enabledfullcover").length>0||A.has(".fraccino-enable-fullscreenpagecover").length>0?w.addClass("fullscreen-page-cover"):w.removeClass("fullscreen-page-cover")):(A.has(".fraccino-disabledcover").length>0||A.has(".fraccino-disable-pagecover").length>0)&&w.removeClass("page-cover-support"),A.has(".fraccino-enable-pagealtcover").length>0&&w.addClass("altcover-only"),A.has(".fraccino-enabledserif").length>0||A.has(".fraccino-enable-serif").length>0?A.addClass("serif"):(A.has(".fraccino-disabledserif").length>0||A.has(".fraccino-disable-serif").length>0)&&A.removeClass("serif"),A.has(".fraccino-setbrightcolor").length>0||A.has(".fraccino-setas-day").length>0?w.addClass("day").removeClass("dynamic dawn night"):A.has(".fraccino-setwarmcolor").length>0||A.has(".fraccino-setas-dawn").length>0?w.addClass("dawn").removeClass("dynamic day night"):(A.has(".fraccino-setdarkcolor").length>0||A.has(".fraccino-setas-night").length>0)&&w.addClass("night").removeClass("dynamic day dawn"),$("*[class*='fraccino-']").remove()),1==A.hasClass("serif")&&x.append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700&amp;subset=latin-ext"><link rel="stylesheet" href="'+imagesURL+"style_serif.css"+fcver+'">'),$("#global-header").length>0&&1==w.hasClass("page-cover-support")){var D=$("#global-header"),P=$(".page-cover");P.length<=0&&(D.prepend('<div class="page-cover" aria-hidden="true"><div class="parent-page-cover"><div class="small-cover"></div><div class="medium-cover"></div><div class="large-cover"></div></div></div>'),P=$(".page-cover"));var U;""!==generalThumb?(P=$(".page-cover"),generalThumb=encodeURIComponent(generalThumb),0==w.hasClass("altcover-only")?(0==A.hasClass("for-page")&&($(".page-cover,.parent-page-cover").css("background-image","url(//img1.daumcdn.net/thumb/R48x0/?fname="+generalThumb+")"),$(".small-cover").css("background-image","url(//img1.daumcdn.net/thumb/R800x0/?fname="+generalThumb+")"),$(".medium-cover").css("background-image","url(//img1.daumcdn.net/thumb/R1280x0/?fname="+generalThumb+")"),$(".large-cover").css("background-image","url(//img1.daumcdn.net/thumb/R1920x0/?fname="+generalThumb+")")),r(),U=setInterval(o,100),P.show()):0==w.hasClass("altcover-support")?(w.removeClass("page-cover-support"),P.remove()):(r(),U=setInterval(o,100),P.show())):(P=$(".page-cover"),0==w.hasClass("altcover-support")?(w.removeClass("page-cover-support"),P.remove()):(r(),U=setInterval(o,100),P.show()))}if($("#global-navigation").addClass("ready"),A.has(".tt_article_useless_p_margin").length>0?(A.find(".tt_article_useless_p_margin > *:first-child").unwrap(),A.addClass("useless-margin")):A.addClass("margin"),$(".container_postbtn").length>0){var M=$(".container_postbtn");if(M.find(".wrap_btn.wrap_btn_share, .wrap_btn.wrap_btn_etc").remove(),M.find(".wrap_btn:has(.ico_statistics)").length>0){var Y=M.find(".wrap_btn:has(.ico_statistics) .btn_post").attr("data-entry-id");if(E.append('<li><a class="fc-icon post-statistics" href="'+manageLink+"/statistics/entry/"+Y+'" target="_blank" role="button">이 글의 통계</a></li>'),"true"==fixedSidebar&&$("#global-header").length>0){(D=$("#global-header")).find(".admin-func").length>0?D.find(".admin-func").prepend('<a class="fc-icon post-statistics" href="'+manageLink+"/statistics/entry/"+Y+'" target="_blank" role="button">이 글의 통계</a>'):D.addClass("has-admin-func").append('<div class="admin-func"><a class="fc-icon post-statistics" href="'+manageLink+"/statistics/entry/"+Y+'" target="_blank" role="button">이 글의 통계</a></div>')}M.find(".wrap_btn:has(.ico_statistics)").remove()}if(M.find(".btn_subscription").length>0){if(M.addClass("has-subscriptionbtn"),$("meta[property*='plink']").length>0){Y=(Y=(Y=$("meta[property*='plink']").attr("content")).replace("http://","").replace("https://","").replace("/notice/","/").split("/"))[1],M.addClass("has-morebtn").find(".postbtn_like").after('<div class="btn_more_inner"><button class="icon post_more" aria-label="이 글의 옵션 토글"><span aria-hidden="true">옵션 토글</span></button><div class="more-field" aria-hidden="true"><button class="icon abuse-report" aria-label="이 글을 티스토리에 신고하기"><span aria-hidden="true">신고하기</span></button></div></div>');var q,B=M.find(".abuse-report");M.find(".post_more").on("click",function(e){e.preventDefault(),1==M.hasClass("show-more")?(d(),clearTimeout(q)):(M.addClass("show-more").find(".btn_subscription, .btn_naver_subscription, .postbtn_ccl").attr("aria-hidden","true"),M.find(".more-field").attr("aria-hidden","false"),q=setTimeout(d,5e3))}),B.on("click",function(e){e.preventDefault(),C.open("/toolbar/popup/abuseReport/?entryId="+Y,"티스토리 글 신고하기","width=550,height=530,toolbar=no,menubar=no,status=no,scrollbars=no"),clearTimeout(q),q=setTimeout(d,500)})}1==w.hasClass("enable-naver-subscription")&&M.find(".btn_subscription").after('<button class="btn_naver_subscription subscribe-on-naver" aria-label="네이버 이웃 추가하기"><span aria-hidden="true">이웃</span></button>')}var J=M.find(".postbtn_like .like_btn").length,Q=M.find(".btn_subscription").length,V=M.find(".postbtn_ccl").length;if(J+Q+V==0?$(".container_postbtn").remove():J<=0?(M.find(".postbtn_like").remove(),Q<=0&&M.addClass("ccl-only")):M.addClass("has-likebtn"),V>0&&M.find(".postbtn_ccl .ico_postbtn").length>0){var Z=M.find(".postbtn_ccl"),ee=M.find(".link_ccl"),te=ee.html();M.addClass("has-ccl"),Z.append('<div class="ccl-icons-group" aria-hidden="true"></div>'),ee.prepend("이 글은 ");var ae=A.find(".ccl-icons-group");ee.find(".bundle_ccl span").length<3&&ae.append('<div class="cc-logo no-text icon">Creative Commons</div>'),-1!=te.indexOf("저작자표시")&&(ae.append('<div class="cc-by no-text icon">본 저작자 표시</div>'),ee.append("본 저작자 표시")),-1!=te.indexOf("비영리")&&(-1!=te.indexOf("저작자표시")&&ee.append(", "),ae.append('<div class="cc-nc no-text icon">비영리</div>'),ee.append("비영리")),-1!=te.indexOf("변경금지")&&(-1!=te.indexOf("저작자표시")&&ee.append(", "),ae.append('<div class="cc-nd no-text icon">변경 금지</div>'),ee.append("변경 금지")),-1!=te.indexOf("동일조건")&&(-1!=te.indexOf("저작자표시")&&ee.append(", "),ae.append('<div class="cc-sa no-text icon">동일 조건 변경 허락</div>'),ee.append("동일 조건 변경 허락")),ee.find(".bundle_ccl").remove(),ee.addClass("no-text").append(" 규칙 하에 배포할 수 있습니다. 자세한 내용은 Creative Commons 라이선스를 확인하세요.").removeAttr("style").attr({"aria-label":ee.text().replace("Creative Commons","크리에이티브 커먼즈"),role:"button"})}}if(A.find("iframe").length>0&&(A.find("p, span").has("iframe").children("iframe").removeAttr("style").unwrap(),A.children('iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="tvpot"], iframe[src*="tv.kakao.com"], iframe[src*="videofarm.daum.net"], iframe[src*="nmv.naver.com"]').wrap('<div class="imageblock iframe"><div class="iframe-content video"></div></div>'),A.children('iframe[src*="soundcloud"]').wrap('<div class="imageblock iframe"><div class="iframe-content sound"></div></div>'),A.children('iframe[src*="google.com/maps"], iframe[src*="maps.google"]').wrap('<div class="imageblock iframe"><div class="iframe-content google-maps"></div></div>'),A.find(".tt-youtube-plugin:has(iframe)").length>0&&A.find(".tt-youtube-plugin:has(iframe)").each(function(e){var t=$(this),a=t.find("iframe");t.addClass("imageblock iframe").removeAttr("style"),a.wrap('<div class="iframe-content video"></div>')}),A.find("figure[data-ke-type='video']").length>0&&(A.find("figure[data-ke-type='video'] iframe[width='860']").length>0&&A.find("figure[data-ke-type='video'] iframe[width='860']").each(function(e){$(this).removeAttr("width")}),A.find("figure[data-ke-type='video']").each(function(e){var t=$(this),a=t.find("iframe"),n=a.attr("width");a.wrap('<div class="iframe-content video"></div>'),0==t.hasClass("no-expand")?"alignCenter"==t.attr("data-ke-style")?articleWidth<expandedImgWidth&&(void 0==n||n>=articleWidth?t.addClass("expand"):t.addClass("no-edge").attr("style","max-width:"+n+"px!important")):t.addClass("no-edge").attr("style","max-width:"+n+"px!important"):void 0!==n&&t.addClass("no-edge").attr("style","max-width:"+n+"px!important")}))),A.find(".imageblock:not(figure)").length>0){var ne=A.find(".imageblock"),ie=ne.find("img, span");ne.removeAttr("style"),ie.removeAttr("style"),c("float","left","float float-left"),c("float","right","float float-right"),c("text-align","left","left-image no-edge"),c("text-align","right","right-image no-edge"),A.find("p:has(.imageblock), span:has(.imageblock)").length>0&&A.find("p:has(.imageblock), span:has(.imageblock)").each(function(e){var t=$(this),a=$(this).attr("class");t.find(".imageblock").addClass(a).unwrap()}),(A.find(".imageblock:has(.cap1)").length>0||A.find(".imageblock:has(.ExifInfo)").length>0)&&(A.find(".imageblock:has(.cap1)").addClass("has-info"),A.find(".imageblock:has(.ExifInfo)").addClass("has-info")),A.find(".imageblock:has(a[href*='attachment'])").length>0&&A.find(".imageblock:has(a[href*='attachment'])").addClass("download no-edge").find("a").attr({role:"button","aria-label":"다운로드…"}).addClass("icon").find("img").remove(),articleWidth<expandedImgWidth&&(f("img"),f("iframe"))}if(h(),_.on("load",function(e){h()}),C.setTimeout(function(e){h()},1e3),A.find("figure:has(figcaption)").length>0&&A.find("figure:has(figcaption)").addClass("has-info"),A.has(".btn_more").length>0&&A.find(".btn_more, .btn_less").wrap('<p class="moreless_btn"></p>'),A.has(".txc-info").length>0){var se=A.find(".txc-info"),le=se.find(".rating"),re=le.attr("title");se.removeAttr("style").find("*").removeAttr("style"),se.find("a:has(img[alt*='가격'])").addClass("compare icon fade-icon").attr("role","button").text("가격비교…").parent("div").addClass("txc-more-info"),le.addClass("no-text").attr("aria-label","글쓴이의 평점은 "+re+"점입니다.").removeAttr("title")}if(A.has(".footnotes").length>0&&(A.find(".footnote a").removeAttr("style"),A.find(".footnote a, .footnotes a").each(function(e){var t=$(this),a=t.attr("href");t.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(a).offset().top-N/3},400)})})),A.has("iframe[id*=emap]").length>0&&A.find("iframe[id*=emap]").wrap('<div class="imageblock daum-map"></div>'),A.has("iframe[data-ke-type=map]").length>0?A.find("iframe[data-ke-type=map]").wrap('<div class="imageblock daum-map"></div>'):A.has(".map_attach").length>0&&A.find(".map_attach").addClass("imageblock"),A.find("table:not([class*='hljs'])").length>0&&A.find("table:not([class*='hljs'])").wrap('<div class="table-content"><div></div></div>'),A.find(".another_category").length>0&&(A.find(".another_category table").unwrap().unwrap(),A.find(".another_category").attr("class","another-category"),$(".another-category tr").length<=1&&$(".another-category").addClass("single")),A.children("div[style*='text-align:left']:first-child").length>0||A.children("div[style*='text-align:LEFT']:first-child").length>0||A.children("div[style*='text-align: left']:first-child").length>0||A.children("div[style*='text-align: LEFT']:first-child").length>0||A.children("div[style*='TEXT-ALIGN:LEFT']:first-child").length>0||A.children("div[style*='TEXT-ALIGN:left']:first-child").length>0||A.children("div[style*='TEXT-ALIGN: LEFT']:first-child").length>0||A.children("div[style*='TEXT-ALIGN: left']:first-child").length>0||A.children(".tt_adsense_top+div[style*='text-align:left']").length>0||A.children(".tt_adsense_top+div[style*='text-align:LEFT']").length>0||A.children(".tt_adsense_top+div[style*='text-align: left']").length>0||A.children(".tt_adsense_top+div[style*='text-align: LEFT']").length>0||A.children(".tt_adsense_top+div[style*='TEXT-ALIGN:LEFT']").length>0||A.children(".tt_adsense_top+div[style*='TEXT-ALIGN:left']").length>0||A.children(".tt_adsense_top+div[style*='TEXT-ALIGN: LEFT']").length>0||A.children(".tt_adsense_top+div[style*='TEXT-ALIGN: left']").length>0){A.addClass("useless-margin").removeClass("margin");var oe=A.children("div[style*='text-align:left']:first-child,div[style*='text-align:LEFT']:first-child,div[style*='text-align: left']:first-child,div[style*='text-align: LEFT']:first-child,div[style*='TEXT-ALIGN:LEFT']:first-child,div[style*='TEXT-ALIGN:left']:first-child,div[style*='TEXT-ALIGN: LEFT']:first-child,div[style*='TEXT-ALIGN: left']:first-child,.tt_adsense_top+div[style*='text-align:left'],.tt_adsense_top+div[style*='text-align:LEFT'],.tt_adsense_top+div[style*='text-align: left'],.tt_adsense_top+div[style*='text-align: LEFT'],.tt_adsense_top+div[style*='TEXT-ALIGN:LEFT'],.tt_adsense_top+div[style*='TEXT-ALIGN:left'],.tt_adsense_top+div[style*='TEXT-ALIGN: LEFT'],.tt_adsense_top+div[style*='TEXT-ALIGN: left']");if(oe.has("p").length<=0){var de='<span class="splitbefore"></span>',ce='<span class="splitafter"></span>';oe.wrapInner('<p class="mobileapp-paragraph"></p>'),oe.find(".mobileapp-paragraph>div, .mobileapp-paragraph>span").before(de).after(ce);var fe=oe.html().replaceAll(de,"</p>").replaceAll(ce,"<p>");oe.html(fe),oe.find(".mobileapp-paragraph").unwrap()}else oe.find("p:first-child").unwrap()}if($(".tt-share-entry-with-sns").length>0&&$(".tt-share-entry-with-sns").remove(),$(".tags-trail").length>0){var he=$(".tags-trail"),pe=he.html().replaceAll(",","");he.html(pe),he.find("a").each(function(e){var t=$(this),a=t.text();t.attr({role:"button","aria-label":a+" 태그"})}),he.find("div:empty").length>0&&he.remove()}});