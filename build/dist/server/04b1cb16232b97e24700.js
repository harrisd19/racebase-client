exports.ids=[71],exports.modules={107:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("243aa448",content,!0,t)}},195:function(t,e,r){"use strict";r.r(e);var n=r(107),d=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e.default=d.a},196:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".sidebar[data-v-99aea68c]{border-right:1px solid #dadada;height:auto;overflow:auto;overflow-x:hidden;border-bottom:1px solid #dadada}.header[data-v-99aea68c]{width:100%;padding-top:30px}.header a[data-v-99aea68c]{color:#000;text-decoration:none}.header h1[data-v-99aea68c],.header h2[data-v-99aea68c]{font-weight:400;text-align:center;width:100%}.header h1[data-v-99aea68c]{font-size:30px}.header h1 .logo[data-v-99aea68c]{width:35px}.header h2[data-v-99aea68c]{font-size:14px}.header form[data-v-99aea68c]{margin:0 auto;width:75%}.header form input[data-v-99aea68c]{font-size:14px}.nav[data-v-99aea68c]{margin:0 auto}.nav[data-v-99aea68c],.nav .link[data-v-99aea68c]{text-align:center}.nav .link[data-v-99aea68c]{color:#468df5;font-size:17px;padding:0 13px;display:inline-block}.actions[data-v-99aea68c]{text-align:center}.actions .btn[data-v-99aea68c]{text-transform:uppercase;font-size:13px;padding:3px 6px}.races[data-v-99aea68c]{width:80%;margin:20px auto 0}.races .votes[data-v-99aea68c]{text-align:center}.races h3[data-v-99aea68c]{font-size:12px;font-weight:500;text-transform:uppercase;text-align:left}.races h4[data-v-99aea68c]{font-size:17px;font-weight:400;line-height:25px}.races h4 a[data-v-99aea68c]{color:#468df5}.races .metadata[data-v-99aea68c]{font-size:13px;text-transform:uppercase}.races .subtitle[data-v-99aea68c]{font-size:13px}.races .more[data-v-99aea68c]{font-size:12px;text-transform:uppercase;text-decoration:underline;color:#468df5;text-align:right}.profile[data-v-99aea68c]{max-width:100%}.links[data-v-99aea68c]{text-align:center}@media (min-width:768px){.links[data-v-99aea68c]{text-align:left}}.links a[data-v-99aea68c]{margin:0 10px;font-size:14px;color:#3976d0;cursor:pointer!important;text-transform:uppercase}.links .btn-default[data-v-99aea68c]{color:#000}.site-links[data-v-99aea68c]{text-align:center;width:100%}.site-links a[data-v-99aea68c]{font-size:11px;margin:0 5px;color:grey;text-transform:uppercase;font-weight:500}.account-actions[data-v-99aea68c]{text-align:center}@media (min-width:768px){.sidebar[data-v-99aea68c]{border-bottom:none;height:100%;min-height:100%}}",""])},282:function(t,e,r){"use strict";r.r(e);var n={components:{UserWidget:()=>r.e(12).then(r.bind(null,306)),SearchBar:()=>r.e(1).then(r.bind(null,285))},data:()=>({searchText:""}),computed:{races(){return this.$store.state.races.recentRaces},user(){return this.$store.state.auth.user},isLoggedIn(){return this.$store.getters["auth/isLoggedIn"]}},methods:{logOut:async function(){this.$store.dispatch("auth/logout")},search:function(t){t&&this.$router.push({path:"/search/"+encodeURI(this.searchText)})}}},d=r(1);var component=Object(d.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._ssrNode('<div class="d-flex flex-column h-100" data-v-99aea68c>',"</div>",[t._ssrNode('<div class="header" data-v-99aea68c>',"</div>",[t._ssrNode("<h1 data-v-99aea68c>","</h1>",[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo mb-2",attrs:{src:"/images/logo.svg"}}),t._v(" RaceBase \n        ")])],1),t._ssrNode(" "),r("SearchBar",{on:{search:t.search},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],2),t._ssrNode(" "),t._ssrNode('<div class="nav mb-3" data-v-99aea68c>',"</div>",[r("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v(" About ")]),t._ssrNode(" "),r("nuxt-link",{staticClass:"link",attrs:{to:"/roadmap"}},[t._v(" Roadmap ")]),t._ssrNode(" "),r("nuxt-link",{staticClass:"link",attrs:{to:"/api"}},[t._v(" API ")])],2),t._ssrNode(" "),t.isLoggedIn?t._ssrNode('<div class="actions mt-4 mb-3" data-v-99aea68c>',"</div>",[r("nuxt-link",{staticClass:"btn btn-default d-inline-block",attrs:{to:"/new/post"}},[t._v(" \n        New Post "),r("fa",{attrs:{icon:"pencil-alt"}})],1),t._ssrNode(" "),r("nuxt-link",{staticClass:"ml-2 btn btn-default d-inline-block",attrs:{to:"/new/result"}},[t._v("\n        Add Result "),r("fa",{attrs:{icon:"plus"}})],1)],2):t._e(),t._ssrNode(" "),t._ssrNode('<div class="races mt-auto mb-3 d-none d-md-block" data-v-99aea68c>',"</div>",[t._ssrNode('<h3 class="mb-3" data-v-99aea68c> Recent Races </h3> '),t._l(t.races,function(e){return t._ssrNode('<div class="race row mb-2" data-v-99aea68c>',"</div>",[t._ssrNode('<div class="col-2 pr-0 votes" data-v-99aea68c>',"</div>",[t._ssrNode('<div class="mb-1" data-v-99aea68c>'+t._ssrEscape(" "+t._s(e.upvotes)+" ")+"</div> "),t._ssrNode("<div data-v-99aea68c>","</div>",[r("fa",{attrs:{icon:["far","thumbs-up"]}})],1)],2),t._ssrNode(" "),t._ssrNode('<div class="col-10 pr-0" data-v-99aea68c>',"</div>",[t._ssrNode('<h4 class="mb-1" data-v-99aea68c>',"</h4>",[r("nuxt-link",{attrs:{to:"/races/"+e._id}},[t._v(" \n              "+t._s(e.name)+" \n            ")])],1),t._ssrNode(" "),t._ssrNode('<div class="metadata" data-v-99aea68c>',"</div>",[t._ssrNode('<span class="date mr-2" data-v-99aea68c>',"</span>",[r("fa",{staticClass:"mr-2",attrs:{icon:"calendar-alt"}}),t._ssrNode(t._ssrEscape(t._s(e.date)+"\n            "))],2)])],2)],2)}),t._ssrNode(" "),r("nuxt-link",{staticClass:"more mt-3 w-100 d-block",attrs:{to:"/races/all"}},[t._v("\n        More Races\n      ")])],2),t._ssrNode(" "),t.isLoggedIn?t._ssrNode('<div class="user mt-3 mt-md-auto mx-md-0 mx-auto" data-v-99aea68c>',"</div>",[r("UserWidget",{attrs:{user:t.user},on:{logOut:t.logOut}})],1):t._e(),t._ssrNode(" "),t.isLoggedIn?t._e():t._ssrNode('<div class="account-actions links mt-auto" data-v-99aea68c>',"</div>",[r("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"/login"}},[t._v("Log In")]),t._ssrNode(" "),r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/signup"}},[t._v("Sign Up")])],2),t._ssrNode(" "),t._ssrNode('<div class="site-links links mt-2 pl-0 pb-4" data-v-99aea68c>',"</div>",[r("nuxt-link",{attrs:{to:"/developers"}},[t._v("For Developers")]),t._ssrNode(" "),r("nuxt-link",{attrs:{to:"/press"}},[t._v("For the Press")]),t._ssrNode(" "),r("nuxt-link",{attrs:{to:"/privacy"}},[t._v("Privacy")])],2)],2)])},[],!1,function(t){var e=r(195);e.__inject__&&e.__inject__(t)},"99aea68c","536248f6");e.default=component.exports}};
//# sourceMappingURL=04b1cb16232b97e24700.js.map