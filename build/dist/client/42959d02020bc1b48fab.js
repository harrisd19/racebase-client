(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{527:function(t,e,n){var content=n(644);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("64fe73c3",content,!0,{sourceMap:!1})},643:function(t,e,n){"use strict";var c=n(527);n.n(c).a},644:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,"a[data-v-c3965cec]{color:#3976d0}.story h3[data-v-c3965cec],.story h4[data-v-c3965cec]{text-transform:none;font-weight:400}.story h3[data-v-c3965cec]{color:#3976d0;text-transform:none;font-size:19px;text-align:left}.story h4[data-v-c3965cec]{font-style:italic;line-height:20px;text-transform:none;font-size:15px;margin-bottom:12px}@media (min-width:992px){.story h4[data-v-c3965cec]{font-size:16px;line-height:24px}}.story img[data-v-c3965cec],.story picture[data-v-c3965cec]{width:100%}.metadata span[data-v-c3965cec]{font-weight:500;font-size:14px;text-transform:uppercase}",""])},686:function(t,e,n){"use strict";n.r(e);var c={name:"news-item",props:["story","link"],created:function(){this.generateImageLink()},watch:{story:function(){this.generateImageLink()}},methods:{generateImageLink:function(){this.imageLink="https://api.racebase.io/images/thumbnails@2x/"+this.story.image}},data:function(){return{imageLink:""}}},o=(n(643),n(18)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid px-0 mb-4"},[n("div",{staticClass:"story row"},[n("nuxt-link",{staticClass:"col-md-5 col-12 mb-3 mx-auto",attrs:{to:"news/post/"+t.link}},[n("picture",[n("source",{attrs:{sizes:"(min-width: 768px) 281px",srcset:t.imageLink.replace("@2x","")+".webp 281w,"+t.imageLink+".webp 562w",type:"image/webp"}}),t._v(" "),n("img",{attrs:{sizes:"(min-width: 768px) 281px",srcset:t.imageLink.replace("@2x","")+".jpg 281w, "+t.imageLink+".jpg 562w"}})])]),t._v(" "),n("div",{staticClass:"col-md-7 col-12 mx-auto"},[n("h3",[n("nuxt-link",{attrs:{to:"news/post/"+t.link}},[t._v(" "+t._s(t.story.title)+" ")])],1),t._v(" "),n("div",{staticClass:"metadata mb-2"},[n("span",{staticClass:"date mr-2"},[t._v(" "+t._s(t.story.date)+" ")]),t._v(" "),n("span",[n("fa",{attrs:{icon:"user-circle"}}),t._v(" "+t._s(t.story.author))],1)]),t._v(" "),n("h4",[t._v(t._s(t.story.subtitle))])])],1)])},[],!1,null,"c3965cec",null);e.default=component.exports}}]);