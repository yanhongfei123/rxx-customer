require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([6],{95:function(t,e,n){"use strict";var o=a(n(1)),s=a(n(96));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(s.default))},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(98),s=n.n(o),a=n(99),i=!1;var r=function(t){i||n(97)},u=n(0)(s.a,a.a,r,null,null);u.options.__file="..\\..\\..\\..\\..\\perfectyan\\app-rxx\\pages\\user\\loginout\\loginout.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] loginout.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},97:function(t,e){},98:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a=n(4),i=(o=a)&&o.__esModule?o:{default:o},r=n(3);e.default={components:{uniInput:i.default},computed:s({},(0,r.mapState)(["hasLogin"])),data:function(){return{name:"",mobile:"",password:"",code:""}},methods:{loginOut:function(){this.$store.dispatch("LoginOut").then(function(){t.redirectTo({url:"/pages/login/login"})})}}}}).call(e,n(2).default)},99:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"reg-label"}),e("view",{staticClass:"input-group"},[e("navigator",{attrs:{url:"../../pwd/pwd"}},[e("view",{staticClass:"input-row space-between"},[e("text",{staticClass:"title"},[this._v("修改密码")]),e("view",{staticClass:"icon-right"})])])],1),e("view",{staticClass:"btn-row"},[e("button",{attrs:{type:"primary",eventid:"ALk-0"},on:{tap:this.loginOut}},[this._v("退出登录")])],1)])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s}},[95]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/loginout/loginout.js.map