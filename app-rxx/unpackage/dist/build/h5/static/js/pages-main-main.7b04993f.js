(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-main"],{"5c4b":function(e,n,t){var i=t("e41f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("7a2198bc",i,!0,{sourceMap:!1,shadowMode:!1})},"996b":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"hello"},[t("v-uni-view",{staticClass:"ul"},[t("v-uni-view",[e._v("这是 uni-app 带登录模板的示例App首页。")]),t("v-uni-view",[e._v("在 “我的” 中点击 “退出” 可以 “注销当前账户”")])],1)],1),t("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.loginOut(n)}}},[e._v("退出登录")])],1)},o=[],l=t("2f62");function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var r={computed:a({},Object(l["c"])(["token"])),methods:{loginOut:function(){this.$store.dispatch("LoginOut").then(function(){uni.redirectTo({url:"../login/login"})})}},onLoad:function(){console.log("token==="+this.token),this.token||this.Util.Toast.showModal("未登录","登录后才能继续",function(e){e.confirm&&uni.redirectTo({url:"../login/login"})})}},u=r,s=(t("da54"),t("2877")),f=Object(s["a"])(u,i,o,!1,null,"94f793be",null);f.options.__file="main.vue";n["default"]=f.exports},da54:function(e,n,t){"use strict";var i=t("5c4b"),o=t.n(i);o.a},e41f:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n.hello[data-v-94f793be]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column\n}\n.title[data-v-94f793be],.ul[data-v-94f793be]{color:#8f8f94;margin-top:50px\n}\n.ul[data-v-94f793be]{font-size:30px\n}\n.ul>uni-view[data-v-94f793be]{line-height:50px\n}",""])}}]);