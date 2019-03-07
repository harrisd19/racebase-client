exports.ids=[33],exports.modules={138:function(t,e,o){"use strict";o.r(e);var d=o(76),l=o.n(d);for(var r in d)"default"!==r&&function(t){o.d(e,t,function(){return d[t]})}(r);e.default=l.a},139:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,"h3[data-v-2bb79713]{color:#777}h4[data-v-2bb79713]{font-size:18px}.btn-default[data-v-2bb79713],h4[data-v-2bb79713]{text-transform:uppercase}.btn-default[data-v-2bb79713]{font-size:14px;padding:3px 6px}",""])},245:function(t,e,o){"use strict";o.r(e);var d=o(61),l=o.n(d);var r={components:{Post:()=>o.e(67).then(o.bind(null,286)),NewPost:()=>o.e(7).then(o.bind(null,288)),Result:()=>o.e(3).then(o.bind(null,287)),ByLine:()=>o.e(4).then(o.bind(null,289))},head:()=>({title:"Your Feed - RaceBase"}),methods:{closeAddWindow:function(){this.addingPost=!1},formatDate:function(t){return l()(t).format("MMMM D YYYY")},loadFeed:async function(){this.addingPost=!1;try{let t=(await this.$axios.$get("/post/feed")).feed;if(!t)throw"No posts in feed";for(const e of t)this.following[e.athlete_id]||(this.following[e.athlete_id]=await this.$axios.$get("/user/athlete/"+e.athlete_id)),e.result_id&&(e.result=await this.$axios.$get("/result/"+e.result_id));this.posts=t}catch(t){this.posts={},console.log(t)}},createdPost:function(){this.alert="Successfully created post!",this.loadFeed()}},middleware:"auth",async asyncData({$axios:t,store:e}){let o,d=e.state.auth.user,l=[];try{if(!(o=(await t.$get("/post/feed")).feed))throw"No posts in feed";for(const e of o)l[e.athlete_id]||(l[e.athlete_id]=await t.$get("/user/athlete/"+e.athlete_id)),e.result_id&&(e.result=await t.$get("/result/"+e.result_id))}catch(t){console.log(t)}return{addingPost:!1,posts:o,user:d,following:l,alert:""}}},n=o(1);var component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-95 mx-auto mt-4"},[t._ssrNode('<div class="d-flex align-items-center mb-2" data-v-2bb79713>',"</div>",[t._ssrNode('<h4 class="mb-0" data-v-2bb79713> Your Feed </h4> '),t.addingPost?t._e():t._ssrNode('<div class="btn btn-default mb-0 ml-auto" data-v-2bb79713>',"</div>",[t._ssrNode("\n      New Post "),o("fa",{attrs:{icon:"pencil-alt"}})],2)],2),t._ssrNode(" "),t.alert?t._ssrNode('<div class="alert alert-primary alert-dismissible align-items-center mt-3" data-v-2bb79713>',"</div>",[t._ssrNode(t._ssrEscape("\n    "+t._s(t.alert)+"\n\n    ")),t._ssrNode('<button type="button" data-dismiss="alert" aria-label="Close" class="close" data-v-2bb79713>',"</button>",[t._ssrNode('<span aria-hidden="true" data-v-2bb79713>',"</span>",[o("fa",{attrs:{icon:"times"}})],1)])],2):t._e(),t._ssrNode(" "),t.addingPost?o("NewPost",{staticClass:"mb-3",attrs:{user:t.user},on:{close:t.closeAddWindow,callback:t.createdPost}}):t._e(),t._ssrNode(" "),t.posts?t._ssrNode('<div class="feed" data-v-2bb79713>',"</div>",t._l(t.posts,function(e){return t._ssrNode('<div class="mb-4" data-v-2bb79713>',"</div>",[e.title||e.body?o("Post",{attrs:{post:e,poster:t.following[e.athlete_id],userId:t.user._id},on:{loadFeed:t.loadFeed,deletedPost:function(e){t.alert="Successfully deleted post!"}}}):e.athlete||e.time?o("div",[o("ByLine",{attrs:{author:e.athlete,date:t.formatDate(e.date),authorized:!1,athleteId:e.athlete_id,profilePicUrl:t.following[e.athlete_id].profilePicUrl}}),t._v(" "),o("Result",{attrs:{result:e}})],1):t._e()],1)}),0):t._ssrNode('<div data-v-2bb79713><h3 class="mt-5" data-v-2bb79713> Follow some athletes to get content on your feed! </h3></div>')],2)},[],!1,function(t){var e=o(138);e.__inject__&&e.__inject__(t)},"2bb79713","351954bc");e.default=component.exports},76:function(t,e,o){var content=o(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=o(3).default;t.exports.__inject__=function(t){d("10898aee",content,!0,t)}}};
//# sourceMappingURL=acc76c6d909fcd695c4e.js.map