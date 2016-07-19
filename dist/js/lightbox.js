/*! formstone v1.2.0 [lightbox.js] 2016-07-19 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){da=b.$body,ea=a("html, body"),fa=b.window.location.hash.replace("#","")}function d(){ha&&i()}function e(a){this.on(_.click,a,h);var b=this.data(X+"-gallery");!ga&&fa&&b===fa&&(ga=!0,this.trigger(_.click))}function f(a){j(),this.off(_.namespace)}function g(b,c){b instanceof a&&h.apply(ba,[{data:a.extend(!0,{},{$object:b},Y,c||{})}])}function h(c){if(!ha){var d=c.data;ha=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1},d);var e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(X+"-type"):""),k="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=U(g),n="url"===i||!k&&!l&&"http"===g.substr(0,4)&&!h,p="element"===i||!k&&!l&&!n&&"#"===h.substr(0,1),q="undefined"!=typeof f;if(p&&(g=h),!(k||l||n||p||q))return void(ha=null);if(aa.killEvent(c),ha.touch=d.touch&&ha.isMobile&&ha.isTouch,ha.margin*=2,k?ha.type="image":l?ha.type="video":ha.type="element",k||l){var s=e.data(X+"-gallery");s&&(ha.gallery.active=!0,ha.gallery.id=s,ha.gallery.$items=a("a[data-lightbox-gallery= "+ha.gallery.id+"], a[rel= "+ha.gallery.id+"]"),ha.gallery.index=ha.gallery.$items.index(ha.$el),ha.gallery.total=ha.gallery.$items.length-1)}ha.thumbnails&&(k||l)&&ha.gallery.active||(ha.thumbnails=!1);var u="";ha.isMobile||(u+='<div class="'+[$.overlay,ha.theme,ha.customClass].join(" ")+'"></div>');var v=[$.base,$.loading,$.animating,ha.theme,ha.customClass];if(ha.fixed&&v.push($.fixed),ha.isMobile&&v.push($.mobile),ha.isTouch&&v.push($.touch),n&&v.push($.iframed),(p||q)&&v.push($.inline),ha.thumbnails&&v.push($.thumbnailed),u+='<div class="'+v.join(" ")+'" role="dialog" aria-label="lightbox" tabindex="-1">',u+='<button type="button" class="'+$.close+'">'+ha.labels.close+"</button>",u+='<span class="'+$.loading_icon+'"></span>',u+='<div class="'+$.container+'">',ha.gallery.active&&ha.thumbnails){u+='<div class="'+[$.thumbnails]+'">',u+='<div class="'+[$.thumbnail_container]+'">';for(var w,x,y=0,z=ha.gallery.$items.length;z>y;y++)w=ha.gallery.$items.eq(y),x=w.data("lightbox-thumbnail"),x||(x=w.find("img").attr("src")),u+='<button class="'+[$.thumbnail_item]+'">',u+='<img src="'+x+'" alt="">',u+="</button>";u+="</div></div>"}u+='<div class="'+$.content+'"></div>',(k||l)&&(u+='<div class="'+$.tools+'">',u+='<div class="'+$.controls+'">',ha.gallery.active&&(u+='<button type="button" class="'+[$.control,$.control_previous].join(" ")+'">'+ha.labels.previous+"</button>",u+='<button type="button" class="'+[$.control,$.control_next].join(" ")+'">'+ha.labels.next+"</button>"),ha.isMobile&&ha.isTouch&&(u+='<button type="button" class="'+[$.toggle,$.caption_toggle].join(" ")+'">'+ha.labels.captionClosed+"</button>",ha.gallery.active&&ha.thumbnails&&(u+='<button type="button" class="'+[$.toggle,$.thumbnail_toggle].join(" ")+'">'+ha.labels.thumbnailsClosed+"</button>")),u+="</div>",u+='<div class="'+$.meta+'">',u+='<div class="'+$.meta_content+'">',ha.gallery.active&&(u+='<p class="'+$.position+'"',ha.gallery.total<1&&(u+=' style="display: none;"'),u+=">",u+='<span class="'+$.position_current+'">'+(ha.gallery.index+1)+"</span> ",u+=ha.labels.count,u+=' <span class="'+$.position_total+'">'+(ha.gallery.total+1)+"</span>",u+="</p>"),u+='<div class="'+$.caption+'">',u+=ha.formatter.call(e,d),u+="</div></div></div>",u+="</div>"),u+="</div></div>",da.append(u),ha.$overlay=a(Z.overlay),ha.$lightbox=a(Z.base),ha.$close=a(Z.close),ha.$container=a(Z.container),ha.$content=a(Z.content),ha.$tools=a(Z.tools),ha.$meta=a(Z.meta),ha.$metaContent=a(Z.meta_content),ha.$position=a(Z.position),ha.$caption=a(Z.caption),ha.$controlBox=a(Z.controls),ha.$controls=a(Z.control),ha.$thumbnails=a(Z.thumbnails),ha.$thumbnailContainer=a(Z.thumbnail_container),ha.$thumbnailItems=a(Z.thumbnail_item),ha.isMobile?(ha.paddingVertical=ha.$close.outerHeight(),ha.paddingHorizontal=0,ha.mobilePaddingVertical=parseInt(ha.$content.css("paddingTop"),10)+parseInt(ha.$content.css("paddingBottom"),10),ha.mobilePaddingHorizontal=parseInt(ha.$content.css("paddingLeft"),10)+parseInt(ha.$content.css("paddingRight"),10)):(ha.paddingVertical=parseInt(ha.$lightbox.css("paddingTop"),10)+parseInt(ha.$lightbox.css("paddingBottom"),10),ha.paddingHorizontal=parseInt(ha.$lightbox.css("paddingLeft"),10)+parseInt(ha.$lightbox.css("paddingRight"),10),ha.mobilePaddingVertical=0,ha.mobilePaddingHorizontal=0),ha.contentHeight=ha.$lightbox.outerHeight()-ha.paddingVertical,ha.contentWidth=ha.$lightbox.outerWidth()-ha.paddingHorizontal,ha.controlHeight=ha.$controls.outerHeight(),m(),ha.gallery.active&&(ha.$lightbox.addClass($.has_controls),L()),ca.on(_.keyDown,M),da.on(_.click,[Z.overlay,Z.close].join(", "),j).on([_.focus,_.focusIn].join(" "),V),ha.gallery.active&&ha.$lightbox.on(_.click,Z.control,G),ha.thumbnails&&ha.$lightbox.on(_.click,Z.thumbnail_item,H),ha.isMobile&&ha.isTouch&&ha.$lightbox.on(_.click,Z.caption_toggle,o).on(_.click,Z.thumbnail_toggle,r),ha.$lightbox.fsTransition({property:"opacity"},function(){k?t(g):l?D(g):n?P(g):p?N(g):q&&Q(ha.$object)}).addClass($.open),ha.$overlay.addClass($.open)}}function i(a){"object"!=typeof a&&(ha.targetHeight=arguments[0],ha.targetWidth=arguments[1]),"element"===ha.type?R(ha.$content.find("> :first-child")):"image"===ha.type?z():"video"===ha.type&&E(),l()}function j(a){aa.killEvent(a),ha&&(ha.$lightbox.fsTransition("destroy"),ha.$content.fsTransition("destroy"),u(),ha.$lightbox.addClass($.animating).fsTransition({property:"opacity"},function(a){"undefined"!=typeof ha.$inlineTarget&&ha.$inlineTarget.length&&O(),ha.$lightbox.off(_.namespace),ha.$container.off(_.namespace),ca.off(_.keyDown),da.off(_.namespace),da.off(_.namespace),ha.$overlay.remove(),ha.$lightbox.remove(),ha.$el.focus(),ha=null,ca.trigger(_.close)}),ha.$lightbox.removeClass($.open),ha.$overlay.removeClass($.open),ha.isMobile&&ea.removeClass($.lock))}function k(){var a=n();ha.isMobile?0:ha.duration;ha.isMobile||ha.$controls.css({marginTop:(ha.contentHeight-ha.controlHeight-ha.metaHeight+ha.thumbnailHeight)/2}),""===ha.$caption.html()?(ha.$caption.hide(),ha.$lightbox.removeClass($.has_caption),ha.gallery.active||ha.$tools.hide()):(ha.$caption.show(),ha.$lightbox.addClass($.has_caption)),ha.$lightbox.fsTransition({property:ha.contentHeight!==ha.oldContentHeight?"height":"width"},function(){ha.$content.fsTransition({property:"opacity"},function(){ha.$lightbox.removeClass($.animating),ha.isAnimating=!1}),ha.$lightbox.removeClass($.loading).addClass($.ready),ha.visible=!0,ca.trigger(_.open),ha.gallery.active&&(F(),I(),J()),ha.$lightbox.focus()}),ha.isMobile||ha.$lightbox.css({height:ha.contentHeight+ha.paddingVertical,width:ha.contentWidth+ha.paddingHorizontal,top:ha.fixed?0:a.top});var b=ha.oldContentHeight!==ha.contentHeight||ha.oldContentWidth!==ha.contentWidth;!ha.isMobile&&b||ha.$lightbox.fsTransition("resolve"),ha.oldContentHeight=ha.contentHeight,ha.oldContentWidth=ha.contentWidth,ha.isMobile&&ea.addClass($.lock)}function l(){if(ha.visible&&!ha.isMobile){var a=n();ha.$controls.css({marginTop:(ha.contentHeight-ha.controlHeight-ha.metaHeight+ha.thumbnailHeight)/2}),ha.$lightbox.css({height:ha.contentHeight+ha.paddingVertical,width:ha.contentWidth+ha.paddingHorizontal,top:ha.fixed?0:a.top}),ha.oldContentHeight=ha.contentHeight,ha.oldContentWidth=ha.contentWidth}}function m(){var a=n();ha.$lightbox.css({top:ha.fixed?0:a.top})}function n(){if(ha.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-ha.contentWidth-ha.paddingHorizontal)/2,top:ha.top<=0?(b.windowHeight-ha.contentHeight-ha.paddingVertical)/2:ha.top};return ha.fixed!==!0&&(a.top+=ca.scrollTop()),a}function o(a){if(aa.killEvent(a),ha.captionOpen)p();else{s();var b=parseInt(ha.$metaContent.outerHeight(!0));b+=parseInt(ha.$meta.css("padding-top")),b+=parseInt(ha.$meta.css("padding-bottom")),ha.$meta.css({height:b}),ha.$lightbox.addClass($.caption_open).find(Z.caption_toggle).text(ha.labels.captionOpen),ha.captionOpen=!0}}function p(){ha.$lightbox.removeClass($.caption_open).find(Z.caption_toggle).text(ha.labels.captionClosed),ha.captionOpen=!1}function q(){var a=this.attr("title"),b=void 0!==a&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function r(a){aa.killEvent(a),ha.thumbnailsOpen?s():(p(),ha.$lightbox.addClass($.thumbnails_open).find(Z.thumbnail_toggle).text(ha.labels.thumbnailsOpen),ha.thumbnailsOpen=!0)}function s(){ha.$lightbox.removeClass($.thumbnails_open).find(Z.thumbnail_toggle).text(ha.labels.thumbnailsClosed),ha.thumbnailsOpen=!1}function t(b){ha.hasScaled=!1,ha.$imageContainer=a('<div class="'+$.image_container+'"><img></div>'),ha.$image=ha.$imageContainer.find("img"),ha.$image.one(_.load,function(){var a=T(ha.$image);ha.naturalHeight=a.naturalHeight,ha.naturalWidth=a.naturalWidth,ha.retina&&(ha.naturalHeight/=2,ha.naturalWidth/=2),ha.$content.prepend(ha.$imageContainer),z(),k(),ha.touch&&(v(),x({scale:1,deltaX:0,deltaY:0}),y(),ha.$content.fsTouch({pan:!0,scale:!0}).on(_.scaleStart,w).on(_.scaleEnd,y).on(_.scale,x))}).error(S).attr("src",b).addClass($.image),(ha.$image[0].complete||4===ha.$image[0].readyState)&&ha.$image.trigger(_.load)}function u(){ha.$image&&ha.$image.length&&ha.$content.fsTouch("destroy")}function v(){ha.scalePosition=ha.$imageContainer.position(),ha.scaleY=ha.scalePosition.top,ha.scaleX=ha.scalePosition.left,ha.scaleHeight=ha.$image.outerHeight(),ha.scaleWidth=ha.$image.outerWidth()}function w(a){v(),ha.$lightbox.addClass($.scaling)}function x(a){ha.targetContainerY=ha.scaleY+a.deltaY,ha.targetContainerX=ha.scaleX+a.deltaX,ha.targetImageHeight=ha.scaleHeight*a.scale,ha.targetImageWidth=ha.scaleWidth*a.scale,ha.targetImageHeight<ha.scaleMinHeight&&(ha.targetImageHeight=ha.scaleMinHeight),ha.targetImageHeight>ha.scaleMaxHeight&&(ha.targetImageHeight=ha.scaleMaxHeight),ha.targetImageWidth<ha.scaleMinWidth&&(ha.targetImageWidth=ha.scaleMinWidth),ha.targetImageWidth>ha.scaleMaxWidth&&(ha.targetImageWidth=ha.scaleMaxWidth),ha.hasScaled=!0,ha.isScaling=!0,ha.$imageContainer.css({top:ha.targetContainerY,left:ha.targetContainerX}),ha.$image.css({height:ha.targetImageHeight,width:ha.targetImageWidth,top:-(ha.targetImageHeight/2),left:-(ha.targetImageWidth/2)})}function y(a){v(),ha.isScaling=!1;var b=ha.$container.outerHeight()-ha.metaHeight,c=ha.$container.outerWidth();ha.scaleMinY=b-ha.scaleHeight/2,ha.scaleMinX=c-ha.scaleWidth/2,ha.scaleMaxY=ha.scaleHeight/2,ha.scaleMaxX=ha.scaleWidth/2,ha.scaleHeight<b?ha.scalePosition.top=b/2:(ha.scalePosition.top<ha.scaleMinY&&(ha.scalePosition.top=ha.scaleMinY),ha.scalePosition.top>ha.scaleMaxY&&(ha.scalePosition.top=ha.scaleMaxY)),ha.scaleWidth<c?ha.scalePosition.left=c/2:(ha.scalePosition.left<ha.scaleMinX&&(ha.scalePosition.left=ha.scaleMinX),ha.scalePosition.left>ha.scaleMaxX&&(ha.scalePosition.left=ha.scaleMaxX)),ha.$lightbox.removeClass($.scaling),ha.$imageContainer.css({left:ha.scalePosition.left,top:ha.scalePosition.top})}function z(){if(ha.$image){var a=0;for(ha.windowHeight=ha.viewportHeight=b.windowHeight-ha.mobilePaddingVertical-ha.paddingVertical,ha.windowWidth=ha.viewportWidth=b.windowWidth-ha.mobilePaddingHorizontal-ha.paddingHorizontal,ha.contentHeight=1/0,ha.contentWidth=1/0,ha.imageMarginTop=0,ha.imageMarginLeft=0;ha.contentHeight>ha.viewportHeight&&2>a;)ha.imageHeight=0===a?ha.naturalHeight:ha.$image.outerHeight(),ha.imageWidth=0===a?ha.naturalWidth:ha.$image.outerWidth(),ha.metaHeight=0===a?0:ha.metaHeight,ha.spacerHeight=0===a?0:ha.spacerHeight,ha.thumbnailHeight=0===a?0:ha.thumbnailHeight,0===a&&(ha.ratioHorizontal=ha.imageHeight/ha.imageWidth,ha.ratioVertical=ha.imageWidth/ha.imageHeight,ha.isWide=ha.imageWidth>ha.imageHeight),ha.imageHeight<ha.minHeight&&(ha.minHeight=ha.imageHeight),ha.imageWidth<ha.minWidth&&(ha.minWidth=ha.imageWidth),ha.isMobile?(ha.isTouch?(ha.$controlBox.css({width:b.windowWidth}),ha.spacerHeight=ha.$controls.outerHeight(!0)):(ha.$tools.css({width:b.windowWidth}),ha.spacerHeight=ha.$tools.outerHeight(!0)),ha.spacerHeight+=ha.$thumbnails.outerHeight(!0)+10,ha.contentHeight=ha.viewportHeight,ha.contentWidth=ha.viewportWidth,A(),ha.imageMarginTop=(ha.contentHeight-ha.targetImageHeight-ha.spacerHeight)/2,ha.imageMarginLeft=(ha.contentWidth-ha.targetImageWidth)/2):(0===a&&(ha.viewportHeight-=ha.margin+ha.paddingVertical,ha.viewportWidth-=ha.margin+ha.paddingHorizontal),ha.viewportHeight-=ha.metaHeight,ha.thumbnails&&(ha.viewportHeight-=ha.thumbnailHeight),A(),ha.contentHeight=ha.targetImageHeight,ha.contentWidth=ha.targetImageWidth),ha.isMobile||ha.isTouch||ha.$meta.css({width:ha.contentWidth}),ha.hasScaled||(ha.$image.css({height:ha.targetImageHeight,width:ha.targetImageWidth}),ha.touch?ha.$image.css({top:-(ha.targetImageHeight/2),left:-(ha.targetImageWidth/2)}):ha.$image.css({marginTop:ha.imageMarginTop,marginLeft:ha.imageMarginLeft})),ha.isMobile||(ha.metaHeight=ha.$meta.outerHeight(!0),ha.contentHeight+=ha.metaHeight),ha.thumbnails&&(ha.thumbnailHeight=ha.$thumbnails.outerHeight(!0),ha.contentHeight+=ha.thumbnailHeight),a++;ha.touch&&(ha.scaleMinHeight=ha.targetImageHeight,ha.scaleMinWidth=ha.targetImageWidth,ha.scaleMaxHeight=ha.naturalHeight,ha.scaleMaxWidth=ha.naturalWidth)}}function A(){var a=ha.isMobile?ha.contentHeight-ha.spacerHeight:ha.viewportHeight,b=ha.isMobile?ha.contentWidth:ha.viewportWidth;ha.isWide?(ha.targetImageWidth=b,ha.targetImageHeight=ha.targetImageWidth*ha.ratioHorizontal,ha.targetImageHeight>a&&(ha.targetImageHeight=a,ha.targetImageWidth=ha.targetImageHeight*ha.ratioVertical)):(ha.targetImageHeight=a,ha.targetImageWidth=ha.targetImageHeight*ha.ratioVertical,ha.targetImageWidth>b&&(ha.targetImageWidth=b,ha.targetImageHeight=ha.targetImageWidth*ha.ratioHorizontal)),(ha.targetImageWidth>ha.imageWidth||ha.targetImageHeight>ha.imageHeight)&&(ha.targetImageHeight=ha.imageHeight,ha.targetImageWidth=ha.imageWidth),(ha.targetImageWidth<ha.minWidth||ha.targetImageHeight<ha.minHeight)&&(ha.targetImageWidth<ha.minWidth?(ha.targetImageWidth=ha.minWidth,ha.targetImageHeight=ha.targetImageWidth*ha.ratioHorizontal):(ha.targetImageHeight=ha.minHeight,ha.targetImageWidth=ha.targetImageHeight*ha.ratioVertical))}function B(a){return"//www.youtube.com/embed/"+a[1]}function C(a){return"//player.vimeo.com/video/"+a[3]}function D(b){var c=U(b),d=b.split("?");c?(d.length>=2&&(c+="?"+d.slice(1)[0].trim()),ha.$videoWrapper=a('<div class="'+$.video_wrapper+'"></div>'),ha.$video=a('<iframe class="'+$.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),ha.$video.attr("src",c).addClass($.video).prependTo(ha.$videoWrapper),ha.$content.prepend(ha.$videoWrapper),E(),k()):S()}function E(){ha.windowHeight=ha.viewportHeight=b.windowHeight-ha.mobilePaddingVertical-ha.paddingVertical,ha.windowWidth=ha.viewportWidth=b.windowWidth-ha.mobilePaddingHorizontal-ha.paddingHorizontal,ha.videoMarginTop=0,ha.videoMarginLeft=0,ha.isMobile?(ha.isTouch?(ha.$controlBox.css({width:b.windowWidth}),ha.spacerHeight=ha.$controls.outerHeight(!0)+10):(ha.$tools.css({width:b.windowWidth}),ha.spacerHeight=ha.$tools.outerHeight(!0),ha.spacerHeight+=ha.$thumbnails.outerHeight(!0)+10),ha.viewportHeight-=ha.spacerHeight,ha.targetVideoWidth=ha.viewportWidth,ha.targetVideoHeight=ha.targetVideoWidth*ha.videoRatio,ha.targetVideoHeight>ha.viewportHeight&&(ha.targetVideoHeight=ha.viewportHeight,ha.targetVideoWidth=ha.targetVideoHeight/ha.videoRatio),ha.videoMarginTop=(ha.viewportHeight-ha.targetVideoHeight)/2,ha.videoMarginLeft=(ha.viewportWidth-ha.targetVideoWidth)/2):(ha.viewportHeight=ha.windowHeight-ha.margin,ha.viewportWidth=ha.windowWidth-ha.margin,ha.targetVideoWidth=ha.videoWidth>ha.viewportWidth?ha.viewportWidth:ha.videoWidth,ha.targetVideoWidth<ha.minWidth&&(ha.targetVideoWidth=ha.minWidth),ha.targetVideoHeight=ha.targetVideoWidth*ha.videoRatio,ha.contentHeight=ha.targetVideoHeight,ha.contentWidth=ha.targetVideoWidth),ha.isMobile||ha.isTouch||ha.$meta.css({width:ha.contentWidth}),ha.$videoWrapper.css({height:ha.targetVideoHeight,width:ha.targetVideoWidth,marginTop:ha.videoMarginTop,marginLeft:ha.videoMarginLeft}),ha.isMobile||(ha.metaHeight=ha.$meta.outerHeight(!0),ha.contentHeight+=ha.metaHeight),ha.thumbnails&&(ha.thumbnailHeight=ha.$thumbnails.outerHeight(!0),ha.contentHeight+=ha.thumbnailHeight)}function F(b){var c="";ha.gallery.index>0&&(c=ha.gallery.$items.eq(ha.gallery.index-1).attr("href"),U(c)||a('<img src="'+c+'">')),ha.gallery.index<ha.gallery.total&&(c=ha.gallery.$items.eq(ha.gallery.index+1).attr("href"),U(c)||a('<img src="'+c+'">'))}function G(b){aa.killEvent(b);var c=a(b.currentTarget);ha.isAnimating||c.hasClass($.control_disabled)||(ha.isAnimating=!0,u(),p(),ha.gallery.index+=c.hasClass($.control_next)?1:-1,ha.gallery.index>ha.gallery.total&&(ha.gallery.index=ha.infinite?0:ha.gallery.total),ha.gallery.index<0&&(ha.gallery.index=ha.infinite?ha.gallery.total:0),I(),ha.$lightbox.addClass($.animating),ha.$content.fsTransition({property:"opacity"},K),ha.$lightbox.addClass($.loading))}function H(b){aa.killEvent(b);var c=a(b.currentTarget);ha.isAnimating||c.hasClass($.active)||(ha.isAnimating=!0,u(),p(),ha.gallery.index=ha.$thumbnailItems.index(c),I(),ha.$lightbox.addClass($.animating),ha.$content.fsTransition({property:"opacity"},K),ha.$lightbox.addClass($.loading))}function I(){if(ha.thumbnails){var a=ha.$thumbnailItems.eq(ha.gallery.index);ha.$thumbnailItems.removeClass($.active),a.addClass($.active)}}function J(){if(ha.thumbnails){var a=ha.$thumbnailItems.eq(ha.gallery.index),b=a.position().left+a.outerWidth(!1)/2-ha.$thumbnailContainer.outerWidth(!0)/2;ha.$thumbnailContainer.stop().animate({scrollLeft:b},200,"linear")}}function K(){"undefined"!=typeof ha.$imageContainer&&ha.$imageContainer.remove(),"undefined"!=typeof ha.$videoWrapper&&ha.$videoWrapper.remove(),ha.$el=ha.gallery.$items.eq(ha.gallery.index),ha.$caption.html(ha.formatter.call(ha.$el,ha)),ha.$position.find(Z.position_current).html(ha.gallery.index+1);var a=ha.$el.attr("href"),b=U(a);b?(ha.type="video",D(a)):(ha.type="image",t(a)),L()}function L(){ha.$controls.removeClass($.control_disabled),ha.infinite||(0===ha.gallery.index&&ha.$controls.filter(Z.control_previous).addClass($.control_disabled),ha.gallery.index===ha.gallery.total&&ha.$controls.filter(Z.control_next).addClass($.control_disabled))}function M(a){!ha.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&ha.$close.trigger(_.click):(aa.killEvent(a),ha.$controls.filter(37===a.keyCode?Z.control_previous:Z.control_next).trigger(_.click))}function N(b){ha.$inlineTarget=a(b),ha.$inlineContents=ha.$inlineTarget.children().detach(),Q(ha.$inlineContents)}function O(){ha.$inlineTarget.append(ha.$inlineContents.detach())}function P(b){b+=b.indexOf("?")>-1?"&"+ha.requestKey+"=true":"?"+ha.requestKey+"=true";var c=a('<iframe class="'+$.iframe+'" src="'+b+'"></iframe>');Q(c)}function Q(a){ha.$content.append(a),R(a),k()}function R(a){ha.windowHeight=b.windowHeight-ha.mobilePaddingVertical-ha.paddingVertical,ha.windowWidth=b.windowWidth-ha.mobilePaddingHorizontal-ha.paddingHorizontal,ha.objectHeight=a.outerHeight(!0),ha.objectWidth=a.outerWidth(!0),ha.targetHeight=ha.targetHeight||(ha.$el?ha.$el.data(X+"-height"):null),ha.targetWidth=ha.targetWidth||(ha.$el?ha.$el.data(X+"-width"):null),ha.maxHeight=ha.windowHeight<0?ha.minHeight:ha.windowHeight,ha.isIframe=a.is("iframe"),ha.objectMarginTop=0,ha.objectMarginLeft=0,ha.isMobile||(ha.windowHeight-=ha.margin,ha.windowWidth-=ha.margin),ha.contentHeight=ha.targetHeight?ha.targetHeight:ha.isIframe||ha.isMobile?ha.windowHeight:ha.objectHeight,ha.contentWidth=ha.targetWidth?ha.targetWidth:ha.isIframe||ha.isMobile?ha.windowWidth:ha.objectWidth,(ha.isIframe||ha.isObject)&&ha.isMobile?(ha.contentHeight=ha.windowHeight,ha.contentWidth=ha.windowWidth):ha.isObject&&(ha.contentHeight=ha.contentHeight>ha.windowHeight?ha.windowHeight:ha.contentHeight,ha.contentWidth=ha.contentWidth>ha.windowWidth?ha.windowWidth:ha.contentWidth),ha.isMobile||(ha.contentHeight>ha.maxHeight&&(ha.contentHeight=ha.maxHeight),ha.contentWidth>ha.maxWidth&&(ha.contentWidth=ha.maxWidth))}function S(){var b=a('<div class="'+$.error+'"><p>Error Loading Resource</p></div>');ha.type="element",ha.$tools.remove(),ha.$image.off(_.namespace),Q(b)}function T(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function U(a){var b,c=ha.videoFormatter;for(var d in c)if(c.hasOwnProperty(d)&&(b=a.match(c[d].pattern),null!==b))return c[d].format.call(ha,b);return!1}function V(b){var c=b.target;a.contains(ha.$lightbox[0],c)||c===ha.$lightbox[0]||c===ha.$overlay[0]||(aa.killEvent(b),ha.$lightbox.focus())}var W=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:q,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,touch:!0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:B},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:C}},videoRatio:.5625,videoWidth:800},classes:["loading","animating","scaling","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:e,_destruct:f,_resize:d,resize:i},utilities:{_initialize:g,close:j}}),X=W.namespace,Y=W.defaults,Z=W.classes,$=Z.raw,_=W.events,aa=W.functions,ba=b.window,ca=b.$window,da=null,ea=null,fa=!1,ga=!1,ha=null});