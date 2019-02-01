(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{372:function(e,t,a){var s=a(435);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(11).default)("3e69c1fa",s,!0,{})},434:function(e,t,a){"use strict";var s=a(372);a.n(s).a},435:function(e,t,a){(e.exports=a(10)(!1)).push([e.i,"@media (min-width:992px){form[data-v-49d7e16c]{width:45%}}form label[data-v-49d7e16c]{text-transform:uppercase;font-size:13px;font-weight:500}",""])},547:function(e,t,a){"use strict";a.r(t);a(20);var s=a(1),n=a.n(s),r=(a(32),{head:function(){return{title:"Sign Up - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/signup.png"}]}},data:function(){return{input:{email:"",password:"",confirm:"",name:""},message:!1,error:!1}},methods:{signUp:function(){var e=this;this.input.confirm==this.input.password?this.$axios.post("user",{email:this.input.email,password:this.input.password,name:this.input.name}).then(function(){var t=n()(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.data.error){t.next=5;break}e.error=!0,e.message=a.data.error,t.next=10;break;case 5:return e.error=!1,e.message="Successfully signed up.",t.next=9,e.$store.dispatch("auth/login",{email:e.input.email,password:e.input.password});case 9:t.sent;case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):(this.error=!0,this.message="Passwords don't match.")}}}),i=(a(434),a(17)),o=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"mx-auto mx-md-0 w-90 pl-md-5",on:{submit:function(t){return t.preventDefault(),e.signUp(t)}}},[a("h2",{staticClass:"mt-4 mb-3"},[e._v("Sign Up")]),e._v(" "),a("label",{attrs:{for:"inputName"}},[e._v(" Name ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.name,expression:"input.name"}],staticClass:"form-control mb-3",attrs:{name:"name",type:"text",placeholder:"Name",required:""},domProps:{value:e.input.name},on:{input:function(t){t.target.composing||e.$set(e.input,"name",t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"inputEmail"}},[e._v(" Email ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],staticClass:"form-control mb-3",attrs:{type:"email",name:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"inputPassword"}},[e._v(" Password ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"inputConfirm"}},[e._v(" Confirm Password ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.confirm,expression:"input.confirm"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Confirm Password",required:""},domProps:{value:e.input.confirm},on:{input:function(t){t.target.composing||e.$set(e.input,"confirm",t.target.value)}}}),e._v(" "),a("div",{staticClass:"mb-3"},[a("input",{attrs:{type:"checkbox",required:"",name:"terms"}}),e._v("\n      I agree to the \n      "),a("nuxt-link",{attrs:{to:"terms",target:"_blank"}},[e._v(" Terms and Conditions\n      ")])],1),e._v(" "),e.message?a("div",{class:"d-block alert alert-"+(e.error?"danger":"success")},[e._v("\n    "+e._s(e.message)+"\n  ")]):e._e(),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Sign Up")])])},[],!1,null,"49d7e16c",null);o.options.__file="signup.vue";t.default=o.exports}}]);