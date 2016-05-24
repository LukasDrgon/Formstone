/*! formstone v1.1.2 [dropdown.js] 2016-05-21 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){H=b.$body}function d(c){c.multiple=this.prop("multiple"),c.disabled=this.is(":disabled")||this.is("[readonly]"),c.lastIndex=!1,c.multiple?c.links=!1:c.external&&(c.links=!0);var d=this.find("[selected]").not(":disabled"),e=this.find(":selected").not(":disabled"),f=e.text(),g=this.find("option").index(e);c.multiple||""===c.label||d.length?c.label="":(e=this.prepend('<option value="" class="'+B.item_placeholder+'" selected>'+c.label+"</option>"),f=c.label,g=0);var h=this.find("option, optgroup"),k=h.filter("option"),l=a("[for="+this.attr("id")+"]");c.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,l.length&&(l[0].tabIndex=-1);var m=[B.base,c.theme,c.customClass];c.mobile||b.isMobile?m.push(B.mobile):c.cover&&m.push(B.cover),c.multiple&&m.push(B.multiple),c.disabled&&m.push(B.disabled);var n='<div class="'+m.join(" ")+'" tabindex="'+c.tabIndex+'"></div>',t="";c.multiple||(t+='<button type="button" class="'+B.selected+'" tabindex="-1">',t+=a("<span></span>").text(y(f,c.trim)).html(),t+="</button>"),t+='<div class="'+B.options+'">',t+="</div>",this.wrap(n).after(t),c.$dropdown=this.parent(A.base),c.$label=l,c.$allOptions=h,c.$options=k,c.$selected=c.$dropdown.find(A.selected),c.$wrapper=c.$dropdown.find(A.options),c.$placeholder=c.$dropdown.find(A.placeholder),c.index=-1,c.closed=!0,c.focused=!1,i(c),c.links?this.attr("aria-hidden","true"):c.$selected.add(c.$wrapper).attr("aria-hidden","true"),c.multiple||u(g,c),void 0!==a.fn.fsScrollbar&&c.$wrapper.fsScrollbar({theme:c.theme}),c.$selected.on(C.click,c,j),c.$dropdown.on(C.click,A.item,c,p).on(C.close,c,o),this.on(C.change,c,q),b.isMobile||(this.on(C.focusIn,c,function(a){a.data.$dropdown.trigger(C.raw.focus)}),c.$dropdown.on(C.focusIn,c,r).on(C.focusOut,c,s))}function e(b){b.$dropdown.hasClass(B.open)&&b.$selected.trigger(C.click),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar("destroy"),b.links&&this.removeAttr("aria-hidden"),b.$el[0].tabIndex=b.tabIndex,b.$label.length&&(b.$label[0].tabIndex=b.tabIndex),b.$dropdown.off(C.namespace),b.$options.off(C.namespace),b.$placeholder.remove(),b.$selected.remove(),b.$wrapper.remove(),b.$el.off(C.namespace).show().unwrap()}function f(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(B.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(B.open)&&a.$selected.trigger(C.click),a.$dropdown.addClass(B.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(B.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(B.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function h(b){void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar("destroy");var c=b.index;b.$allOptions=b.$el.find("option, optgroup"),b.$options=b.$allOptions.filter("option"),b.index=-1,c=b.$options.index(b.$options.filter(":selected")),i(b),b.multiple||u(c,b),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar()}function i(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(B.group),g.is(":disabled")&&h.push(B.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val(),j=g.data("label"),k=b.links?"a":'button type="button"';g.attr("value")||g.attr("value",i),h.push(B.item),g.hasClass(B.item_placeholder)&&(h.push(B.item_placeholder),k="span"),g.is(":selected")&&h.push(B.item_selected),g.is(":disabled")&&h.push(B.item_disabled),c+="<"+k+' class="'+h.join(" ")+'"',b.links?"span"===k?c+=' aria-hidden="true"':(c+=' href="'+i+'"',b.external&&(c+=' target="_blank"')):c+=' data-value="'+i+'"',c+=' tabindex="-1">',c+=j?j:D.decodeEntities(y(g.text(),b.trim)),c+="</"+k+">",d++}}b.$items=b.$wrapper.html(a.parseHTML(c)).find(A.item)}function j(a){D.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile||b.isIEMobile)c.closed?l(c):m(c);else{var d=c.$el[0];if(G.createEvent){var e=G.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,E,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}k(c)}function k(b){a(A.base).not(b.$dropdown).trigger(C.close,[b])}function l(a){if(a.closed){var b=F.height(),c=a.$wrapper.outerHeight(!0),d=a.$dropdown[0].getBoundingClientRect();d.bottom+c>b-a.bottomEdge&&a.$dropdown.addClass(B.bottom),H.on(C.click+a.dotGuid,":not("+A.options+")",a,n),a.$dropdown.trigger(C.focusIn),a.$dropdown.addClass(B.open),v(a),a.closed=!1}}function m(a){a&&!a.closed&&(H.off(C.click+a.dotGuid),a.$dropdown.removeClass([B.open,B.bottom].join(" ")),a.closed=!0)}function n(b){D.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(A.base).length&&(m(c),c.$dropdown.trigger(C.focusOut))}function o(a){var b=a.data;b&&(m(b),b.$dropdown.trigger(C.focusOut))}function p(b){var c=a(this),d=b.data;if(D.killEvent(b),!d.disabled){var e=d.$items.index(c);d.focusIndex=e,d.$wrapper.is(":visible")&&(u(e,d,b.shiftKey,b.metaKey||b.ctrlKey),w(d)),d.multiple||m(d),d.$dropdown.trigger(C.focus)}}function q(b,c){var d=(a(this),b.data);if(!c&&!d.multiple){var e=d.$options.index(d.$options.filter(":selected"));d.focusIndex=e,u(e,d),w(d,!0)}}function r(b){D.killEvent(b);var c=(a(b.currentTarget),b.data);c.disabled||c.multiple||c.focused||(k(c),c.focused=!0,c.focusIndex=c.index,c.input="",c.$dropdown.addClass(B.focus).on(C.keyDown+c.dotGuid,c,t))}function s(b){D.killEvent(b);var c=(a(b.currentTarget),b.data);c.focused&&c.closed&&(c.focused=!1,c.$dropdown.removeClass(B.focus).off(C.keyDown+c.dotGuid),c.multiple||(m(c),c.index!==c.focusIndex&&(w(c),c.focusIndex=c.index)))}function t(c){var d=c.data;if(d.keyTimer=D.startTimer(d.keyTimer,1e3,function(){d.input=""}),13===c.keyCode)d.closed||(m(d),u(d.index,d)),w(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){D.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(d.input+=i,h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}}f>=0&&(u(f,d),v(d))}}function u(a,c,d,e){var f=c.$items.eq(a),g=c.$options.eq(a),h=f.hasClass(B.item_selected),i=f.hasClass(B.item_disabled);if(!i)if(c.multiple)if(b.isMobile)i||(h?(g.prop("selected",null),f.removeClass(B.item_selected)):(g.prop("selected",!0),f.addClass(B.item_selected)));else if(d&&c.lastIndex!==!1){var j=c.lastIndex>a?a:c.lastIndex,k=(c.lastIndex>a?c.lastIndex:a)+1;c.$options.prop("selected",null),c.$items.filter(A.item_selected).removeClass(B.item_selected),c.$options.slice(j,k).not("[disabled]").prop("selected",!0),c.$items.slice(j,k).not(A.item_disabled).addClass(B.item_selected)}else e?(h?(g.prop("selected",null),f.removeClass(B.item_selected)):(g.prop("selected",!0),f.addClass(B.item_selected)),c.lastIndex=a):(c.$options.prop("selected",null),c.$items.filter(A.item_selected).removeClass(B.item_selected),g.prop("selected",!0),f.addClass(B.item_selected),c.lastIndex=a);else if(a>-1&&a<c.$items.length){if(a!==c.index){var l=g.data("label")||f.html();c.$selected.html(l).removeClass(A.item_placeholder),c.$items.filter(A.item_selected).removeClass(B.item_selected),c.$el[0].selectedIndex=a,f.addClass(B.item_selected),c.index=a}}else""!==c.label&&c.$selected.html(c.label)}function v(b){var c=b.$items.eq(b.index),d=b.index>=0&&!c.hasClass(B.item_placeholder)?c.position():{left:0,top:0},e=(b.$wrapper.outerHeight()-c.outerHeight())/2;void 0!==a.fn.fsScrollbar?b.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",b.$wrapper.find(".fs-scrollbar-content").scrollTop()+d.top):b.$wrapper.scrollTop(b.$wrapper.scrollTop()+d.top-e)}function w(a,b){a.links?x(a):b||a.$el.trigger(C.raw.change,[!0])}function x(a){var b=a.$el.val();a.external?E.open(b):E.location.href=b}function y(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}var z=b.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,theme:"fs-light",trim:0},methods:{_setup:c,_construct:d,_destruct:e,disable:f,enable:g,update:h,open:l,close:m},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),A=z.classes,B=A.raw,C=z.events,D=z.functions,E=b.window,F=b.$window,G=b.document,H=null});