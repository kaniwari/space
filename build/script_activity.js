$(function(){function e(e){$("head").append('<link rel="stylesheet" href="'+imagesURL+e+fcver+'">')}function t(e,t,a,l){""!==e&&(e=(","+e+",").replaceAll(", ",",").toLowerCase(),-1!=r.indexOf("/")?(r=r.split("/"),-1!=e.indexOf(r.join("/"))?t.addClass(a).removeClass(l):-1!=e.indexOf("*/"+r[1])?t.addClass(a).removeClass(l):-1!=e.indexOf(r[0]+"/*")?t.addClass(a).removeClass(l):-1!=e.indexOf("*/*")&&t.addClass(a).removeClass(l),r=r.join("/")):-1!=e.replaceAll("/**","").indexOf(r)&&t.addClass(a).removeClass(l))}var a=$("html");e("style_activity.css"),e("style_index.css"),1==a.hasClass("show-comments")?$("#comments").attr("aria-hidden","false").show():1==a.hasClass("show-export")?$("#export").attr("aria-hidden","false").show():1==a.hasClass("show-info")&&$("#related").attr("aria-hidden","false").show();var l=$(".related-item:not(.blank-item)").length;$("#related ul").addClass("itemlength"+l),l<4&&$("#related .more-contents").attr("href",blogLink+"category"),l>0&&$(".related-item").each(function(e){var t=$(this),a=t.find(".index-item-summary");$.ajax({url:t.find(".index-item-link").attr("href"),dataType:"html",success:function(e){if(null!=e.match('<meta property="og:description" content="(.*?)"')){var l=e.match('<meta property="og:description" content="(.*?)"')[0];l=l.substring(41,l.length-1).replaceAll("...","…").replaceAll("..","…"),a.html(l)}else t.toggleClass("protected-item article-item"),a.text("이 글은 보호되어 있습니다."),t.find(".index-item-thumbnail").removeAttr("style")}})});var r=","+$(".gh-text a[href*='category']").text().toLowerCase()+",",s=$(".fc-index-width, .related-content");t(galleryKeyword,s,"gallery","large small poster-type card-type text-type"),t(largeGalleryKeyword,s,"gallery","large small poster-type card-type text-type"),t(smallGalleryKeyword,s,"gallery","large small poster-type card-type text-type"),t(posterTypeKeyword,s,"gallery poster-type","large small card-type text-type"),t(cardTypeKeyword,s,"card-type","gallery large small poster-type text-type"),t(textTypeKeyword,s,"text-type","gallery large small poster-type card-type"),t(hiddenTextKeyword,s,"hide-text",""),t(showTextKeyword,s,"","hide-text"),1==a.hasClass("no-touch")&&$("#export .mobile").remove()});