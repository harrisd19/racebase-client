exports.ids=[23],exports.modules={167:function(t,n,o){"use strict";o.r(n);var e=o(90),r=o.n(e);for(var c in e)"default"!==c&&function(t){o.d(n,t,function(){return e[t]})}(c);n.default=r.a},168:function(t,n,o){(t.exports=o(2)(!1)).push([t.i,".container[data-v-7efc0136] .divider{width:100%;display:block;border-top:1px solid #dadada;height:30px;margin-top:30px}",""])},262:function(t,n,o){"use strict";o.r(n);var e={layout:"api",components:{Docs:()=>o.e(2).then(o.bind(null,283))},async asyncData({$axios:t,params:n}){let o={};try{o=await t.$get("/docs/routes/"+n.url)}catch(t){console.log(t)}return{post:o}}},r=o(1);var component=Object(r.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("Docs",[n("div",{staticClass:"container mt-4",domProps:{innerHTML:this._s(this.post.content)}}),this._v(" "),this.post.content?this._e():n("h2",{staticClass:"mt-4 ml-2"},[this._v("\n    Page not found!\n  ")])])},[],!1,function(t){var n=o(167);n.__inject__&&n.__inject__(t)},"7efc0136","1a27e332");n.default=component.exports},90:function(t,n,o){var content=o(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var e=o(3).default;t.exports.__inject__=function(t){e("39ff904d",content,!0,t)}}};
//# sourceMappingURL=524d6ad6e956ea3e03fc.js.map