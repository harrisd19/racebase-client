(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{871:function(t,e,r){"use strict";r.r(e);var n={props:["races","lastPage","currentPage"]},l=r(14),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.races?t._e():r("h3",{staticClass:"no-results"},[t._v(" No results! ")]),t._v(" "),r("div",{staticClass:"table-responsive w-90 mx-auto"},[r("table",{staticClass:"table table-striped mb-0"},[r("tbody",t._l(t.races,function(e){return r("tr",[r("td",{staticClass:"vote-data d-flex align-items-center"},[r("div",{staticClass:"votes"},[r("div",[r("b",[t._v(t._s(e.upvotes||0))])]),t._v(" "),r("fa",{attrs:{icon:["far","thumbs-up"]}})],1),t._v(" "),r("div",{staticClass:"votes"},[r("div",[r("b",[t._v(t._s(e.downvotes||0))])]),t._v(" "),r("fa",{attrs:{icon:["far","thumbs-down"]}})],1)]),t._v(" "),r("td",{staticClass:"race-data"},[r("router-link",{staticClass:"race-title",attrs:{to:"/races/"+e._id}},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"metadata"},[r("span",{staticClass:"mr-2"},[t._v("\n                "+t._s(e.date)+"\n              ")]),t._v(" "),r("span",{staticClass:"mr-2"},[t._v("\n                 "),r("fa",{staticClass:"divider",attrs:{icon:"map-marker-alt"}}),t._v("\n                "+t._s(e.location)+"\n              ")],1),t._v(" "),r("span",{},[r("fa",{attrs:{icon:"user"}}),t._v("\n                "+t._s(e.user)+"\n              ")],1)])],1),t._v(" "),r("td",{staticClass:"verified-data"})])}),0)])]),t._v(" "),r("div",{staticClass:"btn-group-wrap mt-3 w-90 mx-auto pb-5"},[r("div",{staticClass:"btn-group pager",attrs:{role:"pager","aria-label":"Pager"}},[t.currentPage>1?r("nuxt-link",{staticClass:"btn btn-default",attrs:{to:{params:{page:Number(t.currentPage)-1}}}},[t._v("\n        Prev\n      ")]):t._e(),t._v(" "),t.lastPage?t._e():r("nuxt-link",{staticClass:"btn btn-default",attrs:{to:{params:{page:Number(t.currentPage)+1}}}},[t._v("\n        Next\n      ")])],1)])])},[],!1,null,"5e701356",null);e.default=component.exports}}]);