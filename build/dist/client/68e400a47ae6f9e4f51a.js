(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{573:function(e,t,n){var content=n(658);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("4141028e",content,!0,{sourceMap:!1})},657:function(e,t,n){"use strict";var r=n(573);n.n(r).a},658:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".code[data-v-25b94e46]{font-family:Source Code Pro}.meta[data-v-25b94e46]{font-size:14px}",""])},821:function(e,t,n){"use strict";n.r(t);n(28),n(29),n(21),n(20);var r=n(2),o={layout:"blog",asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,o,c,l,v,d,f,h,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("blog");case 3:o=e.sent,c=[],l=!0,v=!1,d=void 0,e.prev=8,f=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.value,e.next=3,n.$get("blog/"+t).then(function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.data&&((r=n).link=t,c.push(r));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,this)}),h=o[Symbol.iterator]();case 11:if(l=(m=h.next()).done){e.next=16;break}return e.delegateYield(f(),"t0",13);case 13:l=!0,e.next=11;break;case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(8),v=!0,d=e.t1;case 22:e.prev=22,e.prev=23,l||null==h.return||h.return();case 25:if(e.prev=25,!v){e.next=28;break}throw d;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return c.sort(function(a,b){return new Date(b.date)-new Date(a.date)}),e.abrupt("return",{posts:c.splice(0,3)});case 32:case"end":return e.stop()}},e,this,[[8,18,22,30],[23,,25,29]])}));return function(t){return e.apply(this,arguments)}}()},c=(n(657),n(14)),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mt-4"},e._l(e.posts,function(t){return n("div",[n("h4",[n("nuxt-link",{attrs:{to:"/blog/"+t.link}},[e._v(" "+e._s(t.data.title)+" ")])],1),e._v(" "),n("div",{staticClass:"code meta d-flex align-items-center mb-2"},[n("div",{staticClass:"author"},[e._v(" \n        Posted by "),n("strong",[e._v(e._s(t.data.author))]),e._v(",   \n      ")]),e._v(" "),n("div",{staticClass:"date"},[e._v(" "+e._s(t.data.date)+" ")])]),e._v(" "),n("div",{domProps:{innerHTML:e._s(t.content)}})])}),0)},[],!1,null,"25b94e46",null);t.default=component.exports}}]);