exports.ids=[24],exports.modules={121:function(e,t,r){"use strict";r.r(t);var o=r(68),n=r.n(o);for(var l in o)"default"!==l&&function(e){r.d(t,e,function(){return o[e]})}(l);t.default=n.a},122:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,"@media (min-width:992px){form[data-v-91008e92]{width:45%}}form label[data-v-91008e92]{text-transform:uppercase;font-size:13px;font-weight:500}",""])},205:function(e,t,r){"use strict";r.r(t);r(8);var o={head:()=>({title:"Log In - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/login.png"}]}),data:()=>({formData:{email:"",password:""},message:!1,error:!1}),methods:{logIn:async function(){let e=await this.$store.dispatch("auth/login",{email:this.formData.email,password:this.formData.password},{withCredentials:!0});this.message=e.message,this.error=e.error}}},n=r(1);var component=Object(n.a)(o,function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{staticClass:"mx-auto mx-md-0 w-90 pl-md-5",on:{submit:function(t){return t.preventDefault(),e.logIn(t)}}},[e._ssrNode('<h2 class="mt-4 mb-3" data-v-91008e92>Log In</h2> <label for="inputEmail" data-v-91008e92> Email </label> <input type="email" name="email" placeholder="Email" required="required" autofocus="autofocus"'+e._ssrAttr("value",e.formData.email)+' class="form-control mb-3" data-v-91008e92> <label for="inputPassword" data-v-91008e92> Password </label> <input name="password" type="password" placeholder="Password" required="required"'+e._ssrAttr("value",e.formData.password)+' class="form-control mb-3" data-v-91008e92> '+(e.message?"<div"+e._ssrClass(null,"d-block alert alert-"+(e.error?"danger":"success"))+" data-v-91008e92>"+e._ssrEscape("\n    "+e._s(e.message)+"\n  ")+"</div>":"\x3c!----\x3e")+' <button type="submit" class="btn btn-primary" data-v-91008e92>Log In</button>')])},[],!1,function(e){var t=r(121);t.__inject__&&t.__inject__(e)},"91008e92","6c317abb");t.default=component.exports},68:function(e,t,r){var content=r(122);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=r(3).default;e.exports.__inject__=function(e){o("77ff421c",content,!0,e)}}};
//# sourceMappingURL=8fbb154846884abeae30.js.map