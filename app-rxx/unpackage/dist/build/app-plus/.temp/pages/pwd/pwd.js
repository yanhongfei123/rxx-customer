require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{100:function(t,e,s){"use strict";var o=a(s(1)),n=a(s(101));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))},101:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(103),n=s.n(o),a=s(107);var i=function(t){s(102)},l=s(0)(n.a,a.a,i,null,null);e.default=l.exports},102:function(t,e){},103:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=l(s(4)),n=l(s(11)),a=l(s(12)),i=l(s(13));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{uniInput:o.default,countDown:n.default},computed:{_disabled:function(){return!(this.phone&&this.password&&this.smscode)}},data:function(){return{disabled:!1,type:1,phone:"",password:"",smscode:""}},onShow:function(){console.log(this.disabled)},methods:{getCode:function(){var t=this,e=this.validateMobileFunc();e?this.Util.Toast.toast(e):(console.log(this.disabled),this.disabled||(this.disabled=!0,this.API.sendMsg({phone:this.phone,type:2}).then(function(e){t.$refs.countDown.countDown(),t.Util.Toast.success("验证码已发送"),setTimeout(function(){t.disabled=!1},6e3)}).catch(function(e){t.disabled=!1})))},save:function(){var e=this,s=this.validateFunc();if(s)this.Util.Toast.toast(s);else{var o={type:this.type,phone:this.phone,password:this.password,smscode:this.smscode};this.API.forgetPas(o).then(function(s){e.Util.Toast.success("保存成功"),setTimeout(function(){t.navigateBack()},2e3)})}},validateMobileFunc:function(){var t=new a.default(i.default);return t.addRules(this.phone,[{strategy:"mobile",errorMsg:"请输入正确的手机号"}],function(){console.log("验证通过")}),t.start()},validateFunc:function(){var t=new a.default(i.default);return t.addRules(this.phone,[{strategy:"mobile",errorMsg:"请输入正确的手机号"}],function(){console.log("验证通过")}),t.addRules(this.smscode,[{strategy:"minLength:4",errorMsg:"请输入短信验证码"}],function(){console.log("验证通过")}),t.addRules(this.password,[{strategy:"minLength:5",errorMsg:"密码长度不能少于5个字符"}],function(){console.log("验证通过")}),t.start()}}}}).call(e,s(2).default)},107:function(t,e,s){"use strict";var o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"reg-label"}),s("view",{staticClass:"input-group"},[s("view",{staticClass:"input-row"},[s("text",{staticClass:"title"},[t._v("手机号：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",maxlength:"11","placeholder-class":"placeholder",placeholder:"请输入手机号码",eventid:"KPW-0"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("view",{staticClass:"input-row"},[s("text",{staticClass:"title"},[t._v("验证码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.smscode,expression:"smscode"}],attrs:{type:"text",maxlength:"4","placeholder-class":"placeholder",placeholder:"请输入短信验证码",eventid:"Vgt-1"},domProps:{value:t.smscode},on:{input:function(e){e.target.composing||(t.smscode=e.target.value)}}}),s("count-down",{ref:"countDown",attrs:{color:"FF9833",size:"30",eventid:"b36-2",mpcomid:"5KH-0"},on:{countDown:t.getCode}})],1),s("view",{staticClass:"input-row"},[s("text",{staticClass:"title"},[t._v("新的密码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password","placeholder-class":"placeholder",placeholder:"请输入新的密码",eventid:"q22-3"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("view",{staticClass:"btn-row"},[s("button",{staticClass:"primary",attrs:{type:"primary",disabled:t._disabled,eventid:"EyF-4"},on:{tap:t.save}},[t._v("保存")])],1)])},staticRenderFns:[]};e.a=o}},[100]);