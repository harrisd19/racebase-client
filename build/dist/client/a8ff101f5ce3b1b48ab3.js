(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{610:function(t,e,r){"use strict";r(127),r(20);var n=r(2);e.a={data:function(){return{results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}},methods:{search:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e||(this.currentPage=1),""==this.searchInput){t.next=9;break}return t.next=4,this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/10");case 4:r=t.sent,this.results=r.data.docs,this.lastPage=r.data.lastPage,t.next=10;break;case 9:this.results={};case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}},611:function(t,e,r){var content=r(752);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("141320ae",content,!0,{sourceMap:!1})},751:function(t,e,r){"use strict";var n=r(611);r.n(n).a},752:function(t,e,r){(t.exports=r(11)(!1)).push([t.i,".claim[data-v-7269d686]{padding:3px 5px;text-transform:uppercase;font-size:13px}td[data-v-7269d686]{white-space:nowrap}",""])},813:function(t,e,r){"use strict";r.r(e);r(20);var n=r(2),c=(r(127),r(42),r(426)),h=r.n(c),o=r(610),l={created:function(){this.user.athlete_id&&this.$router.push("/welcome"),this.searchInput=this.user.name?this.user.name.toLowerCase():"",this.search()},data:function(){return{filtered:[]}},methods:{claim:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$post("user/claim/"+this.user._id+"/"+e).then(function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$store.dispatch("auth/fetchUser");case 2:r.$router.push("/welcome");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},computed:{user:function(){return this.$store.state.auth.user}},mixins:[o.a],components:{SearchBar:function(){return r.e(5).then(r.bind(null,817))},Pagers:function(){return r.e(17).then(r.bind(null,829))}},watch:{results:function(t){var e=h.a.uniq(t,function(t){return[t.athlete_id,t.team,t.athlete].join()});this.filtered=e}}},d=(r(751),r(19)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-5"},[r("SearchBar",{on:{search:t.search},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),0!==Object.keys(t.results).length?r("div",{staticClass:"results-container mb-3"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped mb-0"},[t._m(0),t._v(" "),r("tbody",t._l(t.filtered,function(e){return r("tr",[r("td",[r("div",{staticClass:"claim btn btn-primary",on:{click:function(r){return t.claim(e.athlete_id)}}},[t._v("\n              Claim\n            ")])]),t._v(" "),r("td",[e.athlete_id?r("a",{attrs:{href:"/athlete/"+e.athlete_id,target:"_blank"}},[t._v("\n              "+t._s(e.athlete_id)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e()]),t._v(" "),r("td",[t._v("\n            "+t._s(e.athlete)+"\n          ")]),t._v(" "),r("td",[e.team_id?r("a",{attrs:{href:"/team/"+e.team_id,target:"_blank"}},[t._v("\n              "+t._s(e.team)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e(),t._v(" "),e.team_id?t._e():r("span",[t._v(t._s(e.team))])])])}),0)])])]):t._e(),t._v(" "),0===Object.keys(t.results).length||t.lastPage?t._e():r("Pagers",{attrs:{currentPage:t.currentPage,lastPage:t.lastPage},on:{prev:t.prev,next:t.next}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Athlete ID")]),this._v(" "),e("th",[this._v("Athlete Name")]),this._v(" "),e("th",[this._v("Team")])])])}],!1,null,"7269d686",null);e.default=component.exports}}]);