(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["iuc-userInfo-modifyRealName"],{"1ad9":function(t,e,n){"use strict";var a=n("b5c6"),i=n.n(a);i.a},"65b1":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-6b1e0a03]{background-color:#fff}body.?%PAGE?%[data-v-6b1e0a03]{background-color:#fff}",""])},"8f48":function(t,e,n){"use strict";n.r(e);var a=n("aff7"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},9953:function(t,e,n){"use strict";n.r(e);var a=n("d4c5"),i=n("8f48");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("1ad9");var r,u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6b1e0a03",null,!1,a["a"],r);e["default"]=s.exports},aff7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("6faa"),i={data:function(){return{preNickName:"",nickname:"",currentUserGuid:"",tip:""}},onLoad:function(){var t=this;this.currentUserGuid=a.userInfo.token,uni.getStorage({key:"userInfo",success:function(e){t.preNickName=e.data.RealName}})},methods:{ModifyNickName:function(){var t=this,e=this.currentUserGuid,n=this.nickname;uni.post("/uc/ModifyNickName",{currentUserGuid:e,userName:n},function(e){e.success&&(t.tip=e.msg,uni.showMessage(t.tip),t.preNickName=t.nickname)})}}};e.default=i},b5c6:function(t,e,n){var a=n("65b1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f10ddcb6",a,!0,{sourceMap:!1,shadowMode:!1})},d4c5:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("修改昵称")])],2),n("v-uni-view",{staticClass:"margin"},[n("v-uni-view",{staticClass:"input-group"},[n("v-uni-input",{staticClass:"solids-bottom margin-lr padding-left-sm",staticStyle:{"border-radius":"30px"},attrs:{focus:"true",placeholder:t.preNickName,"placeholder-class":"text-lg",type:"text",maxlength:"100"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),n("v-uni-view",{staticClass:"text-lg margin-lr-lg margin-top-xs"},[t._v("请输入新昵称")]),n("v-uni-view",{staticClass:"padding flex flex-direction margin-top-lg"},[n("v-uni-button",{staticClass:"cu-btn bg-blue lg",attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ModifyNickName()}}},[t._v("保存")])],1)],1)],1)},c=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return a})}}]);