exports.ids=[21],exports.modules={174:function(t,e,o){"use strict";o.r(e);var n=o(95),r=o.n(n);for(var d in n)"default"!==d&&function(t){o.d(e,t,function(){return n[t]})}(d);e.default=r.a},175:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".code[data-v-f171a568]{font-family:Source Code Pro}.meta[data-v-f171a568]{font-size:14px}",""])},260:function(t,e,o){"use strict";o.r(e);var n={asyncData:async({$axios:t,params:e})=>({post:await t.$get("/blog/"+e.url)}),layout:"blog"},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container mt-4"},[t._ssrNode("<h1 data-v-f171a568>"+t._ssrEscape(" "+t._s(t.post.data.title)+" ")+'</h1> <div class="code meta d-flex align-items-center mb-2" data-v-f171a568><div class="author" data-v-f171a568> \n      Posted by <strong data-v-f171a568>'+t._ssrEscape(t._s(t.post.data.author))+'</strong>,   \n    </div> <div class="date" data-v-f171a568>'+t._ssrEscape(" "+t._s(t.post.data.date)+" ")+"</div></div> <div data-v-f171a568>"+t._s(t.post.content)+"</div>")])},[],!1,function(t){var e=o(174);e.__inject__&&e.__inject__(t)},"f171a568","2f45ff4f");e.default=component.exports},95:function(t,e,o){var content=o(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("7d565d22",content,!0,t)}}};
//# sourceMappingURL=a491e6bf0da9fb0e58b6.js.map