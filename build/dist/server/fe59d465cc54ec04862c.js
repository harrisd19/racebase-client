exports.ids=[56],exports.modules={246:function(e,t,r){"use strict";r.r(t);var n={props:["value"],mixins:[r(98).a],components:{SearchBar:()=>r.e(1).then(r.bind(null,240)),Pagers:()=>r.e(14).then(r.bind(null,252))},watch:{interface:function(e){this.searchInput=this.interface||""}},created(){this.searchInput=this.value,this.value&&this.search()},computed:{interface:{get(){return this.value},set(e){this.$emit("input",e)}}}},c=r(1),component=Object(c.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("SearchBar",{on:{search:e.search},model:{value:e.interface,callback:function(t){e.interface=t},expression:"interface"}}),e._ssrNode(" "+(0===Object.keys(e.results).length?'<h3 class="no-results pt-3">'+(e.interface?"<span>No search results</span>":"<span>Type a query above to see results</span>")+"</h3>":"\x3c!----\x3e")+" "),0!==Object.keys(e.results).length?e._ssrNode('<div class="results-container mb-2">',"</div>",[e._ssrNode('<div class="table-responsive">',"</div>",[e._ssrNode('<table class="table table-striped mb-0">',"</table>",[e._ssrNode("<thead>","</thead>",[e._ssrNode("<tr>","</tr>",[e._ssrNode("<th>Name</th> <th>Race</th> <th>Time</th> <th>Team</th> "),e._ssrNode('<th class="author-data-header">',"</th>",[r("fa",{attrs:{icon:"user"}})],1)],2)]),e._ssrNode(" "),e._ssrNode("<tbody>","</tbody>",e._l(e.results,function(t){return e._ssrNode("<tr>","</tr>",[e._ssrNode("<td>"+(t.athlete_id?"<a"+e._ssrAttr("href","/athlete/"+t.athlete_id)+">"+e._ssrEscape("\n              "+e._s(t.athlete)+"\n            ")+"</a>":"\x3c!----\x3e")+" "+(t.athlete_id?"\x3c!----\x3e":"<span>"+e._ssrEscape(e._s(t.athlete))+"</span>")+"</td> "),e._ssrNode("<td>","</td>",[r("nuxt-link",{attrs:{to:"/races/"+t.race_id}},[e._v("\n              "+e._s(t.race)+"\n            ")])],1),e._ssrNode(' <td class="data time-data">'+e._ssrEscape("\n            "+e._s(t.time)+" \n             \n          ")+"</td> <td>"+(t.team_id?"<a"+e._ssrAttr("href","/team/"+t.team_id)+">"+e._ssrEscape("\n              "+e._s(t.team)+"\n            ")+"</a>":"\x3c!----\x3e")+" "+(t.team_id?"\x3c!----\x3e":"<span>"+e._ssrEscape(e._s(t.team))+"</span>")+"</td> <td>"+e._ssrEscape(e._s(t.user))+"</td>")],2)}),0)],2)])]):e._e(),e._ssrNode(" "),0===Object.keys(e.results).length||e.lastPage?e._e():r("Pagers",{attrs:{currentPage:e.currentPage,lastPage:e.lastPage},on:{prev:e.prev,next:e.next}})],2)},[],!1,null,null,"367eca4d");t.default=component.exports},98:function(e,t,r){"use strict";t.a={data:()=>({results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}),methods:{search:async function(e){if(e||(this.currentPage=1),""!=this.searchInput){let e=await this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/10");this.results=e.data.docs,this.lastPage=e.data.lastPage}else this.results={}},next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}}};
//# sourceMappingURL=fe59d465cc54ec04862c.js.map