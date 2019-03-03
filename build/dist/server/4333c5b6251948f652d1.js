exports.ids=[51],exports.modules={149:function(t,e,r){"use strict";r.r(e);var o=r(81),n=r.n(o);for(var d in o)"default"!==d&&function(t){r.d(e,t,function(){return o[t]})}(d);e.default=n.a},150:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"form label[data-v-0712524f]{text-transform:uppercase;font-size:13px;font-weight:500}ul[data-v-0712524f]{list-style:square}",""])},251:function(t,e,r){"use strict";r.r(e);var o={head:()=>({title:"Sign Up - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/signup.png"}]}),data:()=>({input:{email:"",password:"",confirm:"",name:"",referralCode:"",coach:!1},message:!1,error:!1}),methods:{signUp:function(){this.input.confirm==this.input.password?this.$axios.post("user",{email:this.input.email,password:this.input.password,name:this.input.name,referralCode:this.input.referralCode,coach:this.input.coach}).then(async t=>{if(t.data.error)this.error=!0,this.message=t.data.error;else{this.error=!1,this.message="Successfully signed up.";await this.$store.dispatch("auth/login",{email:this.input.email,password:this.input.password});this.input.coach?this.$router.push("/signup/coach/claim"):this.$router.push("/signup/claim")}}).catch(t=>{this.error=!0,this.message=t.response.data}):(this.error=!0,this.message="Passwords don't match.")}}},n=r(1);var component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto w-95 mb-5 row"},[t._ssrNode('<div class="why col" data-v-0712524f><h2 class="mt-4" data-v-0712524f> Why sign up? </h2> <p data-v-0712524f> When you sign up for a RaceBase account, you get these great benefits: </p> <ul data-v-0712524f><li data-v-0712524f><strong data-v-0712524f>Profile customization</strong>, allowing you to claim results as your own, add photos and stories, and more </li> <li data-v-0712524f> Access to our tried and true <strong data-v-0712524f>Logging</strong> system </li> <li data-v-0712524f><strong data-v-0712524f>Race Feed</strong>, where you can see the results and workouts of people you care about </li> <li data-v-0712524f> According to our independent study, signing up reduces your risk of getting eaten by a flying spaghetti monster by up to <strong data-v-0712524f>30%</strong></li></ul></div> '),t._ssrNode('<div class="signup col" data-v-0712524f>',"</div>",[t._ssrNode("<form data-v-0712524f>","</form>",[t._ssrNode('<h2 class="mt-4 mb-3" data-v-0712524f>Sign Up</h2> <label for="inputName" data-v-0712524f> Name </label> <input name="name" type="text" placeholder="Name" required="required"'+t._ssrAttr("value",t.input.name)+' class="form-control mb-3" data-v-0712524f> <label for="inputEmail" data-v-0712524f> Email </label> <input type="email" name="email" placeholder="Email" required="required" autofocus="autofocus"'+t._ssrAttr("value",t.input.email)+' class="form-control mb-3" data-v-0712524f> <label for="inputPassword" data-v-0712524f> Password </label> <input name="password" type="password" placeholder="Password" required="required"'+t._ssrAttr("value",t.input.password)+' class="form-control mb-3" data-v-0712524f> <label for="inputConfirm" data-v-0712524f> Confirm Password </label> <input name="password" type="password" placeholder="Confirm Password" required="required"'+t._ssrAttr("value",t.input.confirm)+' class="form-control mb-3" data-v-0712524f> <label for="referralCode" data-v-0712524f> Referral Code (Optional) </label> <input name="referralCode" type="text" placeholder="Referral Code"'+t._ssrAttr("value",t.input.referralCode)+' class="form-control mb-3" data-v-0712524f> '),t._ssrNode('<div class="mb-3" data-v-0712524f>',"</div>",[t._ssrNode('<input type="checkbox" required="required" name="terms" data-v-0712524f>\n          I agree to the \n          '),r("nuxt-link",{attrs:{to:"terms",target:"_blank"}},[t._v(" Terms and Conditions\n          ")])],2),t._ssrNode(' <div class="mb-3" data-v-0712524f><span class="mr-2" data-v-0712524f>Are you a coach?</span> <input type="checkbox" name="coach"'+t._ssrAttr("checked",Array.isArray(t.input.coach)?t._i(t.input.coach,null)>-1:t.input.coach)+" data-v-0712524f> <strong data-v-0712524f>"+t._ssrEscape(t._s(t.input.coach?"Yep!":"No"))+"</strong></div> "+(t.message?"<div"+t._ssrClass(null,"d-block alert alert-"+(t.error?"danger":"success"))+" data-v-0712524f>"+t._ssrEscape("\n        "+t._s(t.message)+"\n      ")+"</div>":"\x3c!----\x3e")+' <button type="submit" class="btn btn-primary" data-v-0712524f>Sign Up</button>')],2)])],2)},[],!1,function(t){var e=r(149);e.__inject__&&e.__inject__(t)},"0712524f","7d17afb9");e.default=component.exports},81:function(t,e,r){var content=r(150);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("157c2b99",content,!0,t)}}};
//# sourceMappingURL=4333c5b6251948f652d1.js.map