(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{255:function(t,e,a){var r=a(364);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(11).default)("5f15cc87",r,!0,{})},363:function(t,e,a){"use strict";var r=a(255);a.n(r).a},364:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,".profile-header h1[data-v-a6010b90]{font-size:23px;font-weight:500}.profile-header h2[data-v-a6010b90]{font-size:16px;font-weight:400}.profile-header .btn.follow[data-v-a6010b90]{vertical-align:top;font-size:11px;font-weight:500;text-transform:uppercase;height:25px;padding:5px 7px}.profile-info .shoe[data-v-a6010b90]{width:25px}h2.year[data-v-a6010b90]{font-size:23px}h3.event-header[data-v-a6010b90]{text-align:left;text-transform:uppercase;font-weight:500;font-size:18px}.results-table td[data-v-a6010b90]{vertical-align:middle}.results-table .place[data-v-a6010b90]{text-align:center;font-size:11px}.results-table .place .num[data-v-a6010b90]{font-size:18px;font-weight:500}.results-table .title[data-v-a6010b90]{color:#3976d0;font-size:17px}.results-table .metadata[data-v-a6010b90]{font-size:13px}.results-table .time[data-v-a6010b90]{font-family:DS Digital,Helvetica,sans-serif;font-size:27px;color:#468df5}.brand[data-v-a6010b90]{width:70px}.brand[data-v-a6010b90],.user-image[data-v-a6010b90]{display:block;margin:0 auto}.user-image[data-v-a6010b90]{width:90%;border-radius:5px}.personal-records[data-v-a6010b90]{margin:0 auto}.personal-records thead[data-v-a6010b90]{width:100%;text-align:center;font-weight:500}.personal-records thead th[data-v-a6010b90]{border:none;font-size:18px;text-transform:none;padding-bottom:0}.personal-records td[data-v-a6010b90]{vertical-align:middle;padding:0 15px}.personal-records .distance[data-v-a6010b90]{text-transform:uppercase;font-weight:500;font-size:16px}.personal-records .time[data-v-a6010b90]{font-family:DS Digital;color:#3976d0;font-size:22px;text-align:right}.personal-records .more[data-v-a6010b90]{text-align:right;font-style:italic;font-size:12px;text-transform:uppercase}.personal-records .more div[data-v-a6010b90]{margin-top:15px}.personal-records .more a[data-v-a6010b90]{text-decoration:underline}",""])},406:function(t,e,a){"use strict";a.r(e);a(79),a(21),a(307),a(32),a(57),a(216),a(309),a(112),a(23);var r=a(1),s=a.n(r),n=a(268),i=a.n(n),o=a(311),l=a.n(o),c=function(){var t=s()(regeneratorRuntime.mark(function t(e){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e=l()(e.toLowerCase())||0).match(/(\d\s?k|\d\s?km|(meter)(s)?|00\s?m)/g)){t.next=13;break}return t.next=5,u(e);case 5:if(!((a=t.sent)>3e3&&Number.isInteger(a/1e3))){t.next=10;break}return t.abrupt("return",a+"m");case 10:return t.abrupt("return",a+"m");case 11:t.next=21;break;case 13:if(!e.match(/(mi)/g)){t.next=20;break}return t.next=16,d(e);case 16:return r=t.sent,t.abrupt("return",r+" mi");case 20:return t.abrupt("return","Unknown");case 21:t.next=27;break;case 23:return t.prev=23,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return","Unknown");case 27:case"end":return t.stop()}},t,this,[[0,23]])}));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=s()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",parseInt(e.toLowerCase().replace(",","").replace(/\s?(k)(m)?(ilometers)?/g,"000m").replace(/\s?(meter)[s]?/g,"m").replace(" ","").match(/\d+(m)/g)[0].replace("m",""))||0);case 4:return t.prev=4,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",0);case 8:case"end":return t.stop()}},t,this,[[0,4]])}));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=s()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",parseFloat(e.toLowerCase().replace(",","").replace(" ","").replace(/(mi)(le)?(s)?/g,"mi").match(/\d+(.)?\d*(mi)/g)[0].replace("mi",""))||0);case 4:return t.prev=4,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",0);case 8:case"end":return t.stop()}},t,this,[[0,4]])}));return function(e){return t.apply(this,arguments)}}(),p={head:function(){return{title:this.name+" - RaceBase",meta:[{hid:"OpenGraph Title",property:"og:title",content:this.athlete.name},{hid:"OpenGraph URL",property:"og:url",content:void 0+this.$route.fullPath},{hid:"OpenGraph Image",property:"og:image",content:this.athlete.profilePicUrl},{hid:"Description",name:"description",content:"View "+this.name+"'s race results on RaceBase, the Internet's first community sourced results database"},{hid:"OpenGraph Description",property:"og:description",content:"View "+this.name+"'s race results on RaceBase, the Internet's first community sourced results database"}]}},asyncData:function(){var t=s()(regeneratorRuntime.mark(function t(e){var a,r,s,n,o,l,u,d,p,m,v,h,_,f,g,b,x,C,w;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.store,r=e.params,s=e.$axios,n=e.redirect,o=a.state.auth.user,t.next=4,s.$get("user/athlete/"+r.id);case 4:return l=t.sent,t.next=7,s.$get("result/list/athlete/"+r.id);case 7:(!(u=t.sent)||u.length<1)&&n("/notfound"),d=l?l.name:u[0].athlete,r.id,t.t0=regeneratorRuntime.keys(u);case 12:if((t.t1=t.t0()).done){t.next=28;break}return p=t.t1.value,t.prev=14,m=u[p],t.next=18,c(m.event);case 18:m.distance=t.sent,v=new Date(m.date),m.year=v.getFullYear(),t.next=26;break;case 23:t.prev=23,t.t2=t.catch(14),console.log(t.t2);case 26:t.next=12;break;case 28:for(g in h=i.a.groupBy(u,"year"),_=i.a.groupBy(u,"distance"),f={},_)f[g]=i.a.sortBy(_[g],"time")[0];for(b in h)h[b]=i.a.groupBy(h[b],"distance");return u=i.a.sortBy(Object.values(h),"year").reverse(),h=Object.keys(h).sort().reverse(),t.next=37,s.$get("user/claimed/"+r.id);case 37:return x=t.sent,C=x.claimed,w=x.user,t.abrupt("return",{user:o,athlete:l,results:u,years:h,records:f,claimed:C,claimedBy:w,name:d,id:r.id});case 41:case"end":return t.stop()}},t,this,[[14,23]])}));return function(e){return t.apply(this,arguments)}}(),computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{claim:function(){var t=this;this.user&&this.$axios.$post("user/claim/"+this.user._id+"/"+this.id).then(function(e){t.getClaim()})},addAlias:function(){var t=s()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$post("user/"+this.user._id+"/alias/"+this.id).then(function(){var t=s()(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.success){t.next=4;break}return t.next=3,e.getClaim();case 3:e.$store.dispatch("auth/fetchUser");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getClaim:function(){var t=s()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("user/claimed/"+this.id);case 2:e=t.sent,this.claimed=e.claimed,this.claimedBy=e.user;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},m=(a(363),a(17)),v=Object(m.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.results.length<=0?a("div",{staticClass:"w-90 mx-auto mt-4"},[a("h1",[t._v(" That athlete doesn't exist! ")]),t._v("\n  Click "),a("nuxt-link",{attrs:{to:"/"}},[t._v("here")]),t._v(" to go home\n")],1):t._e(),t._v(" "),t.results.length>0?a("div",{staticClass:"row mw-100 pl-0 w-100 mx-0"},[a("div",{staticClass:"col-md-8 col-12 px-0 order-12 order-md-1"},[a("div",{staticClass:"profile mt-4 mb-4 w-90 mx-auto",attrs:{itemscope:"",itemtype:"http://schema.org/Person"}},[a("div",{staticClass:"profile-header mb-3"},[t.athlete.profilePicUrl?t._e():a("img",{staticClass:"profile-pic mr-3 d-inline-block",attrs:{src:"/images/default.png",itemprop:"image"}}),t._v(" "),t.athlete.profilePicUrl?a("img",{staticClass:"profile-pic mr-3 d-inline-block",attrs:{src:t.athlete.profilePicUrl.replace("http","https"),itemprop:"image"}}):t._e(),t._v(" "),a("div",{staticClass:"d-inline-block mr-3"},[a("h1",{attrs:{itemprop:"name"}},[t._v(" "+t._s(t.name)+" ")]),t._v(" "),a("h2",{staticClass:"mb-0"},[t._v("\n            @"+t._s(t.id)+"\n            \n            "),t.athlete.stravaUrl?a("a",{staticClass:"ml-3",attrs:{href:t.athlete.stravaUrl,target:"_blank"}},[a("fa",{attrs:{icon:["fab","strava"]}}),t._v(" Strava\n            ")],1):t._e(),t._v(" "),a("a",{staticClass:"ml-3",attrs:{href:"https://twitter.com/intent/tweet?text="+encodeURI("Check out this profile on RaceBase! @racebaseio")+"&url=https://racebase.io/athlete/"+t.id+"&hashtags=racebase",target:"_blank","data-hashtags":"racebase"}},[a("fa",{attrs:{icon:["fab","twitter"]}}),t._v(" Tweet\n            ")],1)])]),t._v(" "),t.isLoggedIn?a("button",{staticClass:"btn btn-primary follow mt-3 mt-lg-0 d-none"},[t._v("\n          Follow\n        ")]):t._e()]),t._v(" "),t.athlete?a("div",{staticClass:"profile-info mb-2"},[a("div",{staticClass:"shoes mb-2"},[t.user.trainer?a("span",{staticClass:"trainer mr-3 d-block d-lg-inline-block"},[a("img",{staticClass:"shoe mr-1",attrs:{src:"/images/trainer.svg"}}),t._v(" \n            "+t._s(t.user.trainer)+"\n          ")]):t._e(),t._v(" "),t.user.racer?a("span",{staticClass:"racer"},[a("img",{staticClass:"shoe mr-1",attrs:{src:"/images/racer.svg"}}),t._v(" \n            "+t._s(t.user.racer)+"\n          ")]):t._e()]),t._v(" "),a("div",{staticClass:"personal"},[t.user.mileage?a("span",{staticClass:"mileage mr-3"},[a("fa",{staticClass:"mr-1",attrs:{icon:"calendar-alt"}}),t._v("\n            "+t._s(t.user.mileage)+" mpw\n          ")],1):t._e(),t._v(" "),t.user.location?a("span",{staticClass:"location"},[a("fa",{staticClass:"mr-1",attrs:{icon:"map-marker-alt"}}),t._v(" "),a("span",{attrs:{itemprop:"homeLocation"}},[t._v(" "+t._s(t.user.location)+" ")])],1):t._e()])]):t._e(),t._v(" "),t.claimed?t._e():a("div",{staticClass:"claim-info"},[a("div",[t._v("\n          Is this you? \n          "),t.isLoggedIn?t._e():a("span",[a("nuxt-link",{attrs:{to:"/login"}},[t._v("Log In")]),t._v(" or \n            "),a("nuxt-link",{attrs:{to:"/signup"}},[t._v("Sign Up")]),t._v(" \n            to claim this athlete profile.\n          ")],1),t._v(" "),t.isLoggedIn?a("span",[t.user.athlete_id?t._e():a("span",[t._v("\n              Click "),a("a",{on:{click:function(e){t.claim()}}},[t._v("here")]),t._v(" to claim this profile.\n            ")]),t._v(" "),t.user.athlete_id?a("span",[t._v("\n              Click "),a("a",{attrs:{href:"#"},on:{click:function(e){t.addAlias()}}},[t._v("here")]),t._v(" to add this profile to your aliases.\n            ")]):t._e()]):t._e()])]),t._v(" "),t.claimed&&t.user.athlete_id!=t.id?a("div",{staticClass:"claim-info"},[a("div",[t._v("Claimed by "+t._s(t.claimedBy?t.claimedBy:"Anonymous"))]),t._v(" "),t.claimedBy?a("div",{staticClass:"smaller"},[t._v("\n          Click \n          "),a("a",{attrs:{href:"mailto:racebase@breeze.software"}},[t._v("here")]),t._v(" \n          to report a wrongfully claimed athlete.\n        ")]):t._e()]):t._e()]),t._v(" "),t.results&&0!=t.results.length||!t.athlete?t._e():a("h3",[t._v("No Results")]),t._v(" "),t._l(t.results,function(e,r){return a("div",{staticClass:"mb-4 w-90 mx-auto"},[a("h2",{staticClass:"year"},[t._v(" "+t._s(t.years[r])+" ")]),t._v(" "),t._l(e,function(e,r){return a("div",{staticClass:"results-container"},[a("h3",{staticClass:"event-header"},[t._v("\n          "+t._s(r)+"\n        ")]),t._v(" "),a("div",{staticClass:"table-responsive mb-4"},[a("table",{staticClass:"results-table table table-striped mb-0"},[a("tbody",t._l(e,function(e){return a("tr",[a("td",{staticClass:"place"},[a("div",{staticClass:"num"},[t._v(" "+t._s(e.place)+" ")]),t._v(" "),a("fa",{staticClass:"d-block mx-auto",attrs:{icon:"trophy"}})],1),t._v(" "),a("td",{staticClass:"race"},[a("nuxt-link",{staticClass:"title",attrs:{to:"/races/"+e.race_id}},[t._v("\n                    "+t._s(e.race)+"\n                  ")]),t._v(" "),a("div",{staticClass:"metadata mt-2"},[a("span",{staticClass:"date mr-2"},[a("fa",{staticClass:"mr-1",attrs:{icon:"calendar-alt"}}),t._v("\n                      "+t._s(e.date)+"\n                    ")],1),t._v(" "),a("span",{staticClass:"team no-wrap"},[a("fa",{staticClass:"mr-1",attrs:{icon:["fab","font-awesome-flag"]}}),t._v(" "),e.team_id?a("nuxt-link",{attrs:{to:"",to:"/team/"+e.team_id}},[t._v("\n                        "+t._s(e.team)+"\n                      ")]):t._e(),t._v(" "),e.team_id?t._e():a("span",[t._v(t._s(e.team))])],1)])],1),t._v(" "),a("td",{staticClass:"time"},[t._v("\n                  "+t._s(e.time)+"\n                ")])])}),0)])])])})],2)})],2),t._v(" "),a("div",{staticClass:"col-12 col-md-4 pr-0 pl-md-3 pl-0 mt-4 ml-0 order-1 order-md-12 w-100"},[t.athlete.brandPicUrl&&t.athlete.featuredPicUrl?t._e():a("div",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[t._v(" \n      Want to customize this page? "),a("br"),t._v(" "),t.isLoggedIn?a("nuxt-link",{attrs:{to:"/user/settings"}},[t._v(" Claim this profile ")]):t._e(),t._v(" "),t.isLoggedIn?t._e():a("span",[a("nuxt-link",{attrs:{to:"/login"}},[t._v(" Log In ")]),t._v(" or\n        "),a("nuxt-link",{attrs:{to:"/signup"}},[t._v(" Sign Up ")])],1),t._v(" "),a("br"),t._v(" to add custom images.\n    ")],1),t._v(" "),t.athlete?a("img",{staticClass:"brand-pic brand mb-4",attrs:{src:t.athlete.brandPicUrl.replace("http","https")}}):t._e(),t._v(" "),t.athlete.featuredPicUrl?a("img",{staticClass:"user-image mb-4",attrs:{src:t.athlete.featuredPicUrl.replace("http","https")}}):t._e(),t._v(" "),a("div",{staticClass:"table-responsive personal-records mt-4 mx-auto w-90"},[a("table",{staticClass:"table mb-2"},[t._m(0),t._v(" "),a("tbody",[t._l(t.records,function(e,r){return a("tr",[a("td",{staticClass:"distance"},[t._v(t._s(r))]),t._v(" "),a("td",{staticClass:"time"},[t._v(t._s(e.time))])])}),t._v(" "),Object.keys(t.records).length<3?a("tr",{staticClass:"more"},[a("td",{attrs:{colspan:"2"}},[t.isLoggedIn?a("div",[a("nuxt-link",{attrs:{to:"/user/content"}},[t._v("Add more results")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():a("div",[a("nuxt-link",{attrs:{to:"/login"}},[t._v("Log in")]),t._v(" to add more results\n              ")],1)])]):t._e()],2)])])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"pb-2",attrs:{colspan:"2"}},[this._v(" Personal Records ")])])])}],!1,null,"a6010b90",null);v.options.__file="_id.vue";e.default=v.exports}}]);