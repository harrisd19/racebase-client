(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{416:function(t,e,n){"use strict";var r=n(4),o=n(24),c=n(27),l=n(129),j=n(57),m=n(15),d=n(58).f,f=n(84).f,v=n(16).f,h=n(417).trim,w=r.Number,_=w,y=w.prototype,k="Number"==c(n(83)(y)),x="trim"in String.prototype,z=function(t){var e=j(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=x?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(k?m(function(){y.valueOf.call(n)}):"Number"!=c(n))?l(new _(z(e)),n,w):z(e)};for(var N,D=n(11)?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;D.length>C;C++)o(_,N=D[C])&&!o(w,N)&&v(w,N,f(_,N));w.prototype=y,y.constructor=w,n(18)(r,"Number",w)}},417:function(t,e,n){var r=n(6),o=n(26),c=n(15),l=n(418),j="["+l+"]",m=RegExp("^"+j+j+"*"),d=RegExp(j+j+"*$"),f=function(t,e,n){var o={},j=c(function(){return!!l[t]()||"​"!="​"[t]()}),m=o[t]=j?e(v):l[t];n&&(o[n]=m),r(r.P+r.F*j,"String",o)},v=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(d,"")),t};t.exports=f},418:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},419:function(t,e,n){"use strict";n.r(e),n.d(e,"timeStringToDecimal",function(){return c}),n.d(e,"timeDecimalToString",function(){return l}),n.d(e,"formatDateUrl",function(){return j}),n.d(e,"getDateFromUrl",function(){return m}),n.d(e,"getPace",function(){return d});n(82);var r=n(288),o=n.n(r);function c(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function l(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var n=Math.floor(s/60);e+=n,s-=60*n}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function j(t){return t.format("MM-DD-YYYY")}function m(s){return s&&o()(s,"MM-DD-YYYY").isValid()?o()(s,"MM-DD-YYYY").toDate():new Date}function d(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return l((60*+a[0]+ +a[1])/t/60)}},420:function(t,e,n){var map={"./af":289,"./af.js":289,"./ar":290,"./ar-dz":291,"./ar-dz.js":291,"./ar-kw":292,"./ar-kw.js":292,"./ar-ly":293,"./ar-ly.js":293,"./ar-ma":294,"./ar-ma.js":294,"./ar-sa":295,"./ar-sa.js":295,"./ar-tn":296,"./ar-tn.js":296,"./ar.js":290,"./az":297,"./az.js":297,"./be":298,"./be.js":298,"./bg":299,"./bg.js":299,"./bm":300,"./bm.js":300,"./bn":301,"./bn.js":301,"./bo":302,"./bo.js":302,"./br":303,"./br.js":303,"./bs":304,"./bs.js":304,"./ca":305,"./ca.js":305,"./cs":306,"./cs.js":306,"./cv":307,"./cv.js":307,"./cy":308,"./cy.js":308,"./da":309,"./da.js":309,"./de":310,"./de-at":311,"./de-at.js":311,"./de-ch":312,"./de-ch.js":312,"./de.js":310,"./dv":313,"./dv.js":313,"./el":314,"./el.js":314,"./en-SG":315,"./en-SG.js":315,"./en-au":316,"./en-au.js":316,"./en-ca":317,"./en-ca.js":317,"./en-gb":318,"./en-gb.js":318,"./en-ie":319,"./en-ie.js":319,"./en-il":320,"./en-il.js":320,"./en-nz":321,"./en-nz.js":321,"./eo":322,"./eo.js":322,"./es":323,"./es-do":324,"./es-do.js":324,"./es-us":325,"./es-us.js":325,"./es.js":323,"./et":326,"./et.js":326,"./eu":327,"./eu.js":327,"./fa":328,"./fa.js":328,"./fi":329,"./fi.js":329,"./fo":330,"./fo.js":330,"./fr":331,"./fr-ca":332,"./fr-ca.js":332,"./fr-ch":333,"./fr-ch.js":333,"./fr.js":331,"./fy":334,"./fy.js":334,"./ga":335,"./ga.js":335,"./gd":336,"./gd.js":336,"./gl":337,"./gl.js":337,"./gom-latn":338,"./gom-latn.js":338,"./gu":339,"./gu.js":339,"./he":340,"./he.js":340,"./hi":341,"./hi.js":341,"./hr":342,"./hr.js":342,"./hu":343,"./hu.js":343,"./hy-am":344,"./hy-am.js":344,"./id":345,"./id.js":345,"./is":346,"./is.js":346,"./it":347,"./it-ch":348,"./it-ch.js":348,"./it.js":347,"./ja":349,"./ja.js":349,"./jv":350,"./jv.js":350,"./ka":351,"./ka.js":351,"./kk":352,"./kk.js":352,"./km":353,"./km.js":353,"./kn":354,"./kn.js":354,"./ko":355,"./ko.js":355,"./ku":356,"./ku.js":356,"./ky":357,"./ky.js":357,"./lb":358,"./lb.js":358,"./lo":359,"./lo.js":359,"./lt":360,"./lt.js":360,"./lv":361,"./lv.js":361,"./me":362,"./me.js":362,"./mi":363,"./mi.js":363,"./mk":364,"./mk.js":364,"./ml":365,"./ml.js":365,"./mn":366,"./mn.js":366,"./mr":367,"./mr.js":367,"./ms":368,"./ms-my":369,"./ms-my.js":369,"./ms.js":368,"./mt":370,"./mt.js":370,"./my":371,"./my.js":371,"./nb":372,"./nb.js":372,"./ne":373,"./ne.js":373,"./nl":374,"./nl-be":375,"./nl-be.js":375,"./nl.js":374,"./nn":376,"./nn.js":376,"./pa-in":377,"./pa-in.js":377,"./pl":378,"./pl.js":378,"./pt":379,"./pt-br":380,"./pt-br.js":380,"./pt.js":379,"./ro":381,"./ro.js":381,"./ru":382,"./ru.js":382,"./sd":383,"./sd.js":383,"./se":384,"./se.js":384,"./si":385,"./si.js":385,"./sk":386,"./sk.js":386,"./sl":387,"./sl.js":387,"./sq":388,"./sq.js":388,"./sr":389,"./sr-cyrl":390,"./sr-cyrl.js":390,"./sr.js":389,"./ss":391,"./ss.js":391,"./sv":392,"./sv.js":392,"./sw":393,"./sw.js":393,"./ta":394,"./ta.js":394,"./te":395,"./te.js":395,"./tet":396,"./tet.js":396,"./tg":397,"./tg.js":397,"./th":398,"./th.js":398,"./tl-ph":399,"./tl-ph.js":399,"./tlh":400,"./tlh.js":400,"./tr":401,"./tr.js":401,"./tzl":402,"./tzl.js":402,"./tzm":403,"./tzm-latn":404,"./tzm-latn.js":404,"./tzm.js":403,"./ug-cn":405,"./ug-cn.js":405,"./uk":406,"./uk.js":406,"./ur":407,"./ur.js":407,"./uz":408,"./uz-latn":409,"./uz-latn.js":409,"./uz.js":408,"./vi":410,"./vi.js":410,"./x-pseudo":411,"./x-pseudo.js":411,"./yo":412,"./yo.js":412,"./zh-cn":413,"./zh-cn.js":413,"./zh-hk":414,"./zh-hk.js":414,"./zh-tw":415,"./zh-tw.js":415};function r(t){var e=o(t);return n(e)}function o(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=420},459:function(t,e,n){var content=n(567);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("54c200da",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";var r=n(459);n.n(r).a},567:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"thead th[data-v-32b23eb9]{border-top:none;font-weight:500;padding:0 10px}td[data-v-32b23eb9],thead th[data-v-32b23eb9]{text-align:center}.slider[data-v-32b23eb9]{display:block;width:100%;margin:0 auto;background:#ebebeb;border-radius:20px;height:7px}.slider[data-v-32b23eb9]::-moz-range-thumb,.slider[data-v-32b23eb9]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;border-radius:100px;background:#468df5;border:none;cursor:pointer}.pr[data-v-32b23eb9]{font-size:18px;text-transform:uppercase;text-align:center;font-weight:500}.pace[data-v-32b23eb9]{color:#468df5;font-size:28px;margin-left:3px;font-family:DS Digital}.output[data-v-32b23eb9]{margin:0 auto;width:95%;padding:20px;border-radius:5px;border:1px solid #dadada}.zone[data-v-32b23eb9]{text-transform:uppercase;font-weight:500;font-size:23px}.unit[data-v-32b23eb9]{text-transform:none;font-size:16px;font-weight:400}",""])},736:function(t,e,n){"use strict";n.r(e);n(416),n(42),n(33),n(34),n(23);var r=n(419);var o={data:function(){return{zones:[{name:"Anaerobic",range:[0,2.7]},{name:"V02",range:[2.7,5]},{name:"CV",range:[5,8.4]},{name:"LT",range:[8.4,14]},{name:"AT",range:[14,43]},{name:"Aerobic",range:[43,95]},{name:"Recovery",range:[95,null]}],input:{time:"",distance:0},scaleVal:0}},methods:{slowDown:function(t){return(1+t/160)*(e=30.5,n=this.k*t+1,Math.log(n)/Math.log(e));var e,n},calculatePace:function(t){return Object(r.timeDecimalToString)(this.paceLimit+this.slowDown(t))},calculatePaceDecimal:function(t){return this.paceLimit+this.slowDown(t)},getZone:function(t){var e=!0,n=!1,r=void 0;try{for(var o,c=this.zones[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value,j=l.range[0],m=l.range[1];if(t>=j&&t<m)return l.name}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}return"Recovery"}},computed:{timeDecimal:function(){return Object(r.timeStringToDecimal)(this.input.time)},pace:function(){return Object(r.getPace)(this.input.time,this.input.distance)},paceDecimal:function(){return Object(r.timeStringToDecimal)(this.pace)},k:function(){var t=Number(this.input.distance),e=this.paceLimit,p=this.paceDecimal;return(Math.pow(30.5,(p-e)/(t/160+1))-1)/t},paceLimit:function(){var t=Math.pow(1.46,this.paceDecimal);return t/(Number(this.input.distance)+t/(this.paceDecimal-2.57))+2.57},curDist:function(){return Math.pow(this.scaleVal,1.83)}}},c=(n(566),n(14)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-95 mt-4"},[n("h1",[t._v(" Pace Zone Calculator "),n("fa",{attrs:{icon:"calculator"}})],1),t._v(" "),n("p",[t._v(" Enter your PR for any distance below: ")]),t._v(" "),n("div",{staticClass:"container my-4"},[n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.time,expression:"input.time"}],staticClass:"col mr-3 form-control",attrs:{type:"text",placeholder:"Finishing Time"},domProps:{value:t.input.time},on:{input:function(e){e.target.composing||t.$set(t.input,"time",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.distance,expression:"input.distance"}],staticClass:"col form-control",attrs:{type:"number",placeholder:"Distance"},domProps:{value:t.input.distance},on:{input:function(e){e.target.composing||t.$set(t.input,"distance",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"pr mb-3"},[t._v(" PR Pace: "),n("span",{staticClass:"pace"},[t._v(t._s(t.pace))]),t._v(" "),n("span",{staticClass:"unit"},[t._v(" min / mi ")])]),t._v(" "),n("div",{staticClass:"output"},[n("table",{staticClass:"table"},[n("thead",[n("tr",t._l(t.zones,function(e){return n("th",[t._v(" \n            "+t._s(e.name)+"\n          ")])}),0)]),t._v(" "),n("tbody",[n("tr",t._l(t.zones,function(e,r){return n("td",[t._v("\n            "+t._s(t.calculatePace(e.range[0]))+" - "+t._s(e.range[1]?t.calculatePace(e.range[1]):"INF")+"\n          ")])}),0)])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("div",[n("span",{staticClass:"pace"},[t._v(" "+t._s(t.calculatePace(t.curDist))+" ")]),t._v(" min / mi ")]),t._v(" "),n("div",{staticClass:"zone ml-auto"},[t._v(" "+t._s(t.getZone(t.curDist))+" ")])]),t._v(" "),n("div",{staticClass:"slider mt-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.scaleVal,expression:"scaleVal"}],staticClass:"slider mb-2",attrs:{type:"range",min:0,max:13,step:.2},domProps:{value:t.scaleVal},on:{__r:function(e){t.scaleVal=e.target.value}}})])])])},[],!1,null,"32b23eb9",null);e.default=component.exports}}]);