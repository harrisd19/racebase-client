(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{401:function(t,e,a){var s=a(517);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("e4d29fc4",s,!0,{})},516:function(t,e,a){"use strict";var s=a(401);a.n(s).a},517:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"a[data-v-c3965cec]{color:#3976d0}.story h3[data-v-c3965cec],.story h4[data-v-c3965cec]{text-transform:none;font-weight:400}.story h3[data-v-c3965cec]{color:#3976d0;text-transform:none;font-size:19px;text-align:left}.story h4[data-v-c3965cec]{font-style:italic;line-height:20px;text-transform:none;font-size:15px;margin-bottom:12px}@media (min-width:992px){.story h4[data-v-c3965cec]{font-size:16px;line-height:24px}}.story img[data-v-c3965cec],.story picture[data-v-c3965cec]{width:100%}.metadata span[data-v-c3965cec]{font-weight:500;font-size:14px;text-transform:uppercase}",""])},565:function(t,e,a){"use strict";a.r(e);var s={name:"news-item",props:["story","link"],created:function(){this.generateImageLink()},watch:{story:function(){this.generateImageLink()}},methods:{generateImageLink:function(){this.imageLink="https://api.racebase.io/images/thumbnails@2x/"+this.story.image}},data:function(){return{imageLink:""}}},i=(a(516),a(17)),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid px-0 mb-4"},[a("div",{staticClass:"story row"},[a("nuxt-link",{staticClass:"col-md-5 col-12 mb-3 mx-auto",attrs:{to:"news/post/"+t.link}},[a("picture",[a("source",{attrs:{sizes:"(min-width: 768px) 281px",srcset:t.imageLink.replace("@2x","")+".webp 281w,"+t.imageLink+".webp 562w",type:"image/webp"}}),t._v(" "),a("img",{attrs:{sizes:"(min-width: 768px) 281px",srcset:t.imageLink.replace("@2x","")+".jpg 281w, "+t.imageLink+".jpg 562w"}})])]),t._v(" "),a("div",{staticClass:"col-md-7 col-12 mx-auto"},[a("h3",[a("nuxt-link",{attrs:{to:"news/post/"+t.link}},[t._v(" "+t._s(t.story.title)+" ")])],1),t._v(" "),a("div",{staticClass:"metadata mb-2"},[a("span",{staticClass:"date mr-2"},[t._v(" "+t._s(t.story.date)+" ")]),t._v(" "),a("span",[a("fa",{attrs:{icon:"user-circle"}}),t._v(" "+t._s(t.story.author))],1)]),t._v(" "),a("h4",[t._v(t._s(t.story.subtitle))])])],1)])},[],!1,null,"c3965cec",null);n.options.__file="NewsItem.vue";e.default=n.exports}}]);