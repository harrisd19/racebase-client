(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{438:function(t,e,r){"use strict";r(129),r(22);var n=r(2);e.a={data:function(){return{results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}},methods:{search:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e||(this.currentPage=1),""==this.searchInput){t.next=16;break}return t.prev=2,t.next=5,this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/10");case 5:r=t.sent,this.results=r.data.docs,this.lastPage=r.data.lastPage,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0.response.data),this.results={};case 14:t.next=17;break;case 16:this.results={};case 17:case"end":return t.stop()}},t,this,[[2,10]])}));return function(e){return t.apply(this,arguments)}}(),next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}},501:function(t,e,r){var content=r(671);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("1025548c",content,!0,{sourceMap:!1})},670:function(t,e,r){"use strict";var n=r(501);r.n(n).a},671:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,".claim[data-v-74a85c22]{padding:3px 5px;text-transform:uppercase;font-size:13px}td[data-v-74a85c22]{white-space:nowrap}",""])},751:function(t,e,r){"use strict";r.r(e);r(22);var n=r(2),c=(r(129),r(42),r(424)),h=r.n(c),o=r(438),l={created:function(){this.user.athlete_id&&this.$router.push("/welcome"),this.searchInput=this.user.name?this.user.name.toLowerCase():"",this.search()},data:function(){return{filtered:[]}},methods:{claim:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$post("user/claim/"+this.user._id+"/"+e).then(function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$store.dispatch("auth/fetchUser");case 2:r.$router.push("/welcome");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){console.log(t.response.data)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},computed:{user:function(){return this.$store.state.auth.user}},mixins:[o.a],components:{SearchBar:function(){return r.e(3).then(r.bind(null,746))},Pagers:function(){return r.e(9).then(r.bind(null,766))}},watch:{results:function(t){var e=h.a.uniq(t,function(t){return[t.athlete_id,t.team,t.athlete].join()});this.filtered=e}}},f=(r(670),r(14)),component=Object(f.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-5"},[r("SearchBar",{on:{search:t.search},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),0!==Object.keys(t.results).length?r("div",{staticClass:"results-container mb-3"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped mb-0"},[t._m(0),t._v(" "),r("tbody",t._l(t.filtered,function(e){return r("tr",[r("td",[r("div",{staticClass:"claim btn btn-primary",on:{click:function(r){return t.claim(e.athlete_id)}}},[t._v("\n              Claim\n            ")])]),t._v(" "),r("td",[e.athlete_id?r("a",{attrs:{href:"/athlete/"+e.athlete_id,target:"_blank"}},[t._v("\n              "+t._s(e.athlete_id)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e()]),t._v(" "),r("td",[t._v("\n            "+t._s(e.athlete)+"\n          ")]),t._v(" "),r("td",[e.team_id?r("a",{attrs:{href:"/team/"+e.team_id,target:"_blank"}},[t._v("\n              "+t._s(e.team)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e(),t._v(" "),e.team_id?t._e():r("span",[t._v(t._s(e.team))])])])}),0)])])]):t._e(),t._v(" "),0===Object.keys(t.results).length||t.lastPage?t._e():r("Pagers",{attrs:{currentPage:t.currentPage,lastPage:t.lastPage},on:{prev:t.prev,next:t.next}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Athlete ID")]),this._v(" "),e("th",[this._v("Athlete Name")]),this._v(" "),e("th",[this._v("Team")])])])}],!1,null,"74a85c22",null);e.default=component.exports}}]);