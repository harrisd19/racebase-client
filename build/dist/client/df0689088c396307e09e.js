(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{731:function(e,t,r){"use strict";r.r(t);r(22);var n=r(2),o={asyncData:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=r.token,e.abrupt("return",{input:{newPassword:"",confirm:""},token:n});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),methods:{resetPassword:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.input.confirm!=this.input.newPassword){e.next=10;break}return e.prev=1,e.next=4,this.$axios.post("/user/resetPassword/"+this.token,{newPassword:this.input.newPassword});case 4:this.$router.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.response.data);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}()}},c=r(14),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"mt-3 w-95 mx-auto",on:{submit:function(t){return t.preventDefault(),e.resetPassword(t)}}},[r("h2",[e._v(" Reset your Password ")]),e._v(" "),r("label",{attrs:{for:"password"}},[e._v(" New Password ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.newPassword,expression:"input.newPassword"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:e.input.newPassword},on:{input:function(t){t.target.composing||e.$set(e.input,"newPassword",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"inputConfirm"}},[e._v(" Confirm New Password ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.confirm,expression:"input.confirm"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Confirm Password",required:""},domProps:{value:e.input.confirm},on:{input:function(t){t.target.composing||e.$set(e.input,"confirm",t.target.value)}}}),e._v(" "),r("div",{staticClass:"btn btn-primary",on:{click:e.resetPassword}},[e._v("Change Password")])])},[],!1,null,null,null);t.default=component.exports}}]);