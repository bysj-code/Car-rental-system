(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cheliangpinpai-add-or-update"],{2752:function(e,t,n){var r=n("b0b0");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("313bb038",r,!0,{sourceMap:!1,shadowMode:!1})},"5c92":function(e,t,n){"use strict";n.r(t);var r=n("9d3f"),i=n("f043");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("d973");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"9072b20c",null,!1,r["a"],s);t["default"]=o.exports},"92ae":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a481"),n("c5f6"),n("f559"),n("ac6a"),n("96cf");var i=r(n("3b8d")),a=r(n("e2b1")),s=r(n("064f")),u={data:function(){return{cross:"",ruleForm:{pinpai:""},user:{},ro:{pinpai:!1}}},components:{wPicker:a.default,xiaEditor:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("cheliangpinpai",this.ruleForm.id);case 11:r=e.sent,this.ruleForm=r.data;case 13:if(this.cross=t.cross,!t.cross){e.next=25;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=25;break}if(a=e.t1.value,"pinpai"!=a){e.next=23;break}return this.ruleForm.pinpai=i[a],this.ro.pinpai=!0,e.abrupt("continue",17);case 23:e.next=17;break;case 25:this.styleChange();case 26:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,n,r,i,a,s,u,o,c,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=16;break}if(a=uni.getStorageSync("statusColumnName"),s=uni.getStorageSync("statusColumnValue"),""==a){e.next=16;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=12;break}for(u in t)u==a&&(t[u]=s);return o=uni.getStorageSync("crossTable"),e.next=10,this.$api.update("".concat(o),t);case 10:e.next=16;break;case 12:n=Number(uni.getStorageSync("userid")),r=t["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!n){e.next=38;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=r,c={page:1,limit:10,crossuserid:n,crossrefid:r},e.next=22,this.$api.list("cheliangpinpai",c);case 22:if(p=e.sent,!(p.data.total>=i)){e.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 28:if(!this.ruleForm.id){e.next=33;break}return e.next=31,this.$api.update("cheliangpinpai",this.ruleForm);case 31:e.next=35;break;case 33:return e.next=35,this.$api.add("cheliangpinpai",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:e.next=46;break;case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("cheliangpinpai",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("cheliangpinpai",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u},"9d3f":function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[n("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("品牌")]),n("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#939393",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.pinpai,placeholder:"品牌"},model:{value:e.ruleForm.pinpai,callback:function(t){e.$set(e.ruleForm,"pinpai",t)},expression:"ruleForm.pinpai"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",alignItems:"center",flexDirection:"column",justifyContent:"space-between",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"10rpx 0",color:"rgb(255, 255, 255)",borderRadius:"20rpx",background:"#1C3AEA",width:"90%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},b0b0:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-9072b20c]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},d973:function(e,t,n){"use strict";var r=n("2752"),i=n.n(r);i.a},f043:function(e,t,n){"use strict";n.r(t);var r=n("92ae"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a}}]);