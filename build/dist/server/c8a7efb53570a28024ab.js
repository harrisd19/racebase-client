exports.ids=[22],exports.modules={158:function(t,e,n){"use strict";n.r(e);var o=n(84),d=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=d.a},159:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".code[data-v-314082d8]{font-family:Source Code Pro}.meta[data-v-314082d8]{font-size:14px}",""])},264:function(t,e,n){"use strict";n.r(e);var o={layout:"api",head:()=>({title:"RaceBase Development Blog"}),async asyncData({$axios:t}){let e=await t.$get("docs/blog");var n=[];for(const o of e)await t.$get("docs/blog/"+o).then(async t=>{if(t.data){var e=t;e.link=o,n.push(e)}});return n.sort((a,b)=>new Date(b.date)-new Date(a.date)),{posts:n.splice(0,3)}}},d=n(1);var component=Object(d.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4"},t._l(t.posts,function(e){return t._ssrNode("<div data-v-314082d8>","</div>",[t._ssrNode("<h4 data-v-314082d8>","</h4>",[n("nuxt-link",{attrs:{to:"/blog/"+e.link}},[t._v(" "+t._s(e.data.title)+" ")])],1),t._ssrNode(' <div class="code meta d-flex align-items-center mb-2" data-v-314082d8>\n      Posted by <strong data-v-314082d8>'+t._ssrEscape(" "+t._s(e.data.author))+"</strong>"+t._ssrEscape(", \n      "+t._s(e.data.date)+"\n    ")+"</div> <div data-v-314082d8>"+t._s(e.content)+"</div>")],2)}),0)},[],!1,function(t){var e=n(158);e.__inject__&&e.__inject__(t)},"314082d8","e4cf5e50");e.default=component.exports},84:function(t,e,n){var content=n(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("77ca5990",content,!0,t)}}};
//# sourceMappingURL=c8a7efb53570a28024ab.js.map