require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{75:function(t,e,s){"use strict";var a=i(s(1)),r=i(s(76));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))},76:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(78),r=s.n(a),i=s(79),o=!1;var n=function(t){o||s(77)},l=s(0)(r.a,i.a,n,null,null);l.options.__file="..\\..\\..\\..\\..\\perfectyan\\app-rxx\\pages\\order-detail\\order-detail.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] order-detail.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},77:function(t,e){},78:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{logoSrc:"../../static/img/logo.png",oIndex:-1,orderNumber:"2018101014210000",state:["未接单","处理中","已放款","已拒绝","补充资料"],starList:[0,1,2,3,4],orderDetail:{}}},methods:{lightStar:function(t){var e=this;this.oIndex=t,this.API.orderScore({ID:this.orderDetail.ID,score:t+1}).then(function(t){e.Util.Toast.toast("点赞成功")})}},onLoad:function(e){this.orderNumber=e.orderNumber,this.orderDetail=JSON.parse(t.getStorageSync("orderItem"));var s=this.orderDetail.CUSTOMER.user.AVATAR,a=this.orderDetail.score;s&&(this.logoSrc=s),a&&(this.oIndex=a-1)}}}).call(e,s(2).default)},79:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"order-number"},[t._v("订单编号: "+t._s(t.orderNumber)+" ")]),s("view",{staticClass:"cell-mid"},[s("view",{staticClass:"apply-money h-70"},[t._v("贷款额度: "+t._s(t.orderDetail.amount||0)+" ")]),s("view",{staticClass:"apply-name h-70"},[t._v("产品名称: "+t._s(t.orderDetail.pruductname)+" ")]),s("view",{staticClass:"apply-type h-70"},[t._v("贷款类型: "+t._s(t.orderDetail.typename)+" ")]),s("view",{staticClass:"apply-type h-70"},[t._v("贷款周期: "+t._s(t.orderDetail.cyclename||"")+" ")]),s("view",{staticClass:"state"},[t._v(t._s(t.state[t.orderDetail.STATUS-1]))])]),1!==t.orderDetail.STATUS?s("view",{staticClass:"user-info"},[t._m(0),s("image",{staticClass:"head-logo",attrs:{src:t.logoSrc,mode:"widthFix"}}),s("view",{staticClass:"manager"},[t._v("贷款经理: "+t._s(t.orderDetail.CUSTOMER.user.NAME))]),s("view",{staticClass:"manager-mobile"},[t._v("电话: "+t._s(t.orderDetail.CUSTOMER.user.PHONE))]),s("view",{staticClass:"praise-wrap"},t._l(t.starList,function(e,a){return s("view",{key:a,staticClass:"star-cont",attrs:{eventid:"mOK-0-"+a},on:{tap:function(e){t.lightStar(a)}}},[t.oIndex<a?s("image",{staticClass:"star",attrs:{src:"../../static/img/def-star.png",mode:"widthFix"}}):s("image",{staticClass:"star",attrs:{src:"../../static/img/light-star.png",mode:"widthFix"}})])})),s("view",{staticClass:"praise-me"},[t._v("请为我点个赞吧")])]):t._e()])])])};a._withStripped=!0;var r={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top-wrap"},[e("view",{staticClass:"top-title"},[this._v("信贷经理信息")])])}]};e.a=r}},[75]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order-detail/order-detail.js.map