(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["iuc/softwareInstall/v1/create"],{7655:function(t,a,n){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c},i=[];n.d(a,"a",function(){return o}),n.d(a,"b",function(){return i})},"8c5b":function(t,a,n){"use strict";n.r(a);var o=n("a9c9"),i=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(a,t,function(){return o[t]})}(e);a["default"]=i.a},"9aa5":function(t,a,n){"use strict";var o=n("a0a7"),i=n.n(o);i.a},a0a7:function(t,a,n){},a9c9:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n("b6ae");var o="00000000-0000-0000-0000-000000000000",i=n("0496"),e={methods:{submit:function(){var a=this;this.model.RoomId!==o?this.model.ApplicationName?(this.isloading=!0,t.post("/api/installApp/v1/CreateApplication",this.model,function(n){a.isloading=!1,t.navigateTo({url:"/iuc/softwareInstall/v1/list"})})):alert("必须填写待装软件的名称"):alert("必须选择实验室")},columnChange:function(t){var a=t.detail.column,n=t.detail.value;if(!a){var o=this.buildings[n].ID;this.rooms=this.allRooms.filter(function(t){return t.BuildingId===o})}},selectRoom:function(t){var a=t.detail.value[1],n=this.rooms[a];this.roomName=n.ID===o?"选择实验室":"".concat(n.Building.Name," ").concat(n.Name),this.model.RoomId=n.ID},goBack:function(){t.navigateTo({url:"/iuc/softwareInstall/v1/list"})}},data:function(){return{isloading:!1,model:{},roomName:"",buildings:[{ID:o,Name:"置空"}],rooms:[{ID:o,Name:"置空"}],roomIndex:[0,0],allRoom:[],steps:i}},onLoad:function(a){var n=this,o=a.id||null;t.get("/api/installApp/v1/GetApplication",{id:o},function(t){t.success&&(n.model=t.data,n.buildings=t.buildings,n.allRooms=t.rooms,n.roomName="暂无设置"===t.data.RoomName?"选择实验室":t.data.RoomName)})}};a.default=e}).call(this,n("6e42")["default"])},bfcb:function(t,a,n){"use strict";n.r(a);var o=n("7655"),i=n("8c5b");for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);n("9aa5");var l=n("2877"),u=Object(l["a"])(i["default"],o["a"],o["b"],!1,null,null,null);a["default"]=u.exports},cfce:function(t,a,n){"use strict";(function(t){n("b319"),n("921b");o(n("66fd"));var a=o(n("bfcb"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])}},[["cfce","common/runtime","common/vendor"]]]);