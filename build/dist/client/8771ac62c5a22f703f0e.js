(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{724:function(t,e,r){"use strict";r.r(e);r(19);var n=r(1),l={components:{NewPost:function(){return Promise.all([r.e(0),r.e(53)]).then(r.bind(null,705))}},middleware:"auth",asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,l,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,l=e.$axios,o=r.state.auth.user,t.next=4,l.$get("/result/"+n.resultId);case 4:return c=(c=t.sent).athlete?c:null,t.abrupt("return",{user:o,result:c,alert:""});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{createdPost:function(){this.alert="Successfully created post!"}}},o=r(18),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 mx-auto w-95"},[r("NewPost",{attrs:{user:t.user,result:t.result},on:{callback:function(e){return t.createdPost()}}}),t._v(" "),t.alert?r("div",{staticClass:"mt-3 alert alert-primary alert-dismissable"},[t._v("\n    "+t._s(t.alert)+"\n\n    "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[r("fa",{attrs:{icon:"times"}})],1)])]):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);