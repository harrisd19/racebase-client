exports.ids=[30],exports.modules={155:function(t,e,o){"use strict";o.r(e);var r=o(86),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,function(){return r[t]})}(d);e.default=n.a},156:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,"h2[data-v-2d581827]{font-size:23px}h3[data-v-2d581827]{font-size:15px;text-align:left;text-transform:uppercase}.post[data-v-2d581827]{border:1px solid #dadada;border-radius:5px}.profile-pic[data-v-2d581827]{border-radius:3px;width:23px;height:23px;overflow:hidden}.no-comments[data-v-2d581827]{text-transform:uppercase;color:#b1b1b1;font-size:14px}",""])},226:function(t,e,o){"use strict";o.r(e);var r=o(57),n=o.n(r);var d={async asyncData({$axios:t,params:e,store:o,redirect:r}){let n=e.id,d=await t.$get("/post/"+n);d.athlete_id||r("/notfound");let c=await o.state.auth.user;return{post:d,poster:await t.$get("/user/athlete/"+d.athlete_id),user:c,id:n}},components:{ByLine:()=>o.e(3).then(o.bind(null,235)),Social:()=>o.e(6).then(o.bind(null,246)),Comments:()=>o.e(4).then(o.bind(null,247))},methods:{formatDate:function(t){return n()(t).format("MMMM D YYYY")},loadPost:async function(){this.post=await this.$axios.$get("/post/"+this.id)}}},c=o(1);var component=Object(c.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-95 mx-auto mt-4"},[t._ssrNode('<div class="post mb-3 p-3" data-v-2d581827>',"</div>",[t._ssrNode("<h2 data-v-2d581827>"+t._ssrEscape(" "+t._s(t.post.title)+" ")+"</h2> "),o("ByLine",{attrs:{author:t.poster.name,date:t.formatDate(t.post.date),athleteId:t.poster.athlete_id,authorized:!1,profilePicUrl:t.poster.profilePicUrl}}),t._ssrNode(" <p data-v-2d581827>"+t._ssrEscape(" "+t._s(t.post.body))+"</p> "),o("Social",{attrs:{post:t.post,poster_id:t.poster._id,user_id:t.user._id},on:{loadPost:t.loadPost}})],2),t._ssrNode(' <h3 class="mt-3" data-v-2d581827> Comments </h3> '),t.post.comments.length>0&&t.showComments?o("Comments",{attrs:{comments:t.post.comments}}):o("div",{staticClass:"no-comments"},[t._v(" No comments yet ")])],2)},[],!1,function(t){var e=o(155);e.__inject__&&e.__inject__(t)},"2d581827","08d9152e");e.default=component.exports},86:function(t,e,o){var content=o(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("761de06b",content,!0,t)}}};
//# sourceMappingURL=2e2248ecfcba18e9483a.js.map