require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([16],{33:function(t,s,a){"use strict";var i=e(a(1)),n=e(a(34));function e(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},34:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(36),n=a.n(i),e=a(44);var o=function(t){a(35)},r=a(0)(n.a,e.a,o,null,null);s.default=r.exports},35:function(t,s){},36:function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var i,n=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},e=a(3),o=a(4),r=(i=o)&&i.__esModule?i:{default:i};s.default={components:{uniInput:r.default},data:function(){return{loading:!1,account:"",password:"",positionTop:0}},computed:n({},(0,e.mapState)(["token"]),{disabled:function(){return!this.account||!this.password}}),methods:n({},(0,e.mapActions)(["Login"]),{initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(this.account.length<11)t.showToast({icon:"none",title:"请输入正确的手机号"});else{var s={phone:this.account,password:this.password,type:1};this.$store.dispatch("Login",s).then(function(s){plus.os.name,t.setStorageSync("userInfo",JSON.stringify(s.data)),t.switchTab({url:"../home/home"})})}}}),onLoad:function(){this.initPosition()}}}).call(s,a(2).default)},44:function(t,s,a){"use strict";var i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"content"},[a("view",{staticClass:"auto-wrap"},[a("image",{staticClass:"logo",attrs:{src:"../../static/img/app-logo.png"}}),a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("image",{staticClass:"icon-m icon",attrs:{src:"../../static/img/shouji.png"}}),a("uni-input",{staticClass:"uni-input",attrs:{maxlength:"11",type:"text",clearable:"",focus:"",placeholder:"请输入手机号",eventid:"xCm-0",mpcomid:"OrR-0"},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}})],1),a("view",{staticClass:"input-row"},[a("image",{staticClass:"icon-p icon",attrs:{src:"../../static/img/suo.png"}}),a("uni-input",{attrs:{type:"password",displayable:"",placeholder:"请输入密码",eventid:"3Lm-1",mpcomid:"nOQ-1"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1)]),a("view",{staticClass:"action-row"},[a("navigator",{staticClass:"navigator f-pas",attrs:{url:"../pwd/pwd"}},[t._v("忘记密码 ?")]),a("navigator",{staticClass:"navigator register",attrs:{url:"../reg/reg"}},[t._v("新用户注册")])],1),a("view",{staticClass:"btn-row login-wrap"},[a("button",{class:[t.disabled?"":"primary"],attrs:{type:"primary",id:"primary",loading:t.loading,"hover-class":"other-button-hover",disabled:t.disabled,eventid:"KNl-2"},on:{tap:t.bindLogin}},[t._v("登录")])],1),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"footer"},[s("view",{staticClass:"footer-des"},[this._v("信贷经理请下载融小小经理端，此版本为贷款用户专用")]),s("view",{staticClass:"down-load"},[this._v("立即下载")])])}]};s.a=i}},[33]);