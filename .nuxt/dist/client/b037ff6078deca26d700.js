(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{216:function(e,t,n){"use strict";var r=n(3),s=n(20),i=n(25),a=n(111),o=n(55),c=n(13),u=n(56).f,d=n(76).f,l=n(12).f,h=n(217).trim,g=r.Number,f=g,p=g.prototype,R="Number"==i(n(75)(p)),m="trim"in String.prototype,v=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var n,r,s,i=(t=m?t.trim():h(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+t}for(var a,c=t.slice(2),u=0,d=c.length;u<d;u++)if((a=c.charCodeAt(u))<48||a>s)return NaN;return parseInt(c,r)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(R?c(function(){p.valueOf.call(n)}):"Number"!=i(n))?a(new f(v(t)),n,g):v(t)};for(var w,x=n(7)?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)s(f,w=x[N])&&!s(g,w)&&l(g,w,d(f,w));g.prototype=p,p.constructor=g,n(14)(r,"Number",g)}},217:function(e,t,n){var r=n(5),s=n(24),i=n(13),a=n(218),o="["+a+"]",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,n){var s={},o=i(function(){return!!a[e]()||"​"!="​"[e]()}),c=s[e]=o?t(l):a[e];n&&(s[n]=c),r(r.P+r.F*o,"String",s)},l=d.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},218:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},400:function(e,t,n){"use strict";n.r(t);n(216),n(23);var r=n(1),s=n.n(r),i=(n(32),{components:{RaceHeader:function(){return n.e(33).then(n.bind(null,407))},RaceActions:function(){return n.e(32).then(n.bind(null,408))},ResultEditor:function(){return n.e(34).then(n.bind(null,409))},RaceEditor:function(){return n.e(2).then(n.bind(null,392))},ResultsTable:function(){return n.e(35).then(n.bind(null,410))}},head:function(){return{title:this.currentRace.name+" - RaceBase",meta:[{hid:"OpenGraph title",property:"og:title",content:this.currentRace.name},{hid:"OpenGraph image",property:"og:image",content:void 0+"/images/opengraph/results.png"},{hid:"OpenGraph description",property:"og:description",content:this.currentRace.date+" at "+this.currentRace.location}]}},computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},asyncData:function(){var e=s()(regeneratorRuntime.mark(function e(t){var n,r,s,i,a,o,c,u,d,l,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,s=t.redirect,i=t.store,e.next=3,n.$get("race/"+r.id);case 3:if(a=e.sent,o={},c=r.gender||"mens",a.message){e.next=12;break}return e.next=9,n.$get("race/"+a._id+"/"+c+"/events");case 9:o=e.sent,e.next=13;break;case 12:s("/races/notfound");case 13:if(u=(u=Number(r.event)||0)<o.length?u:0,!i.getters["auth/isLoggedIn"]){e.next=21;break}return e.next=18,n.$get("race/vote/"+r.id).catch(function(e){console.log(e)});case 18:d=e.sent,e.next=22;break;case 21:d={};case 22:return e.next=24,n.$get("result/list/"+a._id+"/"+c+"/"+encodeURI(o[u])).catch(function(){s("/races/notfound")});case 24:return l=e.sent,e.next=27,n.$get("result/teamlist/"+a._id+"/"+c+"/"+encodeURI(o[u])).catch(function(){s("/races/notfound")});case 27:return h=e.sent,e.abrupt("return",{currentRace:a,eventList:o,eventNum:u,results:l,teamResults:h,gender:c,voteData:d});case 29:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),data:function(){return{message:"",editMode:!1,addMode:!1,editingRace:!1,currentResult:{}}},methods:{loadResults:function(){var e=s()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get("race/"+this.currentRace._id+"/"+this.gender+"/events").catch(function(){console.log("Something went wrong getting the events list.")});case 2:return this.eventList=e.sent,e.next=5,this.$axios.$get("result/list/"+this.currentRace._id+"/"+this.gender+"/"+encodeURI(this.eventList[this.eventNum])).catch(function(){console.log("Something went wrong.")});case 5:return this.results=e.sent,e.next=8,this.$axios.$get("result/teamlist/"+this.currentRace._id+"/"+this.gender+"/"+encodeURI(this.eventList[this.eventNum])).catch(function(){console.log("Something went wrong.")});case 8:this.teamResults=e.sent;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),loadRace:function(){var e=s()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.$axios.$get("race/"+this.currentRace._id);case 3:this.currentRace=e.sent,t&&this.loadResults();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),closeWindow:function(){this.addMode=!1,this.editMode=!1,this.editingRace=!1,this.currentResult={}},openAddWindow:function(){this.addMode=!0,this.editMode=!1,this.editingRace=!1},openEditWindow:function(e){this.addMode=!1,this.editMode=!0,this.currentResult=e},editRace:function(){this.addMode=!1,this.editMode=!1,this.addingRace=!1,this.editingRace=!0}},watch:{$route:function(){this.gender=this.$route.params.gender||this.gender,this.eventNum=this.$route.params.event||0,this.updateResults()}}}),a=n(17),o=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[e.currentRace&&!e.message?n("RaceHeader",{attrs:{race:e.currentRace}}):e._e(),e._v(" "),e.message?e._e():n("RaceActions",{staticClass:"mb-3",attrs:{eventList:e.eventList,race:e.currentRace,gender:e.gender,voteData:e.voteData},on:{openAddWindow:e.openAddWindow,editRace:e.editRace,loadRace:e.loadRace}}),e._v(" "),n("ResultEditor",{attrs:{editMode:e.editMode,addMode:e.addMode,race:e.currentRace,currentResult:e.currentResult},on:{closeWindow:e.closeWindow,loadResults:e.loadResults}}),e._v(" "),n("RaceEditor",{attrs:{addingRace:!1,editingRace:e.editingRace,race:e.currentRace},on:{closeWindow:e.closeWindow,load:e.loadRace}}),e._v(" "),e.message?e._e():n("ResultsTable",{attrs:{eventList:e.eventList,eventNum:e.eventNum,results:e.results,teamResults:e.teamResults},on:{openEditWindow:e.openEditWindow}})],1)},[],!1,null,null,null);o.options.__file="_event.vue";t.default=o.exports}}]);