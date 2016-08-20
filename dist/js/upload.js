/*! formstone v1.2.2 [upload.js] 2016-08-20 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){var a=["mozSlice","webkitSlice","slice"];if(b.support.file){var c=!1;try{c=new File([""],"f")}catch(a){}if(!c)try{c=new Blob([""],{})}catch(a){}if(c)for(var d in a)if(a.hasOwnProperty(d)&&a[d]in c){E=a[d];break}}}function d(a){if(b.support.file){var c="";E||(a.chunked=!1),a.label!==!1&&(c+='<div class="'+A.target+'">',c+=a.label,c+="</div>"),c+='<input class="'+A.input+'" type="file"',a.multiple&&(c+=" multiple"),a.accept&&(c+=' accept="'+a.accept+'"'),c+=">",a.baseClasses=[A.base,a.theme,a.customClass].join(" "),this.addClass(a.baseClasses).append(c),a.$input=this.find(z.input),a.queue=[],a.total=0,a.uploading=!1,a.disabled=!0,a.aborting=!1,this.on(B.click,z.target,a,k).on(B.dragEnter,a,o).on(B.dragOver,a,p).on(B.dragLeave,a,q).on(B.drop,a,r),a.$input.on(B.focus,a,l).on(B.blur,a,m).on(B.change,a,n),j.call(this,a)}}function e(a){b.support.file&&(a.$input.off(B.namespace),this.off(B.namespace).removeClass(a.baseClasses).html(""))}function f(b,c){var d;b.aborting=!0;for(var e in b.queue)b.queue.hasOwnProperty(e)&&(d=b.queue[e],("undefined"===a.type(c)||c>=0&&d.index===c)&&(d.started&&!d.complete?b.chunked?d.chunkTransfer.abort():d.transfer.abort():g(b,d,"abort")));b.aborting=!1,u(b)}function g(a,b,c){b.error=!0,a.$el.trigger(B.fileError,[b,c]),a.aborting||u(a)}function h(a,b,c){a.$el.trigger(B.chunkError,[b,c]),g(a,b,c)}function i(a){a.disabled||(this.addClass(A.disabled),a.$input.prop("disabled",!0),a.disabled=!0)}function j(a){a.disabled&&(this.removeClass(A.disabled),a.$input.prop("disabled",!1),a.disabled=!1)}function k(a){C.killEvent(a);var b=a.data;b.disabled||b.$input.trigger(B.click)}function l(a){a.data.$el.addClass(A.focus)}function m(a){a.data.$el.removeClass(A.focus)}function n(a){C.killEvent(a);var b=a.data,c=b.$input[0].files;!b.disabled&&c.length&&s(b,c)}function o(a){C.killEvent(a);var b=a.data;b.$el.addClass(A.dropping).trigger(B.fileDragEnter)}function p(a){C.killEvent(a);var b=a.data;b.$el.addClass(A.dropping).trigger(B.fileDragOver)}function q(a){C.killEvent(a);var b=a.data;b.$el.removeClass(A.dropping).trigger(B.fileDragLeave)}function r(a){C.killEvent(a);var b=a.data,c=a.originalEvent.dataTransfer.files;b.$el.removeClass(A.dropping),b.disabled||s(b,c)}function s(a,b){for(var c=[],d=0;d<b.length;d++){var e={index:a.total++,file:b[d],name:b[d].name,size:b[d].size,started:!1,complete:!1,error:!1,transfer:null};c.push(e),a.queue.push(e)}a.$el.trigger(B.queued,[c]),a.autoUpload&&t(a),a.$input.val("")}function t(a){a.uploading||(D.on(B.beforeUnload,function(){return a.leave}),a.uploading=!0,a.$el.trigger(B.start,[a.queue])),u(a)}function u(a){var b=0,c=[];for(var d in a.queue)!a.queue.hasOwnProperty(d)||a.queue[d].complete||a.queue[d].error||c.push(a.queue[d]);a.queue=c;for(var e in a.queue)if(a.queue.hasOwnProperty(e)){if(a.queue[e].started||v(a,a.queue[e]),b++,b>=a.maxQueue)return;d++}0===b&&(D.off(B.beforeUnload),a.uploading=!1,a.$el.trigger(B.complete))}function v(b,c){if(c.size>=b.maxSize||c.error===!0)g(b,c,"size");else if(b.chunked)c.started=!0,c.chunkSize=1024*b.chunkSize,c.totalChunks=Math.ceil(c.size/c.chunkSize),c.currentChunk=0,b.$el.trigger(B.fileStart,[c]),w(b,c);else{var d=new FormData;d.append(b.postKey,c.file),d=x(b,d,c),d===!1?g(b,c,"abort"):(c.started=!0,c.transfer=a.ajax({url:b.action,data:d,dataType:b.dataType,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var d=a.ajaxSettings.xhr();return d.upload&&d.upload.addEventListener("progress",function(a){var d=0,e=a.loaded||a.position,f=a.total;a.lengthComputable&&(d=Math.ceil(e/f*100)),b.$el.trigger(B.fileProgress,[c,d])},!1),d},beforeSend:function(a,d){b.$el.trigger(B.fileStart,[c])},success:function(a,d,e){c.complete=!0,b.$el.trigger(B.fileComplete,[c,a]),u(b)},error:function(a,d,e){g(b,c,e)}}))}}function w(b,c){var d=c.chunkSize*c.currentChunk,e=d+c.chunkSize;e>c.size&&(e=c.size);var f=c.file[E](d,e),i=new FormData;i.append(b.postKey,f,c.file.name),i.append("chunks",c.totalChunks),i.append("chunk",c.currentChunk),i=x(b,i,c),i===!1?g(b,c,"abort"):c.chunkTransfer=a.ajax({url:b.action,data:i,dataType:b.dataType,type:"POST",contentType:!1,processData:!1,cache:!1,beforeSend:function(a,d){b.$el.trigger(B.chunkStart,[c])},success:function(a,d,e){c.currentChunk++,b.$el.trigger(B.chunkComplete,[c]);var f=Math.ceil(c.currentChunk/c.totalChunks*100);b.$el.trigger(B.fileProgress,[c,f]),c.currentChunk<c.totalChunks?w(b,c):(c.complete=!0,b.$el.trigger(B.fileComplete,[c,a]),u(b))},error:function(a,d,e){h(b,c,e)}})}function x(a,b,c){for(var d in a.postData)a.postData.hasOwnProperty(d)&&b.append(d,a.postData[d]);return b=a.beforeSend.call(a.$el,b,c)}var y=b.Plugin("upload",{widget:!0,defaults:{accept:!1,action:"",autoUpload:!0,beforeSend:function(a){return a},chunked:!1,chunkSize:100,customClass:"",dataType:"html",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxQueue:2,maxSize:5242880,multiple:!0,postData:{},postKey:"file",theme:"fs-light"},classes:["input","target","multiple","dropping","disabled","focus"],methods:{_setup:c,_construct:d,_destruct:e,disable:i,enable:j,abort:f,start:t}}),z=y.classes,A=z.raw,B=y.events,C=y.functions,D=(b.window,b.$window),E=!1;B.chunkComplete="chunkcomplete",B.chunkError="chunkerror",B.chunkStart="chunkstart",B.complete="complete",B.fileComplete="filecomplete",B.fileDragEnter="filedragenter",B.fileDragLeave="filedragleave",B.fileDragOver="filedragover",B.fileError="fileerror",B.fileProgress="fileprogress",B.fileStart="filestart",B.start="start",B.queued="queued"});