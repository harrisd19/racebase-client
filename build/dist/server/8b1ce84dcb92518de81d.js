exports.ids=[20],exports.modules={165:function(t,e,o){"use strict";o.r(e);var n=o(89),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},166:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".code[data-v-202b86a4]{font-family:Source Code Pro}.meta[data-v-202b86a4]{font-size:14px}",""])},261:function(t,e,o){"use strict";o.r(e);var n={asyncData:async({$axios:t,params:e})=>({post:await t.$get("/docs/blog/"+e.url)}),layout:"api"},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container mt-4"},[t._ssrNode("<h1 data-v-202b86a4>"+t._ssrEscape(" "+t._s(t.post.data.title)+" ")+'</h1> <div class="code meta d-flex align-items-center mb-2" data-v-202b86a4>\n    Posted by <strong data-v-202b86a4>'+t._ssrEscape(t._s(t.post.data.author))+"</strong>"+t._ssrEscape(", \n    "+t._s(t.post.data.date)+"\n  ")+"</div> <div data-v-202b86a4>"+t._s(t.post.content)+"</div>")])},[],!1,function(t){var e=o(165);e.__inject__&&e.__inject__(t)},"202b86a4","04581b1a");e.default=component.exports},89:function(t,e,o){var content=o(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("78e2bb76",content,!0,t)}}};
//# sourceMappingURL=8b1ce84dcb92518de81d.js.map