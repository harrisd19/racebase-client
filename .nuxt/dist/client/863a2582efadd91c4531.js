(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{407:function(t,e,n){var o=n(534);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(11).default)("b8647304",o,!0,{})},533:function(t,e,n){"use strict";var o=n(407);n.n(o).a},534:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".vote-logged-out .btn[data-v-1d3bf47f]{border:1px solid #dadada!important;box-shadow:none!important}",""])},544:function(t,e,n){"use strict";n.r(e);n(20);var o=n(1),a=n.n(o),s={components:{GenderPicker:function(){return n.e(5).then(n.bind(null,570))}},props:["eventList","gender","race","voteData"],computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]},voted:function(){return this.upvoted||this.downvoted}},data:function(){return{upvoted:!1,downvoted:!1}},created:function(){this.voteData.vote&&(this.upvoted=this.voteData.vote.up,this.downvoted=!this.voteData.vote.up)},methods:{vote:function(){var t=a()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isLoggedIn){t.next=2;break}return t.abrupt("return");case 2:return this.upvoted=e,this.downvoted=!e,n=e?"upvote/":"downvote/",t.next=7,this.$axios.$post("race/"+n+this.race._id);case 7:this.$emit("loadRace");case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},r=(n(533),n(17)),i=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"race-info mt-3"},[t.isLoggedIn?n("a",{staticClass:"btn btn-default",on:{click:function(e){t.$emit("openAddWindow")}}},[t._v("\n      Add Result  \n      "),n("fa",{attrs:{icon:"pencil-alt"}})],1):t._e(),t._v(" "),t.isLoggedIn&&t.race.user_id==t.$store.state.auth.user._id?n("a",{staticClass:"btn btn-default",on:{click:function(e){t.$emit("editRace")}}},[t._v("\n      Edit  \n      "),n("fa",{attrs:{icon:"pencil-alt"}})],1):t._e(),t._v(" "),t.isLoggedIn?n("div",{staticClass:"btn-group vote",attrs:{role:"group"}},[n("button",{staticClass:"btn",class:{"btn-primary":t.upvoted&&t.voted,"btn-default":!t.upvoted||!t.voted},attrs:{type:"button"},on:{click:function(e){t.vote(!0)}}},[t._v("\n      "+t._s(t.race.upvotes||0)+"\n      "),n("fa",{attrs:{icon:["far","thumbs-up"]}})],1),t._v(" "),n("button",{staticClass:"btn",class:{"btn-primary":t.downvoted&&t.voted,"btn-default":!t.downvoted||!t.voted},attrs:{type:"button"},on:{click:function(e){t.vote(!1)}}},[t._v("\n      "+t._s(t.race.downvotes||0)+"\n      "),n("fa",{attrs:{icon:["far","thumbs-down"]}})],1)]):t._e(),t._v(" "),t.isLoggedIn?t._e():n("div",{staticClass:"btn-group vote-logged-out",attrs:{role:"group"}},[n("div",{staticClass:"no-hover btn btn-default"},[t._v(" \n      "+t._s(t.race.upvotes||0)+"\n      "),n("fa",{attrs:{icon:["far","thumbs-up"]}})],1),t._v(" "),n("div",{staticClass:"no-hover btn btn-default"},[t._v(" \n      "+t._s(t.race.downvotes||0)+"\n      "),n("fa",{attrs:{icon:["far","thumbs-down"]}})],1)]),t._v(" "),n("gender-picker",{attrs:{race_id:t.race._id,gender:t.gender}}),t._v(" "),t.eventList.length>0?n("div",{staticClass:"btn-group dropdown-btn-group dropdown"},[t._m(0),t._v(" "),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{role:"menu"}},t._l(t.eventList,function(e,o){return n("span",[n("nuxt-link",{staticClass:"dropdown-item",attrs:{to:{name:"races-id-gender-event",params:{id:t.race._id,gender:t.gender,event:o}}}},[t._v("\n          "+t._s(e)+"\n        ")])],1)}),0)]):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n      Events "),e("span",{staticClass:"caret"})])}],!1,null,"1d3bf47f",null);i.options.__file="RaceActions.vue";e.default=i.exports}}]);