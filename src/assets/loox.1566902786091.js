var LOOX = LOOX || {};
LOOX.root = 'https://loox.io';
LOOX.clientId = '4JZLf53uEv';
var __looxLoaded=__looxLoaded||!1;!function(){if(!__looxLoaded)if("undefined"!=typeof LOOX){var d=LOOX.root||"";__looxLoaded=!0,LOOX.hash="undefined"!=typeof loox_global_hash?loox_global_hash:1e3*Math.floor((new Date).getTime()/1e3/60/60)*60*60,LOOX.inject=l;var A=function(t){var e=document.getElementById("looxOverlay"+(t?"_"+t:""))||document.getElementById("looxOverlay_quickview");e&&e.parentNode.removeChild(e),0==document.getElementsByClassName("loox-overlay").length&&(document.body.style.overflow="",document.body.style.position="")};window.onpopstate=A,LOOX.closeModal=A,window.looxWrite=function(t){s({origin:"https://loox.io",data:{type:"write",productId:t}})},LOOX.openQV=function(t,e){var o=d+"/post/quickview/"+t;o+="?p="+(LOOX.productId||""),LOOX.system&&(o+="&l="+LOOX.system),LOOX.version&&(o+="&ver="+LOOX.version),LOOX.hash&&(o+="&h="+LOOX.hash),(e=e||LOOX.ref)&&(o+="&ref="+e),l(o,"quickview","500px",{width:"100%",hash:"#qv"+t,overlay:!0,marginTop:LOOX.fbScrollTop?LOOX.fbScrollTop+"px":"0"}),function(t,e,o){if(e){var i=e.getItem(t);-1<(i=i?i.split(","):[]).indexOf(o)||(i.push(o),e.setItem(t,i.join(",")))}}("qv",sessionStorage,t)};var t=/lx_ver=([0-9A-Za-z_\-|.]+)/gi.exec(decodeURIComponent(window.location.search));t&&0<t.length&&(LOOX.version=t[1]),"undefined"!=typeof ShopifyAnalytics&&ShopifyAnalytics.meta&&ShopifyAnalytics.meta.product&&(LOOX.productId=ShopifyAnalytics.meta.product.id),window.addEventListener?addEventListener("message",s,!1):attachEvent("onmessage",s),LOOX.domReady=function t(e){return/in/.test(document.readyState)?setTimeout(t,9,e):e()},LOOX.domReady(function(){var t=decodeURIComponent(window.location.search),e=/^\?lx=([0-9A-Za-z_\-|.]+)/gi.exec(t);if(e&&0<e.length){var o=d+"/widget/"+LOOX.clientId+"/dialog/"+e[1];LOOX.system&&(o+="?l="+LOOX.system),l(o,"looxDialog","600px",{overlay:!0})}var i=/^\?lx_ep=([0-9A-Za-z_\-|.]+)/gi.exec(t);i&&0<i.length&&l(d+"/widget/"+LOOX.clientId+"/add-photo/"+i[1],"looxEdit","600px",{overlay:!0});var a=/(?:\?|&)qv=([0-9A-Za-z_\-]+)/gi.exec(t);a&&0<a.length&&s({origin:"https://loox.io",data:{type:"quickview",postId:a[1]}}),/(?:\?|&)ref=review/gi.test(t)&&s({origin:"https://loox.io",data:{type:"write"}});var n="disabled"!==LOOX.client_ga&&document.querySelector("a[href='#looxReviews']");n&&n.addEventListener("click",function(t){s({origin:"https://loox.io",data:{type:"report",eventCategory:"Loox - Widget Interactions",eventAction:"Loox star rating clicked"}})});var r="disabled"!==LOOX.client_ga&&document.querySelector(".loox-float-toggler-container");r&&r.addEventListener("click",function(t){s({origin:"https://loox.io",data:{type:"report",eventCategory:"Loox - Widget Interactions",eventAction:"Loox Sidebar widget clicked"}})})})}else console.error("Loox object is not defined");function l(t,e,o,i){i=i||{};var a=document.body,n=document.createElement("div"),r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;t+=(t.match(/[\?]/g)?"&":"?")+"frame_id="+e,n.id="looxOverlay_"+e,n.classList.add("loox-overlay"),n.style.cssText="width: 100%;height:100%; position:fixed; font-family: Arial, Helvetica, sans-serif;top: 0;right: 0;bottom: 0;left: 0;z-index: 9999999999;opacity: 1;-webkit-transition: opacity 400ms ease-in;-moz-transition: opacity 400ms ease-in;transition: opacity 400ms ease-in;overflow-y:scroll;-webkit-overflow-scrolling: touch;",i&&i.overlay&&(n.style.cssText+="background: rgba(238, 238, 238, 0.9);");var d,l,s=i.marginTop||(600<window.innerWidth?"10%":0);if(n.innerHTML='<div style="position:relative;min-height:'+(r?"101%":"100%")+";"+(i.width?"max-width:"+i.width:"max-width:900px")+";margin: "+s+' auto 0;">'+('<iframe id="'+e+'" src="'+t+'" height="'+(d=o)+'" width="'+(l="100%")+'" frameborder="0" scrolling="no" margin="0" style="overflow:hidden;height:'+d+";width:1px;min-width:"+l+';"></iframe>')+"</div>",i&&i.close_btn){var c=document.createElement("div");c.id="modalclose",c.style.cssText="color:#424242; line-height:24px; position:absolute; right:20px; text-align:center; top:20px; width:24px; text-decoration:none; font-weight:bold; cursor:pointer; font-size:44px;",c.innerHTML="&times;",n.children[0].appendChild(c);var p=function(t){if(t&&t.stopPropagation(),history)return history.pushState("",document.title,window.location.pathname+window.location.search);A()};c.onclick=p,n.onclick=p}a.appendChild(n),window.history&&window.history.pushState&&(history.pushState({url:t},"",i.hash||"#qv"),a.style.overflow="hidden")}function s(t){if("https://loox.io"!=d||"https://loox.io"==t.origin){var o="string"==typeof t.data&&0===t.data.indexOf("{")?JSON.parse(t.data):t.data;if("resize"==o.type){var e=document.getElementById(o.frame);e.height=o.height+"px",e.style.height=o.height+"px",e.parentNode.style.height=o.height+"px"}if("report"!=o.type){if("scroll_to_view"==o.type){var i=document.getElementById("looxReviews");i&&window.scrollTo(0,i.offsetTop)}"closeModal"==o.type&&(history&&history.pushState("",document.title,window.location.pathname+window.location.search),A(o.frame)),"looxFbPixel"==o.type&&o.track?fbq&&fbq("track",o.track):("write"==o.type&&function(){var t=o.productId||LOOX.productId;if(!t)return console.error("Cannot open write dialog, productId is not defined");var e=d+"/widget/"+LOOX.clientId+"/write/"+t;LOOX.system&&(e+="?l="+LOOX.system),l(e,"looxDialog","600px",{overlay:!0})}(),"setSystem"==o.type&&(LOOX.system=o.system),"quickview"===o.type&&LOOX.openQV(o.postId,o.ref||null),"hc-floater"===o.type&&LOOX.openHCFloater(o.productId))}else"undefined"!=typeof ga&&ga("send",{hitType:"event",eventCategory:o.eventCategory,eventAction:o.eventAction,eventLabel:o.eventLabel})}}}(),LOOX.ajax=ajax={},ajax.x=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var t,e=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],o=0;o<e.length;o++)try{t=new ActiveXObject(e[o]);break}catch(t){}return t},ajax.send=function(t,e,o,i,a){void 0===a&&(a=!0);var n=ajax.x();n.open(o,t,a),n.onreadystatechange=function(){if(4==n.readyState)try{return e(JSON.parse(n.responseText))}catch(t){return e(n.responseText)}},"POST"==o&&n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(i)},ajax.get=function(t,e,o,i){var a=[];for(var n in e)a.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));ajax.send(t+(a.length?"?"+a.join("&"):""),o,"GET",null,i)},ajax.post=function(t,e,o,i){var a=[];for(var n in e)a.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));ajax.send(t,o,"POST",a.join("&"),i)},function(){var p=document.getElementsByClassName("loox-rating");!function(){if(!LOOX.iconFontLoaded){LOOX.iconFontLoaded=!0;var t="@font-face {font-family: 'LooxIcons'; src: url('data:application/octet-stream;base64,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') format('woff'); font-weight: normal; font-style: normal;}.loox-icon {display: inline-block; font: normal normal normal 14px/1 LooxIcons; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}i.loox-icon {font-family:LooxIcons !important; }.loox-star:before {content: '\\e800' !important;}.loox-star-o:before {content: '\\e801' !important;}.loox-star-half-o:before {content: '\\f123' !important;}.loox-caret:before {content: '\\e802' !important;}a[href='#looxReviews'] { text-decoration:none; }",e=document.createElement("style");e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}}();var A={},g=!0,t=function(){for(var r={},t=0;t<p.length;t++){var e=p[t];if(!e.getAttribute("data-rating-upgraded")){var o=e.getAttribute("data-id");A[o]&&(e.setAttribute("data-rating",A[o].rating),e.setAttribute("data-raters",A[o].raters));var i=Number(e.getAttribute("data-rating"));if(i&&!isNaN(i)){for(var a=Math.ceil(2*i)/2,n="",d=1;d<=5;d++){n+="<i class='loox-icon "+(d<=a?"loox-star":d<=a+.5?"loox-star-half-o":"loox-star-o")+"'></i>"}var l=Number(e.getAttribute("data-raters"));if(l&&!isNaN(l)){l=l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),i=i.toFixed(1);var s=e.getAttribute("data-pattern");n+=s?"&nbsp;<span>"+s.replace(/\[count\]/gi,l).replace(/\[rating\]/gi,i)+"</span>":"&nbsp;<span>("+l+")</span>",e.setAttribute("title",i+" rating ("+l+" votes)")}e.setAttribute("data-rating-upgraded",1),e.innerHTML=n}else o&&null!=e.getAttribute("data-fetch")&&(r[o]||(r[o]=[]),r[o].push(e),e.removeAttribute("data-fetch"))}}var c=Object.keys(r);0<c.length&&g&&LOOX.ajax.get(LOOX.root+"/widget/"+LOOX.clientId+"/ratings",{products_ids:c.join(","),h:LOOX.hash},function(t){if(t.success){if(typeof[]==typeof t.ratings&&0<t.ratings.length)for(var e=0;e<t.ratings.length;e++){var o=t.ratings[e];A[o.pid]={rating:o.rating,raters:o.raters};for(var i=r[o.pid]||[],a=0;a<i.length;a++){var n=i[a];n.setAttribute("data-rating",o.rating),n.setAttribute("data-raters",o.raters)}}}else g=!1})};setInterval(t,500),t()}(),function(){var m=LOOX.root||"";if(!LOOX.widgetRunOnce){LOOX.widgetRunOnce=!0;var t=document.createElement("style"),e='#looxReviews, #looxCarousel {float:none;clear:both;}#looxReviews:before, #looxReviews:after, #looxCarousel:before, #looxCarousel:after {content:" ";visibility:hidden;display:block;height:0;clear:both;}';t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.head||document.getElementsByTagName("head")[0]).appendChild(t);var o=function(){var t=document.getElementById("looxReviews");if(t&&!t.getAttribute("data-upgraded")){t.setAttribute("data-upgraded","true");var e=t.parentNode.childNodes[0];if(e&&/columns/gi.test(e.className)){var o=document.createElement("div");o.className="clearfix",t.parentNode.insertBefore(o,t)}if(LOOX.productId=t.getAttribute("data-product-id"),"{{product.id}}"==LOOX.productId)return console.error('LOOX reviews - product id is set to "{{ product.id }}" which is not a real product Id, the loox widget cannot be injected using settings or be placed inside a {% raw %} directive');var i=m+"/widget/"+LOOX.clientId+"/reviews",a=[];null!=t.getAttribute("data-loox-aggregate")&&LOOX.productId?a.push("productId="+LOOX.productId):LOOX.productId&&(i+="/"+LOOX.productId),LOOX.hash&&a.push("h="+LOOX.hash),LOOX.system&&a.push("l="+LOOX.system),LOOX.version&&a.push("ver="+LOOX.version);var n=t.getAttribute("data-mode");n&&a.push("mode="+n);var r=t.getAttribute("data-or-productIds");r&&a.push("productIds="+r);var d=t.getAttribute("data-tags");d&&""!==d&&a.push("tags="+d);var l=t.getAttribute("data-limit");l&&a.push("limit="+l);var s=t.getAttribute("data-limit-mobile");s&&window.innerWidth<720&&a.push("limit="+s);var c=t.getAttribute("data-paging");c&&a.push("paging="+c);var p=t.getAttribute("data-header");p&&a.push("header="+p);var A=t.getAttribute("data-write-btn");A&&a.push("write_btn="+A);var g=t.getAttribute("data-visibility");g&&a.push("visibility="+g);var u=t.getAttribute("data-product-thumbnails");u&&a.push("thumbnails="+u);var h=t.getAttribute("data-view");h&&a.push("view="+encodeURIComponent(h));var f=t.getAttribute("data-variant");f&&a.push("variant="+f),0<a.length&&(i+="?"+a.join("&"));t.style.cssText||(t.style.margin="0 auto;");t.innerHTML='<iframe id="looxReviewsFrame" title="Reviews" src="'+i+'" height="0" width="100%" frameborder="0" scrolling="no" margin="0" style="overflow:hidden;height:0;width:100%;"></iframe>'}};o(),setInterval(o,1e3)}}(),function(a){a&&!a.pop_widget&&"undefined"!=typeof loox_pop_active&&(a.pop_widget={active:loox_pop_active,display_filter:"undefined"!=typeof loox_pop_display?loox_pop_display:null},a.pop_widget.active&&function(){if(!a.pop_widget.display_filter)return!0;var t=window.location.pathname;return"/"===t?a.pop_widget.display_filter.home_page:0===t.indexOf("/cart")?a.pop_widget.display_filter.cart_page:a.productId?a.pop_widget.display_filter.product_page:a.pop_widget.display_filter.other_pages}()&&function(o){var i=[];if(0!==window.location.pathname.indexOf("/cart")||!a.ajax)return a.productId&&i.push(a.productId),o(i);a.ajax.get("//"+window.location.hostname+"/cart.json",{},function(t){if(t&&t.items)for(var e=0;e<t.items.length;e++)i.push(t.items[e].product_id);return o(i)})}(function(t){var e=a.root+"/widget/"+a.clientId+"/pop-notification.js",o=[];o.push("h="+a.hash),0<t.length&&(o.push("productIds="+t.join(",")),a.pop_widget.hide_product=!0),0<o.length&&(e+="?"+o.join("&"));var i=document.createElement("script");if(i.async=1,i.src=e,document.body)return document.body.appendChild(i);a.domReady(function(){document.body.appendChild(i)})}))}(LOOX||{}),LOOX.openHCFloater=function(t){if(LOOX.root&&LOOX.clientId){var e=[];t&&(e.push("productIds="+t),e.push("thumbnails=false")),e.push("h="+LOOX.hash);var o=LOOX.root+"/widget/"+LOOX.clientId+"/reviews";0<e.length&&(o+="?"+e.join("&")),LOOX.inject(o,"looxModalFrame","100%",{overlay:!0,marginTop:"0px"})}},LOOX.isMobile=function(){return(window.innerWidth||document.documentElement.clientWidth)<720},function(t){if(t&&!t.floating_widget&&"undefined"!=typeof loox_floating_widget&&(t.floating_widget=loox_floating_widget,t.floating_widget.active&&(!t.floating_widget.hide_on_mobile||!t.isMobile())&&("/"===(e=window.location.pathname)?t.floating_widget.display_on_home_page:0===e.indexOf("/cart")?t.floating_widget.display_on_cart_page:t.productId?t.floating_widget.display_on_product_page:t.floating_widget.display_on_other_pages))){var e,o=[".loox-float-toggler { display: block; padding: 10px 20px 15px 20px; font-size: 18px; line-height: 1; cursor: pointer; position: fixed; z-index: 9999; top: 50%; opacity: 0; transition-duration: 0.4s; transition-timing-function: cubic-bezier(1, 0, 0, 1) }",".loox-float-toggler.loox-float-toggler--right { border-radius: 0 0 15px 15px; transform-origin: 100% 50%; transform: rotate(90deg) translate(50%, 0); right: 0; }",".loox-float-toggler.loox-float-toggler--left { border-radius: 0 0 15px 15px; transform: rotate(270deg) translate(-50%, -50%); transform-origin: 0 0; left: 0; }",".loox-float-toggler:hover, .loox-float-toggler:focus { color: initial; }",".loox-float-toggler--active.loox-float-toggler--right { transform: rotate(90deg) translate(50%, 50%); opacity: 1 }",".loox-float-toggler--active.loox-float-toggler--left { transform: rotate(270deg) translate(-50%, 0); opacity: 1 }"].join(""),i=document.createElement("style");i.styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),(document.head||document.getElementsByTagName("head")[0]).appendChild(i);var a=document.createElement("div");a.classList.add("loox-float-toggler-container");var n=document.createElement("div");n.innerHTML='<i class="loox-icon loox-star"></i> '+t.floating_widget.button_text,n.classList.add("loox-float-toggler"),"left"==t.floating_widget.position?n.classList.add("loox-float-toggler--left"):n.classList.add("loox-float-toggler--right"),n.style.backgroundColor="#"+(t.floating_widget.button_bg_color||"333"),n.style.color="#"+(t.floating_widget.button_text_color||"fff"),n.addEventListener("click",function(){t.openHCFloater()}),a.appendChild(n),t.domReady(function(){document.body.appendChild(a),setTimeout(function(){n.classList.add("loox-float-toggler--active")},1500)})}}(LOOX||{}),function(g){var t=function(){var t=document.getElementById("looxCarousel");if(t&&0!=t.length&&!t.getAttribute("data-caraousel-loaded")){t.setAttribute("data-caraousel-loaded","true");var e=(g.root||"")+"/widget/"+g.clientId+"/carousel",o="looxCarouselFrame",i=[];i.push("frame_id="+o),i.push("h="+g.hash);var a=t.getAttribute("data-show-more")||null;null!=a&&i.push("show_more_btn="+encodeURIComponent(a));var n=t.getAttribute("data-max-width")||null;null!=n&&i.push("max_width="+encodeURIComponent(n));var r=t.getAttribute("data-arrows-color")||null;null!=r&&i.push("arrows_color="+encodeURIComponent(r));var d=t.getAttribute("data-dots-color")||null;null!=d&&i.push("dots_color="+encodeURIComponent(d));var l=t.getAttribute("data-button-color")||null;null!=l&&i.push("button_color="+encodeURIComponent(l));var s=t.getAttribute("data-product-ids")||null;null!=s&&i.push("productIds="+encodeURIComponent(s));var c=t.getAttribute("data-mode")||null;null!=c&&i.push("mode="+encodeURIComponent(c));var p=t.getAttribute("data-use-widget-font")||null;null!=p&&i.push("use_widget_font="+encodeURIComponent(p)),window.location.search&&(-1!==window.location.search.indexOf("design_theme_id")||window.location.search.startsWith("?oseid="))&&i.push("shopify_editor_preview=true"),0<i.length&&(e+="?"+i.join("&"));var A=document.createElement("iframe");A.id=o,A.src=e,A.height="0",A.width="100%",A.scrolling="no",A.setAttribute("style","display:block;border:0;overflow:hidden;height:0;width:100%;"),t.appendChild(A)}};t(),setInterval(t,1e3)}(LOOX||{});var __loox_once=__loox_once||!1;!function(){if(!__loox_once){__loox_once=!0,LOOX.domReady(function(){var t=window.location.search;if(t&&-1!==t.indexOf("ref=loox")){var e=sessionStorage;if(e&&null===e.getItem("lxsrc")){t=t.substring(1).split("&");for(var o={},i=0;i<t.length;i++){var a=t[i].split("=");"ref"===a[0]&&(o.ref=a[1]),"ref_source"===a[0]&&(o.source=a[1]),"post_id"===a[0]&&(o.post_id=a[1])}e.setItem("lxsrc",JSON.stringify(o))}}}),LOOX.domReady(function(){if("object"==typeof Shopify&&Shopify.checkout&&Shopify.Checkout&&"thank_you"===Shopify.Checkout.page){var t=sessionStorage;if(t){var e=t.getItem("lxsrc"),o=t.getItem("qv");if(o||e){e=e&&JSON.parse(e)||{};var i=["c="+LOOX.clientId,"o="+Shopify.checkout.order_id,"t="+Shopify.checkout.token];o&&0<o.length&&i.push("qv="+o),e.ref&&i.push("ref="+e.ref),e.source&&i.push("ref_source="+e.source),e.post_id&&i.push("post_id="+e.post_id),t.removeItem("qv"),t.removeItem("lxsrc");var a=document.createElement("img");a.src=["//pixel.loox.io","track","order"].join("/")+"?"+i.join("&"),a.setAttribute("style","display:none;border:0;overflow:hidden;height:1px;width:1px;"),document.body.appendChild(a)}}}}),LOOX.domReady(function(){if("object"==typeof Weglot){var e=document.getElementById("looxReviewsFrame");if(e&&e.contentWindow){var t=function(t){e.contentWindow.postMessage(JSON.stringify({weglotlangchange:t}),"*")};Weglot.on("switchersReady",t),Weglot.on("languageChanged",t)}}});var t=window.location.search;t&&-1<t.indexOf("design_theme_id")&&-1<t.indexOf("frame_token")&&LOOX.domReady(function(){var t=window.location.search,e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=LOOX.root+"/shopify-editor/"+LOOX.clientId+"/loader"+t;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)})}}();