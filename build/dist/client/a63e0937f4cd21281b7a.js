(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{620:function(t,e,n){var content=n(779);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("3b39fcfe",content,!0,{sourceMap:!1})},778:function(t,e,n){"use strict";var r=n(620);n.n(r).a},779:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".sidebar[data-v-a7a0ff0e]{border-right:1px solid #dadada;height:auto;overflow:auto;overflow-x:hidden;border-bottom:1px solid #dadada}.header[data-v-a7a0ff0e]{width:100%;padding-top:30px}.header a[data-v-a7a0ff0e]{color:#000;text-decoration:none}.header h1[data-v-a7a0ff0e],.header h2[data-v-a7a0ff0e]{font-weight:400;text-align:center;width:100%}.header h1[data-v-a7a0ff0e]{font-size:30px}.header h1 .logo[data-v-a7a0ff0e]{width:35px}.header h2[data-v-a7a0ff0e]{font-size:14px}.header form[data-v-a7a0ff0e]{margin:0 auto;width:75%}.header form input[data-v-a7a0ff0e]{font-size:14px}.nav[data-v-a7a0ff0e]{margin:0 auto}.nav[data-v-a7a0ff0e],.nav .link[data-v-a7a0ff0e]{text-align:center}.nav .link[data-v-a7a0ff0e]{color:#468df5;font-size:17px;padding:0 13px;display:inline-block}.actions[data-v-a7a0ff0e]{text-align:center}.actions .btn[data-v-a7a0ff0e]{text-transform:uppercase;font-size:13px;padding:3px 6px}.races[data-v-a7a0ff0e]{width:80%;margin:20px auto 0}.races .votes[data-v-a7a0ff0e]{text-align:center}.races h3[data-v-a7a0ff0e]{font-size:12px;font-weight:500;text-transform:uppercase;text-align:left}.races h4[data-v-a7a0ff0e]{font-size:17px;font-weight:400;line-height:25px}.races h4 a[data-v-a7a0ff0e]{color:#468df5}.races .metadata[data-v-a7a0ff0e]{font-size:13px;text-transform:uppercase}.races .subtitle[data-v-a7a0ff0e]{font-size:13px}.races .more[data-v-a7a0ff0e]{font-size:12px;text-transform:uppercase;text-decoration:underline;color:#468df5;text-align:right}.profile[data-v-a7a0ff0e]{max-width:100%}.user h3[data-v-a7a0ff0e]{font-size:18px;font-weight:400;text-align:left}.user h4[data-v-a7a0ff0e]{font-size:14px}.user .profile-pic[data-v-a7a0ff0e]{width:50px;height:50px;margin:0 auto;border-radius:7px;overflow:hidden}.links[data-v-a7a0ff0e]{text-align:center}@media (min-width:768px){.links[data-v-a7a0ff0e]{text-align:left}}.links a[data-v-a7a0ff0e]{margin:0 10px;font-size:14px;color:#3976d0;cursor:pointer!important;text-transform:uppercase}.links .btn-default[data-v-a7a0ff0e]{color:#000}.site-links[data-v-a7a0ff0e]{text-align:center;width:100%}.site-links a[data-v-a7a0ff0e]{font-size:11px;margin:0 5px;color:grey;text-transform:uppercase;font-weight:500}.account-actions[data-v-a7a0ff0e]{text-align:center}@media (min-width:768px){.sidebar[data-v-a7a0ff0e]{border-bottom:none;height:100%;min-height:100%}}",""])},859:function(t,e,n){"use strict";n.r(e);n(20);var r=n(2),o={components:{UserWidget:function(){return n.e(15).then(n.bind(null,880))},SearchBar:function(){return n.e(3).then(n.bind(null,861))}},data:function(){return{searchText:""}},computed:{races:function(){return this.$store.state.races.recentRaces},user:function(){return this.$store.state.auth.user},isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{logOut:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch("auth/logout");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),search:function(t){t&&this.$router.push({path:"/search/"+encodeURI(this.searchText)})}}},d=(n(778),n(14)),component=Object(d.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"d-flex flex-column h-100"},[n("div",{staticClass:"header"},[n("h1",[n("nuxt-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo mb-2",attrs:{src:"/images/logo.svg"}}),t._v(" RaceBase \n        ")])],1),t._v(" "),n("SearchBar",{on:{search:t.search},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),n("div",{staticClass:"nav mb-3"},[n("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v(" About ")]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/roadmap"}},[t._v(" Roadmap ")]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/blog"}},[t._v(" Blog ")])],1),t._v(" "),t.isLoggedIn?n("div",{staticClass:"actions mt-4 mb-3"},[n("nuxt-link",{staticClass:"btn btn-default d-inline-block",attrs:{to:"/new/post"}},[t._v(" \n        New Post "),n("fa",{attrs:{icon:"pencil-alt"}})],1),t._v(" "),n("nuxt-link",{staticClass:"ml-2 btn btn-default d-inline-block",attrs:{to:"/new/result"}},[t._v("\n        Add Result "),n("fa",{attrs:{icon:"plus"}})],1)],1):t._e(),t._v(" "),n("div",{staticClass:"races mt-auto mb-3 d-none d-md-block"},[n("h3",{staticClass:"mb-3"},[t._v(" Recent Races ")]),t._v(" "),t._l(t.races,function(e){return n("div",{staticClass:"race row mb-2"},[n("div",{staticClass:"col-2 pr-0 votes"},[n("div",{staticClass:"mb-1"},[t._v(" "+t._s(e.upvotes)+" ")]),t._v(" "),n("div",[n("fa",{attrs:{icon:["far","thumbs-up"]}})],1)]),t._v(" "),n("div",{staticClass:"col-10 pr-0"},[n("h4",{staticClass:"mb-1"},[n("nuxt-link",{attrs:{to:"/races/"+e._id}},[t._v(" \n              "+t._s(e.name)+" \n            ")])],1),t._v(" "),n("div",{staticClass:"metadata"},[n("span",{staticClass:"date mr-2"},[n("fa",{staticClass:"mr-2",attrs:{icon:"calendar-alt"}}),t._v(t._s(e.date)+"\n            ")],1)])])])}),t._v(" "),n("nuxt-link",{staticClass:"more mt-3 w-100 d-block",attrs:{to:"/races/all"}},[t._v("\n        More Races\n      ")])],2),t._v(" "),t.isLoggedIn?n("div",{staticClass:"user mt-3 mt-md-auto mx-md-0 mx-auto"},[n("UserWidget",{attrs:{user:t.user},on:{logOut:t.logOut}})],1):t._e(),t._v(" "),t.isLoggedIn?t._e():n("div",{staticClass:"account-actions links mt-auto"},[n("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"/login"}},[t._v("Log In")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/signup"}},[t._v("Sign Up")])],1),t._v(" "),n("div",{staticClass:"site-links links mt-2 pl-0 pb-4"},[n("nuxt-link",{attrs:{to:"/developers"}},[t._v("For Developers")]),t._v(" "),n("nuxt-link",{attrs:{to:"/press"}},[t._v("For the Press")]),t._v(" "),n("nuxt-link",{attrs:{to:"/privacy"}},[t._v("Privacy")])],1)])])},[],!1,null,"a7a0ff0e",null);e.default=component.exports}}]);