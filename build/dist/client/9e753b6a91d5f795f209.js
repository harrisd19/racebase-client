(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{595:function(t,e,r){"use strict";r.r(e),r.d(e,"format",function(){return l});r(61),r(418),r(642),r(132);var n=r(643),o=r.n(n);function l(t){if(void 0!==t){if((t=o()(t.toLowerCase())||0).match(/(\d\s?k|\d\s?km|(meter)(s)?|00\s?m)/g)){var e=c(t);return e>3e3&&Number.isInteger(e/1e3)?e/1e3+" km":e+"m"}return t.match(/(mi)/g)?d(t)+" mi":"Unknown"}}var c=function(t){return parseInt(t.toLowerCase().replace(",","").replace(/\s?(k)(m)?(ilometers)?/g,"000m").replace(/\s?(meter)[s]?/g,"m").replace(" ","").match(/\d+(m)/g)[0].replace("m",""))||0},d=function(t){return parseFloat(t.toLowerCase().replace(",","").replace(" ","").replace(/(mi)(le)?(s)?/g,"mi").match(/\d+(.)?\d*(mi)/g)[0].replace("mi",""))||0}},609:function(t,e,r){var content=r(761);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("4a50c3c8",content,!0,{sourceMap:!1})},706:function(t,e,r){var n=r(6),o=r(707)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},707:function(t,e,r){var n=r(30),o=r(31),l=r(43).f;t.exports=function(t){return function(e){for(var r,c=o(e),d=n(c),m=d.length,i=0,v=[];m>i;)l.call(c,r=d[i++])&&v.push(t?[r,c[r]]:c[r]);return v}}},760:function(t,e,r){"use strict";var n=r(609);r.n(n).a},761:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,".profile-header h1[data-v-1ee9aa36]{font-size:23px;font-weight:500}.profile-header h2[data-v-1ee9aa36]{font-size:16px;font-weight:400}.profile-header .btn.follow[data-v-1ee9aa36]{vertical-align:top;font-size:13px;font-weight:500;text-transform:uppercase;height:25px;padding:3px 6px}.profile-header .strava[data-v-1ee9aa36]{color:#f67e2c}.profile-pic[data-v-1ee9aa36]{border-radius:7px;overflow:hidden;display:inline-block;width:58px;height:58px}.profile-info .shoe[data-v-1ee9aa36]{width:25px}.profile-info .fa-book-open[data-v-1ee9aa36]{font-size:14px}h2.year[data-v-1ee9aa36]{font-size:23px}h3.event-header[data-v-1ee9aa36]{text-align:left;text-transform:uppercase;font-weight:500;font-size:18px}.results-table td[data-v-1ee9aa36]{vertical-align:middle}.results-table .place[data-v-1ee9aa36]{text-align:center;font-size:11px}.results-table .place .num[data-v-1ee9aa36]{font-size:18px;font-weight:500}.results-table .title[data-v-1ee9aa36]{color:#3976d0;font-size:17px;font-weight:500}.results-table .metadata[data-v-1ee9aa36]{font-size:14px}.results-table .metadata .btn-small[data-v-1ee9aa36]{padding:2px 4px}.results-table .distance[data-v-1ee9aa36]{font-weight:500}.results-table .time[data-v-1ee9aa36]{font-family:DS Digital,Helvetica,sans-serif;font-size:27px;color:#468df5;text-align:right;padding-right:15px}.results-table .time .star[data-v-1ee9aa36]{color:#3976d0}.brand[data-v-1ee9aa36]{width:70px}.brand[data-v-1ee9aa36],.user-image[data-v-1ee9aa36]{display:block;margin:0 auto}.user-image[data-v-1ee9aa36]{width:90%;border-radius:5px}.personal-records[data-v-1ee9aa36]{margin:0 auto}.personal-records thead[data-v-1ee9aa36]{width:100%;text-align:center;font-weight:500}.personal-records thead th[data-v-1ee9aa36]{text-transform:uppercase;border:none;font-size:16px;color:grey;padding-bottom:0;border-bottom:none!important}.personal-records td[data-v-1ee9aa36]{vertical-align:middle;padding:0 15px}.personal-records .distance[data-v-1ee9aa36]{text-transform:uppercase;font-weight:500;font-size:16px}.personal-records .time[data-v-1ee9aa36],.personal-records .time a[data-v-1ee9aa36]{font-family:DS Digital;color:#3976d0;font-size:22px;text-align:right}.personal-records .date[data-v-1ee9aa36]{font-size:13px;text-transform:uppercase;text-align:left}.personal-records .more[data-v-1ee9aa36]{text-align:right;font-style:italic;font-size:12px;text-transform:uppercase}.personal-records .more div[data-v-1ee9aa36]{margin-top:15px}.personal-records .more a[data-v-1ee9aa36]{text-decoration:underline}",""])},849:function(t,e,r){"use strict";r.r(e);r(85),r(21),r(706),r(59),r(60),r(20);var n=r(2),o=(r(42),r(426)),l=r.n(o),c=r(595).format,d={components:{ProfilePic:function(){return r.e(2).then(r.bind(null,860))}},head:function(){return{title:this.name+" - RaceBase",meta:[{hid:"OpenGraph Title",property:"og:title",content:this.athlete.name},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.io"+this.$route.fullPath},{hid:"OpenGraph Image",property:"og:image",content:this.athlete.profilePicUrl},{hid:"Athlete Page Description",name:"description",content:"View "+this.name+"'s race results on RaceBase, the Internet's first community sourced results database"},{hid:"OpenGraph Description",property:"og:description",content:"View "+this.name+"'s race results on RaceBase, the Internet's first community sourced results database"}]}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,d,m,v,h,f,_,x,w,C,y,k,L,R,$,I,P,z;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,o=e.$axios,d=e.redirect,m=r.state.auth.user,v={},m&&m.following&&(v=m.following.includes(n.id)),t.next=6,o.$get("user/athlete/"+n.id);case 6:if(t.t0=t.sent,t.t0){t.next=9;break}t.t0={};case 9:return h=t.t0,t.next=12,o.$get("result/list/athlete/"+n.id);case 12:for(x in(!(f=t.sent)||f.length<1)&&d("/notfound"),_=h.name||f[0].athlete,n.id,f)try{(w=f[x]).distance=c(w.event),C=new Date(w.date),w.year=C.getFullYear()}catch(t){console.log(t)}for($ in y=l.a.groupBy(f,"year"),k=l.a.groupBy(f,"distance"),L={},R=[],k)L[$]=l.a.sortBy(k[$],"time")[0],R.push(L[$]);return f=l.a.sortBy(Object.values(y),"year").reverse(),y=Object.keys(y).sort().reverse(),t.next=26,o.$get("user/claimed/"+n.id);case 26:return I=t.sent,P=I.claimed,z=I.user,t.abrupt("return",{user:m,athlete:h,results:f,years:y,records:L,recordsArray:R,claimed:P,claimedBy:z,name:_,id:n.id,following:v});case 30:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{claim:function(){var t=this;this.user&&this.$axios.$post("user/claim/"+this.user._id+"/"+this.id).then(function(e){t.getClaim()})},addAlias:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$post("user/"+this.user._id+"/alias/"+this.id).then(function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.success){t.next=4;break}return t.next=3,e.getClaim();case 3:e.$store.dispatch("auth/fetchUser");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getClaim:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("user/claimed/"+this.id);case 2:e=t.sent,this.claimed=e.claimed,this.claimedBy=e.user;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),follow:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("user/follow/"+this.id);case 2:this.following=!0,this.$store.dispatch("auth/fetchUser");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),unfollow:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("user/unfollow/"+this.id);case 2:this.following=!1,this.$store.dispatch("auth/fetchUser");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},m=(r(760),r(14)),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.results.length<=0?r("div",{staticClass:"w-90 mx-auto mt-4"},[r("h1",[t._v(" That athlete doesn't exist! ")]),t._v("\n  Click "),r("nuxt-link",{attrs:{to:"/"}},[t._v("here")]),t._v(" to go home\n")],1):t._e(),t._v(" "),t.results.length>0?r("div",{staticClass:"row mw-100 pl-0 w-100 mx-0"},[r("div",{staticClass:"col-md-8 col-12 px-0 order-12 order-md-1"},[r("div",{staticClass:"profile mt-4 mb-4 w-90 mx-auto",attrs:{itemscope:"",itemtype:"http://schema.org/Person"}},[r("div",{staticClass:"profile-header d-flex align-items-start mb-3"},[r("div",{staticClass:"profile-pic mr-3"},[r("ProfilePic",{attrs:{url:t.athlete.profilePicUrl}})],1),t._v(" "),r("div",{staticClass:"d-inline-block mr-3"},[r("h1",{attrs:{itemprop:"name"}},[t._v(" "+t._s(t.name)+" ")]),t._v(" "),r("h2",{staticClass:"mb-0"},[t._v("\n            @"+t._s(t.id)+"\n            \n            "),t.athlete.stravaUrl?r("a",{staticClass:"ml-3 strava",attrs:{href:t.athlete.stravaUrl,target:"_blank"}},[r("fa",{attrs:{icon:["fab","strava"]}}),t._v(" Strava\n            ")],1):t._e(),t._v(" "),r("a",{staticClass:"ml-3",attrs:{href:"https://twitter.com/intent/tweet?text="+encodeURI("Check out this profile on RaceBase! @racebaseio")+"&url=https://racebase.io/athlete/"+t.id+"&hashtags=racebase",target:"_blank","data-hashtags":"racebase"}},[r("fa",{attrs:{icon:["fab","twitter"]}}),t._v(" Tweet\n            ")],1)])]),t._v(" "),t.isLoggedIn&&!t.following?r("button",{staticClass:"btn btn-primary follow mt-3 mt-lg-0",on:{click:function(e){return t.follow()}}},[t._v("\n          Follow\n        ")]):t._e(),t._v(" "),t.isLoggedIn&&t.following?r("button",{staticClass:"btn btn-default follow mt-3 mt-lg-0",on:{click:function(e){return t.unfollow()}}},[t._v("\n          Following "),r("fa",{staticClass:"ml-2",attrs:{icon:"check"}})],1):t._e()]),t._v(" "),t.athlete?r("div",{staticClass:"profile-info mb-2"},[r("div",{staticClass:"shoes mb-2"},[t.athlete.trainer?r("span",{staticClass:"trainer mr-3 d-block d-lg-inline-block"},[r("object",{staticClass:"shoe mr-1",attrs:{type:"image/svg+xml",data:"/images/trainer-blue.svg"}}),t._v("\n            "+t._s(t.athlete.trainer)+"\n          ")]):t._e(),t._v(" "),t.athlete.racer?r("span",{staticClass:"racer"},[r("object",{staticClass:"shoe mr-1",attrs:{type:"image/svg+xml",data:"/images/racer.svg"}}),t._v("\n            "+t._s(t.athlete.racer)+"\n          ")]):t._e()]),t._v(" "),r("div",{staticClass:"personal"},[t.athlete.mileage?r("span",{staticClass:"mileage mr-3"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"calendar-alt"}}),t._v("\n            "+t._s(t.athlete.mileage)+" MPW\n          ")],1):t._e(),t._v(" "),t.athlete.location?r("span",{staticClass:"location mr-3"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"map-marker-alt"}}),t._v(" "),r("span",{attrs:{itemprop:"homeLocation"}},[t._v(" "+t._s(t.athlete.location)+" ")])],1):t._e(),t._v(" "),t.athlete.publicLogs?r("span",{staticClass:"logs"},[r("nuxt-link",{attrs:{to:"/athlete/"+t.athlete.athlete_id+"/logs"}},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"book-open"}}),t._v("\n              Logs\n            ")],1)],1):t._e()])]):t._e(),t._v(" "),t.isLoggedIn?r("div",[r("nuxt-link",{staticClass:"mt-1 mb-2 btn btn-default btn-small d-inline-block",attrs:{to:"/new/result"}},[t._v("\n          Add Result "),r("fa",{attrs:{icon:"plus"}})],1)],1):t._e(),t._v(" "),t.claimed?t._e():r("div",{staticClass:"claim-info"},[r("div",[t._v("\n          Is this you? \n          "),t.isLoggedIn?t._e():r("span",[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Log In")]),t._v(" or \n            "),r("nuxt-link",{attrs:{to:"/signup"}},[t._v("Sign Up")]),t._v(" \n            to claim this athlete profile.\n          ")],1),t._v(" "),t.isLoggedIn?r("span",[t.user.athlete_id?t._e():r("span",[t._v("\n              Click "),r("a",{on:{click:function(e){return t.claim()}}},[t._v("here")]),t._v(" to claim this profile.\n            ")]),t._v(" "),t.user.athlete_id?r("span",[t._v("\n              Click "),r("a",{attrs:{href:"#"},on:{click:function(e){return t.addAlias()}}},[t._v("here")]),t._v(" to add this profile to your aliases.\n            ")]):t._e()]):t._e()])]),t._v(" "),t.claimed&&t.user.athlete_id!=t.id?r("div",{staticClass:"claim-info"},[r("div",[t._v("Claimed by "+t._s(t.claimedBy?t.claimedBy:"Anonymous"))]),t._v(" "),t.claimedBy?r("div",{staticClass:"smaller"},[t._v("\n          Click \n          "),r("a",{attrs:{href:"mailto:racebase@breeze.software"}},[t._v("here")]),t._v(" \n          to report a wrongfully claimed athlete.\n        ")]):t._e()]):t._e()]),t._v(" "),t.results&&0!=t.results.length||!t.athlete?t._e():r("h3",[t._v("No Results")]),t._v(" "),t._l(t.results,function(e,n){return r("div",{staticClass:"mb-4 w-90 mx-auto"},[r("h2",{staticClass:"year mb-3"},[t._v(" "+t._s(t.years[n])+" ")]),t._v(" "),r("div",{staticClass:"results-container"},[r("div",{staticClass:"table-responsive mb-4"},[r("table",{staticClass:"results-table table table-striped mb-0"},[r("tbody",t._l(e,function(e){return r("tr",[r("td",{staticClass:"place"},[r("div",{staticClass:"num"},[t._v(" "+t._s(e.place)+" ")]),t._v(" "),r("fa",{staticClass:"d-block mx-auto",attrs:{icon:"trophy"}})],1),t._v(" "),r("td",{staticClass:"race"},[r("div",{staticClass:"d-flex flex-wrap align-items-center"},[r("nuxt-link",{staticClass:"title mr-2 flex-grow",attrs:{to:"/races/"+e.race_id}},[t._v("\n                      "+t._s(e.race)+"\n                    ")]),t._v(" "),r("div",{staticClass:"distance mr-3"},[t._v(" "+t._s(e.distance)+" ")])],1),t._v(" "),r("div",{staticClass:"metadata d-flex flex-wrap align-items-center mt-0 w-100"},[r("span",{staticClass:"date mr-2 my-1"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"calendar-alt"}}),t._v("\n                      "+t._s(e.date)+"\n                    ")],1),t._v(" "),r("span",{staticClass:"team no-wrap mr-3 my-1"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:["fab","font-awesome-flag"]}}),t._v(" "),e.team_id?r("nuxt-link",{attrs:{to:"",to:"/team/"+e.team_id}},[t._v("\n                        "+t._s(e.team)+"\n                      ")]):t._e(),t._v(" "),e.team_id?t._e():r("span",[t._v(t._s(e.team))])],1),t._v(" "),e.post_id?t._e():r("nuxt-link",{staticClass:"btn btn-outline-primary btn-small my-1",attrs:{to:"/new/post/"+e._id}},[t._v(" \n                      Create Post "),r("fa",{attrs:{icon:"plus"}})],1),t._v(" "),e.post_id?r("nuxt-link",{staticClass:"btn btn-outline-primary btn-small my-1",attrs:{to:"/post/"+e.post_id}},[t._v("\n                      View Post\n                    ")]):t._e()],1)]),t._v(" "),r("td",{staticClass:"time ml-auto"},[t._v("\n                  "+t._s(e.time)),t.recordsArray.includes(e)?r("span",{staticClass:"star"},[t._v("*")]):t._e()])])}),0)])])])])})],2),t._v(" "),r("div",{staticClass:"col-12 col-md-4 pr-0 pl-0 pr-md-2 mt-4 ml-0 order-1 order-md-12 w-100"},[t.athlete.brandPicUrl&&t.athlete.featuredPicUrl?t._e():r("div",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[t._v(" \n      Want to customize this page? "),r("br"),t._v(" "),t.isLoggedIn?r("nuxt-link",{attrs:{to:"/user/settings"}},[t._v(" Claim this profile ")]):t._e(),t._v(" "),t.isLoggedIn?t._e():r("span",[r("nuxt-link",{attrs:{to:"/login"}},[t._v(" Log In ")]),t._v(" or\n        "),r("nuxt-link",{attrs:{to:"/signup"}},[t._v(" Sign Up ")])],1),t._v(" "),r("br"),t._v(" to add custom images.\n    ")],1),t._v(" "),t.athlete.brandPicUrl?r("img",{staticClass:"brand-pic brand mb-4",attrs:{src:t.athlete.brandPicUrl.replace("http","https")}}):t._e(),t._v(" "),t.athlete.featuredPicUrl?r("img",{staticClass:"user-image mb-4",attrs:{src:t.athlete.featuredPicUrl.replace("http","https")}}):t._e(),t._v(" "),r("div",{staticClass:"table-responsive personal-records mt-4 mx-auto w-90"},[r("table",{staticClass:"table mb-2"},[t._m(0),t._v(" "),r("tbody",[t._l(t.records,function(e,n){return[r("tr",[r("td",{staticClass:"distance"},[t._v("\n                "+t._s(n)+"\n              ")]),t._v(" "),r("td",{staticClass:"time"},[r("nuxt-link",{attrs:{to:"/races/"+e.race_id}},[t._v("\n                  "+t._s(e.time)+"\n                ")])],1)]),t._v(" "),r("tr",[r("td",{staticClass:"date pb-2",attrs:{colspan:"2"}},[t._v(" "+t._s(e.date))])])]}),t._v(" "),Object.keys(t.records).length<3?r("tr",{staticClass:"more"},[r("td",{attrs:{colspan:"2"}},[t.isLoggedIn?r("div",[r("nuxt-link",{attrs:{to:"/user/content"}},[t._v("Add more results")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():r("div",[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Log in")]),t._v(" to add more results\n              ")],1)])]):t._e()],2)])])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"pb-2",attrs:{colspan:"2"}},[this._v(" Personal Records ")])])])}],!1,null,"1ee9aa36",null);e.default=component.exports}}]);