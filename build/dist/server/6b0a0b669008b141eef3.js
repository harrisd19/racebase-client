exports.ids=[38],exports.modules={176:function(e,t,c){"use strict";c.r(t);var r=c(93),n=c.n(r);for(var d in r)"default"!==d&&function(e){c.d(t,e,function(){return r[e]})}(d);t.default=n.a},177:function(e,t,c){(e.exports=c(2)(!1)).push([e.i,".event[data-v-a9195dcc]{padding:3px 8px;font-size:16px}.event .fa-check[data-v-a9195dcc]{font-size:12px}label[data-v-a9195dcc]{text-align:right;text-transform:uppercase;margin-bottom:0;margin-right:10px;color:#575757;font-size:14px}",""])},276:function(e,t,c){"use strict";c.r(t);var r=c(62),n=c.n(r);var d={head:()=>({title:"Add Result - RaceBase"}),components:{ResultEditor:()=>c.e(12).then(c.bind(null,309)),SearchBar:()=>c.e(1).then(c.bind(null,297))},async asyncData({params:e,$axios:t,store:c}){let r=c.state.auth.user,n={},d="",l={};if(e.raceId)try{d=(n=await t.$get("/race/"+e.raceId)).name,l=await t.$get("/race/"+e.raceId+"/mens/events")}catch(e){console.log(e.response.data)}return{mine:!0,curRace:n,teamSearchInput:"",searchInput:"",idParam:e.raceId,races:{},teams:{},womens:!1,events:l,user:r,newEvent:"",newTeam:{team_id:"",team:""},result:{time:"",athlete:"",athlete_id:"",race:d,race_id:e.raceId,womens:!1,team:"",team_id:"",place:null,event:"",date:""}}},methods:{search:async function(){if(this.searchInput)try{this.races=(await this.$axios.$get("search/races/"+this.searchInput)).slice(0,10)}catch(e){console.log(e.response.data),this.races=[]}},teamSearch:async function(){if(this.teamSearchInput)try{let e=await this.$axios.$get("search/results/"+this.teamSearchInput+"/1/50");this.teams=n.a.uniq(e.docs,"team")}catch(e){console.log(e),this.teams={}}else this.teams={}},selectRace:async function(e){try{this.raceId=e,this.curRace=await this.$axios.$get("/race/"+e)||{},this.events=await this.$axios.$get("/race/"+e+"/"+this.gender+"/events")}catch(e){console.log(e.response.data)}},selectEvent:function(e){this.result.event=e},selectTeam:function(e){this.result.team=e.team,this.result.team_id=e.team_id},createResult:async function(){this.mine&&(this.result.athlete=this.user.name,this.result.athlete_id=this.user.athlete_id),this.result.womens=!!this.womens,this.result.date=this.curRace.date;try{await this.$axios.$post("result",this.result)&&this.$router.push("/new/result/success")}catch(e){console.log(e)}},createCustomTeam:function(){this.result.team=this.newTeam.name,this.result.team_id=this.newTeam.team_id},removeTeam:function(){this.result.team="",this.result.team_id=""}},watch:{womens:async function(){try{this.curRace._id&&(this.events=await this.$axios.$get("/race/"+this.curRace._id+"/"+this.gender+"/events"))}catch(e){console.log(e)}},curRace:function(){this.result.race=this.curRace.name,this.result.race_id=this.curRace._id}},computed:{gender:function(){return this.womens?"womens":"mens"},step:function(){return this.result.place&&this.result.time?4:this.result.team?3:this.result.event?2:this.curRace.name?1:0},customTeam:function(){return this.newTeam.name==this.result.team&&this.newTeam.team_id==this.result.team_id}}},l=c(1);var component=Object(l.a)(d,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"w-95 mx-auto mt-4 mb-5"},[e._ssrNode('<div class="mb-3" data-v-a9195dcc> \n    To create a result, follow the <strong data-v-a9195dcc>five simple steps</strong> below. \n  </div> <h4 data-v-a9195dcc> 1. Find a race </h4> '+(e.idParam?"\x3c!----\x3e":'<div class="mb-3" data-v-a9195dcc> Search for a race to add your result to. </div>')+" "),e.idParam?e._e():c("SearchBar",{on:{search:e.search},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._ssrNode(" "),e._l(e.races,function(t){return e._ssrNode('<div class="d-flex align-items-center mb-2" data-v-a9195dcc>',"</div>",[e.curRace._id==t._id?e._ssrNode('<div class="btn btn-primary btn-small mr-3" data-v-a9195dcc>',"</div>",[e._ssrNode("\n      Selected "),c("fa",{attrs:{icon:"check"}})],2):e._ssrNode('<div class="btn btn-outline-primary btn-small mr-3" data-v-a9195dcc>\n      Select\n    </div>'),e._ssrNode(" "),c("nuxt-link",{attrs:{to:"/races/"+t._id}},[e._v("\n      "+e._s(t.name)+"\n    ")]),e._ssrNode(e._ssrEscape("\n      on "+e._s(t.date)+"\n  "))],2)}),e._ssrNode(" "),e.idParam?e._ssrNode('<div class="d-flex align-items-center mb-2 mt-3" data-v-a9195dcc>',"</div>",[e._ssrNode('<div class="btn btn-primary btn-small mr-3" data-v-a9195dcc>',"</div>",[e._ssrNode("\n      Selected "),c("fa",{attrs:{icon:"check"}})],2),e._ssrNode(" "),c("nuxt-link",{attrs:{to:"/races/"+e.curRace._id}},[e._v("\n      "+e._s(e.curRace.name)+"\n    ")]),e._ssrNode(e._ssrEscape("\n      on "+e._s(e.curRace.date)+"\n  "))],2):e._ssrNode("<div data-v-a9195dcc>","</div>",[e._ssrNode(" \n    Can't find the race you're looking for? Create one \n    "),e._ssrNode("<strong data-v-a9195dcc>","</strong>",[c("nuxt-link",{attrs:{to:"/user/content"}},[e._v(" here ")])],1)],2),e._ssrNode(" "),e.curRace.name?e._ssrNode('<div class="mt-4" data-v-a9195dcc>',"</div>",[e._ssrNode('<h4 data-v-a9195dcc> 2. Choose your event </h4> <div data-v-a9195dcc><label class="form-check-label mb-3" data-v-a9195dcc><input type="radio"'+e._ssrAttr("value",!0)+e._ssrAttr("checked",e._q(e.womens,!0))+' data-v-a9195dcc> Women\'s   \n\n        <input type="radio"'+e._ssrAttr("value",!1)+e._ssrAttr("checked",e._q(e.womens,!1))+" data-v-a9195dcc> Men's\n      </label></div> "),e.events?e._ssrNode('<div class="d-flex align-items-center mb-3" data-v-a9195dcc>',"</div>",[e._l(e.events,function(t){return e._ssrNode("<div"+e._ssrClass("event btn d-inline-block mr-2",e.result.event==t?"btn-primary":"btn-outline-dark")+" data-v-a9195dcc>","</div>",[e._ssrNode(e._ssrEscape("\n        "+e._s(t)+" \n        ")),e.result.event==t?c("fa",{staticClass:"ml-1",attrs:{icon:"check"}}):e._e()],2)}),e._ssrNode(" "),e._ssrNode("<div data-v-a9195dcc>","</div>",[e._ssrNode('<div class="input-group" data-v-a9195dcc>',"</div>",[e._ssrNode('<input type="text" placeholder="Add your own..."'+e._ssrAttr("value",e.newEvent)+' class="form-control" data-v-a9195dcc> '),e._ssrNode('<div class="input-group-append" data-v-a9195dcc>',"</div>",[e.newEvent==e.result.event&&e.result.event?e._ssrNode('<button type="button" class="btn btn-primary" data-v-a9195dcc>',"</button>",[c("fa",{attrs:{icon:"check"}})],1):e._ssrNode('<button type="button" class="btn btn-outline-primary" data-v-a9195dcc>',"</button>",[c("fa",{attrs:{icon:"plus"}})],1)])],2)])],2):e._e()],2):e._e(),e._ssrNode(" "),e.result.event?e._ssrNode('<div class="mt-4" data-v-a9195dcc>',"</div>",[e._ssrNode("<h4 data-v-a9195dcc> 3. Find your team </h4> "),c("SearchBar",{on:{search:e.teamSearch},model:{value:e.teamSearchInput,callback:function(t){e.teamSearchInput=t},expression:"teamSearchInput"}}),e._ssrNode(" "),e._ssrNode("<div data-v-a9195dcc>","</div>",[e._l(e.teams,function(t){return e._ssrNode('<div class="mb-2 d-flex align-items-center" data-v-a9195dcc>',"</div>",[e.result.team!=t.team?e._ssrNode('<div class="btn btn-outline-primary btn-small" data-v-a9195dcc>',"</div>",[e._ssrNode("\n          Select\n        ")],2):e._ssrNode('<div class="btn btn-primary btn-small" data-v-a9195dcc>',"</div>",[e._ssrNode("\n          Selected "),c("fa",{attrs:{icon:"check"}})],2),e._ssrNode(" "),c("nuxt-link",{staticClass:"ml-2",attrs:{to:"/team/"+t.team_id}},[e._v("\n          "+e._s(t.team)+"\n        ")])],2)}),e._ssrNode(" "),e._ssrNode("<div data-v-a9195dcc>","</div>",[e._ssrNode(" \n        Can't find your team? Create a new one: \n        "),e._ssrNode('<div class="mt-3 mb-2 d-flex align-items-center w-50" data-v-a9195dcc>',"</div>",[e._ssrNode('<input type="text" placeholder="Team name"'+e._ssrAttr("value",e.newTeam.name)+' class="form-control flex-shrink-1 mr-2" data-v-a9195dcc> <input type="text" placeholder="Team ID"'+e._ssrAttr("value",e.newTeam.team_id)+' class="form-control flex-shrink-1 mr-2" data-v-a9195dcc> '),e._ssrNode("<div"+e._ssrClass("btn flex-shrink-0",e.customTeam?"btn-primary":"btn-outline-primary")+" data-v-a9195dcc>","</div>",[e._ssrNode(" \n            Add Team "),e.customTeam?c("fa",{attrs:{icon:"check"}}):e._e()],2)],2)],2)],2)],2):e._e(),e._ssrNode(" "),e.result.team?e._ssrNode('<div class="mt-4" data-v-a9195dcc>',"</div>",[e._ssrNode("<h4 data-v-a9195dcc> 4. Enter a few details </h4> "),e._ssrNode('<form class="d-flex w-75 align-items-center" data-v-a9195dcc>',"</form>",[e._ssrNode('<label class="flex-shrink-0" data-v-a9195dcc> Finishing time </label> <input type="text" placeholder="15:30, 98:10..."'+e._ssrAttr("value",e.result.time)+' class="form-control flex-shrink-1 mr-3" data-v-a9195dcc> '),e._ssrNode('<label class="flex-shrink-1" data-v-a9195dcc>',"</label>",[c("fa",{attrs:{icon:"trophy"}})],1),e._ssrNode(' <input type="number" placeholder="Place"'+e._ssrAttr("value",e.result.place)+' class="form-control flex-shrink-1" data-v-a9195dcc>')],2)],2):e._e(),e._ssrNode(" "+(e.result.time&&e.result.place?'<div class="mt-4" data-v-a9195dcc><h4 data-v-a9195dcc> 5. Who\'s result is this?  </h4> <div data-v-a9195dcc><label class="form-check-label mb-3" data-v-a9195dcc><input type="radio"'+e._ssrAttr("value",!0)+e._ssrAttr("checked",e._q(e.mine,!0))+' data-v-a9195dcc> Mine   \n\n        <input type="radio"'+e._ssrAttr("value",!1)+e._ssrAttr("checked",e._q(e.mine,!1))+" data-v-a9195dcc> Someone else's\n      </label></div> "+(e.mine?"\x3c!----\x3e":'<div class="d-flex w-75 align-items-center" data-v-a9195dcc><label class="flex-shrink-0" data-v-a9195dcc> Athlete\'s name </label> <input type="text" placeholder="John Appleseed"'+e._ssrAttr("value",e.result.athlete)+' class="form-control flex-shrink-1 mr-3" data-v-a9195dcc> <label class="flex-shrink-0" data-v-a9195dcc> Athlete\'s ID </label> <input type="text" placeholder="jappleseed"'+e._ssrAttr("value",e.result.athlete_id)+' class="form-control flex-shrink-1" data-v-a9195dcc></div>')+"</div>":"\x3c!----\x3e")+' <div class="progress mt-4" data-v-a9195dcc><div role="progressbar"'+e._ssrAttr("aria-valuenow",e.step)+' aria-valuemin="0" aria-valuemax="5" class="progress-bar"'+e._ssrStyle(null,"width: "+e.step/5*100+"%",null)+' data-v-a9195dcc></div></div> <div class="mt-2" data-v-a9195dcc><strong data-v-a9195dcc>'+e._ssrEscape(e._s(e.step)+" of 5")+"</strong> completed</div> "+(e.result.time&&e.result.place?'<div class="btn btn-primary mt-3" data-v-a9195dcc> \n    Create Result \n  </div>':"\x3c!----\x3e"))],2)},[],!1,function(e){var t=c(176);t.__inject__&&t.__inject__(e)},"a9195dcc","08647634");t.default=component.exports},93:function(e,t,c){var content=c(177);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=c(3).default;e.exports.__inject__=function(e){r("47a14974",content,!0,e)}}};
//# sourceMappingURL=6b0a0b669008b141eef3.js.map