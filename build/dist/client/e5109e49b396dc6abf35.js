(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{505:function(t,e,n){var content=n(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5f8583dc",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";var r=n(505);n.n(r).a},575:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".fa-cog[data-v-5e91fbc4]{color:#333;font-size:20px;margin-bottom:1px;margin-right:5px}.fa-times[data-v-5e91fbc4]{cursor:pointer}.pic-name[data-v-5e91fbc4]{font-size:12px;text-align:center}.pictures[data-v-5e91fbc4]{width:90%}.claim[data-v-5e91fbc4]{display:inline-block;width:270px}.claim .btn.btn-primary[data-v-5e91fbc4]{margin-top:0}.profile .input-group-text[data-v-5e91fbc4]{font-size:14px}.profile .input-group-text img[data-v-5e91fbc4]{opacity:.7;width:25px}.profile-pic[data-v-5e91fbc4]{width:81px;height:81px}.brand-pic[data-v-5e91fbc4],.featured-pic[data-v-5e91fbc4],.profile-pic[data-v-5e91fbc4]{margin:0 auto}.featured-pic[data-v-5e91fbc4]{width:100px;border-radius:5px}.card .btn[data-v-5e91fbc4]{display:table;margin:0 auto}.card .settings-label[data-v-5e91fbc4]{text-align:center}.settings-section[data-v-5e91fbc4]{margin-top:20px}.settings-section .btn[data-v-5e91fbc4]{font-size:15px}.settings-section .settings-label[data-v-5e91fbc4]{text-transform:uppercase;font-weight:500;font-size:13px;margin-bottom:10px}.settings-section .tag[data-v-5e91fbc4]{font-size:14px;vertical-align:middle;border-radius:4px;border:1px solid #ccc;padding:6px 12px;display:inline-block;white-space:nowrap;margin-bottom:9px}.settings-section .alert[data-v-5e91fbc4]{width:270px;padding:8px 12px}.settings-section .athlete-id .btn[data-v-5e91fbc4]{margin-top:-9.5px}form input[data-v-5e91fbc4]{font-size:14px}@media screen and (max-width:767px){.alert[data-v-5e91fbc4],.claim[data-v-5e91fbc4]{width:90%;margin:10px auto 0}.danger-zone[data-v-5e91fbc4]{margin-bottom:50px}}",""])},686:function(t,e,n){"use strict";n.r(e);n(19);var r=n(1),c=n(14),l={data:function(){return{id:"",aliasInput:"",claimInput:"",aliases:[],claimFailure:"",claimSuccess:"",aliasSuccess:"",aliasFailure:"",deleteSuccess:"",makeSure:!1,profilePic:null,brandPic:null,featuredPic:null,message:"",imageMessage:""}},head:function(){return{title:"Settings - RaceBase"}},middleware:"auth",asyncData:function(t){var e=t.store,n=Object(c.a)({},e.state.auth.user);return{user:n,id:n._id}},methods:{loadUser:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("auth/fetchUser");case 2:this.user=Object(c.a)({},this.$store.state.auth.user);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addAlias:function(){var t=this;this.$axios.$post("user/"+this.id+"/alias/"+this.aliasInput).then(function(e){e.failure?(t.aliasSuccess=null,t.aliasFailure=e.failure):e.success&&(t.aliasFailure=null,t.aliasSuccess=e.success,t.loadUser())})},removeAlias:function(t){var e=this;this.$axios.$delete("user/"+this.id+"/alias/"+t).then(function(t){e.aliasSuccess=null,e.aliasFailure=null,e.loadUser()})},claim:function(t){var e=this;this.$axios.$post("user/claim/"+this.id+"/"+t).then(function(t){e.claimFailure="",e.claimSuccess="",t.failure?(e.claimSuccess=null,e.claimFailure=t.failure):t.success&&(e.claimFailure=null,e.claimSuccess=t.success,e.loadUser())})},unclaim:function(t){var e=this;this.$axios.$post("user/unclaim/"+this.id+"/"+t).then(function(t){e.claimFailure="",e.claimSuccess="",t.failure?(e.claimFailure=t.failure,e.claimSuccess=null):t.success&&(e.claimSuccess=t.success,e.claimFailure=null,e.loadUser())})},deleteAccount:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$delete("user/"+this.id);case 2:return t.next=4,this.$store.dispatch("auth/logout");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),updateProfile:function(){var t=this;this.$axios.$put("user/"+this.id,this.user).then(function(e){t.message="Profile updated.",t.loadUser()})},onProfilePicChanged:function(t){this.profilePic=t.target.files[0]},onBrandPicChanged:function(t){this.brandPic=t.target.files[0]},onFeaturedPicChanged:function(t){this.featuredPic=t.target.files[0]},uploadProfilePic:function(){var t=this,e=new FormData;e.append("image",this.profilePic),this.$axios.$post("user/"+this.user._id+"/profile_pic",e).then(function(e){t.imageMessage="Profile updated.",t.loadUser()})},uploadBrandPic:function(){var t=this,e=new FormData;e.append("image",this.brandPic),this.$axios.$post("user/"+this.user._id+"/brand_pic",e).then(function(e){t.imageMessage="Profile updated.",t.loadUser()})},uploadFeaturedPic:function(){var t=this,e=new FormData;e.append("image",this.featuredPic),this.$axios.$post("user/"+this.user._id+"/featured_pic",e).then(function(e){t.imageMessage="Profile updated.",t.loadUser()})}}},o=(n(574),n(18)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[n("h1",{staticClass:"mt-4"},[n("fa",{attrs:{icon:"cog"}}),t._v(" Settings \n  ")],1),t._v(" "),t.user.athlete_id?n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Profile")]),t._v(" "),n("form",{staticClass:"profile mb-4 w-md-75 w-100",on:{submit:function(e){return e.preventDefault(),t.updateProfile()}}},[n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"col-md-6 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.trainer,expression:"user.trainer"}],staticClass:"form-control",attrs:{placeholder:"Current Trainer"},domProps:{value:t.user.trainer},on:{input:function(e){e.target.composing||t.$set(t.user,"trainer",e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.racer,expression:"user.racer"}],staticClass:"form-control",attrs:{placeholder:"Current Racer"},domProps:{value:t.user.racer},on:{input:function(e){e.target.composing||t.$set(t.user,"racer",e.target.value)}}}),t._v(" "),t._m(1)])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.mileage,expression:"user.mileage"}],staticClass:"form-control",attrs:{placeholder:"Weekly Mileage"},domProps:{value:t.user.mileage},on:{input:function(e){e.target.composing||t.$set(t.user,"mileage",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.location,expression:"user.location"}],staticClass:"form-control",attrs:{placeholder:"Location"},domProps:{value:t.user.location},on:{input:function(e){e.target.composing||t.$set(t.user,"location",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text"},[n("fa",{staticClass:"mr-1",attrs:{icon:"map-marker-alt"}})],1)])])])]),t._v(" "),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-md-6 col-12 mb-md-0 mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.stravaUrl,expression:"user.stravaUrl"}],staticClass:"form-control",attrs:{placeholder:"Strava URL"},domProps:{value:t.user.stravaUrl},on:{input:function(e){e.target.composing||t.$set(t.user,"stravaUrl",e.target.value)}}})])]),t._v(" "),n("input",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit",value:"Update"}}),t._v(" "),t.message?n("div",{staticClass:"mt-3"},[t._v(" "+t._s(t.message)+" ")]):t._e()])]):t._e(),t._v(" "),t.user.athlete_id?n("div",{staticClass:"settings-section pictures \n    row \n    mt-3 \n    w-100 w-md-auto"},[n("div",{staticClass:"col-md-4 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"settings-section card p-3 mt-0"},[n("div",{staticClass:"settings-label mb-3"},[t._v(" Profile Picture ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 align-items-center align-content-center d-flex flex-wrap"},[t.user.profilePicUrl?n("img",{staticClass:"profile-pic",attrs:{src:t.user.profilePicUrl}}):t._e(),t._v(" "),t.user.profilePicUrl?t._e():n("img",{staticClass:"profile-pic",attrs:{src:"/images/default.png"}})]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("label",{staticClass:"mb-2 btn btn-default"},[t._v("\n                Browse\n                "),n("input",{attrs:{type:"file",name:"image",hidden:""},on:{change:t.onProfilePicChanged}})])]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.uploadProfilePic}},[t._v(" Upload ")])])])]),t._v(" "),t.profilePic?n("span",{staticClass:"pic-name mt-3"},[t._v(" "+t._s(t.profilePic.name)+" ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-4 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"settings-section card p-3 mt-0"},[n("div",{staticClass:"settings-label mb-3"},[t._v(" Brand / Team Logo ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 align-items-center align-content-center d-flex"},[t.user.brandPicUrl?n("img",{staticClass:"brand-pic mb-2",attrs:{src:t.user.brandPicUrl}}):t._e()]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("label",{staticClass:"mb-2 mx-auto btn btn-default"},[t._v("\n                Browse\n                "),n("input",{attrs:{type:"file",name:"image",hidden:""},on:{change:t.onBrandPicChanged}})])]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.uploadBrandPic}},[t._v(" Upload ")])])])]),t._v(" "),t.brandPic?n("span",{staticClass:"pic-name"},[t._v(" "+t._s(t.brandPic.name)+" ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-4 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"settings-section card p-3 pb-md-3 mt-0"},[n("div",{staticClass:"settings-label mb-3"},[t._v(" Featured Image ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 align-items-center align-content-center d-flex"},[t.user.featuredPicUrl?n("img",{staticClass:"featured-pic mb-2",attrs:{src:t.user.featuredPicUrl}}):t._e()]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("label",{staticClass:"mb-2 mx-auto btn btn-default"},[t._v("\n                Browse\n                "),n("input",{attrs:{type:"file",name:"image",hidden:""},on:{change:t.onFeaturedPicChanged}})])]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.uploadFeaturedPic}},[t._v(" Upload ")])])])]),t._v(" "),t.featuredPic?n("span",{staticClass:"pic-name"},[t._v(" "+t._s(t.featuredPic.name)+" ")]):t._e()])]),t._v(" "),t.imageMessage?n("div",{staticClass:"mt-3 pl-3"},[n("strong",[t._v(" "+t._s(t.imageMessage)+" ")])]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"tag"},[t._v(t._s(t.user.email))])]),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Athlete ID")]),t._v(" "),t.user.athlete_id?n("span",{staticClass:"athlete-id"},[n("div",{staticClass:"tag"},[n("fa",{attrs:{icon:"user"}}),t._v("   "+t._s(t.user.athlete_id))],1),t._v(" "),t.user.athlete_id?n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.unclaim(t.user.athlete_id)}}},[t._v("\n        Unclaim\n      ")]):t._e()]):t._e(),t._v(" "),t.user.athlete_id?t._e():n("form",{staticClass:"claim mb-2",on:{submit:function(e){return e.preventDefault(),t.claim(t.claimInput)}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.claimInput,expression:"claimInput"}],staticClass:"form-control",attrs:{pattern:"^\\S*$",type:"text",id:"athleteIDInput",placeholder:"Athlete ID (no spaces)",required:""},domProps:{value:t.claimInput},on:{input:function(e){e.target.composing||(t.claimInput=e.target.value)}}}),t._v(" "),t._m(3)])]),t._v(" "),t.claimSuccess?n("div",{staticClass:"alert alert-success"},[t._v(" \n      "+t._s(t.claimSuccess)+" \n    ")]):t._e(),t._v(" "),t.claimFailure?n("div",{staticClass:"alert alert-danger"},[t._v(" \n      "+t._s(t.claimFailure)+"\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Aliases "),n("fa",{attrs:{icon:"user-plus"}})],1),t._v(" "),n("div",{staticClass:"aliases"},t._l(t.user.aliases,function(e){return t.user.aliases.length>0?n("div",{staticClass:"alias tag mr-2"},[t._v("\n        "+t._s(e)+"  \n        "),n("a",{on:{click:function(n){return t.removeAlias(e)}}},[n("fa",{attrs:{icon:"times"}})],1)]):t._e()}),0),t._v(" "),n("form",{staticClass:"claim mb-2",on:{submit:function(e){return e.preventDefault(),t.addAlias()}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.aliasInput,expression:"aliasInput"}],staticClass:"form-control",attrs:{pattern:"^\\S*$",type:"text",id:"athleteIDInput",placeholder:"Alias Athlete ID (no spaces)",required:""},domProps:{value:t.aliasInput},on:{input:function(e){e.target.composing||(t.aliasInput=e.target.value)}}}),t._v(" "),t._m(4)])]),t._v(" "),t.aliasSuccess?n("div",{staticClass:"alert alert-success"},[t._v(" \n      "+t._s(t.aliasSuccess)+" \n    ")]):t._e(),t._v(" "),t.aliasFailure?n("div",{staticClass:"alert alert-danger"},[t._v(" \n      "+t._s(t.aliasFailure)+"\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"settings-section danger-zone pb-4"},[n("div",{staticClass:"settings-label"},[t._v("Danger Zone")]),t._v(" "),t.makeSure?t._e():n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.makeSure=!0}}},[t._v("\n      Delete your account "),n("fa",{attrs:{icon:"trash-alt"}})],1),t._v(" "),t.makeSure?n("div",{staticClass:"alert alert-info make-sure"},[t._v("\n      Are you sure? This cannot be undone.\n    ")]):t._e(),t._v(" "),t.makeSure?n("button",{staticClass:"btn btn-default make-sure",on:{click:function(e){t.makeSure=!1}}},[t._v("\n      No\n    ")]):t._e(),t._v(" "),t.makeSure?n("button",{staticClass:"btn btn-danger make-sure",on:{click:t.deleteAccount}},[t._v("\n      Yes, delete my account\n    ")]):t._e(),t._v(" "),t.deleteSuccess?n("div",{staticClass:"alert alert-success"},[t._v(" \n      "+t._s(t.deleteSuccess)+" \n    ")]):t._e()])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("img",{staticClass:"shoe mr-1",attrs:{src:"/images/trainer.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("img",{staticClass:"shoe mr-1",attrs:{src:"/images/racer.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[this._v(" miles per week ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("input",{staticClass:"btn btn-primary",attrs:{value:"Claim",type:"submit"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("input",{staticClass:"btn btn-primary",attrs:{value:"Claim",type:"submit"}})])}],!1,null,"5e91fbc4",null);e.default=component.exports}}]);