exports.ids=[24],exports.modules={202:function(t,e,r){"use strict";r.r(e);var l={components:{NewPost:()=>r.e(5).then(r.bind(null,217))},middleware:"auth",async asyncData({store:t,params:e,$axios:r}){let l=t.state.auth.user,n=await r.$get("/result/"+e.resultId);return{user:l,result:n=n.athlete?n:null,alert:""}},methods:{createdPost:function(){this.alert="Successfully created post!"}}},n=r(1),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 mx-auto w-95"},[r("NewPost",{attrs:{user:t.user,result:t.result},on:{callback:function(e){return t.createdPost()}}}),t._ssrNode(" "),t.alert?t._ssrNode('<div class="mt-3 alert alert-primary alert-dismissable">',"</div>",[t._ssrNode(t._ssrEscape("\n    "+t._s(t.alert)+"\n\n    ")),t._ssrNode('<button type="button" data-dismiss="alert" aria-label="Close" class="close">',"</button>",[t._ssrNode('<span aria-hidden="true">',"</span>",[r("fa",{attrs:{icon:"times"}})],1)])],2):t._e()],2)},[],!1,null,null,"b0855d96");e.default=component.exports}};
//# sourceMappingURL=081e0b50965bf84439ce.js.map