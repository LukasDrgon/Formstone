/*! formstone v1.3.3 [lightbox.js] 2017-08-12 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){$=b.$body,_=a("html, body"),aa=b.window.location.hash.replace("#","")}function d(){ca&&i()}function e(a){this.on(W.click,a,h);var b=this.data(S+"-gallery");!ba&&aa&&b===aa&&(ba=!0,this.trigger(W.click))}function f(a){j(),this.off(W.namespace)}function g(b,c){b instanceof a&&h.apply(Y,[{data:a.extend(!0,{},{$object:b},T,c||{})}])}function h(c){if(!ca){var d=c.data;ca=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},d),ca.isViewer=ca.isMobile&&d.viewer&&"undefined"!=typeof a.fn.fsViewer;var e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(S+"-type"):""),k="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=P(g),n="url"===i||!k&&!l&&"http"===g.substr(0,4)&&!h,p="element"===i||!k&&!l&&!n&&"#"===h.substr(0,1),q="undefined"!=typeof f;if(p&&(g=h),!(k||l||n||p||q))return void(ca=null);if(X.killEvent(c),ca.margin*=2,k?ca.type="image":l?ca.type="video":ca.type="element",k||l){var s=e.data(S+"-gallery");s&&(ca.gallery.active=!0,ca.gallery.id=s,ca.gallery.$items=a("a[data-lightbox-gallery= "+ca.gallery.id+"], a[rel= "+ca.gallery.id+"]"),ca.gallery.index=ca.gallery.$items.index(ca.$el),ca.gallery.total=ca.gallery.$items.length-1)}ca.thumbnails&&(k||l)&&ca.gallery.active||(ca.thumbnails=!1);var u="";ca.isMobile||(u+='<div class="'+[V.overlay,ca.theme,ca.customClass].join(" ")+'"></div>');var v=[V.base,V.loading,V.animating,ca.theme,ca.customClass];if(ca.fixed&&v.push(V.fixed),ca.isMobile&&v.push(V.mobile),ca.isTouch&&v.push(V.touch),n&&v.push(V.iframed),(p||q)&&v.push(V.inline),ca.thumbnails&&v.push(V.thumbnailed),u+='<div class="'+v.join(" ")+'" role="dialog" aria-label="lightbox" tabindex="-1">',u+='<button type="button" class="'+V.close+'">'+ca.labels.close+"</button>",u+='<span class="'+V.loading_icon+'"></span>',u+='<div class="'+V.container+'">',ca.gallery.active&&ca.thumbnails){u+='<div class="'+[V.thumbnails]+'">',u+='<div class="'+[V.thumbnail_container]+'">';for(var w,x,z=0,A=ca.gallery.$items.length;z<A;z++)w=ca.gallery.$items.eq(z),x=w.data("lightbox-thumbnail"),x||(x=w.find("img").attr("src")),u+='<button class="'+[V.thumbnail_item]+'">',u+='<img src="'+x+'" alt="">',u+="</button>";u+="</div></div>"}u+='<div class="'+V.content+'"></div>',(k||l)&&(u+='<div class="'+V.tools+'">',u+='<div class="'+V.controls+'">',ca.gallery.active&&(u+='<button type="button" class="'+[V.control,V.control_previous].join(" ")+'">'+ca.labels.previous+"</button>",u+='<button type="button" class="'+[V.control,V.control_next].join(" ")+'">'+ca.labels.next+"</button>"),ca.isMobile&&ca.isTouch&&(u+='<button type="button" class="'+[V.toggle,V.caption_toggle].join(" ")+'">'+ca.labels.captionClosed+"</button>",ca.gallery.active&&ca.thumbnails&&(u+='<button type="button" class="'+[V.toggle,V.thumbnail_toggle].join(" ")+'">'+ca.labels.thumbnailsClosed+"</button>")),u+="</div>",u+='<div class="'+V.meta+'">',u+='<div class="'+V.meta_content+'">',ca.gallery.active&&(u+='<p class="'+V.position+'"',ca.gallery.total<1&&(u+=' style="display: none;"'),u+=">",u+='<span class="'+V.position_current+'">'+(ca.gallery.index+1)+"</span> ",u+=ca.labels.count,u+=' <span class="'+V.position_total+'">'+(ca.gallery.total+1)+"</span>",u+="</p>"),u+='<div class="'+V.caption+'">',u+=ca.formatter.call(e,d),u+="</div></div></div>",u+="</div>"),u+="</div></div>",$.append(u),ca.$overlay=a(U.overlay),ca.$lightbox=a(U.base),ca.$close=a(U.close),ca.$container=a(U.container),ca.$content=a(U.content),ca.$tools=a(U.tools),ca.$meta=a(U.meta),ca.$metaContent=a(U.meta_content),ca.$position=a(U.position),ca.$caption=a(U.caption),ca.$controlBox=a(U.controls),ca.$controls=a(U.control),ca.$thumbnails=a(U.thumbnails),ca.$thumbnailContainer=a(U.thumbnail_container),ca.$thumbnailItems=a(U.thumbnail_item),ca.isMobile?(ca.paddingVertical=ca.$close.outerHeight(),ca.paddingHorizontal=0,ca.mobilePaddingVertical=parseInt(ca.$content.css("paddingTop"),10)+parseInt(ca.$content.css("paddingBottom"),10),ca.mobilePaddingHorizontal=parseInt(ca.$content.css("paddingLeft"),10)+parseInt(ca.$content.css("paddingRight"),10)):(ca.paddingVertical=parseInt(ca.$lightbox.css("paddingTop"),10)+parseInt(ca.$lightbox.css("paddingBottom"),10),ca.paddingHorizontal=parseInt(ca.$lightbox.css("paddingLeft"),10)+parseInt(ca.$lightbox.css("paddingRight"),10),ca.mobilePaddingVertical=0,ca.mobilePaddingHorizontal=0),ca.contentHeight=ca.$lightbox.outerHeight()-ca.paddingVertical,ca.contentWidth=ca.$lightbox.outerWidth()-ca.paddingHorizontal,ca.controlHeight=ca.$controls.outerHeight(),m(),ca.gallery.active&&(ca.$lightbox.addClass(V.has_controls),G()),Z.on(W.keyDown,H),$.on(W.click,[U.overlay,U.close].join(", "),j).on([W.focus,W.focusIn].join(" "),Q),ca.gallery.active&&ca.$lightbox.on(W.click,U.control,B),ca.thumbnails&&ca.$lightbox.on(W.click,U.thumbnail_item,C),ca.isMobile&&ca.isTouch&&ca.$lightbox.on(W.click,U.caption_toggle,o).on(W.click,U.thumbnail_toggle,r),ca.$lightbox.fsTransition({property:"opacity"},function(){k?t(g):l?y(g):n?K(g):p?I(g):q&&L(ca.$object)}).addClass(V.open),ca.$overlay.addClass(V.open)}}function i(a){"object"!=typeof a&&(ca.targetHeight=arguments[0],ca.targetWidth=arguments[1]),"element"===ca.type?M(ca.$content.find("> :first-child")):"image"===ca.type?u():"video"===ca.type&&z(),l()}function j(a){X.killEvent(a),ca&&(ca.$lightbox.fsTransition("destroy"),ca.$content.fsTransition("destroy"),ca.$lightbox.addClass(V.animating).fsTransition({property:"opacity"},function(a){"undefined"!=typeof ca.$inlineTarget&&ca.$inlineTarget.length&&J(),ca.isViewer&&ca.$imageContainer&&ca.$imageContainer.length&&ca.$imageContainer.fsViewer("destroy"),ca.$lightbox.off(W.namespace),ca.$container.off(W.namespace),Z.off(W.keyDown),$.off(W.namespace),$.off(W.namespace),ca.$overlay.remove(),ca.$lightbox.remove(),"undefined"!=typeof ca.$el&&ca.$el&&ca.$el.length&&ca.$el.focus(),ca=null,Z.trigger(W.close)}),ca.$lightbox.removeClass(V.open),ca.$overlay.removeClass(V.open),ca.isMobile&&(_.removeClass(V.lock),X.unlockViewport(S)))}function k(){var a=n();ca.isMobile?0:ca.duration;ca.isMobile?X.lockViewport(S):ca.$controls.css({marginTop:(ca.contentHeight-ca.controlHeight-ca.metaHeight+ca.thumbnailHeight)/2}),""===ca.$caption.html()?(ca.$caption.hide(),ca.$lightbox.removeClass(V.has_caption),ca.gallery.active||ca.$tools.hide()):(ca.$caption.show(),ca.$lightbox.addClass(V.has_caption)),ca.$lightbox.fsTransition({property:ca.contentHeight!==ca.oldContentHeight?"height":"width"},function(){ca.$content.fsTransition({property:"opacity"},function(){ca.$lightbox.removeClass(V.animating),ca.isAnimating=!1}),ca.$lightbox.removeClass(V.loading).addClass(V.ready),ca.visible=!0,Z.trigger(W.open),ca.gallery.active&&(A(),D(),E()),ca.$lightbox.focus()}),ca.isMobile||ca.$lightbox.css({height:ca.contentHeight+ca.paddingVertical,width:ca.contentWidth+ca.paddingHorizontal,top:ca.fixed?0:a.top});var b=ca.oldContentHeight!==ca.contentHeight||ca.oldContentWidth!==ca.contentWidth;!ca.isMobile&&b||ca.$lightbox.fsTransition("resolve"),ca.oldContentHeight=ca.contentHeight,ca.oldContentWidth=ca.contentWidth,ca.isMobile&&_.addClass(V.lock)}function l(){if(ca.visible&&!ca.isMobile){var a=n();ca.$controls.css({marginTop:(ca.contentHeight-ca.controlHeight-ca.metaHeight+ca.thumbnailHeight)/2}),ca.$lightbox.css({height:ca.contentHeight+ca.paddingVertical,width:ca.contentWidth+ca.paddingHorizontal,top:ca.fixed?0:a.top}),ca.oldContentHeight=ca.contentHeight,ca.oldContentWidth=ca.contentWidth}}function m(){var a=n();ca.$lightbox.css({top:ca.fixed?0:a.top})}function n(){if(ca.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-ca.contentWidth-ca.paddingHorizontal)/2,top:ca.top<=0?(b.windowHeight-ca.contentHeight-ca.paddingVertical)/2:ca.top};return ca.fixed!==!0&&(a.top+=Z.scrollTop()),a}function o(a){if(X.killEvent(a),ca.captionOpen)p();else{s();var b=parseInt(ca.$metaContent.outerHeight(!0));b+=parseInt(ca.$meta.css("padding-top")),b+=parseInt(ca.$meta.css("padding-bottom")),ca.$meta.css({height:b}),ca.$lightbox.addClass(V.caption_open).find(U.caption_toggle).text(ca.labels.captionOpen),ca.captionOpen=!0}}function p(){ca.$lightbox.removeClass(V.caption_open).find(U.caption_toggle).text(ca.labels.captionClosed),ca.captionOpen=!1}function q(){var a=this.attr("title"),b=!(void 0===a||!a)&&a.replace(/^\s+|\s+$/g,"");return b?'<p class="caption">'+b+"</p>":""}function r(a){X.killEvent(a),ca.thumbnailsOpen?s():(p(),ca.$lightbox.addClass(V.thumbnails_open).find(U.thumbnail_toggle).text(ca.labels.thumbnailsOpen),ca.thumbnailsOpen=!0)}function s(){ca.$lightbox.removeClass(V.thumbnails_open).find(U.thumbnail_toggle).text(ca.labels.thumbnailsClosed),ca.thumbnailsOpen=!1}function t(b){ca.isViewer?(ca.$imageContainer=a('<div class="'+V.image_container+'"><img></div>'),ca.$image=ca.$imageContainer.find("img"),ca.$image.attr("src",b).addClass(V.image),ca.$content.prepend(ca.$imageContainer),u(),ca.$imageContainer.one("loaded.viewer",function(){k()}).fsViewer({theme:ca.theme})):(ca.$imageContainer=a('<div class="'+V.image_container+'"><img></div>'),ca.$image=ca.$imageContainer.find("img"),ca.$image.one(W.load,function(){var a=O(ca.$image);ca.naturalHeight=a.naturalHeight,ca.naturalWidth=a.naturalWidth,ca.retina&&(ca.naturalHeight/=2,ca.naturalWidth/=2),ca.$content.prepend(ca.$imageContainer),u(),k()}).on(W.error,N).attr("src",b).addClass(V.image),(ca.$image[0].complete||4===ca.$image[0].readyState)&&ca.$image.trigger(W.load))}function u(){if(ca.$image){var a=0;for(ca.windowHeight=ca.viewportHeight=b.windowHeight-ca.mobilePaddingVertical-ca.paddingVertical,ca.windowWidth=ca.viewportWidth=b.windowWidth-ca.mobilePaddingHorizontal-ca.paddingHorizontal,ca.contentHeight=1/0,ca.contentWidth=1/0,ca.imageMarginTop=0,ca.imageMarginLeft=0;ca.contentHeight>ca.viewportHeight&&a<2;)ca.imageHeight=0===a?ca.naturalHeight:ca.$image.outerHeight(),ca.imageWidth=0===a?ca.naturalWidth:ca.$image.outerWidth(),ca.metaHeight=0===a?0:ca.metaHeight,ca.spacerHeight=0===a?0:ca.spacerHeight,ca.thumbnailHeight=0===a?0:ca.thumbnailHeight,0===a&&(ca.ratioHorizontal=ca.imageHeight/ca.imageWidth,ca.ratioVertical=ca.imageWidth/ca.imageHeight,ca.isWide=ca.imageWidth>ca.imageHeight),ca.imageHeight<ca.minHeight&&(ca.minHeight=ca.imageHeight),ca.imageWidth<ca.minWidth&&(ca.minWidth=ca.imageWidth),ca.isMobile?(ca.isTouch?(ca.$controlBox.css({width:b.windowWidth}),ca.spacerHeight=ca.$controls.outerHeight(!0)):(ca.$tools.css({width:b.windowWidth}),ca.spacerHeight=ca.$tools.outerHeight(!0)),ca.contentHeight=ca.viewportHeight,ca.contentWidth=ca.viewportWidth,ca.isTouch||ca.$content.css({height:ca.contentHeight-ca.spacerHeight}),ca.spacerHeight+=ca.$thumbnails.outerHeight(!0)+10,v(),ca.imageMarginTop=(ca.contentHeight-ca.targetImageHeight-ca.spacerHeight)/2,ca.imageMarginLeft=(ca.contentWidth-ca.targetImageWidth)/2):(0===a&&(ca.viewportHeight-=ca.margin+ca.paddingVertical,ca.viewportWidth-=ca.margin+ca.paddingHorizontal),ca.viewportHeight-=ca.metaHeight,ca.thumbnails&&(ca.viewportHeight-=ca.thumbnailHeight),v(),ca.contentHeight=ca.targetImageHeight,ca.contentWidth=ca.targetImageWidth),ca.isMobile||ca.isTouch||ca.$meta.css({width:ca.contentWidth}),ca.$image.css({height:ca.targetImageHeight,width:ca.targetImageWidth,marginTop:ca.imageMarginTop,marginLeft:ca.imageMarginLeft}),ca.isMobile||(ca.metaHeight=ca.$meta.outerHeight(!0),ca.contentHeight+=ca.metaHeight),ca.thumbnails&&(ca.thumbnailHeight=ca.$thumbnails.outerHeight(!0),ca.contentHeight+=ca.thumbnailHeight),a++}}function v(){var a=ca.isMobile?ca.contentHeight-ca.spacerHeight:ca.viewportHeight,b=ca.isMobile?ca.contentWidth:ca.viewportWidth;ca.isWide?(ca.targetImageWidth=b,ca.targetImageHeight=ca.targetImageWidth*ca.ratioHorizontal,ca.targetImageHeight>a&&(ca.targetImageHeight=a,ca.targetImageWidth=ca.targetImageHeight*ca.ratioVertical)):(ca.targetImageHeight=a,ca.targetImageWidth=ca.targetImageHeight*ca.ratioVertical,ca.targetImageWidth>b&&(ca.targetImageWidth=b,ca.targetImageHeight=ca.targetImageWidth*ca.ratioHorizontal)),(ca.targetImageWidth>ca.imageWidth||ca.targetImageHeight>ca.imageHeight)&&(ca.targetImageHeight=ca.imageHeight,ca.targetImageWidth=ca.imageWidth),(ca.targetImageWidth<ca.minWidth||ca.targetImageHeight<ca.minHeight)&&(ca.targetImageWidth<ca.minWidth?(ca.targetImageWidth=ca.minWidth,ca.targetImageHeight=ca.targetImageWidth*ca.ratioHorizontal):(ca.targetImageHeight=ca.minHeight,ca.targetImageWidth=ca.targetImageHeight*ca.ratioVertical))}function w(a){return"//www.youtube.com/embed/"+a[1]}function x(a){return"//player.vimeo.com/video/"+a[3]}function y(b){var c=P(b),d=b.split("?");c?(d.length>=2&&(c+="?"+d.slice(1)[0].trim()),ca.$videoWrapper=a('<div class="'+V.video_wrapper+'"></div>'),ca.$video=a('<iframe class="'+V.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),ca.$video.attr("src",c).addClass(V.video).prependTo(ca.$videoWrapper),ca.$content.prepend(ca.$videoWrapper),z(),k()):N()}function z(){ca.windowHeight=ca.viewportHeight=b.windowHeight-ca.mobilePaddingVertical-ca.paddingVertical,ca.windowWidth=ca.viewportWidth=b.windowWidth-ca.mobilePaddingHorizontal-ca.paddingHorizontal,ca.videoMarginTop=0,ca.videoMarginLeft=0,ca.isMobile?(ca.isTouch?(ca.$controlBox.css({width:b.windowWidth}),ca.spacerHeight=ca.$controls.outerHeight(!0)+10):(ca.$tools.css({width:b.windowWidth}),ca.spacerHeight=ca.$tools.outerHeight(!0),ca.spacerHeight+=ca.$thumbnails.outerHeight(!0)+10),ca.viewportHeight-=ca.spacerHeight,ca.targetVideoWidth=ca.viewportWidth,ca.targetVideoHeight=ca.targetVideoWidth*ca.videoRatio,ca.targetVideoHeight>ca.viewportHeight&&(ca.targetVideoHeight=ca.viewportHeight,ca.targetVideoWidth=ca.targetVideoHeight/ca.videoRatio),ca.videoMarginTop=(ca.viewportHeight-ca.targetVideoHeight)/2,ca.videoMarginLeft=(ca.viewportWidth-ca.targetVideoWidth)/2):(ca.viewportHeight=ca.windowHeight-ca.margin,ca.viewportWidth=ca.windowWidth-ca.margin,ca.targetVideoWidth=ca.videoWidth>ca.viewportWidth?ca.viewportWidth:ca.videoWidth,ca.targetVideoWidth<ca.minWidth&&(ca.targetVideoWidth=ca.minWidth),ca.targetVideoHeight=ca.targetVideoWidth*ca.videoRatio,ca.contentHeight=ca.targetVideoHeight,ca.contentWidth=ca.targetVideoWidth),ca.isMobile||ca.isTouch||ca.$meta.css({width:ca.contentWidth}),ca.$videoWrapper.css({height:ca.targetVideoHeight,width:ca.targetVideoWidth,marginTop:ca.videoMarginTop,marginLeft:ca.videoMarginLeft}),ca.isMobile||(ca.metaHeight=ca.$meta.outerHeight(!0),ca.contentHeight+=ca.metaHeight),ca.thumbnails&&(ca.thumbnailHeight=ca.$thumbnails.outerHeight(!0),ca.contentHeight+=ca.thumbnailHeight)}function A(b){var c="";ca.gallery.index>0&&(c=ca.gallery.$items.eq(ca.gallery.index-1).attr("href"),P(c)||a('<img src="'+c+'">')),ca.gallery.index<ca.gallery.total&&(c=ca.gallery.$items.eq(ca.gallery.index+1).attr("href"),P(c)||a('<img src="'+c+'">'))}function B(b){X.killEvent(b);var c=a(b.currentTarget);ca.isAnimating||c.hasClass(V.control_disabled)||(ca.isAnimating=!0,p(),ca.gallery.index+=c.hasClass(V.control_next)?1:-1,ca.gallery.index>ca.gallery.total&&(ca.gallery.index=ca.infinite?0:ca.gallery.total),ca.gallery.index<0&&(ca.gallery.index=ca.infinite?ca.gallery.total:0),D(),ca.$lightbox.addClass(V.animating),ca.$content.fsTransition({property:"opacity"},F),ca.$lightbox.addClass(V.loading))}function C(b){X.killEvent(b);var c=a(b.currentTarget);ca.isAnimating||c.hasClass(V.active)||(ca.isAnimating=!0,p(),ca.gallery.index=ca.$thumbnailItems.index(c),D(),ca.$lightbox.addClass(V.animating),ca.$content.fsTransition({property:"opacity"},F),ca.$lightbox.addClass(V.loading))}function D(){if(ca.thumbnails){var a=ca.$thumbnailItems.eq(ca.gallery.index);ca.$thumbnailItems.removeClass(V.active),a.addClass(V.active)}}function E(){if(ca.thumbnails){var a=ca.$thumbnailItems.eq(ca.gallery.index),b=a.position().left+a.outerWidth(!1)/2-ca.$thumbnailContainer.outerWidth(!0)/2;ca.$thumbnailContainer.stop().animate({scrollLeft:b},200,"linear")}}function F(){"undefined"!=typeof ca.$imageContainer&&(ca.isViewer&&ca.$imageContainer.fsViewer("destroy"),ca.$imageContainer.remove()),"undefined"!=typeof ca.$videoWrapper&&ca.$videoWrapper.remove(),ca.$el=ca.gallery.$items.eq(ca.gallery.index),ca.$caption.html(ca.formatter.call(ca.$el,ca)),ca.$position.find(U.position_current).html(ca.gallery.index+1);var a=ca.$el.attr("href"),b=P(a);b?(ca.type="video",y(a)):(ca.type="image",t(a)),G()}function G(){ca.$controls.removeClass(V.control_disabled),ca.infinite||(0===ca.gallery.index&&ca.$controls.filter(U.control_previous).addClass(V.control_disabled),ca.gallery.index===ca.gallery.total&&ca.$controls.filter(U.control_next).addClass(V.control_disabled))}function H(a){!ca.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&ca.$close.trigger(W.click):(X.killEvent(a),ca.$controls.filter(37===a.keyCode?U.control_previous:U.control_next).trigger(W.click))}function I(b){ca.$inlineTarget=a(b),ca.$inlineContents=ca.$inlineTarget.children().detach(),L(ca.$inlineContents)}function J(){ca.$inlineTarget.append(ca.$inlineContents.detach())}function K(b){b+=b.indexOf("?")>-1?"&"+ca.requestKey+"=true":"?"+ca.requestKey+"=true";var c=a('<iframe class="'+V.iframe+'" src="'+b+'"></iframe>');L(c)}function L(a){ca.$content.append(a),M(a),k()}function M(a){ca.windowHeight=b.windowHeight-ca.mobilePaddingVertical-ca.paddingVertical,ca.windowWidth=b.windowWidth-ca.mobilePaddingHorizontal-ca.paddingHorizontal,ca.objectHeight=a.outerHeight(!0),ca.objectWidth=a.outerWidth(!0),ca.targetHeight=ca.targetHeight||(ca.$el?ca.$el.data(S+"-height"):null),ca.targetWidth=ca.targetWidth||(ca.$el?ca.$el.data(S+"-width"):null),ca.maxHeight=ca.windowHeight<0?ca.minHeight:ca.windowHeight,ca.isIframe=a.is("iframe"),ca.objectMarginTop=0,ca.objectMarginLeft=0,ca.isMobile||(ca.windowHeight-=ca.margin,ca.windowWidth-=ca.margin),ca.contentHeight=ca.targetHeight?ca.targetHeight:ca.isIframe||ca.isMobile?ca.windowHeight:ca.objectHeight,ca.contentWidth=ca.targetWidth?ca.targetWidth:ca.isIframe||ca.isMobile?ca.windowWidth:ca.objectWidth,(ca.isIframe||ca.isObject)&&ca.isMobile?(ca.contentHeight=ca.windowHeight,ca.contentWidth=ca.windowWidth):ca.isObject&&(ca.contentHeight=ca.contentHeight>ca.windowHeight?ca.windowHeight:ca.contentHeight,ca.contentWidth=ca.contentWidth>ca.windowWidth?ca.windowWidth:ca.contentWidth),ca.isMobile||(ca.contentHeight>ca.maxHeight&&(ca.contentHeight=ca.maxHeight),ca.contentWidth>ca.maxWidth&&(ca.contentWidth=ca.maxWidth))}function N(){var b=a('<div class="'+V.error+'"><p>Error Loading Resource</p></div>');ca.type="element",ca.$tools.remove(),ca.$image.off(W.namespace),L(b),Z.trigger(W.error)}function O(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}function P(a){var b,c=ca.videoFormatter;for(var d in c)if(c.hasOwnProperty(d)&&(b=a.match(c[d].pattern),null!==b))return c[d].format.call(ca,b);return!1}function Q(b){var c=b.target;a.contains(ca.$lightbox[0],c)||c===ca.$lightbox[0]||c===ca.$overlay[0]||(X.killEvent(b),ca.$lightbox.focus())}var R=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:q,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:w},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:x}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","scaling","zooming","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:e,_destruct:f,_resize:d,resize:i},utilities:{_initialize:g,close:j}}),S=R.namespace,T=R.defaults,U=R.classes,V=U.raw,W=R.events,X=R.functions,Y=b.window,Z=b.$window,$=null,_=null,aa=!1,ba=!1,ca=null});