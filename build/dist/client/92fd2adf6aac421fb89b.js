(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{729:function(t,e,n){"use strict";n.r(e);n(22);var r=n(2),c={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,e.redirect,r=e.params,t.prev=1,t.next=4,n.$post("team/join/"+r.joincode);case 4:c=t.sent,o="Joined team"==c?"Successfully joined team":"Something went wrong",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o=t.t0.response.data;case 11:return t.abrupt("return",{message:o});case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},o=n(14),component=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-3 ml-4"},[e("h2",[this._v(" "+this._s(this.message)+"! ")]),this._v(" "),e("div",[this._v("Click "),e("nuxt-link",{attrs:{to:"/login"}},[this._v("here")]),this._v(" to log in")],1)])},[],!1,null,null,null);e.default=component.exports}}]);