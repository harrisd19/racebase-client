(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{420:function(t,e,n){var map={"./af":291,"./af.js":291,"./ar":292,"./ar-dz":293,"./ar-dz.js":293,"./ar-kw":294,"./ar-kw.js":294,"./ar-ly":295,"./ar-ly.js":295,"./ar-ma":296,"./ar-ma.js":296,"./ar-sa":297,"./ar-sa.js":297,"./ar-tn":298,"./ar-tn.js":298,"./ar.js":292,"./az":299,"./az.js":299,"./be":300,"./be.js":300,"./bg":301,"./bg.js":301,"./bm":302,"./bm.js":302,"./bn":303,"./bn.js":303,"./bo":304,"./bo.js":304,"./br":305,"./br.js":305,"./bs":306,"./bs.js":306,"./ca":307,"./ca.js":307,"./cs":308,"./cs.js":308,"./cv":309,"./cv.js":309,"./cy":310,"./cy.js":310,"./da":311,"./da.js":311,"./de":312,"./de-at":313,"./de-at.js":313,"./de-ch":314,"./de-ch.js":314,"./de.js":312,"./dv":315,"./dv.js":315,"./el":316,"./el.js":316,"./en-SG":317,"./en-SG.js":317,"./en-au":318,"./en-au.js":318,"./en-ca":319,"./en-ca.js":319,"./en-gb":320,"./en-gb.js":320,"./en-ie":321,"./en-ie.js":321,"./en-il":322,"./en-il.js":322,"./en-nz":323,"./en-nz.js":323,"./eo":324,"./eo.js":324,"./es":325,"./es-do":326,"./es-do.js":326,"./es-us":327,"./es-us.js":327,"./es.js":325,"./et":328,"./et.js":328,"./eu":329,"./eu.js":329,"./fa":330,"./fa.js":330,"./fi":331,"./fi.js":331,"./fo":332,"./fo.js":332,"./fr":333,"./fr-ca":334,"./fr-ca.js":334,"./fr-ch":335,"./fr-ch.js":335,"./fr.js":333,"./fy":336,"./fy.js":336,"./ga":337,"./ga.js":337,"./gd":338,"./gd.js":338,"./gl":339,"./gl.js":339,"./gom-latn":340,"./gom-latn.js":340,"./gu":341,"./gu.js":341,"./he":342,"./he.js":342,"./hi":343,"./hi.js":343,"./hr":344,"./hr.js":344,"./hu":345,"./hu.js":345,"./hy-am":346,"./hy-am.js":346,"./id":347,"./id.js":347,"./is":348,"./is.js":348,"./it":349,"./it-ch":350,"./it-ch.js":350,"./it.js":349,"./ja":351,"./ja.js":351,"./jv":352,"./jv.js":352,"./ka":353,"./ka.js":353,"./kk":354,"./kk.js":354,"./km":355,"./km.js":355,"./kn":356,"./kn.js":356,"./ko":357,"./ko.js":357,"./ku":358,"./ku.js":358,"./ky":359,"./ky.js":359,"./lb":360,"./lb.js":360,"./lo":361,"./lo.js":361,"./lt":362,"./lt.js":362,"./lv":363,"./lv.js":363,"./me":364,"./me.js":364,"./mi":365,"./mi.js":365,"./mk":366,"./mk.js":366,"./ml":367,"./ml.js":367,"./mn":368,"./mn.js":368,"./mr":369,"./mr.js":369,"./ms":370,"./ms-my":371,"./ms-my.js":371,"./ms.js":370,"./mt":372,"./mt.js":372,"./my":373,"./my.js":373,"./nb":374,"./nb.js":374,"./ne":375,"./ne.js":375,"./nl":376,"./nl-be":377,"./nl-be.js":377,"./nl.js":376,"./nn":378,"./nn.js":378,"./pa-in":379,"./pa-in.js":379,"./pl":380,"./pl.js":380,"./pt":381,"./pt-br":382,"./pt-br.js":382,"./pt.js":381,"./ro":383,"./ro.js":383,"./ru":384,"./ru.js":384,"./sd":385,"./sd.js":385,"./se":386,"./se.js":386,"./si":387,"./si.js":387,"./sk":388,"./sk.js":388,"./sl":389,"./sl.js":389,"./sq":390,"./sq.js":390,"./sr":391,"./sr-cyrl":392,"./sr-cyrl.js":392,"./sr.js":391,"./ss":393,"./ss.js":393,"./sv":394,"./sv.js":394,"./sw":395,"./sw.js":395,"./ta":396,"./ta.js":396,"./te":397,"./te.js":397,"./tet":398,"./tet.js":398,"./tg":399,"./tg.js":399,"./th":400,"./th.js":400,"./tl-ph":401,"./tl-ph.js":401,"./tlh":402,"./tlh.js":402,"./tr":403,"./tr.js":403,"./tzl":404,"./tzl.js":404,"./tzm":405,"./tzm-latn":406,"./tzm-latn.js":406,"./tzm.js":405,"./ug-cn":407,"./ug-cn.js":407,"./uk":408,"./uk.js":408,"./ur":409,"./ur.js":409,"./uz":410,"./uz-latn":411,"./uz-latn.js":411,"./uz.js":410,"./vi":412,"./vi.js":412,"./x-pseudo":413,"./x-pseudo.js":413,"./yo":414,"./yo.js":414,"./zh-cn":415,"./zh-cn.js":415,"./zh-hk":416,"./zh-hk.js":416,"./zh-tw":417,"./zh-tw.js":417};function r(t){var e=o(t);return n(e)}function o(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=420},423:function(t,e,n){"use strict";n.r(e),n.d(e,"timeStringToDecimal",function(){return l}),n.d(e,"timeDecimalToString",function(){return c}),n.d(e,"formatDateUrl",function(){return d}),n.d(e,"getDateFromUrl",function(){return v}),n.d(e,"getPace",function(){return m});n(82);var r=n(289),o=n.n(r);function l(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function c(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var n=Math.floor(s/60);e+=n,s-=60*n}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function d(t){return t.format("MM-DD-YYYY")}function v(s){return s&&o()(s,"MM-DD-YYYY").isValid()?o()(s,"MM-DD-YYYY").toDate():new Date}function m(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return c((60*+a[0]+ +a[1])/t/60)}},594:function(t,e,n){var content=n(705);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("5ed69ad4",content,!0,{sourceMap:!1})},641:function(t,e,n){var map={"./af":441,"./af.js":441,"./ar":442,"./ar-dz":443,"./ar-dz.js":443,"./ar-kw":444,"./ar-kw.js":444,"./ar-ly":445,"./ar-ly.js":445,"./ar-ma":446,"./ar-ma.js":446,"./ar-sa":447,"./ar-sa.js":447,"./ar-tn":448,"./ar-tn.js":448,"./ar.js":442,"./az":449,"./az.js":449,"./be":450,"./be.js":450,"./bg":451,"./bg.js":451,"./bm":452,"./bm.js":452,"./bn":453,"./bn.js":453,"./bo":454,"./bo.js":454,"./br":455,"./br.js":455,"./bs":456,"./bs.js":456,"./ca":457,"./ca.js":457,"./cs":458,"./cs.js":458,"./cv":459,"./cv.js":459,"./cy":460,"./cy.js":460,"./da":461,"./da.js":461,"./de":462,"./de-at":463,"./de-at.js":463,"./de-ch":464,"./de-ch.js":464,"./de.js":462,"./dv":465,"./dv.js":465,"./el":466,"./el.js":466,"./en-SG":467,"./en-SG.js":467,"./en-au":468,"./en-au.js":468,"./en-ca":469,"./en-ca.js":469,"./en-gb":470,"./en-gb.js":470,"./en-ie":471,"./en-ie.js":471,"./en-il":472,"./en-il.js":472,"./en-nz":473,"./en-nz.js":473,"./eo":474,"./eo.js":474,"./es":475,"./es-do":476,"./es-do.js":476,"./es-us":477,"./es-us.js":477,"./es.js":475,"./et":478,"./et.js":478,"./eu":479,"./eu.js":479,"./fa":480,"./fa.js":480,"./fi":481,"./fi.js":481,"./fo":482,"./fo.js":482,"./fr":483,"./fr-ca":484,"./fr-ca.js":484,"./fr-ch":485,"./fr-ch.js":485,"./fr.js":483,"./fy":486,"./fy.js":486,"./ga":487,"./ga.js":487,"./gd":488,"./gd.js":488,"./gl":489,"./gl.js":489,"./gom-latn":490,"./gom-latn.js":490,"./gu":491,"./gu.js":491,"./he":492,"./he.js":492,"./hi":493,"./hi.js":493,"./hr":494,"./hr.js":494,"./hu":495,"./hu.js":495,"./hy-am":496,"./hy-am.js":496,"./id":497,"./id.js":497,"./is":498,"./is.js":498,"./it":499,"./it-ch":500,"./it-ch.js":500,"./it.js":499,"./ja":501,"./ja.js":501,"./jv":502,"./jv.js":502,"./ka":503,"./ka.js":503,"./kk":504,"./kk.js":504,"./km":505,"./km.js":505,"./kn":506,"./kn.js":506,"./ko":507,"./ko.js":507,"./ku":508,"./ku.js":508,"./ky":509,"./ky.js":509,"./lb":510,"./lb.js":510,"./lo":511,"./lo.js":511,"./lt":512,"./lt.js":512,"./lv":513,"./lv.js":513,"./me":514,"./me.js":514,"./mi":515,"./mi.js":515,"./mk":516,"./mk.js":516,"./ml":517,"./ml.js":517,"./mn":518,"./mn.js":518,"./mr":519,"./mr.js":519,"./ms":520,"./ms-my":521,"./ms-my.js":521,"./ms.js":520,"./mt":522,"./mt.js":522,"./my":523,"./my.js":523,"./nb":524,"./nb.js":524,"./ne":525,"./ne.js":525,"./nl":526,"./nl-be":527,"./nl-be.js":527,"./nl.js":526,"./nn":528,"./nn.js":528,"./pa-in":529,"./pa-in.js":529,"./pl":530,"./pl.js":530,"./pt":531,"./pt-br":532,"./pt-br.js":532,"./pt.js":531,"./ro":533,"./ro.js":533,"./ru":534,"./ru.js":534,"./sd":535,"./sd.js":535,"./se":536,"./se.js":536,"./si":537,"./si.js":537,"./sk":538,"./sk.js":538,"./sl":539,"./sl.js":539,"./sq":540,"./sq.js":540,"./sr":541,"./sr-cyrl":542,"./sr-cyrl.js":542,"./sr.js":541,"./ss":543,"./ss.js":543,"./sv":544,"./sv.js":544,"./sw":545,"./sw.js":545,"./ta":546,"./ta.js":546,"./te":547,"./te.js":547,"./tet":548,"./tet.js":548,"./tg":549,"./tg.js":549,"./th":550,"./th.js":550,"./tl-ph":551,"./tl-ph.js":551,"./tlh":552,"./tlh.js":552,"./tr":553,"./tr.js":553,"./tzl":554,"./tzl.js":554,"./tzm":555,"./tzm-latn":556,"./tzm-latn.js":556,"./tzm.js":555,"./ug-cn":557,"./ug-cn.js":557,"./uk":558,"./uk.js":558,"./ur":559,"./ur.js":559,"./uz":560,"./uz-latn":561,"./uz-latn.js":561,"./uz.js":560,"./vi":562,"./vi.js":562,"./x-pseudo":563,"./x-pseudo.js":563,"./yo":564,"./yo.js":564,"./zh-cn":565,"./zh-cn.js":565,"./zh-hk":566,"./zh-hk.js":566,"./zh-tw":567,"./zh-tw.js":567};function r(t){var e=o(t);return n(e)}function o(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=641},703:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?l((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function r(t,source,e){return t.concat(source).map(function(element){return n(element,e)})}function o(t,source,e){var r={};return e.isMergeableObject(t)&&Object.keys(t).forEach(function(o){r[o]=n(t[o],e)}),Object.keys(source).forEach(function(o){e.isMergeableObject(source[o])&&t[o]?r[o]=function(t,e){if(!e.customMerge)return l;var n=e.customMerge(t);return"function"==typeof n?n:l}(o,e)(t[o],source[o],e):r[o]=n(source[o],e)}),r}function l(e,source,l){(l=l||{}).arrayMerge=l.arrayMerge||r,l.isMergeableObject=l.isMergeableObject||t;var c=Array.isArray(source),d=Array.isArray(e),v=c===d;return v?c?l.arrayMerge(e,source,l):o(e,source,l):n(source,l)}return l.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return l(t,n,e)},{})},l}()},704:function(t,e,n){"use strict";var r=n(594);n.n(r).a},705:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"input[type=number][data-v-8ec22166]::-webkit-inner-spin-button,input[type=number][data-v-8ec22166]::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0}input[type=number][data-v-8ec22166]{-moz-appearance:textfield!important}h1[data-v-8ec22166]{font-size:32px;font-weight:500}h2[data-v-8ec22166]{font-size:26px}h2[data-v-8ec22166],h2.name[data-v-8ec22166]{font-weight:400}h2.name[data-v-8ec22166]{font-size:20px;color:#468df5}h3[data-v-8ec22166]{font-size:18px;color:#000;font-weight:500;text-transform:uppercase;text-align:left}h4[data-v-8ec22166]{text-transform:uppercase;font-size:14px;color:#b1b1b1;font-weight:400;display:table;height:auto}.day .btn-default[data-v-8ec22166],.header.row .btn-default[data-v-8ec22166],td .btn-default[data-v-8ec22166]{box-shadow:none;border:1px solid #dadada;padding:3px 6px;text-transform:uppercase;color:#777;font-size:14px;font-weight:500}.day .btn-default.today[data-v-8ec22166]{color:#468df5}.log-entry[data-v-8ec22166]{border:1px solid #dadada;border-radius:7px}.log-entry .day[data-v-8ec22166]{color:#777;font-size:20px}.log-entry .day[data-v-8ec22166],.log-entry label[data-v-8ec22166]{text-align:right;text-transform:uppercase}.log-entry label[data-v-8ec22166]{font-size:15px;font-weight:500;display:inline-block;margin-bottom:0}.log-entry h2 input[data-v-8ec22166]{font-size:22px;text-align:left}.log-entry .sliders input[data-v-8ec22166],.log-entry h2 input[data-v-8ec22166]{border:none}.log-entry input[data-v-8ec22166]{border:1px solid #dadada;vertical-align:middle;border-radius:3px;color:#468df5}.log-entry input[data-v-8ec22166],.log-entry input[data-v-8ec22166]::-webkit-input-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-8ec22166],.log-entry input[data-v-8ec22166]:-ms-input-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-8ec22166],.log-entry input[data-v-8ec22166]::-ms-input-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-8ec22166],.log-entry input[data-v-8ec22166]::placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-8ec22166]::-webkit-input-placeholder{color:#b1b1b1}.log-entry input[data-v-8ec22166]:-ms-input-placeholder{color:#b1b1b1}.log-entry input[data-v-8ec22166]::-ms-input-placeholder{color:#b1b1b1}.log-entry input[data-v-8ec22166]::placeholder{color:#b1b1b1}.log-entry .runs-list[data-v-8ec22166]{border-top:1px solid #f3f3f3}.log-entry .runs-list .tag[data-v-8ec22166]{font-size:15px;font-weight:500;vertical-align:middle;border-radius:4px;border:1px solid #ccc;padding:6px 12px;display:inline-block;white-space:nowrap;margin-bottom:9px;cursor:pointer}.log-entry .runs-list .tag .fa-trash-alt[data-v-8ec22166]{color:#468df5}.log-entry .runs-list .btn-primary[data-v-8ec22166]{font-weight:400;box-shadow:none;border:none}.log-entry .run-title[data-v-8ec22166]{border-top:1px solid #f3f3f3}.log-entry .run-title input[data-v-8ec22166]{border:none;text-align:left}.log-entry .run-title input[data-v-8ec22166]::-webkit-input-placeholder{text-align:left}.log-entry .run-title input[data-v-8ec22166]:-ms-input-placeholder{text-align:left}.log-entry .run-title input[data-v-8ec22166]::-ms-input-placeholder{text-align:left}.log-entry .run-title input[data-v-8ec22166]::placeholder{text-align:left}.log-entry .sliders h4[data-v-8ec22166]{color:#000;font-weight:500}.log-entry .sliders .numbers[data-v-8ec22166]{font-size:18px;font-weight:500}.log-entry .sliders .numbers .col[data-v-8ec22166]{text-align:center}.log-entry .sliders .numbers .one[data-v-8ec22166]{color:#e72970}.log-entry .sliders .numbers .two[data-v-8ec22166]{color:#f67e2c}.log-entry .sliders .numbers .three[data-v-8ec22166]{color:#1acbb0}.log-entry .sliders .numbers .four[data-v-8ec22166]{color:#468df5}.log-entry .sliders .numbers .five[data-v-8ec22166]{color:#802dc4}.log-entry .sliders .slider[data-v-8ec22166]{display:block;width:95%;margin:0 auto;background:#ebebeb;border-radius:20px;height:7px}.log-entry .sliders .slider[data-v-8ec22166]::-moz-range-thumb,.log-entry .sliders .slider[data-v-8ec22166]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;border-radius:100px;background:#468df5;border:none;cursor:pointer}.log-entry .other[data-v-8ec22166]{border-top:1px solid #f3f3f3}.log-entry .weights th[data-v-8ec22166]{color:#b1b1b1;text-transform:uppercase;font-weight:400;font-size:15px;text-align:center}.log-entry .weights td[data-v-8ec22166]{padding:7px;color:#468df5;font-weight:500;text-align:center}.log-entry .weights td input[data-v-8ec22166],.log-entry .weights td input[data-v-8ec22166]::-webkit-input-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-8ec22166],.log-entry .weights td input[data-v-8ec22166]:-ms-input-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-8ec22166],.log-entry .weights td input[data-v-8ec22166]::-ms-input-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-8ec22166],.log-entry .weights td input[data-v-8ec22166]::placeholder{font-size:20px;text-align:center}.log-entry .weights td.x[data-v-8ec22166]{color:#b1b1b1}.log-entry .weights td.delete[data-v-8ec22166]{cursor:pointer}.log-entry .weights td.exercise[data-v-8ec22166]{width:37%}.log-entry .weights td.exercise input[data-v-8ec22166]{border:none;color:#468df5;font-weight:400}.log-entry .weights td.exercise input[data-v-8ec22166],.log-entry .weights td.exercise input[data-v-8ec22166]::-webkit-input-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-8ec22166],.log-entry .weights td.exercise input[data-v-8ec22166]:-ms-input-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-8ec22166],.log-entry .weights td.exercise input[data-v-8ec22166]::-ms-input-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-8ec22166],.log-entry .weights td.exercise input[data-v-8ec22166]::placeholder{text-align:right;font-size:19px}.log-entry .bottom .btn[data-v-8ec22166]{text-transform:uppercase;font-size:15px;font-weight:500;padding:4px 7px;display:table}.log-entry .bottom textarea[data-v-8ec22166]{resize:none}.trends[data-v-8ec22166]{font-size:17px;color:#777}.trends .stat[data-v-8ec22166]{background:#468df5;color:#fff;border-radius:5px;padding:2px 6px;box-shadow:0 3px 7px 2px hsla(0,0%,74.5%,.36);margin-right:10px}.trends .stat-down[data-v-8ec22166]{background:#e72970}.trends .stat-up[data-v-8ec22166]{background:#1acbb0}.trends .row[data-v-8ec22166]{margin:10px}.schedule h2[data-v-8ec22166],.streaks h2[data-v-8ec22166]{text-transform:uppercase;font-size:18px;font-weight:500;margin-bottom:0;text-align:left}.schedule .num[data-v-8ec22166],.streaks .num[data-v-8ec22166]{color:#468df5}.schedule .data[data-v-8ec22166],.streaks .data[data-v-8ec22166]{text-align:right;font-weight:500;font-size:21px;color:#777}.schedule[data-v-8ec22166]{text-align:center}.schedule .day[data-v-8ec22166]{text-align:left}.schedule .reps[data-v-8ec22166]{font-size:21px;font-weight:500;color:#b1b1b1}.schedule .recovery[data-v-8ec22166]{color:#777;text-transform:uppercase;font-weight:400;font-size:16px}.schedule .green[data-v-8ec22166]{color:#1acbb0}.schedule .workout[data-v-8ec22166]{font-size:19px;font-weight:500}.schedule .workout .num[data-v-8ec22166]{font-weight:600}.schedule .workout .box[data-v-8ec22166]{height:100%;margin-bottom:0}",""])},846:function(t,e,n){"use strict";n.r(e);n(82),n(42);var r=n(8),o=(n(20),n(2)),l=n(640),c=n.n(l),d=n(703),v=n.n(d),m=n(426),h=n.n(m);c.a.tz.setDefault("America/Los_Angeles");var f=n(423),y=f.timeStringToDecimal,j=f.formatDateUrl,x=f.getDateFromUrl,_=f.getPace,w={runs:[{distance:"",time:"",elevationGain:"",difficulty:1,feel:5}],checks:{core:!1,stretching:!1},sleep:"",rhr:"",weight:0,note:""},k={components:{LogPagers:function(){return n.e(68).then(n.bind(null,816))}},head:function(){return{title:"Training Log "+c()(this.day).format("M/D/YY")+" - RaceBase"}},middleware:"auth",asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,l,d,m,h,f,_,k,D,C,z,R,$,N,M,A,O;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.$axios,l=e.params,(d=Object(r.a)({},n.state.auth.user)).name?d.firstName=d.name.split(" ")[0]:d.firstName="",m=l.date,h=x(m),f=c()(h).format("MMMM D YYYY"),_=c()(h).format("ddd"),k=l.date||null,t.next=10,o.$get("log/"+k);case 10:return D=t.sent,C={},t.t0=Math,t.next=15,o.$get("log/avg/moving/rhr/"+m);case 15:return t.t1=t.sent.avg,t.t2=10*t.t1,t.t3=t.t0.round.call(t.t0,t.t2),C.rhr=t.t3/10,t.next=21,o.$get("log/avg/moving/sleep/"+m);case 21:return C.sleep=t.sent.avg,t.next=24,o.$get("log/streaks");case 24:return z=t.sent,R=v()(w,D),D.runs&&D.runs.length>0&&(R.runs=D.runs),$=y(C.sleep),N=(y(R.sleep)-$)/$*100,N=Math.round(10*N)/10,isFinite(N)||(N=0),M=!!R.weights,A=j(c()(h).add(1,"day")),t.next=35,o.$get("log/schedule/"+A);case 35:return O=t.sent.goal,t.abrupt("return",{user:d,id:d._id,entryData:R,originalData:JSON.parse(JSON.stringify(R)),currentDay:f,dow:_,didWeights:M,movingAvgs:C,sleepTrend:N,day:h,date:l.date,streaks:z,curRun:0,goalTomorrow:O});case 37:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{load:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Math,t.next=3,this.$axios.$get("log/avg/moving/rhr/"+dayUrl);case 3:return t.t1=t.sent.avg,t.t2=10*t.t1,t.t3=t.t0.round.call(t.t0,t.t2),this.movingAvgs.rhr=t.t3/10,t.next=9,this.$axios.$get("log/avg/moving/sleep/"+dayUrl);case 9:return this.movingAvgs.sleep=t.sent.avg,t.next=12,this.$axios.$get("log/streaks");case 12:this.streaks=t.sent;case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submitEntry:function(){var t=this;this.entryData.runs[this.curRun].difficulty=parseInt(this.entryData.runs[this.curRun].difficulty),this.entryData.runs[this.curRun].feel=parseInt(this.entryData.runs[this.curRun].feel),this.didWeights||this.$set(this.entryData,"weights",null),this.$axios.$post("log/"+j(c()(this.currentDay)),this.entryData).then(function(e){t.entryData=e.entry,t.originalData=JSON.parse(JSON.stringify(t.entryData)),t.load(),console.log(e.message)})},changeDate:function(t){var e=c()(t);e.isValid()&&this.$router.push("/user/log/"+j(e))},clear:function(){this.entryData=w},changeToPrev:function(){var t=j(c()(this.currentDay).subtract(1,"days"));this.$router.push("/user/log/"+t)},changeToNext:function(){var t=j(c()(this.currentDay).add(1,"days"));this.$router.push("/user/log/"+t)},addExercise:function(){this.entryData.weights.push({name:"",reps:0,sets:0})},deleteExercise:function(t){this.entryData.weights.splice(t,1),this.entryData.weights.length<1&&(this.$set(this.entryData,"weights",null),this.didWeights=!1)},revert:function(){this.entryData=JSON.parse(JSON.stringify(this.originalData))},newRun:function(){this.entryData.runs.push({}),this.curRun=this.entryData.runs.length-1},removeRun:function(i){i<=this.entryData.runs.length-1&&this.entryData.runs.splice(i,1),this.entryData.runs[0]||this.entryData.runs.push({}),this.curRun=0}},computed:{pace:function(){if(!this.entryData.runs)return"0:00";if(!this.entryData.runs[this.curRun])return"0:00";if(!this.entryData.runs[this.curRun].time||!this.entryData.runs[this.curRun].distance)return"0:00";var a=this.entryData.runs[this.curRun].time.split(":"),p=(60*+a[0]+ +a[1])/this.entryData.runs[this.curRun].distance/60,t=Math.floor(p),e=Math.round(60*(p-t));e=("0"+e).slice(-2);return _(this.entryData.runs[this.curRun].time,this.entryData.runs[this.curRun].distance)},modified:function(){return!h.a.isEqual(this.entryData,this.originalData)},isToday:function(){return j(c()())==this.date}},watch:{didWeights:function(){this.didWeights&&!this.entryData.weights&&this.$set(this.entryData,"weights",[{}])},$route:function(){this.date=this.$route.params.date||this.date}}},D=(n(704),n(14)),component=Object(D.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-md-100 mx-md-0 px-md-4 container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col mt-3"},[t.user.name?n("h2",{staticClass:"name 4"},[t._v(" "+t._s(t.user.firstName)+"'s ")]):t._e(),t._v(" "),n("h1",[t._v(" \n        Training Log\n      ")])]),t._v(" "),n("div",{staticClass:"col d-flex align-items-center justify-content-end"},[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/user/log/week/"}},[t._v("Weekly View")])],1)]),t._v(" "),n("div",{staticClass:"row mt-4 mb-5"},[n("div",{staticClass:"col-lg-8 col-md-12"},[n("div",{staticClass:"header row mb-2"},[n("div",{staticClass:"col d-flex"},[n("h4",{staticClass:"align-self-center mb-0"},[t._v("Log Entry "),n("fa",{staticClass:"ml-1",attrs:{icon:"book-open"}})],1)]),t._v(" "),n("div",{staticClass:"col d-flex flex-row align-items-end"},[n("LogPagers",{staticClass:"ml-auto",attrs:{date:t.date,interval:"1"}})],1)]),t._v(" "),n("form",{staticClass:"log-entry px-4 py-3"},[n("div",{staticClass:"row"},[n("h2",{staticClass:"col-5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDay,expression:"currentDay"}],staticClass:"d-inline-block",domProps:{value:t.currentDay},on:{keyup:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeDate(t.currentDay)},input:function(e){e.target.composing||(t.currentDay=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col day"},[n("div",{staticClass:"btn btn-default mr-2 d-inline-block",on:{click:function(e){return t.changeDate(t.currentDay)}}},[t._v(" Go ")]),t._v(" "),n("div",{staticClass:"btn btn-default mr-2 d-inline-block",on:{click:t.clear}},[t._v(" Clear ")]),t._v(" "),t.isToday?t._e():n("div",{staticClass:"btn btn-default mr-3 d-inline-block today",on:{click:function(e){t.changeDate(new Date)}}},[t._v(" \n              Today \n            ")]),t._v("\n            "+t._s(t.dow)+"\n          ")])]),t._v(" "),n("div",{staticClass:"row align-items-center mt-2"},[t._m(0),t._v(" "),n("div",{staticClass:"col row align-items-center ml-auto"},[n("label",{staticClass:"col-7"},[t._v(" Mileage Goal ")]),t._v(" "),n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.mileageGoal,expression:"entryData.mileageGoal"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0.0"},domProps:{value:t.entryData.mileageGoal},on:{input:function(e){e.target.composing||t.$set(t.entryData,"mileageGoal",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"runs-list row mt-3 pt-3"},[t._l(t.entryData.runs,function(e,r){return n("div",{staticClass:"tag ml-2"},[n("span",{on:{click:function(e){t.curRun=r}}},[t._v(" "+t._s(e.name||"Run "+Number(r+1))+" ")]),t._v(" "),n("fa",{staticClass:"ml-2",attrs:{icon:"trash-alt"},on:{click:function(e){return t.removeRun(r)}}})],1)}),t._v(" "),n("div",{staticClass:"btn btn-primary ml-2 tag",on:{click:function(e){return t.newRun()}}},[t._v(" Add Run ")])],2),t._v(" "),n("div",{staticClass:"run-title row mt-2 pt-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].name,expression:"entryData.runs[curRun].name"}],staticClass:"form-control col-7",attrs:{placeholder:"Run "+Number(t.curRun+1)},domProps:{value:t.entryData.runs[t.curRun].name},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"run row mt-2"},[n("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[n("label",{staticClass:"col-5"},[t._v(" Dist ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].distance,expression:"entryData.runs[curRun].distance"}],staticClass:"form-control col-7",attrs:{type:"number",placeholder:"0.0"},domProps:{value:t.entryData.runs[t.curRun].distance},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"distance",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[n("label",{staticClass:"col-5"},[t._v(" Time ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].time,expression:"entryData.runs[curRun].time"}],staticClass:"form-control col-7",attrs:{type:"text",placeholder:"0:00"},domProps:{value:t.entryData.runs[t.curRun].time},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"time",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[n("label",{staticClass:"col-5"},[t._v(" Pace ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pace,expression:"pace"}],staticClass:"form-control col-7",attrs:{type:"text",placeholder:"0:00"},domProps:{value:t.pace},on:{input:function(e){e.target.composing||(t.pace=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[n("label",{staticClass:"col-5"},[t._v(" Elev ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].elevationGain,expression:"entryData.runs[curRun].elevationGain"}],staticClass:"form-control col-7",attrs:{type:"number",placeholder:"0"},domProps:{value:t.entryData.runs[t.curRun].elevationGain},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"elevationGain",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"sliders row mt-3"},[n("div",{staticClass:"col-12 col-lg-6 mb-3 mb-lg-0"},[n("h4",{staticClass:"mb-3"},[t._v(" Difficulty ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].difficulty,expression:"entryData.runs[curRun].difficulty"}],staticClass:"slider mb-2",attrs:{type:"range",min:"1",max:"5",step:"1"},domProps:{value:t.entryData.runs[t.curRun].difficulty},on:{__r:function(e){return t.$set(t.entryData.runs[t.curRun],"difficulty",e.target.value)}}}),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"col-12 col-lg-6"},[n("h4",{staticClass:"mb-3"},[t._v(" Feel ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].feel,expression:"entryData.runs[curRun].feel"}],staticClass:"slider mb-2",attrs:{type:"range",min:"1",max:"5",step:"1"},domProps:{value:t.entryData.runs[t.curRun].feel},on:{__r:function(e){return t.$set(t.entryData.runs[t.curRun],"feel",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"other row mt-4 pt-4"},[n("div",{staticClass:"col-6 col-lg row align-items-center mb-3 mb-lg-0"},[n("label",{staticClass:"col-6"},[t._v(" Sleep ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.sleep,expression:"entryData.sleep"}],staticClass:"form-control col-6",attrs:{type:"text",placeholder:"0:00"},domProps:{value:t.entryData.sleep},on:{input:function(e){e.target.composing||t.$set(t.entryData,"sleep",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-lg row align-items-center mb-3 mb-lg-0"},[n("label",{staticClass:"col-7"},[t._v(" RHR "),n("fa",{attrs:{icon:"heartbeat"}})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.rhr,expression:"entryData.rhr"}],staticClass:"form-control col-5",attrs:{type:"number",placeholder:"0"},domProps:{value:t.entryData.rhr},on:{input:function(e){e.target.composing||t.$set(t.entryData,"rhr",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 col-lg row align-items-center"},[n("div",{staticClass:"mx-auto"},[n("label",{staticClass:"mr-2"},[t._v(" Core ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.checks.core,expression:"entryData.checks.core"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.entryData.checks.core)?t._i(t.entryData.checks.core,null)>-1:t.entryData.checks.core},on:{change:function(e){var n=t.entryData.checks.core,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&t.$set(t.entryData.checks,"core",n.concat([null])):l>-1&&t.$set(t.entryData.checks,"core",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.entryData.checks,"core",o)}}})])]),t._v(" "),n("div",{staticClass:"col-6 col-lg row align-items-center"},[n("div",{staticClass:"mx-auto"},[n("label",{staticClass:"mr-2"},[t._v(" Stretching ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.checks.stretching,expression:"entryData.checks.stretching"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.entryData.checks.stretching)?t._i(t.entryData.checks.stretching,null)>-1:t.entryData.checks.stretching},on:{change:function(e){var n=t.entryData.checks.stretching,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&t.$set(t.entryData.checks,"stretching",n.concat([null])):l>-1&&t.$set(t.entryData.checks,"stretching",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.entryData.checks,"stretching",o)}}})])])]),t._v(" "),n("h3",{staticClass:"mt-5 mt-lg-4"},[t._v(" Weights "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.didWeights,expression:"didWeights"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.didWeights)?t._i(t.didWeights,null)>-1:t.didWeights},on:{change:function(e){var n=t.didWeights,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.didWeights=n.concat([null])):l>-1&&(t.didWeights=n.slice(0,l).concat(n.slice(l+1)))}else t.didWeights=o}}})]),t._v(" "),t.didWeights?n("div",{staticClass:"weights row mx-auto w-95"},[n("div",{staticClass:"row"},[n("table",[t._m(3),t._v(" "),n("tbody",[t._l(t.entryData.weights,function(e,r){return n("tr",[n("td",{staticClass:"exercise"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"exercise.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter exercise"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sets,expression:"exercise.sets"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:e.sets},on:{input:function(n){n.target.composing||t.$set(e,"sets",n.target.value)}}})]),t._v(" "),n("td",{staticClass:"x"},[t._v(" x ")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"exercise.reps"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:e.reps},on:{input:function(n){n.target.composing||t.$set(e,"reps",n.target.value)}}})]),t._v(" "),n("td",{staticClass:"delete"},[n("fa",{attrs:{icon:"trash"},on:{click:function(e){return t.deleteExercise(r)}}})],1)])}),t._v(" "),n("tr",[n("td",{attrs:{colspan:"3"}}),t._v(" "),n("td",[n("div",{staticClass:"btn btn-default",on:{click:t.addExercise}},[t._v(" New Exercise ")])])])],2)])])]):t._e(),t._v(" "),n("div",{staticClass:"bottom row mt-3 mb-2"},[n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entryData.note,expression:"entryData.note"}],staticClass:"form-control",attrs:{placeholder:"Add note..."},domProps:{value:t.entryData.note},on:{input:function(e){e.target.composing||t.$set(t.entryData,"note",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-md-4 d-flex flex-row align-items-end mt-3 mt-lg-0"},[t.modified?n("div",{staticClass:"btn btn-default mt-auto ml-auto",on:{click:function(e){return t.revert()}}},[t._v("\n              Revert\n            ")]):t._e(),t._v(" "),n("div",{staticClass:"btn btn-primary",class:t.modified?"ml-3":"ml-auto",on:{click:function(e){return t.submitEntry()}}},[t._v(" \n              Save"),t.modified?t._e():n("span",[t._v("d")]),t._v(" "),t.modified?t._e():n("fa",{staticClass:"ml-2",attrs:{icon:"check"}})],1)])])])]),t._v(" "),n("div",{staticClass:"col-12 col-lg-4 mt-3 mt-lg-0"},[n("h4",[t._v(" Trends "),n("fa",{staticClass:"ml-1",attrs:{icon:"chart-line"}})],1),t._v(" "),n("div",{staticClass:"trends box flat-box px-1 py-2"},[n("div",{staticClass:"row"},[n("span",{staticClass:"stat"},[t._v(" "+t._s(t.movingAvgs.sleep)+" hr ")]),t._v(" 5 day avg sleep")]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"stat",class:"stat-"+(t.sleepTrend>=0?"up":"down")},[t._v(" "+t._s(t.sleepTrend)+"% ")]),t._v(" \n          "+t._s(t.sleepTrend>=0?"more":"less")+" \n          sleep than usual \n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"stat"},[t._v(" "+t._s(t.movingAvgs.rhr)+" bpm ")]),t._v(" 5 day avg RHR ")])]),t._v(" "),n("h4",[t._v(" Streaks "),n("fa",{staticClass:"ml-1",attrs:{icon:"fire-alt"}})],1),t._v(" "),n("div",{staticClass:"streaks box flat-box py-2"},[n("div",{staticClass:"row flex align-items-center"},[n("h2",{staticClass:"col"},[t._v(" Core ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.streaks.core||0))]),t._v(" day")])]),t._v(" "),n("div",{staticClass:"row flex align-items-center"},[n("h2",{staticClass:"col"},[t._v(" Stretching ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.streaks.stretching||0))]),t._v(" day")])])]),t._v(" "),n("h4",[t._v(" Schedule "),n("fa",{staticClass:"ml-1",attrs:{icon:"calendar-alt"}})],1),t._v(" "),n("div",{staticClass:"schedule box flat-box"},[n("div",{staticClass:"day row flex align-items-center mb-2"},[n("h2",{staticClass:"col"},[t._v(" Today ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.entryData.mileageGoal))]),t._v(" mi")])]),t._v(" "),n("div",{staticClass:"row flex align-items-center"},[n("h2",{staticClass:"col"},[t._v(" Tomorrow ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.goalTomorrow))]),t._v(" mi")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3 col-lg-6"},[e("h3",{staticClass:"mb-0"},[this._v(" Runs ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"numbers row"},[n("div",{staticClass:"col one"},[t._v(" 1 ")]),t._v(" "),n("div",{staticClass:"col two"},[t._v(" 2 ")]),t._v(" "),n("div",{staticClass:"col three"},[t._v(" 3 ")]),t._v(" "),n("div",{staticClass:"col four"},[t._v(" 4 ")]),t._v(" "),n("div",{staticClass:"col five"},[t._v(" 5 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"numbers row"},[n("div",{staticClass:"col one"},[t._v(" 1 ")]),t._v(" "),n("div",{staticClass:"col two"},[t._v(" 2 ")]),t._v(" "),n("div",{staticClass:"col three"},[t._v(" 3 ")]),t._v(" "),n("div",{staticClass:"col four"},[t._v(" 4 ")]),t._v(" "),n("div",{staticClass:"col five"},[t._v(" 5 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v(" Sets ")]),this._v(" "),e("th"),this._v(" "),e("th",[this._v(" Reps ")]),this._v(" "),e("th")])])}],!1,null,"8ec22166",null);e.default=component.exports}}]);