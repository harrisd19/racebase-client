(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{590:function(e,t,n){var content=n(696);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("46caf546",content,!0,{sourceMap:!1})},695:function(e,t,n){"use strict";var r=n(590);n.n(r).a},696:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".event[data-v-69e71158]{padding:3px 8px;font-size:16px}.event .fa-check[data-v-69e71158]{font-size:12px}label[data-v-69e71158]{text-align:right;text-transform:uppercase;margin-bottom:0;margin-right:10px;color:#575757;font-size:14px}",""])},841:function(e,t,n){"use strict";n.r(t);n(42),n(20);var r=n(2),c=n(426),l=n.n(c),o={components:{ResultEditor:function(){return n.e(14).then(n.bind(null,870))},SearchBar:function(){return n.e(3).then(n.bind(null,861))}},asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,c,l,o,m,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=t.$axios,c=t.store,l=c.state.auth.user,o={},m="",v={},!n.raceId){e.next=13;break}return e.next=8,r.$get("/race/"+n.raceId);case 8:return o=e.sent,m=o.name,e.next=12,r.$get("/race/"+n.raceId+"/mens/events");case 12:v=e.sent;case 13:return e.abrupt("return",{mine:!0,curRace:o,teamSearchInput:"",searchInput:"",idParam:n.raceId,races:{},teams:{},womens:!1,events:v,user:l,newEvent:"",newTeam:{team_id:"",team:""},result:{time:"",athlete:"",athlete_id:"",race:m,race_id:n.raceId,womens:!1,team:"",team_id:"",place:null,event:"",date:""}});case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),methods:{search:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.searchInput){e.next=4;break}return e.next=3,this.$axios.$get("search/races/"+this.searchInput);case 3:this.races=e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),teamSearch:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.teamSearchInput){e.next=7;break}return e.next=3,this.$axios.$get("search/results/"+this.teamSearchInput+"/1/50");case 3:t=e.sent,this.teams=l.a.uniq(t.docs,"team"),e.next=8;break;case 7:this.teams={};case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),selectRace:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.raceId=t,e.next=3,this.$axios.$get("/race/"+t);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:return this.curRace=e.t0,e.next=9,this.$axios.$get("/race/"+t+"/"+this.gender+"/events");case 9:this.events=e.sent;case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),selectEvent:function(e){this.result.event=e},selectTeam:function(e){this.result.team=e.team,this.result.team_id=e.team_id},createResult:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mine&&(this.result.athlete=this.user.name,this.result.athlete_id=this.user.athlete_id),this.result.womens=!!this.womens,this.result.date=this.curRace.date,e.next=5,this.$axios.$post("result",this.result);case 5:e.sent&&this.$router.push("/new/result/success");case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),createCustomTeam:function(){this.result.team=this.newTeam.name,this.result.team_id=this.newTeam.team_id},removeTeam:function(){this.result.team="",this.result.team_id=""}},watch:{womens:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.curRace._id){e.next=4;break}return e.next=3,this.$axios.$get("/race/"+this.curRace._id+"/"+this.gender+"/events");case 3:this.events=e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),curRace:function(){this.result.race=this.curRace.name,this.result.race_id=this.curRace._id}},computed:{gender:function(){return this.womens?"womens":"mens"},step:function(){return this.result.place&&this.result.time?4:this.result.team?3:this.result.event?2:this.curRace.name?1:0},customTeam:function(){return this.newTeam.name==this.result.team&&this.newTeam.team_id==this.result.team_id}}},m=(n(695),n(14)),component=Object(m.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-95 mx-auto mt-4 mb-5"},[e._m(0),e._v(" "),n("h4",[e._v(" 1. Find a race ")]),e._v(" "),e.idParam?e._e():n("div",{staticClass:"mb-3"},[e._v(" Search for a race to add your result to. ")]),e._v(" "),e.idParam?e._e():n("SearchBar",{on:{search:e.search},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e._l(e.races,function(t){return n("div",{staticClass:"d-flex align-items-center mb-2"},[e.curRace._id==t._id?n("div",{staticClass:"btn btn-primary btn-small mr-3"},[e._v("\n      Selected "),n("fa",{attrs:{icon:"check"}})],1):n("div",{staticClass:"btn btn-outline-primary btn-small mr-3",on:{click:function(n){return e.selectRace(t._id)}}},[e._v("\n      Select\n    ")]),e._v(" "),n("nuxt-link",{attrs:{to:"/races/"+t._id}},[e._v("\n      "+e._s(t.name)+"\n    ")]),e._v("\n      on "+e._s(t.date)+"\n  ")],1)}),e._v(" "),e.idParam?n("div",{staticClass:"d-flex align-items-center mb-2 mt-3"},[n("div",{staticClass:"btn btn-primary btn-small mr-3"},[e._v("\n      Selected "),n("fa",{attrs:{icon:"check"}})],1),e._v(" "),n("nuxt-link",{attrs:{to:"/races/"+e.curRace._id}},[e._v("\n      "+e._s(e.curRace.name)+"\n    ")]),e._v("\n      on "+e._s(e.curRace.date)+"\n  ")],1):n("div",[e._v(" \n    Can't find the race you're looking for? Create one \n    "),n("strong",[n("nuxt-link",{attrs:{to:"/user/content"}},[e._v(" here ")])],1)]),e._v(" "),e.curRace.name?n("div",{staticClass:"mt-4"},[n("h4",[e._v(" 2. Choose your event ")]),e._v(" "),n("div",[n("label",{staticClass:"form-check-label mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.womens,expression:"womens"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.womens,!0)},on:{change:function(t){e.womens=!0}}}),e._v(" Women's   \n\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.womens,expression:"womens"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.womens,!1)},on:{change:function(t){e.womens=!1}}}),e._v(" Men's\n      ")])]),e._v(" "),e.events?n("div",{staticClass:"d-flex align-items-center mb-3"},[e._l(e.events,function(t){return n("div",{staticClass:"event btn d-inline-block mr-2",class:e.result.event==t?"btn-primary":"btn-outline-dark",on:{click:function(n){e.result.event!=t?e.selectEvent(t):e.result.event=""}}},[e._v("\n        "+e._s(t)+" \n        "),e.result.event==t?n("fa",{staticClass:"ml-1",attrs:{icon:"check"}}):e._e()],1)}),e._v(" "),n("div",[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEvent,expression:"newEvent"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add your own..."},domProps:{value:e.newEvent},on:{input:function(t){t.target.composing||(e.newEvent=t.target.value)}}}),e._v(" "),n("div",{staticClass:"input-group-append"},[e.newEvent==e.result.event&&e.result.event?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.result.event=""}}},[n("fa",{attrs:{icon:"check"}})],1):n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(t){e.result.event=e.newEvent}}},[n("fa",{attrs:{icon:"plus"}})],1)])])])],2):e._e()]):e._e(),e._v(" "),e.result.event?n("div",{staticClass:"mt-4"},[n("h4",[e._v(" 3. Find your team ")]),e._v(" "),n("SearchBar",{on:{search:e.teamSearch},model:{value:e.teamSearchInput,callback:function(t){e.teamSearchInput=t},expression:"teamSearchInput"}}),e._v(" "),n("div",[e._l(e.teams,function(t){return n("div",{staticClass:"mb-2 d-flex align-items-center"},[e.result.team!=t.team?n("div",{staticClass:"btn btn-outline-primary btn-small",on:{click:function(n){return e.selectTeam(t)}}},[e._v("\n          Select\n        ")]):n("div",{staticClass:"btn btn-primary btn-small",on:{click:e.removeTeam}},[e._v("\n          Selected "),n("fa",{attrs:{icon:"check"}})],1),e._v(" "),n("nuxt-link",{staticClass:"ml-2",attrs:{to:"/team/"+t.team_id}},[e._v("\n          "+e._s(t.team)+"\n        ")])],1)}),e._v(" "),n("div",[e._v(" \n        Can't find your team? Create a new one: \n        "),n("div",{staticClass:"mt-3 mb-2 d-flex align-items-center w-50"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTeam.name,expression:"newTeam.name"}],staticClass:"form-control flex-shrink-1 mr-2",attrs:{type:"text",placeholder:"Team name"},domProps:{value:e.newTeam.name},on:{input:function(t){t.target.composing||e.$set(e.newTeam,"name",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTeam.team_id,expression:"newTeam.team_id"}],staticClass:"form-control flex-shrink-1 mr-2",attrs:{type:"text",placeholder:"Team ID"},domProps:{value:e.newTeam.team_id},on:{input:function(t){t.target.composing||e.$set(e.newTeam,"team_id",t.target.value)}}}),e._v(" "),n("div",{staticClass:"btn flex-shrink-0",class:e.customTeam?"btn-primary":"btn-outline-primary",on:{click:e.createCustomTeam}},[e._v(" \n            Add Team "),e.customTeam?n("fa",{attrs:{icon:"check"}}):e._e()],1)])])],2)],1):e._e(),e._v(" "),e.result.team?n("div",{staticClass:"mt-4"},[n("h4",[e._v(" 4. Enter a few details ")]),e._v(" "),n("form",{staticClass:"d-flex w-75 align-items-center"},[n("label",{staticClass:"flex-shrink-0"},[e._v(" Finishing time ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.result.time,expression:"result.time"}],staticClass:"form-control flex-shrink-1 mr-3",attrs:{type:"text",placeholder:"15:30, 98:10..."},domProps:{value:e.result.time},on:{input:function(t){t.target.composing||e.$set(e.result,"time",t.target.value)}}}),e._v(" "),n("label",{staticClass:"flex-shrink-1"},[n("fa",{attrs:{icon:"trophy"}})],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.result.place,expression:"result.place"}],staticClass:"form-control flex-shrink-1",attrs:{type:"number",placeholder:"Place"},domProps:{value:e.result.place},on:{input:function(t){t.target.composing||e.$set(e.result,"place",t.target.value)}}})])]):e._e(),e._v(" "),e.result.time&&e.result.place?n("div",{staticClass:"mt-4"},[n("h4",[e._v(" 5. Who's result is this?  ")]),e._v(" "),n("div",[n("label",{staticClass:"form-check-label mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mine,expression:"mine"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.mine,!0)},on:{change:function(t){e.mine=!0}}}),e._v(" Mine   \n\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mine,expression:"mine"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.mine,!1)},on:{change:function(t){e.mine=!1}}}),e._v(" Someone else's\n      ")])]),e._v(" "),e.mine?e._e():n("div",{staticClass:"d-flex w-75 align-items-center"},[n("label",{staticClass:"flex-shrink-0"},[e._v(" Athlete's name ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.result.athlete,expression:"result.athlete"}],staticClass:"form-control flex-shrink-1 mr-3",attrs:{type:"text",placeholder:"John Appleseed"},domProps:{value:e.result.athlete},on:{input:function(t){t.target.composing||e.$set(e.result,"athlete",t.target.value)}}}),e._v(" "),n("label",{staticClass:"flex-shrink-0"},[e._v(" Athlete's ID ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.result.athlete_id,expression:"result.athlete_id"}],staticClass:"form-control flex-shrink-1",attrs:{type:"text",placeholder:"jappleseed"},domProps:{value:e.result.athlete_id},on:{input:function(t){t.target.composing||e.$set(e.result,"athlete_id",t.target.value)}}})])]):e._e(),e._v(" "),n("div",{staticClass:"progress mt-4"},[n("div",{staticClass:"progress-bar",style:"width: "+e.step/5*100+"%",attrs:{role:"progressbar","aria-valuenow":e.step,"aria-valuemin":"0","aria-valuemax":"5"}})]),e._v(" "),n("div",{staticClass:"mt-2"},[n("strong",[e._v(e._s(e.step)+" of 5")]),e._v(" completed")]),e._v(" "),e.result.time&&e.result.place?n("div",{staticClass:"btn btn-primary mt-3",on:{click:e.createResult}},[e._v(" \n    Create Result \n  ")]):e._e()],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-3"},[this._v(" \n    To create a result, follow the "),t("strong",[this._v("five simple steps")]),this._v(" below. \n  ")])}],!1,null,"69e71158",null);t.default=component.exports}}]);