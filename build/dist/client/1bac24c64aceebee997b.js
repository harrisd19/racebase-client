(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{575:function(t,e,n){var content=n(663);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("c2d02a5e",content,!0,{sourceMap:!1})},662:function(t,e,n){"use strict";var r=n(575);n.n(r).a},663:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".profile-pic[data-v-f2dfa5a4]{border-radius:3px;overflow:hidden;width:35px;height:35px}.team-name[data-v-f2dfa5a4]{font-size:28px;border:none;padding-left:0;margin-left:0}h2[data-v-f2dfa5a4]{font-size:20px}h5[data-v-f2dfa5a4]{text-transform:uppercase;font-size:18px}.fa-book-open[data-v-f2dfa5a4]{font-size:12px}.section[data-v-f2dfa5a4]{border-radius:5px;border:1px solid #dadada;overflow:hidden}.section .athlete[data-v-f2dfa5a4]:last-child{border-bottom:none}.section .athlete[data-v-f2dfa5a4]{border-bottom:1px solid #dadada}.section .athlete .name[data-v-f2dfa5a4]{font-size:17px;font-weight:500}.tag[data-v-f2dfa5a4]{border-radius:3px;border:1px solid #dadada}",""])},823:function(t,e,n){"use strict";n.r(e);n(129),n(59),n(60),n(28),n(29),n(21),n(42);var r=n(8),o=(n(20),n(2)),c=n(426),l=n.n(c),d={components:{ProfilePic:function(){return n.e(2).then(n.bind(null,860))},SearchBar:function(){return n.e(3).then(n.bind(null,861))}},head:function(){return{title:"Coaching - RaceBase"}},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,c,d,m,v,f,h,_,x,C,w,k,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,o=e.store,c=Object(r.a)({},o.state.auth.user),t.next=4,n.$get("/team/"+c.team_id);case 4:return d=t.sent,console.log(d),t.next=8,n.$get("/team/"+c.team_id+"/roster");case 8:return m=t.sent,t.next=11,n.$get("/team/"+c.team_id+"/athletes");case 11:for(v=t.sent,f=l.a.filter(v,function(t){return null==t.name}),h=l.a.reject(v,function(t){return null==t.name}),_=!0,x=!1,C=void 0,t.prev=17,w=h[Symbol.iterator]();!(_=(k=w.next()).done);_=!0)(a=k.value).showInvite=!1,a.sentInvite=!1;t.next=25;break;case 21:t.prev=21,t.t0=t.catch(17),x=!0,C=t.t0;case 25:t.prev=25,t.prev=26,_||null==w.return||w.return();case 28:if(t.prev=28,!x){t.next=31;break}throw C;case 31:return t.finish(28);case 32:return t.finish(25);case 33:return t.abrupt("return",{team:d,active:h,roster:m,unclaimed:f,search:"",showUnclaimed:!1});case 34:case"end":return t.stop()}},t,this,[[17,21,25,33],[26,,28,32]])}));return function(e){return t.apply(this,arguments)}}(),middleware:"coach",methods:{loadRoster:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("/team/"+this.team.team_id+"/roster");case 2:this.roster=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addToRoster:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("/team/roster/athlete/"+e);case 2:this.loadRoster();case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),removeFromRoster:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$delete("/team/roster/athlete/"+e);case 2:this.loadRoster();case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updateName:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$put("/team/"+this.team.team_id,{name:this.team.name});case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),inviteAthlete:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("/team/invite/"+e.athlete_id);case 2:t.sent,e.sentInvite=!0,e.showInvite=!1;case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},computed:{filteredUnclaimed:function(){var t=this;return this.unclaimed.filter(function(e){return e.athlete_id.toLowerCase().includes(t.search.toLowerCase())})},filteredActive:function(){var t=this;return this.active.filter(function(e){return null!=e.name&&!t.roster.some(function(a){return a.name===e.name})})}}},m=(n(662),n(14)),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3 w-95 mx-auto"},[n("div",{staticClass:"d-flex align-items-center mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.team.name,expression:"team.name"}],staticClass:"team-name form-control",attrs:{type:"text",placeholder:"Enter your team's name..."},domProps:{value:t.team.name},on:{keyup:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateName(e)},input:function(e){e.target.composing||t.$set(t.team,"name",e.target.value)}}}),t._v(" "),n("div",{staticClass:"btn btn-small btn-primary",on:{click:t.updateName}},[t._v("Save")])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("h2",[n("nuxt-link",{attrs:{to:"/team/"+t.team.team_id}},[t._v(" \n      @"+t._s(t.team.team_id)+"\n    ")])],1),t._v(" "),n("nuxt-link",{staticClass:"ml-auto btn btn-outline-primary",attrs:{to:"/coach/schedule"}},[n("fa",{attrs:{icon:"calendar-alt"}}),t._v(" \n    Edit Meet Schedule\n  ")],1)],1),t._v(" "),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col"},[n("h5",[t._v(" Active Athletes ")]),t._v(" "),n("div",{staticClass:"active section mb-4"},t._l(t.filteredActive,function(e){return n("div",{staticClass:"athlete p-2"},[n("div",{staticClass:"d-flex align-items-center"},[n("ProfilePic",{staticClass:"profile-pic mr-2",attrs:{url:e.profilePicUrl}}),t._v(" "),n("div",{staticClass:"ml-2"},[n("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n              @"+t._s(e.athlete_id)+" \n            ")]),t._v(" "),e.team_id==t.team.team_id?n("nuxt-link",{staticClass:"ml-2",attrs:{to:"/athlete/"+e.athlete_id+"/logs"}},[n("fa",{attrs:{icon:"book-open"}}),t._v(" Logs\n            ")],1):t._e()],1),t._v(" "),n("div",{staticClass:"ml-auto"},[e.team_id==t.team.team_id?n("div",{staticClass:"btn btn-outline-primary btn-small",on:{click:function(n){return t.addToRoster(e.athlete_id)}}},[t._v(" Add to Roster ")]):e.name?n("div",[e.sentInvite?n("div",{staticClass:"btn btn-dark btn-small"},[n("fa",{attrs:{icon:"check"}}),t._v(" Invited\n              ")],1):n("div",{staticClass:"btn btn-outline-primary btn-small",on:{click:function(t){e.showInvite=!0}}},[n("fa",{staticClass:"mr-1",attrs:{icon:"envelope"}}),t._v("Invite\n              ")],1)]):t._e()])],1),t._v(" "),e.showInvite&&!e.sentInvite?n("div",{staticClass:"mt-2"},[t._v(" \n          Are you sure? This will "),n("strong",[t._v("send an email")]),t._v(" to "+t._s(e.name)+". \n          "),n("div",{staticClass:"d-flex align-items-center mt-2"},[n("div",{staticClass:"btn-small btn btn-outline-primary mr-2",on:{click:function(n){return t.inviteAthlete(e)}}},[t._v("Yes, send invite")]),t._v(" "),n("div",{staticClass:"btn-small btn btn-outline-danger",on:{click:function(t){e.showInvite=!1}}},[t._v("No")])])]):t._e()])}),0)]),t._v(" "),n("div",{staticClass:"col"},[n("h5",[t._v(" Current Roster ")]),t._v(" "),t.roster.length>0?n("div",{staticClass:"roster section mb-4"},t._l(t.roster,function(e){return n("div",{staticClass:"athlete d-flex p-2 align-items-center"},[n("ProfilePic",{staticClass:"profile-pic mr-2",attrs:{url:e.profilePicUrl}}),t._v(" "),n("div",{staticClass:"ml-2"},[n("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n            @"+t._s(e.athlete_id)+" \n          ")]),t._v(" "),e.team_id==t.team.team_id?n("nuxt-link",{staticClass:"ml-2",attrs:{to:"/athlete/"+e.athlete_id+"/logs"}},[n("fa",{attrs:{icon:"book-open"}}),t._v(" Logs\n          ")],1):t._e()],1),t._v(" "),n("div",{staticClass:"ml-auto"},[n("div",{staticClass:" ml-3 btn btn-outline-danger btn-small",on:{click:function(n){return t.removeFromRoster(e.athlete_id)}}},[t._v("\n            Remove\n          ")])])],1)}),0):n("div",{staticClass:"no-roster"},[t._v("\n      No athletes on the roster! Add some from the left to get started\n    ")])])]),t._v(" "),n("div",{staticClass:"mb-5"},[n("div",{staticClass:"d-flex align-items-center"},[n("h5",{staticClass:"mr-3 mb-0"},[t._v(" Unclaimed Athletes ")]),t._v(" "),n("div",{staticClass:"btn btn-outline-primary btn-small",on:{click:function(e){t.showUnclaimed=!t.showUnclaimed}}},[t._v("\n      "+t._s(t.showUnclaimed?"Hide":"Show")+"\n    ")])]),t._v(" "),t.showUnclaimed?n("div",[n("SearchBar",{staticClass:"mt-3",model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t._l(t.filteredUnclaimed,function(e){return n("div",{staticClass:"d-inline-block mr-2 my-1 px-2 py-1 tag"},[n("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n        "+t._s(e.athlete_id)+"\n      ")])],1)})],2):t._e()])])},[],!1,null,"f2dfa5a4",null);e.default=component.exports}}]);