(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{610:function(t,e,n){var content=n(763);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7d565d22",content,!0,{sourceMap:!1})},762:function(t,e,n){"use strict";var r=n(610);n.n(r).a},763:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".code[data-v-f171a568]{font-family:Source Code Pro}.meta[data-v-f171a568]{font-size:14px}",""])},850:function(t,e,n){"use strict";n.r(e);n(20);var r=n(2),o={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.next=3,n.$get("/blog/"+r.url);case 3:return o=t.sent,t.abrupt("return",{post:o});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),layout:"blog"},c=(n(762),n(14)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4"},[n("h1",[t._v(" "+t._s(t.post.data.title)+" ")]),t._v(" "),n("div",{staticClass:"code meta d-flex align-items-center mb-2"},[n("div",{staticClass:"author"},[t._v(" \n      Posted by "),n("strong",[t._v(t._s(t.post.data.author))]),t._v(",   \n    ")]),t._v(" "),n("div",{staticClass:"date"},[t._v(" "+t._s(t.post.data.date)+" ")])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.content)}})])},[],!1,null,"f171a568",null);e.default=component.exports}}]);