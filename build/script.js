document.addEventListener("DOMContentLoaded",function(Ya){function M(a){w.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="'+imagesURL+a+fcver+'">')}function za(a){M("style_check.css");document.title="\uc2a4\ud0a8 \uc624\ub958";b.classList.add("important-alert");document.body.innerHTML='<main class="important-alert-inner" style="display:none"><h3>\uc2a4\ud0a8 \uc624\ub958</h3><p>\uc2a4\ud0a8\uc774 \uc62c\ubc14\ub974\uac8c \uc124\uce58\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc774 \uc624\ub958\ub294 '+
a+'</p><a href="'+manageLink+'/design/skin/edit" target="_blank" role="button">\uc2a4\ud0a8 \ud3b8\uc9d1\ud558\uae30</a></main>'}function ka(a,b,d,f,e){for(var h,c=1;c<=f;c++)h="<"+d+' class="'+b+" blank-item blank"+c+'" aria-hidden="true"></'+d+">",a.insertAdjacentHTML("beforeend",h);a.classList.add("itemlength"+(e.length-f))}function f(a,b,d,f){if(""!=a){var h=function(){for(var a=0;a<c.length;a++)b.classList.add(c[a]);for(a=0;a<e.length;a++)b.classList.remove(e[a])};a=(","+a+",").replaceAll(", ",
",").toLowerCase();var c=d,e=f;-1!=k.indexOf("/")?(k=k.split("/"),-1!=a.indexOf(k.join("/"))?h():-1!=a.indexOf("*/"+k[1])?h():-1!=a.indexOf(k[0]+"/*")?h():-1!=a.indexOf("*/*")&&h(),k=k.join("/")):-1!=a.replaceAll("/**","").indexOf(k)&&h()}}function D(){0<m?x.setAttribute("aria-hidden","true"):x.setAttribute("aria-hidden","false")}function P(){D();window.addEventListener("load",D);window.addEventListener("scroll",D);window.addEventListener("resize",D)}function la(){for(var a=document.querySelectorAll("*[data-style*='back']"),
h=0;h<a.length;h++)b.classList.contains("msie")?a[h].dataset.position=0:a[h].dataset.position!=a[h].getBoundingClientRect().top-document.body.getBoundingClientRect().top&&(a[h].dataset.position=a[h].getBoundingClientRect().top-document.body.getBoundingClientRect().top)}function ma(a){a.setAttribute("style",a.getAttribute("data-style"));a.removeAttribute("data-style")}function na(){for(var a=document.querySelectorAll("*[data-style*='back']"),b=0;b<a.length;b++)Y+Y/4>a[b].dataset.position&&(ma(a[b]),
a[b].removeAttribute("data-position"))}function Q(){for(var a=Za.querySelectorAll("*[data-style*='back']"),b=0;b<a.length;b++)ma(a[b]),a[b].removeAttribute("data-position")}function Z(){y=q<aa?"landscape":"portrait"}function Aa(){100>=m?ba.classList.add("sticky"):ba.classList.remove("sticky");0<m?b.classList.add("scrolling"):b.classList.remove("scrolling")}function r(){E=z.clientWidth-Ba.clientWidth;q<F+ca?(b.classList.add("overflow"),G.style.overflowY="scroll"):(b.classList.remove("overflow"),G.style.overflowY=
"");if("true"==fixedSidebar)if(1420<=aa){b.classList.add("fixed-sidebar","hide-sidebar","hide-blog-info");b.classList.remove("show-sidebar","show-blog-info","fade-sub-navigation","non-fixed-sidebar","sidebar-adsense-support");0<E?(l.style.width="calc(100% + "+E+"px)",H=Ca.offsetHeight+Da.offsetHeight,R=l.scrollTop,H>q?I.classList.add("overflowing"):I.classList.remove("overflowing")):(l.style.width="",I.style.display="none");for(var a=0;a<e.length;a++)e[a].style.width="",e[a].setAttribute("aria-hidden",
"false");G.style.width="";G.style.display="block";G.setAttribute("aria-hidden","false");0<document.getElementsByClassName("recommendation").length&&(document.getElementsByClassName("recommendation")[0].style.right="");b.classList.contains("sidebar-reset")||(b.classList.add("sidebar-reset"),R=l.scrollTop=0);I.classList.contains("overflowing")&&(Ea.style.cssText="top:"+R/H*100+"%; height:"+q/H*100+"%")}else b.classList.remove("fixed-sidebar","sidebar-reset"),b.classList.contains("non-fixed-sidebar")||
(l.style.width="",G.style.display="none",G.setAttribute("aria-hidden","true"),b.classList.add("non-fixed-sidebar"),I.classList.remove("overflowing"))}function $a(){I.classList.remove("fixed-sidebar-scrolling")}var oa=window.location.pathname,da=document.body,n=da.id.replace("tt-body-",""),w=document.head,ba=document.getElementById("global-navigation"),S=document.getElementsByClassName("gnb-center")[0],x=document.getElementsByClassName("go-to-index")[0],l=document.getElementsByClassName("sidebar-inner")[0],
I=document.getElementsByClassName("sidebar-scrollbar")[0],Ea=document.getElementsByClassName("sidebar-scrollbar-inner")[0],Ca=l.getElementsByClassName("sidebar-title")[0],Da=l.getElementsByClassName("sidebar-contents")[0],G=document.getElementsByClassName("sub-navigation")[0],Za=document.getElementsByClassName("sidebar-area")[0],t=document.getElementById("sidebar");document.getElementsByClassName("sidebar-func-list");var u=document.getElementById("blog-info"),A=document.getElementById("wrap"),ea=
document.getElementById("footer"),z=document.getElementById("measuring"),Ba=z.querySelectorAll(".measuring div")[0],e=document.getElementsByClassName("scrollbar-support");document.querySelector("link[rel='alternate']").href.replace("/rss","");var b=document.getElementsByTagName("html")[0],Fa=navigator,v=Fa.userAgent.toLowerCase(),ab=v.indexOf("android"),Ga=v.indexOf("chrome"),Ha=v.indexOf("windows"),pa="Netscape"==Fa.appName&&v.indexOf("trident"),Ia=v.indexOf("msie"),bb=v.indexOf("firefox"),F=A.offsetHeight,
ca=ea.offsetHeight,H,R,aa=window.innerWidth,q=window.innerHeight,y,J=0,K=0,E=z.offsetWidth-Ba.offsetWidth,g=z.offsetHeight,m=window.pageYOffset,Y=m+q;"willChange"in da.style?b.classList.add("gpu"):b.classList.add("no-gpu");"WebkitBackdropFilter"in da.style||"backdropFilter"in da.style?b.classList.add("effect"):b.classList.add("no-effect");CSS.supports("position","-webkit-sticky")||CSS.supports("position","sticky")?b.classList.add("stickyeffect"):b.classList.add("no-stickyeffect");"ontouchstart"in
document.documentElement?b.classList.add("touch"):b.classList.add("no-touch");w.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&amp;family=Noto+Sans+SC:wght@400;700&amp;family=Noto+Sans+TC:wght@400;700&amp;display=swap">');M("style_common.css");var Ja=fcverCheck.replaceAll("?fcver=","").substr(0,4);2520<parseInt(Ja)?za("\uc2a4\ud0a8\uc5d0 \ud544\uc694\ud55c \ud30c\uc77c\ub4e4\uc774 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d0 \uacbd\uc6b0 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc2a4\ud0a8\uc5d0 \ud544\uc694\ud55c \ud30c\uc77c\ub4e4\uc744 \ubaa8\ub450 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \ub300\uce58\ud558\uc2ed\uc2dc\uc624. \uadf8\ub798\ub3c4 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 \ube0c\ub77c\uc6b0\uc800\uc758 \uce90\uc2dc\ub97c \ucd08\uae30\ud654\ud558\uace0 \uc57d 30\ubd84\uac04 \uae30\ub2e4\ub824 \ubcf4\uc2ed\uc2dc\uc624."):
2520>parseInt(Ja)&&za("skin.html\uc774 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d0 \uacbd\uc6b0 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. skin.html\uc758 \ub0b4\uc6a9\uc744 \ubaa8\ub450 \ucd5c\uc2e0 \ubc84\uc804\uc758 \ub0b4\uc6a9\uc73c\ub85c \ub300\uce58\ud558\uc2ed\uc2dc\uc624.");if(-1!=pa||-1!=Ia||-1!=v.indexOf("edge")){if(-1!=pa||-1!=v.indexOf("edge"))b.classList.remove("no-gpu"),b.classList.add("gpu");-1==pa&&-1==Ia||b.classList.add("msie");-1!=v.indexOf("edge")&&b.classList.add("edge-browser")}else-1!=
bb&&(b.classList.remove("deptheffect"),b.classList.add("no-deptheffect"),-1!=Ha&&b.classList.add("firefox-windows"));-1!=ab?b.classList.add("android","goog"):-1!=Ha?-1!=Ga?b.classList.add("goog"):b.classList.add("ms"):-1!=Ga&&b.classList.add("goog");Z();var qa=y;"portrait"==y?J=g:K=g;Aa();r();b.classList.contains("fixed-sidebar")&&Q();window.addEventListener("load",function(a){g=z.offsetHeight;F=A.offsetHeight;ca=ea.offsetHeight;m=window.pageYOffset;r();Z();b.classList.contains("fixed-sidebar")&&
Q()});window.addEventListener("scroll",function(a){g=z.offsetHeight;m=window.pageYOffset;Y=m+q;Aa();la();na()});window.addEventListener("resize",function(a){aa=window.innerWidth;q=window.innerHeight;g=z.offsetHeight;F=A.offsetHeight;ca=ea.offsetHeight;m=window.pageYOffset;Y=m+q;r();Z();la();na()});window.setTimeout(function(a){g=z.offsetHeight;F=A.offsetHeight;ca=ea.offsetHeight;m=window.pageYOffset;r();Z();qa=y;b.classList.contains("fixed-sidebar")&&Q()},1E3);var Ka;l.addEventListener("scroll",function(a){b.classList.contains("fixed-sidebar")&&
(clearTimeout(Ka),H=Ca.offsetHeight+Da.offsetHeight,R=l.scrollTop,Ea.style.cssText="top:"+R/H*100+"%; height:"+q/H*100+"%",I.classList.add("fixed-sidebar-scrolling"),Ka=setTimeout($a,400))});if(0<document.querySelectorAll('img[src*="new_ico"]').length)for(var fa=document.querySelectorAll('img[src*="new_ico"]'),T=0;T<fa.length;T++)fa[T].insertAdjacentHTML("afterend",'<span class="fc-icon new-bedge" aria-hidden="true"></span>'),fa[T].parentNode.removeChild(fa[T]);if("index"==n||"category"==n||"search"==
n||"archive"==n||-1!=oa.indexOf("tag/")){M("style_index.css");document.body.classList.add("list-page");var La=document.getElementsByClassName("index-width-support")[0],Ma=document.getElementsByClassName("index-item");if("index"==n)if(0<document.getElementsByClassName("cover-item").length){M("style_cover.css");if(0<document.querySelectorAll(".customized.cover-item:not(:first-child)").length)for(var ra=document.querySelectorAll(".customized.cover-item:not(:first-child)"),ha=0;ha<ra.length;ha++)ra[ha].parentNode.removeChild(ra[ha]);
if(0<document.querySelectorAll(".cover-item li p").length)for(var sa=document.querySelectorAll(".cover-item li p"),ia=0;ia<sa.length;ia++)sa[ia].innerHTML=sa[ia].innerHTML.replaceAll("&amp;","&").replaceAll("<","&lt;").replaceAll(">","&gt;");if(0<document.getElementsByClassName("index-item-slider").length){if(0<document.querySelectorAll(".index-item-slider.index-fullscreen-slider").length){var ta=function(){b.classList.contains("no-touch")?N(g):y!==qa&&("portrait"==y?(0==J&&(J=g),N(J)):(0==K&&(K=
g),N(K)),qa=y)},N=function(a){for(var b=0;b<Na.length;b++)Na[b].style.height=a+"px"},Na=document.querySelectorAll(".index-item-slider.index-fullscreen-slider");N(g);ta();window.addEventListener("load",ta);window.addEventListener("resize",ta);window.addEventListener("scroll",function(a){b.classList.contains("touch")&&("portrait"==y?g<J&&(J=g,N(J)):g<K&&(K=g,N(K)))})}for(var c=document.getElementsByClassName("index-item-slider"),U,L=0;L<c.length;L++){var ua=c[L].getElementsByTagName("li"),Oa=ua.length;
0<Oa?(c[L].dataset.length=Oa,c[L].dataset.currentItem="1",ua[0].classList.add("active"),ua[0].setAttribute("aria-hidden","false")):(c[L].dataset.length="0",c[L].dataset.currentItem="0")}var va=function(a){for(a=0;a<c.length;a++){var b=c[a].getElementsByTagName("li");1<b.length&&(Number(c[a].dataset.currentItem)<Number(c[a].dataset.length)?(b[Number(c[a].dataset.currentItem)].classList.add("active"),b[Number(c[a].dataset.currentItem)].setAttribute("aria-hidden","false"),b[Number(c[a].dataset.currentItem)-
1].classList.remove("active"),b[Number(c[a].dataset.currentItem)-1].setAttribute("aria-hidden","true"),c[a].dataset.currentItem=Number(c[a].dataset.currentItem)+1):(b[0].classList.add("active"),b[0].setAttribute("aria-hidden","false"),b[Number(c[a].dataset.currentItem)-1].classList.remove("active"),b[Number(c[a].dataset.currentItem)-1].setAttribute("aria-hidden","true"),c[a].dataset.currentItem="1"))}};U=setInterval(va,slideInterval);document.addEventListener("click",function(a){for($target=a.target;$target&&
$target!=this;$target=$target.parentNode)if(a.target.classList.contains("prev-slide")){var b=a.target.closest(".index-item-slider");a=b.getElementsByTagName("li");1<Number(b.dataset.length)&&(1<Number(b.dataset.currentItem)?(a[Number(b.dataset.currentItem)-2].classList.add("active"),a[Number(b.dataset.currentItem)-2].setAttribute("aria-hidden","false"),a[Number(b.dataset.currentItem)-1].classList.remove("active"),a[Number(b.dataset.currentItem)-1].setAttribute("aria-hidden","true"),b.dataset.currentItem=
Number(b.dataset.currentItem)-1):(a[Number(b.dataset.length)-1].classList.add("active"),a[Number(b.dataset.length)-1].setAttribute("aria-hidden","false"),a[0].classList.remove("active"),a[0].setAttribute("aria-hidden","true"),b.dataset.currentItem=b.dataset.length),clearInterval(U),U=setInterval(va,slideInterval));break}else if(a.target.classList.contains("next-slide")){b=a.target.closest(".index-item-slider");a=b.getElementsByTagName("li");1<Number(b.dataset.length)&&(Number(b.dataset.currentItem)<
Number(b.dataset.length)?(a[Number(b.dataset.currentItem)].classList.add("active"),a[Number(b.dataset.currentItem)].setAttribute("aria-hidden","false"),a[Number(b.dataset.currentItem)-1].classList.remove("active"),a[Number(b.dataset.currentItem)-1].setAttribute("aria-hidden","true"),b.dataset.currentItem=Number(b.dataset.currentItem)+1):(a[0].classList.add("active"),a[0].setAttribute("aria-hidden","false"),a[Number(b.dataset.currentItem)-1].classList.remove("active"),a[Number(b.dataset.currentItem)-
1].setAttribute("aria-hidden","true"),b.dataset.currentItem="1"),clearInterval(U),U=setInterval(va,slideInterval));break}})}x.setAttribute("aria-hidden","true")}else{0<document.querySelectorAll("#global-header").length&&document.getElementById("global-header").parentNode.removeChild(document.getElementById("global-header"));A.insertAdjacentHTML("afterbegin",'<header id="global-header"><div class="gh-text"><h1 class="gh-headline"></h1></div><div class="header-height" aria-hidden="true"></div></header>');
var Pa=document.querySelector("#global-header .gh-headline"),Qa=document.getElementsByClassName("gh-text")[0];"/notice"==oa||"/notice/"==oa?(document.body.classList.add("notice-page"),Pa.textContent="\uacf5\uc9c0\uc0ac\ud56d",Qa.insertAdjacentHTML("beforeend",'<ul class="fc-list"><li><a class="fade-link" href="'+blogLink+'">'+title+"</a></li></ul>"),D(),P()):(Pa.innerHTML=title,b.classList.contains("trademark-support")&&Qa.insertAdjacentHTML("beforeend",'<figure class="trademark-header" aria-hidden="true"></figure>'),
P(),x.setAttribute("aria-hidden","true"));ka(La,"index-item","div",4,Ma)}else ka(La,"index-item","div",4,Ma),P(),D(),P();if("category"==n){var k=","+document.querySelectorAll(".gh-text .gh-headline")[0].textContent.toLowerCase()+",";var B=document.getElementsByClassName("fc-index-width")[0];f(dayKeyword,b,["day"],["sysui","dynamic","dawn","night"]);f(dawnKeyword,b,["dawn"],["sysui","dynamic","day","night"]);f(nightKeyword,b,["night"],["sysui","dynamic","day","dawn"]);f(galleryKeyword,B,["gallery"],
["large","small","poster-type","card-type","text-type"]);f(largeGalleryKeyword,B,["gallery","large"],["small","poster-type","card-type","text-type"]);f(smallGalleryKeyword,B,["gallery","small"],["large","poster-type","card-type","text-type"]);f(posterTypeKeyword,B,["gallery","poster-type"],["large","small","card-type","text-type"]);f(cardTypeKeyword,B,["card-type"],["gallery","small","large","poster-type","text-type"]);f(textTypeKeyword,B,["text-type"],["gallery","large","small","poster-type","card-type"]);
f(hiddenTextKeyword,B,["hide-text"],"");f(showTextKeyword,B,"",["hide-text"])}else if("search"==n){k=",search,";var p=document.getElementsByClassName("fc-index-width")[0];f(dayKeyword,b,["day"],["sysui","dynamic","dawn","night"]);f(dawnKeyword,b,["dawn"],["sysui","dynamic","day","night"]);f(nightKeyword,b,["night"],["sysui","dynamic","day","dawn"]);0<document.querySelectorAll(".gh-text .gh-headline:empty").length&&(document.title="\uac80\uc0c9\uc5b4 \uc5c6\uc74c",document.querySelector(".gh-text .gh-headline:empty").textContent=
"\uac80\uc0c9\uc5b4 \uc5c6\uc74c");p.classList.add("text-type");p.classList.remove("gallery","large","small","poster-type","card-type","hide-text");f(galleryKeyword,p,["gallery"],["large","small","poster-type","card-type","text-type"]);f(largeGalleryKeyword,p,["gallery","large"],["small","poster-type","card-type","text-type"]);f(smallGalleryKeyword,p,["gallery","small"],["large","poster-type","card-type","text-type"]);f(posterTypeKeyword,p,["gallery","poster-type"],["large","small","card-type","text-type"]);
f(cardTypeKeyword,p,["card-type"],["gallery","small","large","poster-type","text-type"]);f(textTypeKeyword,p,["text-type"],["gallery","large","small","poster-type","card-type"]);f(hiddenTextKeyword,p,["hide-text"],"");f(showTextKeyword,p,"",["hide-text"])}if(0<document.getElementsByClassName("itemlength0").length)b.classList.add("no-more-next-contents");else if(0<document.querySelectorAll("#pagination").length&&b.classList.contains("view-more-support")){var Ra=function(a,h){Ya.preventDefault();for(var d=
document.querySelector(".pg-"+a+" a").href,f=document.getElementsByClassName("index-width-support")[0],c=document.querySelectorAll(".index-item.loaded"),e=0;e<c;e++)c[e].classList.remove("loaded");b.classList.add("loading-"+a+"-items");document.querySelector(h).setAttribute("aria-hidden","true");document.querySelector(".pg-"+a+" a").classList.contains("no-more-"+a)||(c=new XMLHttpRequest,c.onload=function(){if(200<=this.status&&400>this.status){var c=this.responseXML,e=c.getElementsByClassName("index-item"),
g=document.getElementsByClassName("index-item"),m=c.getElementsByClassName("index-width-support")[0];if(0<e.length){for(var k=document.querySelectorAll(".index-item.blank-item"),l=0;l<k.length;l++)k[l].parentNode.removeChild(k[l]);for(k=0;k<g.length;k++)g[k].classList.remove("loaded","prev-loaded");for(g=0;g<e.length;g++)"next"==a?e[g].classList.add("loaded"):e[g].classList.add("prev-loaded"),0<e[g].querySelectorAll("*[data-style*='back']").length&&ma(e[g].querySelector("*[data-style*='back']"));
"next"==a?(f.insertAdjacentHTML("beforeend",m.innerHTML),document.querySelector(".pg-next a").setAttribute("href",c.querySelector(".pg-next a").getAttribute("href")),document.querySelector(".pg-next a").setAttribute("class",c.querySelector(".pg-next a").getAttribute("class"))):(f.insertAdjacentHTML("afterbegin",m.innerHTML),document.querySelector(".pg-prev a").setAttribute("href",c.querySelector(".pg-prev a").getAttribute("href")),document.querySelector(".pg-prev a").setAttribute("class",c.querySelector(".pg-prev a").getAttribute("class")));
document.getElementsByClassName("pg-number")[0].innerHTML=c.getElementsByClassName("pg-number")[0].innerHTML;history.pushState(d,V+" ("+parseInt(d)+" Page)",d);g=document.getElementsByClassName("index-item")}b.classList.remove("loading-"+a+"-items");document.querySelector(h).setAttribute("aria-hidden","false");document.querySelector(".pg-"+a+" a").classList.contains("no-more-"+a)?(document.getElementsByClassName("view-more-"+a)[0].parentNode.removeChild(document.getElementsByClassName("view-more-"+
a)[0]),b.classList.add("no-more-"+a+"-contents")):d=document.querySelector(".pg-"+a+" a").getAttribute("href");ka(f,"index-item","div",4,g)}},c.open("GET",d),c.responseType="document",c.send())},Sa=function(a,c){if(document.querySelector(".pg-"+a+" a").classList.contains("no-more-"+a))b.classList.add("no-more-"+a+"-contents");else{c='<nav class="view-more-'+a+'"><button class="fc-appearance icon" id="view-more-'+a+'" aria-label="'+c+' \ub354 \ubcf4\uae30">\ub354 \ubcf4\uae30</button></nav>';var d=
document.getElementsByClassName("fc-index-width")[0];"prev"==a?d.insertAdjacentHTML("beforebegin",c):d.insertAdjacentHTML("afterend",c)}},V=document.title;-1!=V.indexOf(" (")&&(V=V.split(" (")[0],document.title=V);document.getElementById("pagination").classList.add("visuallyhidden-pagination");document.getElementById("pagination").style.display="none";b.classList.remove("has-pagination");Sa("prev","\uc774\uc804 \uae00");Sa("next","\ub2e4\uc74c \uae00");document.addEventListener("click",function(a){var b=
a.target;for($target=a.target;$target&&$target!=this;$target=$target.parentNode)if("view-more-prev"==b.id){Ra("prev","#view-more-prev");break}else if("view-more-next"==b.id){Ra("next","#view-more-next");break}})}}else"page"==n&&(0<document.getElementsByClassName("alert").length?(M("style_alert.css"),b.classList.add("alert-support")):0<document.getElementsByClassName("absent_post").length&&(M("style_alert.css"),document.title="\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc74c",b.classList.add("alert-support"),
document.getElementsByClassName("absent_post")[0].closest(".index-width-support").innerHTML='<div class="alert error icon"><div class="alert-hgroup"><div role="text" aria-label="\uc8c4\uc1a1\ud569\ub2c8\ub2e4\ub9cc \uae00\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ud639\uc2dc \ub2e4\ub978 \uae00\uc774\uc9c0 \uc54a\uc744\uae4c\uc694?"><p>\uc8c4\uc1a1\ud569\ub2c8\ub2e4\ub9cc \uae00\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.</p><p>\ud639\uc2dc \ub2e4\ub978 \uae00\uc774\uc9c0 \uc54a\uc744\uae4c\uc694?</p></div><a href="'+
blogLink+'" role="button">\uccab \ud398\uc774\uc9c0\ub85c \uc774\ub3d9</a></div></div>')),D(),P();if(0<document.querySelectorAll("#global-header").length){var cb=document.getElementById("global-header"),Ta=document.getElementsByClassName("header-height")[0],Ua=Ta.getBoundingClientRect().top-document.body.getBoundingClientRect().top,Va;b.classList.add("gh","gh-top");S.setAttribute("aria-hidden","true");S.getElementsByTagName("p")[0].textContent=cb.getElementsByClassName("gh-headline")[0].textContent;
S.getElementsByTagName("span")[0].innerHTML=title;if("guestbook"!=n){var ja=function(){Ua=Ta.getBoundingClientRect().top-document.body.getBoundingClientRect().top;Va=760<aa?60:50;m>Ua-Va?(b.classList.remove("gh-top"),S.setAttribute("aria-hidden","false")):(b.classList.add("gh-top"),S.setAttribute("aria-hidden","true"))};window.addEventListener("load",ja);window.addEventListener("scroll",ja);window.addEventListener("resize",ja);window.setTimeout(function(a){ja()},1E3);"page"!=n&&(ba.style.display=
"block")}}else b.classList.remove("gh-top"),ba.style.display="block";b.classList.contains("touch")?(document.addEventListener("touchstart",function(a){for(a=a.target;"body"!=a.tagName.toLowerCase();a=a.parentElement)"a"!=a.tagName.toLowerCase()&&"button"!=a.tagName.toLowerCase()&&"input"!=a.tagName.toLowerCase()&&"label"!=a.tagName.toLowerCase()&&"span"!=a.tagName.toLowerCase()&&"textRefresh"!=a.id||a.classList.add("hover")}),document.addEventListener("touchend",function(a){for(a=a.target;"body"!=
a.tagName.toLowerCase();a=a.parentElement)"a"!=a.tagName.toLowerCase()&&"button"!=a.tagName.toLowerCase()&&"input"!=a.tagName.toLowerCase()&&"label"!=a.tagName.toLowerCase()&&"span"!=a.tagName.toLowerCase()&&"textRefresh"!=a.id||a.classList.remove("hover")}),x.addEventListener("touchstart",function(a){b.classList.add("hovered-go-to-index")}),x.addEventListener("touchend",function(a){b.classList.remove("hovered-go-to-index")})):(x.addEventListener("mouseover",function(a){b.classList.add("hovered-go-to-index")}),
x.addEventListener("mouseout",function(a){b.classList.remove("hovered-go-to-index")}));document.addEventListener("click",function(a){var c=a.target;for($target=a.target;$target&&$target!=this;$target=$target.parentNode)if(c.classList.contains("fc-button"))switch(a.preventDefault(),c.dataset.func){case "open-sidebar":b.classList.add("show-sidebar","hide-blog-info","fade-sub-navigation","sidebar-adsense-support");b.classList.remove("hide-sidebar");t.setAttribute("aria-hidden","false");t.style.display=
"block";u.setAttribute("aria-hidden","true");u.style.display="none";for(var d=0;d<e.length;d++)e[d].setAttribute("aria-hidden","true");if(b.classList.contains("overflow"))for(d=0;d<e.length;d++)e[d].style.width="calc(100% - "+E+"px)";t.style.width="";Q();break;case "close-sidebar":if(!b.classList.contains("fixed-sidebar")){b.classList.add("hide-sidebar");b.classList.remove("show-sidebar");t.setAttribute("aria-hidden","true");t.style.display="none";for(d=0;d<e.length;d++)e[d].setAttribute("aria-hidden",
"false");window.setTimeout(function(){b.classList.remove("sidebar-adsense-support");t.scrollTop=0},500);b.classList.contains("overflow")&&(t.style.width="calc(100% + "+E+"px)");for(d=0;d<e.length;d++)e[d].style.width="";r()}break;case "open-blog-info":b.classList.add("show-blog-info","hide-sidebar","fade-sub-navigation","sidebar-adsense-support");b.classList.remove("hide-blog-info");u.setAttribute("aria-hidden","false");u.style.display="block";t.setAttribute("aria-hidden","true");t.style.display=
"none";for(d=0;d<e.length;d++)e[d].setAttribute("aria-hidden","true");if(b.classList.contains("overflow"))for(d=0;d<e.length;d++)e[d].style.width="calc(100% - "+E+"px)";u.style.width="";Q();break;case "close-blog-info":if(!b.classList.contains("fixed-sidebar")){b.classList.add("hide-blog-info");b.classList.remove("show-blog-info");u.setAttribute("aria-hidden","true");u.style.display="none";for(d=0;d<e.length;d++)e[d].setAttribute("aria-hidden","false");window.setTimeout(function(){b.classList.remove("sidebar-adsense-support");
u.scrollTop=0},600);b.classList.contains("overflow")&&(u.style.width="calc(100% + "+E+"px)");for(d=0;d<e.length;d++)e[d].style.width="";r()}break;case "go-to-top":windowScroll(0);b.classList.contains("fixed-sidebar")&&windowScroll(0,l);b.classList.add("scrolling-to-top");window.setTimeout(function(a){b.classList.remove("scrolling-to-top")},1200);break;case "show-comments":b.classList.add("show-comments");b.classList.remove("show-export","show-info");document.getElementById("comments").hidden=!1;document.getElementById("export").hidden=
!0;document.getElementById("related").hidden=!0;document.querySelector(".fc-button[data-func='show-comments']").setAttribute("aria-selected","true");document.querySelector(".fc-button[data-func='show-export']").setAttribute("aria-selected","false");document.querySelector(".fc-button[data-func='show-related']").setAttribute("aria-selected","false");window.setTimeout(function(a){F=A.offsetHeight;r()},10);break;case "show-export":b.classList.add("show-export");b.classList.remove("show-comments","show-info");
document.getElementById("export").hidden=!1;document.getElementById("comments").hidden=!0;document.getElementById("related").hidden=!0;document.querySelector(".fc-button[data-func='show-export']").setAttribute("aria-selected","true");document.querySelector(".fc-button[data-func='show-comments']").setAttribute("aria-selected","false");document.querySelector(".fc-button[data-func='show-related']").setAttribute("aria-selected","false");window.setTimeout(function(a){F=A.offsetHeight;r()},10);break;case "show-related":b.classList.add("show-info"),
b.classList.remove("show-comments","show-export"),document.getElementById("related").hidden=!1,document.getElementById("comments").hidden=!0,document.getElementById("export").hidden=!0,document.querySelector(".fc-button[data-func='show-related']").setAttribute("aria-selected","true"),document.querySelector(".fc-button[data-func='show-comments']").setAttribute("aria-selected","false"),document.querySelector(".fc-button[data-func='show-export']").setAttribute("aria-selected","false"),window.setTimeout(function(a){F=
A.offsetHeight;r()},10)}});if(0<document.querySelectorAll("#pagination").length){var wa=document.getElementById("pagination");wa.getElementsByClassName("selected");wa.classList.contains("visuallyhidden-pagination")||b.classList.add("has-pagination");for(var Wa=document.querySelectorAll(".no-more-prev, .no-more-next"),W=wa.querySelectorAll(".pg-number li"),xa=0;xa<Wa.length;xa++)Wa[xa].setAttribute("aria-disabled","true");for(var O=0;O<W.length;O++){var C=W[O].getElementsByTagName("a")[0];if(-1!=C.textContent.indexOf("\u00b7\u00b7\u00b7"))W[O].classList.add("ellipsis"),
C.setAttribute("aria-hidden","true"),C.setAttribute("role",""),C.innerHTML="<span>\u2026</span>";else{var Xa=C.textContent+"\ud398\uc774\uc9c0";W[O].getElementsByTagName("span")[0].classList.contains("selected")?(C.setAttribute("aria-label",Xa),C.setAttribute("aria-selected","true")):(W[O].classList.add("available"),C.setAttribute("aria-label",Xa))}}}"undefined"!=naverID&&document.addEventListener("click",function(a){var b=a.target;for($target=a.target;$target&&$target!=this;$target=$target.parentNode)if(b.classList.contains("subscribe-on-naver")){a.preventDefault();
window.open("https://section.blog.naver.com/connect/PopConnectBuddyAddForm.nhn?blogId="+naverID+"&amp;widgetSeq=3&amp;sender=code","\ub124\uc774\ubc84 \uc774\uc6c3 \ucd94\uac00\ud558\uae30","width=420,height=250,scrollbars=no,status=no;");break}});if("transparent"==$themeColorOrig&&!b.classList.contains("sysui")){var X;b.classList.contains("day")?X="#f4f4f4":b.classList.contains("dawn")?X="#d9d0c3":b.classList.contains("night")&&(X="#0e0e0e");if(0<w.querySelectorAll("meta[name='theme-color']").length)w.querySelector("meta[name='theme-color']").content=
X;else{var ya=document.createElement("meta");ya.name="theme-color";ya.content=X;w.appendChild(ya)}}b.classList.contains("important-alert")&&0<w.querySelectorAll("meta[name='theme-color']").length&&w.querySelector("meta[name='theme-color']").parentNode.removeChild(w.querySelector("meta[name='theme-color']"));la();na();console.log("Designed by Fraccino. (https://fraccinospace.tistory.com)")});
