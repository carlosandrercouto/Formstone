/*! Formstone v0.4.3 [equalize.js] 2015-04-04 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){n.iterate.call(p,h)}function e(){p=a(l.element)}function f(b){b.maxWidth=b.maxWidth===1/0?"100000px":b.maxWidth,b.mq="(min-width:"+b.minWidth+") and (max-width:"+b.maxWidth+")",b.mqGuid=m.base+"__"+o++,a.mediaquery("bind",b.mqGuid,b.mq,{enter:function(){j.call(b.$el,b)},leave:function(){i.call(b.$el,b)}}),h(b),e()}function g(a){e()}function h(a){if(a.enabled){var b=a.target?a.$el.find(a.target):a.$el.children(),c="height"===a.property?"outerHeight":"outerWidth",d=0,e=0;b.css(a.property,"");for(var f=0;f<b.length;f++)e=b.eq(f)[c](),e>d&&(d=e);b.css(a.property,d)}}function i(a){if(a.enabled){a.enabled=!1;{var b=a.target?a.$el.find(a.target):a.$el.children();"height"===a.property?"outerHeight":"outerWidth"}b.css(a.property,"")}}function j(a){a.enabled||(a.enabled=!0,h(a))}var k=b.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:f,_destruct:g,_resize:d}}),l=k.classes,m=l.raw,n=k.functions,o=0,p=[]}(jQuery,Formstone);