require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{85:function(t,e,a){"use strict";var n=s(a(1)),i=s(a(86));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},86:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(88),i=a.n(n),s=a(89);var o=function(t){a(87)},c=a(0)(i.a,s.a,o,null,null);e.default=c.exports},87:function(t,e){},88:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,i=a(4),s=(n=i)&&n.__esModule?n:{default:n};e.default={components:{uniInput:s.default},data:function(){return{disabled:!0,name:"云科贷",proType:"",dateType:"",apply:{amount:"",ORDER_PRODUCTTYPE:1,cycleID:1,Latitude:t.getStorageSync("latitude"),Longitude:t.getStorageSync("longitude")},productList:[],productDate:[]}},methods:{save:function(){var e=this;this.API.createOrder(this.apply).then(function(a){e.Util.Toast.toast("申请成功"),setTimeout(function(){t.switchTab({url:"/pages/order/order"})},2e3)})},bindInput:function(t){},productChange:function(t){var e=this.productList[t.detail.value];this.proType=e.name,this.apply.ORDER_PRODUCTTYPE=e.productTypeid},dateChange:function(t){var e=this.productDate[t.detail.value];this.apply.cycleID=e.ID,this.dateType=e.name}},onLoad:function(){var t=this;this.API.getproductbytype({product:2}).then(function(e){t.productList=e.data,t.proType=t.productList[0].name}),this.API.getcycle().then(function(e){t.productDate=e.data,t.dateType=t.productDate[0].name})}}}).call(e,a(2).default)},89:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"reg-label"}),a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row  space-between"},[a("text",{staticClass:"title"},[t._v("贷款产品")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请输入贷款产品",eventid:"cG4-0"},domProps:{value:t.name},on:{input:[function(e){e.target.composing||(t.name=e.target.value)},t.bindInput]}})]),a("view",{staticClass:"input-row  space-between"},[a("text",{staticClass:"title"},[t._v("贷款额度")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.apply.amount,expression:"apply.amount"}],attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请输入贷款额度",eventid:"QO4-1"},domProps:{value:t.apply.amount},on:{input:[function(e){e.target.composing||(t.apply.amount=e.target.value)},t.bindInput]}})]),a("view",{staticClass:"input-row  space-between"},[a("text",{staticClass:"title"},[t._v("贷款类型")]),a("picker",{staticClass:"picker-item",attrs:{mode:"selector",range:t.productList,"range-key":"name",eventid:"R0s-2"},on:{change:t.productChange}},[a("view",[t._v(t._s(t.proType))])]),a("view",{staticClass:"icon"})],1),a("view",{staticClass:"input-row  space-between"},[a("text",{staticClass:"title"},[t._v("贷款周期")]),a("picker",{staticClass:"picker-item",attrs:{mode:"selector",range:t.productDate,"range-key":"name",eventid:"qHA-3"},on:{change:t.dateChange}},[a("view",[t._v(t._s(t.dateType))])]),a("view",{staticClass:"icon"})],1),t._m(0)]),a("view",{staticClass:"btn-row"},[a("button",{attrs:{type:"primary",disabled:!t.apply.amount,eventid:"uHv-4"},on:{tap:t.save}},[t._v("立即申请")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-row  space-between"},[e("text",{staticClass:"title"},[this._v("贷款手续费")]),e("view",{staticClass:"rate"},[this._v("1%")])])}]};e.a=n}},[85]);