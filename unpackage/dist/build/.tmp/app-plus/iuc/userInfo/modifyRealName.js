(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["iuc/userInfo/modifyRealName"],{"0c92":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return i})},"406d":function(e,n,t){"use strict";t.r(n);var u=t("0c92"),i=t("fef6");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("4b35");var c=t("2877"),o=Object(c["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"4b35":function(e,n,t){"use strict";var u=t("7600"),i=t.n(u);i.a},7600:function(e,n,t){},a257:function(e,n,t){"use strict";(function(e,u){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("b6ae"),a={data:function(){return{preNickName:"",nickname:"",currentUserGuid:"",tip:""}},onLoad:function(){var n=this;this.currentUserGuid=i.userInfo.token,e.getStorage({key:"userInfo",success:function(e){console.log(u(e," at iuc\\userInfo\\modifyRealName.vue:39")),n.preNickName=e.data.RealName}})},methods:{ModifyNickName:function(){var n=this,t=this.currentUserGuid,i=this.nickname;e.post("/uc/ModifyNickName",{currentUserGuid:t,userName:i},function(t){t.success&&(console.log(u(t," at iuc\\userInfo\\modifyRealName.vue:52")),n.tip=t.msg,e.showToast({icon:"none",title:n.tip,duration:3e3,position:"center"}),n.preNickName=n.nickname)})}}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},e70c:function(e,n,t){"use strict";(function(e){t("b319"),t("921b");u(t("66fd"));var n=u(t("406d"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},fef6:function(e,n,t){"use strict";t.r(n);var u=t("a257"),i=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);n["default"]=i.a}},[["e70c","common/runtime","common/vendor"]]]);