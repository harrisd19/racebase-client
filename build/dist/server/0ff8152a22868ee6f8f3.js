exports.ids=[71],exports.modules={120:function(e,t,r){var content=r(230);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("319ad792",content,!0,e)}},229:function(e,t,r){"use strict";r.r(t);var n=r(120),c=r.n(n);for(var d in n)"default"!==d&&function(e){r.d(t,e,function(){return n[e]})}(d);t.default=c.a},230:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".claim[data-v-ec39ef38]{padding:3px 5px;text-transform:uppercase;font-size:13px}td[data-v-ec39ef38]{white-space:nowrap}",""])},315:function(e,t,r){"use strict";r.r(t);var n=r(62),c=r.n(n);var d={created(){this.user.athlete_id&&this.$router.push("/welcome"),this.searchInput=this.user.name?this.user.name.toLowerCase():"",this.search()},data:()=>({filtered:[]}),methods:{claim:async function(e){this.$axios.$post("user/claim/athlete/"+e).then(async e=>{await this.$store.dispatch("auth/fetchUser"),this.$router.push("/welcome")}).catch(e=>{console.log(e.response.data)})}},computed:{user:function(){return this.$store.state.auth.user}},mixins:[r(70).a],components:{SearchBar:()=>r.e(1).then(r.bind(null,309)),Pagers:()=>r.e(6).then(r.bind(null,333))},watch:{results:async function(e){let t=c.a.uniq(e,e=>[e.athlete_id,e.team,e.athlete].join());for(const e of t)try{await this.$axios.$get("/user/athlete/"+e.athlete_id)&&(e.taken=!0)}catch(e){console.log(e.response.data)}this.filtered=t}}},o=r(1);var component=Object(o.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-5"},[r("SearchBar",{on:{search:e.search},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._ssrNode(" "),0!==Object.keys(e.results).length?e._ssrNode('<div class="results-container mb-3" data-v-ec39ef38>',"</div>",[e._ssrNode('<div class="table-responsive" data-v-ec39ef38>',"</div>",[e._ssrNode('<table class="table table-striped mb-0" data-v-ec39ef38>',"</table>",[e._ssrNode("<thead data-v-ec39ef38><tr data-v-ec39ef38><th data-v-ec39ef38></th> <th data-v-ec39ef38>Athlete ID</th> <th data-v-ec39ef38>Athlete Name</th> <th data-v-ec39ef38>Team</th></tr></thead> "),e._ssrNode("<tbody data-v-ec39ef38>","</tbody>",e._l(e.filtered,function(t){return e._ssrNode("<tr data-v-ec39ef38>","</tr>",[e._ssrNode("<td data-v-ec39ef38>"+(t.taken?'<button disabled="disabled" class="claim btn btn-secondary" data-v-ec39ef38>\n              Taken\n            </button>':'<div class="claim btn btn-primary" data-v-ec39ef38>\n              Claim\n            </div>')+"</td> "),e._ssrNode("<td data-v-ec39ef38>","</td>",[t.athlete_id?e._ssrNode("<a"+e._ssrAttr("href","/athlete/"+t.athlete_id)+' target="_blank" data-v-ec39ef38>',"</a>",[e._ssrNode(e._ssrEscape("\n              "+e._s(t.athlete_id)+"\n               ")),r("fa",{attrs:{icon:"external-link-alt"}})],2):e._e()]),e._ssrNode(" <td data-v-ec39ef38>"+e._ssrEscape("\n            "+e._s(t.athlete)+"\n          ")+"</td> "),e._ssrNode("<td data-v-ec39ef38>","</td>",[t.team_id?e._ssrNode("<a"+e._ssrAttr("href","/team/"+t.team_id)+' target="_blank" data-v-ec39ef38>',"</a>",[e._ssrNode(e._ssrEscape("\n              "+e._s(t.team)+"\n               ")),r("fa",{attrs:{icon:"external-link-alt"}})],2):e._e(),e._ssrNode(" "+(t.team_id?"\x3c!----\x3e":"<span data-v-ec39ef38>"+e._ssrEscape(e._s(t.team))+"</span>"))],2)],2)}),0)],2)])]):e._e(),e._ssrNode(" "),0===Object.keys(e.results).length||e.lastPage?e._e():r("Pagers",{attrs:{currentPage:e.currentPage,lastPage:e.lastPage},on:{prev:e.prev,next:e.next}})],2)},[],!1,function(e){var t=r(229);t.__inject__&&t.__inject__(e)},"ec39ef38","acb5ee5a");t.default=component.exports},70:function(e,t,r){"use strict";t.a={data:()=>({results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}),methods:{search:async function(e){if(e||(this.currentPage=1),""!=this.searchInput)try{let e=await this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/20");this.results=e.data.docs,this.lastPage=e.data.lastPage}catch(e){console.log(e.response.data),this.results={}}else this.results={}},next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}}};
//# sourceMappingURL=0ff8152a22868ee6f8f3.js.map