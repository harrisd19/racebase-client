exports.ids=[24],exports.modules={131:function(t,e,d){"use strict";d.r(e);var n=d(73),r=d.n(n);for(var o in n)"default"!==o&&function(t){d.d(e,t,function(){return n[t]})}(o);e.default=r.a},132:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,".profile-pic[data-v-44b86070]{border-radius:3px;overflow:hidden;width:35px;height:35px}.team-name[data-v-44b86070]{font-size:28px;border:none;padding-left:0;margin-left:0}h2[data-v-44b86070]{font-size:20px}h5[data-v-44b86070]{text-transform:uppercase;font-size:18px}.fa-book-open[data-v-44b86070]{font-size:12px}.section[data-v-44b86070]{border-radius:5px;border:1px solid #dadada;overflow:hidden}.section .athlete[data-v-44b86070]:last-child{border-bottom:none}.section .athlete[data-v-44b86070]{border-bottom:1px solid #dadada}.section .athlete .name[data-v-44b86070]{font-size:17px;font-weight:500}.tag[data-v-44b86070]{border-radius:3px;border:1px solid #dadada}",""])},233:function(t,e,d){"use strict";d.r(e);var n=d(63),r=d.n(n);var o={components:{ProfilePic:()=>d.e(0).then(d.bind(null,270)),SearchBar:()=>d.e(1).then(d.bind(null,271))},async asyncData({$axios:t,store:e}){let d={...e.state.auth.user},n=await t.$get("/team/"+d.team_id);console.log(n);let o=await t.$get("/team/"+d.team_id+"/roster"),l=await t.$get("/team/"+d.team_id+"/athletes"),c=r.a.filter(l,t=>null==t.name),v=r.a.reject(l,t=>null==t.name);for(const a of v)a.showInvite=!1,a.sentInvite=!1;return{team:n,active:v,roster:o,unclaimed:c,search:"",showUnclaimed:!1}},middleware:"coach",methods:{loadRoster:async function(){this.roster=await this.$axios.$get("/team/"+this.team.team_id+"/roster")},addToRoster:async function(t){await this.$axios.$post("/team/roster/athlete/"+t),this.loadRoster()},removeFromRoster:async function(t){await this.$axios.$delete("/team/roster/athlete/"+t),this.loadRoster()},updateName:async function(){await this.$axios.$put("/team/"+this.team.team_id,{name:this.team.name})},inviteAthlete:async function(t){await this.$axios.$post("/team/invite/"+t.athlete_id);t.sentInvite=!0,t.showInvite=!1}},computed:{filteredUnclaimed:function(){return this.unclaimed.filter(t=>t.athlete_id.toLowerCase().includes(this.search.toLowerCase()))},filteredActive:function(){return this.active.filter(t=>null!=t.name&&!this.roster.some(a=>a.name===t.name))}}},l=d(1);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"mt-3 w-95 mx-auto"},[t._ssrNode('<div class="d-flex align-items-center mb-2" data-v-44b86070><input type="text" placeholder="Enter your team\'s name..."'+t._ssrAttr("value",t.team.name)+' class="team-name form-control" data-v-44b86070> <div class="btn btn-small btn-primary" data-v-44b86070>Save</div></div> '),t._ssrNode('<div class="d-flex align-items-center" data-v-44b86070>',"</div>",[t._ssrNode("<h2 data-v-44b86070>","</h2>",[d("nuxt-link",{attrs:{to:"/team/"+t.team.team_id}},[t._v(" \n      @"+t._s(t.team.team_id)+"\n    ")])],1),t._ssrNode(" "),d("nuxt-link",{staticClass:"ml-auto btn btn-outline-primary",attrs:{to:"/coach/schedule"}},[d("fa",{attrs:{icon:"calendar-alt"}}),t._v(" \n    Edit Meet Schedule\n  ")],1)],2),t._ssrNode(" "),t._ssrNode('<div class="row mt-4" data-v-44b86070>',"</div>",[t._ssrNode('<div class="col" data-v-44b86070>',"</div>",[t._ssrNode("<h5 data-v-44b86070> Active Athletes </h5> "),t._ssrNode('<div class="active section mb-4" data-v-44b86070>',"</div>",t._l(t.filteredActive,function(e){return t._ssrNode('<div class="athlete p-2" data-v-44b86070>',"</div>",[t._ssrNode('<div class="d-flex align-items-center" data-v-44b86070>',"</div>",[d("ProfilePic",{staticClass:"profile-pic mr-2",attrs:{url:e.profilePicUrl}}),t._ssrNode(" "),t._ssrNode('<div class="ml-2" data-v-44b86070>',"</div>",[t._ssrNode('<div class="name" data-v-44b86070>'+t._ssrEscape(" "+t._s(e.name)+" ")+"</div> "),d("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n              @"+t._s(e.athlete_id)+" \n            ")]),t._ssrNode(" "),e.team_id==t.team.team_id?d("nuxt-link",{staticClass:"ml-2",attrs:{to:"/athlete/"+e.athlete_id+"/logs"}},[d("fa",{attrs:{icon:"book-open"}}),t._v(" Logs\n            ")],1):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="ml-auto" data-v-44b86070>',"</div>",[e.team_id==t.team.team_id?t._ssrNode('<div class="btn btn-outline-primary btn-small" data-v-44b86070>',"</div>",[t._ssrNode(" Add to Roster ")],2):e.name?t._ssrNode("<div data-v-44b86070>","</div>",[e.sentInvite?t._ssrNode('<div class="btn btn-dark btn-small" data-v-44b86070>',"</div>",[d("fa",{attrs:{icon:"check"}}),t._ssrNode(" Invited\n              ")],2):t._ssrNode('<div class="btn btn-outline-primary btn-small" data-v-44b86070>',"</div>",[d("fa",{staticClass:"mr-1",attrs:{icon:"envelope"}}),t._ssrNode("Invite\n              ")],2)]):t._e()])],2),t._ssrNode(" "+(e.showInvite&&!e.sentInvite?'<div class="mt-2" data-v-44b86070> \n          Are you sure? This will <strong data-v-44b86070>send an email</strong>'+t._ssrEscape(" to "+t._s(e.name)+". \n          ")+'<div class="d-flex align-items-center mt-2" data-v-44b86070><div class="btn-small btn btn-outline-primary mr-2" data-v-44b86070>Yes, send invite</div> <div class="btn-small btn btn-outline-danger" data-v-44b86070>No</div></div></div>':"\x3c!----\x3e"))],2)}),0)],2),t._ssrNode(" "),t._ssrNode('<div class="col" data-v-44b86070>',"</div>",[t._ssrNode("<h5 data-v-44b86070> Current Roster </h5> "),t.roster.length>0?t._ssrNode('<div class="roster section mb-4" data-v-44b86070>',"</div>",t._l(t.roster,function(e){return t._ssrNode('<div class="athlete d-flex p-2 align-items-center" data-v-44b86070>',"</div>",[d("ProfilePic",{staticClass:"profile-pic mr-2",attrs:{url:e.profilePicUrl}}),t._ssrNode(" "),t._ssrNode('<div class="ml-2" data-v-44b86070>',"</div>",[t._ssrNode('<div class="name" data-v-44b86070>'+t._ssrEscape(" "+t._s(e.name)+" ")+"</div> "),d("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n            @"+t._s(e.athlete_id)+" \n          ")]),t._ssrNode(" "),e.team_id==t.team.team_id?d("nuxt-link",{staticClass:"ml-2",attrs:{to:"/athlete/"+e.athlete_id+"/logs"}},[d("fa",{attrs:{icon:"book-open"}}),t._v(" Logs\n          ")],1):t._e()],2),t._ssrNode(' <div class="ml-auto" data-v-44b86070><div class=" ml-3 btn btn-outline-danger btn-small" data-v-44b86070>\n            Remove\n          </div></div>')],2)}),0):t._ssrNode('<div class="no-roster" data-v-44b86070>\n      No athletes on the roster! Add some from the left to get started\n    </div>')],2)],2),t._ssrNode(" "),t._ssrNode('<div class="mb-5" data-v-44b86070>',"</div>",[t._ssrNode('<div class="d-flex align-items-center" data-v-44b86070><h5 class="mr-3 mb-0" data-v-44b86070> Unclaimed Athletes </h5> <div class="btn btn-outline-primary btn-small" data-v-44b86070>'+t._ssrEscape("\n      "+t._s(t.showUnclaimed?"Hide":"Show")+"\n    ")+"</div></div> "),t.showUnclaimed?t._ssrNode("<div data-v-44b86070>","</div>",[d("SearchBar",{staticClass:"mt-3",model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._ssrNode(" "),t._l(t.filteredUnclaimed,function(e){return t._ssrNode('<div class="d-inline-block mr-2 my-1 px-2 py-1 tag" data-v-44b86070>',"</div>",[d("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n        "+t._s(e.athlete_id)+"\n      ")])],1)})],2):t._e()],2)],2)},[],!1,function(t){var e=d(131);e.__inject__&&e.__inject__(t)},"44b86070","6f4e5622");e.default=component.exports},73:function(t,e,d){var content=d(132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=d(3).default;t.exports.__inject__=function(t){n("c9645cc6",content,!0,t)}}};
//# sourceMappingURL=f16d9e6755f2874366ee.js.map