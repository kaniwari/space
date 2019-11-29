/*! modernizr 3.6.0 (Custom Build) | MIT *
https://modernizr.com/download/?-backdropfilter-csspositionsticky-touchevents-willchange-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function a(e,t,r,o){var s,a,u,f,c="modernizr",d=i("div"),p=l();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=f,_.offsetHeight):d.parentNode.removeChild(d),!!a}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function v(e,n,o,s){function l(){c&&(delete E.style,delete E.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var a=h(e,o);if(!r(a,"undefined"))return a}for(var c,d,p,m,v,y=["modernizr","tspan","samp"];!E.style&&y.length;)c=!0,E.modElem=i(y.shift()),E.style=E.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=E.style[m],u(m,"-")&&(m=f(m)),E.style[m]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?m:!0;try{E.style[m]=o}catch(g){}if(E.style[m]!=v)return l(),"pfx"==n?m:!0}return l(),!1}function y(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(l,n,o,s):(l=(e+" "+k.join(i+" ")+i).split(" "),d(l,n,t))}function g(e,n,r){return y(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement;Modernizr.addTest("gpu","willChange"in _.style);var x="svg"===_.nodeName.toLowerCase(),b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b;var T=S.testStyles=a;Modernizr.addTest("touch",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,function(e){t=9===e.offsetTop})}return t});var z="Moz O ms Webkit",P=S._config.usePrefixes?z.split(" "):[];S._cssomPrefixes=P;var k=S._config.usePrefixes?z.toLowerCase().split(" "):[];S._domPrefixes=k;var j={elem:i("modernizr")};Modernizr._q.push(function(){delete j.elem});var E={style:j.elem.style};Modernizr._q.unshift(function(){delete E.style}),S.testAllProps=y,S.testAllProps=g,Modernizr.addTest("effect",g("backdropFilter")),Modernizr.addTest("stickyeffect",function(){var e="position:",n="sticky",t=i("a"),r=t.style;return r.cssText=e+b.join(n+";"+e).slice(0,-e.length),-1!==r.position.indexOf(n)}),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);



$(function() {
	
	var $document = $(document),
		$window = window,
		$queryWindow = $(window),
		$windowLocation = $window.location.pathname,
		$siteURL = $("link[rel='alternate']").attr("href").replace("/rss", ""),
	
		$html = $("html"),
		$head = $("head"),
		
		$navigator = navigator,
		$userAgent = $navigator.userAgent.toLowerCase(),
		$userAgentAndroid = $userAgent.indexOf("android"),
		$userAgentChrome = $userAgent.indexOf("chrome"),
		$userAgentWindows = $userAgent.indexOf("windows"),
		$userAgentModernIE = $navigator.appName == "Netscape" && $userAgent.indexOf("trident"),
		$userAgentMSIE = $userAgent.indexOf("msie"),
		$userAgentFirefox = $userAgent.indexOf("firefox"),
	
		$body = $("body"),
		$bodyID = $body.attr("id").replace("tt-body-", ""),
		
		$globalNavigation = $("#global-navigation"),
		$gnbCenter = $(".gnb-center"),
		$gotoIndex = $(".go-to-index"),
		
		$wrap = $("#wrap"),
		$wrapHeight = $wrap.innerHeight(),
		$footer = $("#footer"),
		$footerHeight = $footer.innerHeight(),
		
		$sidebarInner = $(".sidebar-inner"),
		$sidebarScrollbar = $(".sidebar-scrollbar"),
		$sidebarScrollbarInner = $(".sidebar-scrollbar-inner"),
		$sidebarInnerTitle = $sidebarInner.find(".sidebar-title"),
		$sidebarInnerContents = $sidebarInner.find(".sidebar-contents"),
		$sidebarInnerHeight,
		$subNav = $(".sub-navigation"),
		$sidebar = $("#sidebar"),
		$sidebarFuncList = $(".sidebar-func-list"),
		$blogInfo = $("#blog-info"),
		$sidebarInnerPosition,
	
		$windowWidth = $window.innerWidth,
		$windowHeight = $window.innerHeight,
		$orientation,
		$changedOrientation,
		$portrait = 0,
		$landscape = 0,
		
		$measuring = $("#measuring"),
		$measuringInner = $measuring.find(".measuring span"),
		$scrollbarWidth = $measuring.width() - $measuringInner.width(),
		$measuringFrameHeight = $measuring.innerHeight(),
		
		$scrollbarSupport = $(".scrollbar-support"),

		$scrollPosition = $queryWindow.scrollTop(),
		lastScroll = 0,
		
		$switchFixedSidebar = 1420;
	

	
	function getCSS(fn) {

		$head.append('<link rel="stylesheet" href="' + imagesURL + fn + fcver + '">');

	};

	
	getCSS("style_common.css");
	
	
	
	/* 버전 체크 */
	
	var verCheckNum = fcver.replaceAll("?fcver=", "").substr(0,4);
	
	function verCheck(alertdesc) {
		
		getCSS("style_check.css");
		document.title = "스킨 오류";
		$html.addClass("important-alert");
		$body.html('<main class="important-alert-inner" style="display:none"><h3>스킨 오류</h3><p>스킨이 올바르게 설치되지 않았습니다. 이 오류는 ' + alertdesc + '</p><a href="' + manageLink + '/design/skin/edit" target="_blank" role="button">스킨 편집하기</a></main>');
		
	};
	
	if(parseInt(verCheckNum) > 2350) {
		
		verCheck("스킨에 필요한 파일들이 최신 버전이 아닐 경우 발생합니다. 스킨에 필요한 파일들을 모두 최신 버전으로 대치하십시오. 그래도 문제가 발생할 경우 브라우저의 캐시를 초기화하십시오.");
		
	}
	
	else if (parseInt(verCheckNum) < 2350) {
		
		verCheck("skin.html이 최신 버전이 아닐 경우 발생합니다. skin.html의 내용을 모두 최신 버전의 내용으로 대치하십시오.");
		
	}

	
	
	/* 브라우저 호환성 설정 */
	
	if($userAgentModernIE != -1 || $userAgentMSIE != -1 || $userAgent.indexOf("edge") != -1) {
		
		if($userAgentModernIE != -1 || $userAgent.indexOf("edge") != -1) {
			
			$html.removeClass("no-gpu").addClass("gpu");
			
		};

		
		
		if($userAgentModernIE != -1 || $userAgentMSIE != -1) {
			
			$html.addClass("msie");
			
		};
		
		if($userAgent.indexOf("edge") != -1) {
			
			$html.addClass("edge-browser");
			
		}
		
	}
	
	else if($userAgentFirefox != -1) {
		
		$html.removeClass("deptheffect").addClass("no-deptheffect");

		if($userAgentWindows != -1) {
			
			$html.addClass("firefox-windows");
			
		};
		
	};
	
	if($userAgentAndroid != -1) {
		
		$html.addClass("android goog");
		
	}
	
	else if($userAgentWindows != -1) {
		
		if($userAgentChrome != -1) {
			
			$html.addClass("goog");
			
		}
		
		else {
			
			$html.addClass("ms");
			
		};
		
	}
	
	else {
		
		if($userAgentChrome != -1) {
			
			$html.addClass("goog");
			
		};
		
	};
	
	

	/* 기능 그룹 */

	function slot(position, type, element, repeatNum, length) {

		var	i = 1,
			$blankItem,
			$indexWidthSupport = position;

		for(i; i <= repeatNum; i + 1) {

			$blankItem = '<' + element + ' class="'+ type + ' blank-item blank' + i + '" aria-hidden="true"></' + element + '>';
			
			$indexWidthSupport.append($blankItem);

			i = i + 1;
			
		};

		position.addClass("itemlength" + length.length);

	};
	
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
	
	function gotoIndexHidden() {
		
		if($scrollPosition > 0) {

			$gotoIndex.attr("aria-hidden", "true");

		}

		else {

			$gotoIndex.attr("aria-hidden", "false");

		}
		
	};
	
	function runIndexHidden() {
		
		gotoIndexHidden();

		$queryWindow.on("load scroll resize", function(event) {

			gotoIndexHidden();

		});
		
	};
	
	function getAsyncStyle() {
		
		$("*[data-style*='back']").each(function(event) {

			var $this = $(this);

			$this.attr("style", $this.attr("data-style")).removeAttr("data-style");

		});
		
	};

	getAsyncStyle();
	
	
	
	/* 오리엔테이션 */
	
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
	};
	
	
	
	/* 글로벌 내비게이션 스크롤 위치 이벤트 */
	
	function gnbSticky() {
		
		if($scrollPosition < 100) {

			$globalNavigation.addClass("sticky");

		}
		
		else {
			
			$globalNavigation.removeClass("sticky");
			
		}
		
		
		
		if($scrollPosition > 0) {

			$html.addClass("scrolling");

		}

		else {

			$html.removeClass("scrolling");

		}
		
	};
	
	
	
	/* 스크롤바 이벤트 */
	
	function scrollbarEvent() {
		
		$scrollbarWidth = $measuring.width() - $measuringInner.width();
		
		if($windowHeight < $wrapHeight + $footerHeight) {
			
			$html.addClass("overflow");
			$subNav.css("overflow-y", "scroll");
			
		}
		
		else {
			
			$html.removeClass("overflow");
			$subNav.css("overflow-y", "");
			
		}
		

		
		if(fixedSidebar == "true") {
			
			if($windowWidth >= $switchFixedSidebar) {

				$html.addClass("fixed-sidebar hide-sidebar hide-blog-info").removeClass("show-sidebar show-blog-info fade-sub-navigation non-fixed-sidebar sidebar-adsense-support");
				
				if($scrollbarWidth > 0) {
					
					$sidebarInner.css("width", "calc(100% + " + $scrollbarWidth + "px)");
					
					$sidebarInnerHeight = $sidebarInnerTitle.innerHeight() + $sidebarInnerContents.innerHeight();
					$sidebarInnerPosition = $sidebarInner.scrollTop();

					if($sidebarInnerHeight > $windowHeight) {

						$sidebarScrollbar.addClass("overflowing");

					}

					else {

						$sidebarScrollbar.removeClass("overflowing");

					}
					
				}
				
				else {
					
					$sidebarInner.css("width", "");
					$sidebarScrollbar.hide();
					
				}
				
				$scrollbarSupport.css("width", "").attr("aria-hidden", "false");
				$subNav.show().css("width", "").attr("aria-hidden", "false");
				
				if($(".recommendation").length > 0) {
					
					$(".recommendation").css("right", "");
					
				};
				
				if($html.hasClass("sidebar-reset") == false) {
					
					$html.addClass("sidebar-reset");
					$sidebarInner.scrollTop(0);
					$sidebarInnerPosition = 0;
					
				};
				
				
				
				if($sidebarScrollbar.hasClass("overflowing") == true) {

					$sidebarScrollbarInner.css({
						"top": ($sidebarInnerPosition/$sidebarInnerHeight)*100 + "%",
						"height": ($windowHeight/$sidebarInnerHeight)*100 + "%"
					});

				}

			}

			else {

				$html.removeClass("fixed-sidebar sidebar-reset");
				
				if($html.hasClass("non-fixed-sidebar") == false) {
					
					$sidebarInner.css("width", "");
					$subNav.hide().attr("aria-hidden", "true");
					$html.addClass("non-fixed-sidebar");
					$sidebarScrollbar.removeClass("overflowing");
					
				};

			};
			
		};
		
	}
	
	scrollbarEvent();
	
	
	
	/* 글로벌 윈도우 이벤트 */
	
	$queryWindow.on({
		
		"load": function(event) {
			
			$measuringFrameHeight = $measuring.innerHeight();
			
			$wrapHeight = $wrap.innerHeight();
			$footerHeight = $footer.innerHeight();
			$scrollPosition = $queryWindow.scrollTop();
			
			scrollbarEvent();
			orientation();
			
		},
		
		"scroll": function(event) {
			
			$measuringFrameHeight = $measuring.innerHeight();
			
			$scrollPosition = $queryWindow.scrollTop();
			gnbSticky();
			
		},
		
		"resize": function(event) {
			
			$windowWidth = $window.innerWidth;
			$windowHeight = $window.innerHeight;
			
			$measuringFrameHeight = $measuring.innerHeight();

			$wrapHeight = $wrap.innerHeight();
			$footerHeight = $footer.innerHeight();
			
			
			$scrollPosition = $queryWindow.scrollTop();
			
			scrollbarEvent();
			orientation();
			
		}
		
	});
	
	$window.setTimeout(function(event) {
		
		$measuringFrameHeight = $measuring.innerHeight();
		
		$wrapHeight = $wrap.innerHeight();
		$footerHeight = $footer.innerHeight();
		$scrollPosition = $queryWindow.scrollTop();

		scrollbarEvent();
		orientation();
		
		$changedOrientation = $orientation;
		
	}, 1000);
	
	
	var hideSidebarScrollbarEvent;
	
	function hideSidebarScrollbar() {
		
		$sidebarScrollbar.removeClass("fixed-sidebar-scrolling");
		
	};
	
	
	
	$sidebarInner.on("scroll", function(event) {
		
		if($html.hasClass("fixed-sidebar") == true) {
			
			clearTimeout(hideSidebarScrollbarEvent);
			
			$sidebarInnerHeight = $sidebarInnerTitle.innerHeight() + $sidebarInnerContents.innerHeight();
			$sidebarInnerPosition = $sidebarInner.scrollTop();
			$sidebarScrollbarInner.css({
				"top": ($sidebarInnerPosition/$sidebarInnerHeight)*100 + "%",
				"height": ($windowHeight/$sidebarInnerHeight)*100 + "%"
			});
			
			$sidebarScrollbar.addClass("fixed-sidebar-scrolling");
			
			hideSidebarScrollbarEvent = setTimeout(hideSidebarScrollbar, 400);
			
		};
		
	});
	
	
	
	/* 목록 아이템 페이지 */
	
	if($bodyID == "index" || $bodyID == "category" || $bodyID == "search" || $bodyID == "archive" || $windowLocation.indexOf("tag/") != -1) {
		
		getCSS("style_index.css");
		$body.addClass("list-page");
		
		var $indexWidth = $(".index-width-support"),
			$indexItem = $(".index-item");
		
		if($bodyID == "index") {

			if($(".cover-item").length > 0) {

				getCSS("style_cover.css");

				/* 사용자화 커버 아이템이 첫 번째에 없는 경우 */

				if($(".customized.cover-item:not(:first-child)").length > 0) {

					$(".customized.cover-item:not(:first-child)").remove();

				};
				
				
				if($(".cover-item:has(li p)").length > 0) {
					
					$(".cover-item li:has(p)").each(function(event) {
						
						var $this = $(this),
							$summary = $this.find("p"),
							$summaryText = $summary.html().replaceAll("&amp;", "&").replaceAll("<", "&lt;").replaceAll(">", "&rt;");

						$summary.html($summaryText);
						
					});
					
				}



				/* 슬라이더 */

				if($(".index-item-slider").length > 0) {

					if($(".index-item-slider.index-fullscreen-slider").length > 0) {

						var $fullSlider = $(".index-item-slider.index-fullscreen-slider");
						
						function eachSlider(value) {
							
							$fullSlider.each(function(event) {
								
								$(this).css("height", value + "px");
								
							});
							
							
						}
						
						eachSlider($measuringFrameHeight);
						
						
						
						$queryWindow.on({
							
							"load resize": function(event) {

								if($html.hasClass("no-touch")) {

									eachSlider($measuringFrameHeight);

								}

								else {

									if($orientation !== $changedOrientation) {

										if($orientation == "portrait") {

											if($portrait == 0) {

												$portrait = $measuringFrameHeight;

												eachSlider($portrait);


											}

											else {

												eachSlider($portrait);

											}

										}

										else {

											if($landscape == 0) {

												$landscape = $measuringFrameHeight;

												eachSlider($landscape);

											}

											else {

												eachSlider($landscape);

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
											eachSlider($portrait);

										};

									}

									else {

										if($measuringFrameHeight < $landscape) {

											$landscape = $measuringFrameHeight;
											eachSlider($landscape);

										};

									};

								};
								
							}
						
						});

					};



					$(".index-item-slider").each(function(event) {

						var $this = $(this),
							$listWrap = $this.find("ul"),
							$list = $listWrap.find("li"),
							$activeList = $listWrap.find("li.active"),
							$listLength = $list.length,
							$prevButton = $this.find(".prev-slide"),
							$nextButton = $this.find(".next-slide");


						if($listLength > 0) {

							function $showSlide(selector) {

								selector.addClass("active").attr("aria-hidden", "false").show();

								$activeList = $listWrap.find("li.active");

							};

							function $hideSlide() {

								$list.removeClass("active").attr("aria-hidden", "true").hide();

							};



							$showSlide($list.first());

							if($listLength > 1) {

								var repeat;

								function repeatEvent() {

									var $next = $activeList.next();

									if($next.length > 0) {

										$hideSlide();
										$showSlide($next);

									}

									else {

										$hideSlide();
										$showSlide($list.first());

									};

								};


								function clearRepeat() {

									clearInterval(repeat);

								};



								repeat = setInterval(repeatEvent, 5000);

								if($this.hasClass("index-fullscreen-slider") == false) {

									if($html.hasClass("no-touch") == true) {

										$this.on({

											"mouseover": function(event) {

												clearRepeat();

											},

											"mouseout": function(event) {

												repeat = setInterval(repeatEvent, 5000);

											}

										});

									}

									else {

										$this.on({

											"touchstart": function(event) {

												clearRepeat();

											},

											"touchend": function(event) {

												repeat = setInterval(repeatEvent, 5000);

											}

										});

									};

								}

								else {

									if($html.hasClass("touch") == true) {

										$this.on({

											"touchstart": function(event) {

												clearRepeat();

											},

											"touchend": function(event) {

												repeat = setInterval(repeatEvent, 5000);

											}

										});

									};

								}


								$prevButton.on("click", function(event) {

									var $prev = $activeList.prev();

									if($prev.length > 0) {

										$hideSlide();
										$showSlide($prev);

									}

									else {

										$hideSlide();
										$showSlide($list.last());

									};

									if($this.hasClass("index-fullscreen-slider") == true) {

										clearRepeat();
										repeat = setInterval(repeatEvent, 5000);

									};

								});


								$nextButton.on("click", function(event) {

									var $next = $activeList.next();

									if($next.length > 0) {

										$hideSlide();
										$showSlide($next);

									}

									else {

										$hideSlide();
										$showSlide($list.first());

									};

									if($this.hasClass("index-fullscreen-slider") == true) {

										clearRepeat();
										repeat = setInterval(repeatEvent, 5000);

									};

								});

							}

							else {

								$this.addClass("single");

							};

						};

					});

				};
				
				$gotoIndex.attr("aria-hidden", "true");
					
			}
			
				

			else {
				
				if($("#global-header").length > 0) {
					
					$("#global-header").remove();
					
				};
				
				
				
				$wrap.prepend(

					'<header id="global-header">' +
						'<div class="gh-text">' +
							'<h2></h2>' +
						'</div>' +
						'<del class="header-height" aria-hidden="true"></del>' +
					'</header>'

				);

				var $ghHeadline = $("#global-header h2"),
					$ghText = $(".gh-text");



				if($windowLocation == "/notice" || $windowLocation == "/notice/") {

					$body.addClass("notice-page");

					$ghHeadline.text("공지사항");
					$ghText.append(

						'<ul class="fc-list">' +
							'<li><a class="fade-link" href="' + blogLink + '">' + title + '</a></li>' +
						'</ul>'

					);
					
					gotoIndexHidden();
					runIndexHidden();
					
				}

				else {

					$ghHeadline.html(title);

					if($html.hasClass("trademark-support") == true) {

						$ghText.append('<figure class="trademark-header" aria-hidden="true"></figure>');

					};
					
					runIndexHidden();
					$gotoIndex.attr("aria-hidden", "true");

				};
				
				slot($indexWidth, "index-item", "div", 4, $indexItem);
			
			};
		
		}
		
		else {

			slot($indexWidth, "index-item", "div", 4, $indexItem);
			runIndexHidden();
			
			gotoIndexHidden();
			runIndexHidden();

		};
		
		
		
		if($bodyID == "category") {
			
			var $categoryKeyword = "," + ($(".gh-text h2").text().toLowerCase()) + ",",
				$itemWrap = $(".fc-index-width");

			preSetting(dayKeyword, $html, "day", "sysui dynamic dawn night");
			preSetting(dawnKeyword, $html, "dawn", "sysui dynamic day night");
			preSetting(nightKeyword, $html, "night", "sysui dynamic day dawn");
			preSetting(galleryKeyword, $itemWrap, "gallery", "large small poster-type card-type text-type");
			preSetting(largeGalleryKeyword, $itemWrap, "gallery large", "small poster-type card-type text-type");
			preSetting(smallGalleryKeyword, $itemWrap, "gallery small", "large poster-type card-type text-type");
			preSetting(posterTypeKeyword, $itemWrap, "gallery poster-type", "large small card-type text-type");
			preSetting(cardTypeKeyword, $itemWrap, "card-type", "gallery small large poster-type text-type");
			preSetting(textTypeKeyword, $itemWrap, "text-type", "gallery large small poster-type card-type");
			preSetting(hiddenTextKeyword, $itemWrap, "hide-text", "");
			preSetting(showTextKeyword, $itemWrap, "", "hide-text");
			
		}
		
		else if($bodyID == "search") {
			
			var $categoryKeyword = ",search,",
				$itemWrap = $(".fc-index-width");
			
			
			
			preSetting(dayKeyword, $html, "day", "sysui dynamic dawn night");
			preSetting(dawnKeyword, $html, "dawn", "sysui dynamic day night");
			preSetting(nightKeyword, $html, "night", "sysui dynamic day dawn");
			
			
			
			if($(".gh-text h2:empty").length > 0) {
				
				document.title = "검색어 없음";
				
				$(".gh-text h2:empty").text("검색어 없음");
				
			};
			
			$itemWrap.addClass("text-type").removeClass("gallery large small poster-type card-type hide-text");
			
			
			
			preSetting(galleryKeyword, $itemWrap, "gallery", "large small poster-type card-type text-type");
			preSetting(largeGalleryKeyword, $itemWrap, "gallery large", "small poster-type card-type text-type");
			preSetting(smallGalleryKeyword, $itemWrap, "gallery small", "large poster-type card-type text-type");
			preSetting(posterTypeKeyword, $itemWrap, "gallery poster-type", "large small card-type text-type");
			preSetting(cardTypeKeyword, $itemWrap, "card-type", "gallery small large poster-type text-type");
			preSetting(textTypeKeyword, $itemWrap, "text-type", "gallery large small poster-type card-type");
			preSetting(hiddenTextKeyword, $itemWrap, "hide-text", "");
			preSetting(showTextKeyword, $itemWrap, "", "hide-text");
			
		};
		
		
		
		if($(".itemlength0").length > 0) {

			$html.addClass("no-more-next-contents");

		}
		
		else if($("#pagination").length > 0) {
			
			if($html.hasClass("view-more-support") == true) {
				
				var pageTitle = document.title;
				
				if(pageTitle.indexOf(" (") != -1) {

					pageTitle = pageTitle.split(" (")[0];
					document.title = pageTitle;

				};
				
				$("#pagination").addClass("visuallyhidden-pagination").hide();
				$html.removeClass("has-pagination");
				
				function moreButton(func, label) {
					
					if($(".pg-" + func + " a").hasClass("no-more-" + func) == false) {

						var content = '<nav class="view-more-'+ func +'"><button class="fc-appearance icon" id="view-more-' + func + '" aria-label="' + label + ' 더 보기">더 보기</button></nav>',
							$indexWidth = $(".fc-index-width");
						
						if(func == "prev") {
							
							$indexWidth.before(content);
							
						}
						
						else {
							
							$indexWidth.after(content);
							
						}

						$(".blank-item").remove();

					}

					else {

						$html.addClass("no-more-" + func + "-contents");

					};
					
				};
				
				function moreButtonAJAX(func) {
					
					event.preventDefault();

					var $href = $(".pg-" + func + " a:not(.no-more-" + func +")").attr("href"),
						$indexWidth = $(".index-width-support");

					$(".index-item.loaded").removeClass("loaded");
					$html.addClass("loading-" + func + "-items");
					$(this).attr("aria-hidden", "true");

					if($(".pg-" + func + " a").hasClass("no-more-" + func) == false) {

						$window.setTimeout(function(event) {

							$.ajax({url: $href}).done(function(res) {

								var $res = $(res),
									$IndexItem = $res.find(".index-item"),
									$paginationInner = $res.find(".pagination").html();

								if($IndexItem.length > 0) {

									$(".index-item").removeClass("prev-loaded");
									$IndexItem.removeClass("prev-loaded").addClass("loaded");
									$IndexItem = $IndexItem;

									if(func == "prev") {
										$indexWidth.prepend($IndexItem);
									}
									
									else {
										$indexWidth.append($IndexItem);
									}
									
									$(".pagination").html($paginationInner);

									history.pushState($href, pageTitle + " (" + parseInt($href) + " Page)", $href);

								};


								$html.removeClass("loading-" + func + "-items");
								$(this).attr("aria-hidden", "false");

								if($(".pg-" + func + " a").hasClass("no-more-" + func) == true) {

									$(".view-more-" + func).remove();
									$html.addClass("no-more-" + func + "-contents");

								}

								else {

									$href = $(".pg-" + func + " a").attr("href");

								};

								getAsyncStyle();

							});

						}, 50);

					};
					
				};
				
				moreButton("prev", "이전 글");
				moreButton("next", "다음 글");
				
				$document.on("click", "#view-more-prev", function(event) {

					 moreButtonAJAX("prev");

				});
				
				$document.on("click", "#view-more-next", function(event) {

					 moreButtonAJAX("next");

				});

			};
			
		};
	
	}
	
	else if($bodyID == "page") {
		
		if($(".alert").length > 0) {

			getCSS("style_alert.css");
			
			$html.addClass("alert-support");

		}
		
		
		
		else if($(".absent_post").length > 0) {
			
			getCSS("style_alert.css");

			document.title = "글을 찾을 수 없음";
			$html.addClass("alert-support");

			$(".absent_post").parents(".index-width-support").html(

				'<div class="alert error icon">' +
					'<div class="alert-hgroup">' +
						'<p aria-label="죄송합니다만 글을 찾지 못했습니다. 혹시 다른 글이지 않을까요?">죄송합니다만 글을 찾지 못했습니다.</p>' +
						'<p aria-hidden="true">혹시 다른 글이지 않을까요?</p>' +
						'<a href="' + blogLink + '" role="button">첫 페이지로 이동</a>' +
					'</div>' +
				'</div>'

			);

		};
		
		gotoIndexHidden();
		runIndexHidden();
		
	}
		
	else {
		
		gotoIndexHidden();
		runIndexHidden();
		
	}
	
	
	
	/* 글로벌 헤더 공통 이벤트 */
	
	if($("#global-header").length > 0) {
		
		var $globalHeader = $("#global-header"),
			$globalHeaderHeight = $(".header-height").offset().top,
			$globalNavigationHeight;
		

		
		$html.addClass("gh gh-top");
		$gnbCenter.attr("aria-hidden", "true");
		
		$gnbCenter.find("p").text($globalHeader.find("h2").text());
		$gnbCenter.find("span").html(title);
		
		
		
		if($bodyID != "guestbook") {
			
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

				ghPosition();

			});



			$window.setTimeout(function(event) {

				ghPosition();

			}, 1000);



			if($bodyID == "page") {}

			else {

				$globalNavigation.show();

			};
			
		};
		
	}
	
	else {
		
		$html.removeClass("gh-top");
		$globalNavigation.show();
		
	};
	
	
	
	/* 터치 이벤트 */
	
	if($html.hasClass("touch") == true) {

		$document.on({
			
			"touchstart": function(event) {
				
				$(this).addClass("hover");
			
			},
			
			"touchend": function(event) {
				
				$(this).removeClass("hover");
			
			}
			
		}, "a, span, button, label, #textRefresh");
		
		$gotoIndex.on({
			
			"touchstart": function(event) {
				
				$html.addClass("hovered-go-to-index");
				
			},
			
			"touchend": function(event) {
				
				$html.removeClass("hovered-go-to-index");
				
			}
			
		});
		
		
	}
	
	else {
		
		$gotoIndex.on({
			
			"mouseover": function(event) {
				
				$html.addClass("hovered-go-to-index");
				
			},
			
			"mouseout": function(event) {
				
				$html.removeClass("hovered-go-to-index");
				
			}
			
		});
		
	};


	
	/* 메인 버튼 이벤트 */
	
	$document.on("click", ".fc-button", function(event) {
		
		event.preventDefault();

		var data = $(this).data("func");

		switch (data) {

			case "open-sidebar":

				$html.addClass("show-sidebar hide-blog-info fade-sub-navigation sidebar-adsense-support").removeClass("hide-sidebar");

				$sidebar.attr("aria-hidden", "false").show();
				$blogInfo.attr("aria-hidden", "true").hide();

				$scrollbarSupport.attr("aria-hidden", "true");
				
				
				if($html.hasClass("overflow") == true) {
					
					$scrollbarSupport.css("width", "calc(100% - " + $scrollbarWidth + "px)");
					
				}
				
				$sidebar.css("width", "");


			break;

			case "close-sidebar":

				if($html.hasClass("fixed-sidebar") == false) {
					
					$html.addClass("hide-sidebar").removeClass("show-sidebar");

					$sidebar.attr("aria-hidden", "true").hide();

					$scrollbarSupport.attr("aria-hidden", "false");

					$window.setTimeout(function() {

						$html.removeClass("sidebar-adsense-support");
						$sidebar.scrollTop(0);

					}, 500)



					if($html.hasClass("overflow") == true) {

						$sidebar.css("width", "calc(100% + " + $scrollbarWidth + "px)");

					}

					$scrollbarSupport.css("width", "");


					$wrapWidth = $wrap.innerWidth();
					scrollbarEvent();
					
				};

			break;

			case "open-blog-info":

				$html.addClass("show-blog-info hide-sidebar fade-sub-navigation sidebar-adsense-support").removeClass("hide-blog-info");

				$blogInfo.attr("aria-hidden", "false").show();
				$sidebar.attr("aria-hidden", "true").hide();
				
				$scrollbarSupport.attr("aria-hidden", "true");
				
				if($html.hasClass("overflow") == true) {
					
					$scrollbarSupport.css("width", "calc(100% - " + $scrollbarWidth + "px)");
					
				}
				
				$blogInfo.css("width", "");

			break;

			case "close-blog-info":
				
				if($html.hasClass("fixed-sidebar") == false) {
					
					$html.addClass("hide-blog-info").removeClass("show-blog-info");

					$blogInfo.attr("aria-hidden", "true").hide();

					$scrollbarSupport.attr("aria-hidden", "false");


					$window.setTimeout(function() {

						$html.removeClass("sidebar-adsense-support");
						$blogInfo.scrollTop(0);

					}, 600)

					if($html.hasClass("overflow") == true) {

						$blogInfo.css("width", "calc(100% + " + $scrollbarWidth + "px)");

					}

					$scrollbarSupport.css("width", "");


					$wrapWidth = $wrap.innerWidth();
					scrollbarEvent();
					
				}

			break;

			case "go-to-top":

				$("html, body").animate({"scrollTop": 0}, 400);
				
				if($html.hasClass("fixed-sidebar") == true) {
					
					$sidebarInner.animate({"scrollTop": 0}, 400);
					
				};
				
				$html.addClass("scrolling-to-top");
				
				$window.setTimeout(function(event) {
					
					$html.removeClass("scrolling-to-top");
					
				}, 1200);

			break;

			case "show-comments":

				$html.addClass("show-comments").removeClass("show-export show-info");
				
				$("#comments").attr("aria-hidden", "false").show();
				$("#export, #related").attr("aria-hidden", "true").hide();
				$(this).attr("aria-selected", "true");
				$(".fc-button[data-func='show-export'], .fc-button[data-func='show-related']").attr("aria-selected", "false");
				
				$window.setTimeout(function(event) {
					
					$wrapHeight = $wrap.innerHeight();
					scrollbarEvent();
					
				}, 10);

			break;

			case "show-export":

				$html.addClass("show-export").removeClass("show-comments show-info");
				
				$("#export").attr("aria-hidden", "false").show();
				$("#comments, #related").attr("aria-hidden", "true").hide();
				$(this).attr("aria-selected", "true");
				$(".fc-button[data-func='show-comments'], .fc-button[data-func='show-related']").attr("aria-selected", "false");
				
				$window.setTimeout(function(event) {
					
					$wrapHeight = $wrap.innerHeight();
					scrollbarEvent();
					
				}, 10);

			break;

			case "show-related":

				$html.addClass("show-info").removeClass("show-comments show-export");
				
				$("#related").attr("aria-hidden", "false").show();
				$("#comments, #export").attr("aria-hidden", "true").hide();
				$(this).attr("aria-selected", "true");
				$(".fc-button[data-func='show-comments'], .fc-button[data-func='show-export']").attr("aria-selected", "false");
				
				$window.setTimeout(function(event) {
					
					$wrapHeight = $wrap.innerHeight();
					scrollbarEvent();
					
				}, 10);

			break;

		}

	});
	

	
	/* 페이지 이벤트 */
	
	if($("#pagination").length > 0) {
		
		var $pagination = $("#pagination");
		
		if($pagination.hasClass("visuallyhidden-pagination") == false) {
			
			$html.addClass("has-pagination");
			
		};
		
		$(".no-more-prev,.no-more-next").attr("aria-disabled", "true");
		$pagination.find(".pg-number li").each(function(event) {

			var $thisLink = $(this).find("a");
			
			if($thisLink.text().indexOf("···") != -1) {

				$(this).addClass("ellipsis");
				$thisLink.attr({"aria-hidden": "true", "role": ""}).html("<span>…</span>");

			}

			else {

				var $paginationNumber = $thisLink.text() + "페이지";
				
				$(this).addClass("available");
				$thisLink.attr("aria-label", $paginationNumber);

			}

		});
		
		$pagination.find(".selected").parents(".number").attr("aria-selected", "true").parents("li").removeClass("available");
		
	};
	
	
	
	/* 네이버 버튼 */
	
	if(naverID != "undefined") {
		
		$document.on("click", ".subscribe-on-naver", function(event) {

			event.preventDefault();
			$window.open('http://section.blog.naver.com/connect/PopConnectBuddyAddForm.nhn?blogId=' + naverID + '&amp;widgetSeq=3&amp;sender=code','네이버 이웃 추가하기','width=420,height=250,scrollbars=no,status=no;');

		});
		
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
	
	
	
	if($html.hasClass("important-alert") == true) {
		
		$head.find("meta[name='theme-color']").remove();
		
	};
	
});