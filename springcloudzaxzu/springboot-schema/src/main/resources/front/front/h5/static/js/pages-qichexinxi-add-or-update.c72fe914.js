(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qichexinxi-add-or-update"],{"524a":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-110a9c08]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},"7a91":function(e,i,t){var n=t("524a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=t("4f06").default;r("74346afc",n,!0,{sourceMap:!1,shadowMode:!1})},"966d":function(e,i,t){"use strict";var n=t("7a91"),r=t.n(n);r.a},a169:function(e,i,t){"use strict";t.r(i);var n=t("f9dd"),r=t("d4d3");for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);t("966d");var s,o=t("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"110a9c08",null,!1,n["a"],s);i["default"]=l.exports},d2cf:function(e,i,t){"use strict";var n=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var r=n(t("3b8d")),a=n(t("e2b1")),s=n(t("064f")),o={data:function(){return{cross:"",ruleForm:{chepaihao:"",pinpai:"",qicheleixing:"",yanse:"",huandangfangshi:"",fengmian:"",zhuangtai:"",zujin:"",cheliangpailiang:"",zaizhong:"",dengjiriqi:"",cheliangxiangqing:""},pinpaiOptions:[],pinpaiIndex:0,yanseOptions:[],yanseIndex:0,huandangfangshiOptions:[],huandangfangshiIndex:0,zhuangtaiOptions:[],zhuangtaiIndex:0,user:{},ro:{chepaihao:!1,pinpai:!1,qicheleixing:!1,yanse:!1,huandangfangshi:!1,fengmian:!1,zhuangtai:!1,zujin:!1,cheliangpailiang:!1,zaizhong:!1,dengjiriqi:!1,cheliangxiangqing:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:a.default,xiaEditor:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(i){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.dengjiriqi=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return n=e.sent,this.user=n.data,e.next=8,this.$api.option("cheliangpinpai","pinpai",{});case 8:return n=e.sent,this.pinpaiOptions=n.data,this.pinpaiOptions.unshift("请选择品牌"),e.next=13,this.$api.option("cheliangyanse","yanse",{});case 13:if(n=e.sent,this.yanseOptions=n.data,this.yanseOptions.unshift("请选择颜色"),this.huandangfangshiOptions="手动挡,自动挡".split(","),this.zhuangtaiOptions="已租赁,未租赁".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=26;break}return this.ruleForm.id=i.id,e.next=24,this.$api.info("qichexinxi",this.ruleForm.id);case 24:n=e.sent,this.ruleForm=n.data;case 26:if(this.cross=i.cross,!i.cross){e.next=90;break}r=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(r);case 30:if((e.t1=e.t0()).done){e.next=90;break}if(a=e.t1.value,"chepaihao"!=a){e.next=36;break}return this.ruleForm.chepaihao=r[a],this.ro.chepaihao=!0,e.abrupt("continue",30);case 36:if("pinpai"!=a){e.next=40;break}return this.ruleForm.pinpai=r[a],this.ro.pinpai=!0,e.abrupt("continue",30);case 40:if("qicheleixing"!=a){e.next=44;break}return this.ruleForm.qicheleixing=r[a],this.ro.qicheleixing=!0,e.abrupt("continue",30);case 44:if("yanse"!=a){e.next=48;break}return this.ruleForm.yanse=r[a],this.ro.yanse=!0,e.abrupt("continue",30);case 48:if("huandangfangshi"!=a){e.next=52;break}return this.ruleForm.huandangfangshi=r[a],this.ro.huandangfangshi=!0,e.abrupt("continue",30);case 52:if("fengmian"!=a){e.next=56;break}return this.ruleForm.fengmian=r[a].split(",")[0],this.ro.fengmian=!0,e.abrupt("continue",30);case 56:if("zhuangtai"!=a){e.next=60;break}return this.ruleForm.zhuangtai=r[a],this.ro.zhuangtai=!0,e.abrupt("continue",30);case 60:if("zujin"!=a){e.next=64;break}return this.ruleForm.zujin=r[a],this.ro.zujin=!0,e.abrupt("continue",30);case 64:if("cheliangpailiang"!=a){e.next=68;break}return this.ruleForm.cheliangpailiang=r[a],this.ro.cheliangpailiang=!0,e.abrupt("continue",30);case 68:if("zaizhong"!=a){e.next=72;break}return this.ruleForm.zaizhong=r[a],this.ro.zaizhong=!0,e.abrupt("continue",30);case 72:if("dengjiriqi"!=a){e.next=76;break}return this.ruleForm.dengjiriqi=r[a],this.ro.dengjiriqi=!0,e.abrupt("continue",30);case 76:if("cheliangxiangqing"!=a){e.next=80;break}return this.ruleForm.cheliangxiangqing=r[a],this.ro.cheliangxiangqing=!0,e.abrupt("continue",30);case 80:if("clicktime"!=a){e.next=84;break}return this.ruleForm.clicktime=r[a],this.ro.clicktime=!0,e.abrupt("continue",30);case 84:if("clicknum"!=a){e.next=88;break}return this.ruleForm.clicknum=r[a],this.ro.clicknum=!0,e.abrupt("continue",30);case 88:e.next=30;break;case 90:this.styleChange();case 91:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{cheliangxiangqingChange:function(e){this.ruleForm.cheliangxiangqing=e},styleChange:function(){this.$nextTick((function(){}))},dengjiriqiChange:function(e){this.ruleForm.dengjiriqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},pinpaiChange:function(e){this.pinpaiIndex=e.target.value,this.ruleForm.pinpai=this.pinpaiOptions[this.pinpaiIndex]},yanseChange:function(e){this.yanseIndex=e.target.value,this.ruleForm.yanse=this.yanseOptions[this.yanseIndex]},huandangfangshiChange:function(e){this.huandangfangshiIndex=e.target.value,this.ruleForm.huandangfangshi=this.huandangfangshiOptions[this.huandangfangshiIndex]},zhuangtaiChange:function(e){this.zhuangtaiIndex=e.target.value,this.ruleForm.zhuangtai=this.zhuangtaiOptions[this.zhuangtaiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.fengmian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var i,t,n,r,a,s,o,l,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.chepaihao){e.next=3;break}return this.$utils.msg("车牌号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.pinpai){e.next=6;break}return this.$utils.msg("品牌不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.zujin||this.$validate.isNumber(this.ruleForm.zujin)){e.next=9;break}return this.$utils.msg("租金应输入数字"),e.abrupt("return");case 9:if(!this.ruleForm.zaizhong||this.$validate.isIntNumer(this.ruleForm.zaizhong)){e.next=12;break}return this.$utils.msg("载重应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=15;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 15:if(!this.cross){e.next=31;break}if(a=uni.getStorageSync("statusColumnName"),s=uni.getStorageSync("statusColumnValue"),""==a){e.next=31;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=27;break}for(o in i)o==a&&(i[o]=s);return l=uni.getStorageSync("crossTable"),e.next=25,this.$api.update("".concat(l),i);case 25:e.next=31;break;case 27:t=Number(uni.getStorageSync("userid")),n=i["id"],r=uni.getStorageSync("statusColumnName"),r=r.replace(/\[/,"").replace(/\]/,"");case 31:if(!n||!t){e.next=53;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=n,u={page:1,limit:10,crossuserid:t,crossrefid:n},e.next=37,this.$api.list("qichexinxi",u);case 37:if(c=e.sent,!(c.data.total>=r)){e.next=43;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("qichexinxi",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("qichexinxi",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:e.next=61;break;case 53:if(!this.ruleForm.id){e.next=58;break}return e.next=56,this.$api.update("qichexinxi",this.ruleForm);case 56:e.next=60;break;case 58:return e.next=60,this.$api.add("qichexinxi",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),n=i.getMonth()+1,r=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=o},d4d3:function(e,i,t){"use strict";t.r(i);var n=t("d2cf"),r=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);i["default"]=r.a},f9dd:function(e,i,t){"use strict";var n={"xia-editor":t("064f").default,"w-picker":t("e2b1").default},r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"auto"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("车牌号")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#939393",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.chepaihao,placeholder:"车牌号"},model:{value:e.ruleForm.chepaihao,callback:function(i){e.$set(e.ruleForm,"chepaihao",i)},expression:"ruleForm.chepaihao"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("品牌")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.pinpaiIndex,range:e.pinpaiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pinpaiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#939393"}},[e._v(e._s(e.ruleForm.pinpai?e.ruleForm.pinpai:"请选择品牌"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("汽车类型")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#939393",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.qicheleixing,placeholder:"汽车类型"},model:{value:e.ruleForm.qicheleixing,callback:function(i){e.$set(e.ruleForm,"qicheleixing",i)},expression:"ruleForm.qicheleixing"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("颜色")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.yanseIndex,range:e.yanseOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.yanseChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#939393"}},[e._v(e._s(e.ruleForm.yanse?e.ruleForm.yanse:"请选择颜色"))])],1)],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("换挡方式")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.huandangfangshiIndex,range:e.huandangfangshiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.huandangfangshiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#939393"}},[e._v(e._s(e.ruleForm.huandangfangshi?e.ruleForm.huandangfangshi:"请选择换挡方式"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.fengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("封面")]),e.ruleForm.fengmian?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("状态")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.zhuangtaiIndex,range:e.zhuangtaiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.zhuangtaiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#939393"}},[e._v(e._s(e.ruleForm.zhuangtai?e.ruleForm.zhuangtai:"请选择状态"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("租金")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#939393",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zujin,placeholder:"租金"},model:{value:e.ruleForm.zujin,callback:function(i){e.$set(e.ruleForm,"zujin",i)},expression:"ruleForm.zujin"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("车辆排量")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#939393",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.cheliangpailiang,placeholder:"车辆排量"},model:{value:e.ruleForm.cheliangpailiang,callback:function(i){e.$set(e.ruleForm,"cheliangpailiang",i)},expression:"ruleForm.cheliangpailiang"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("载重")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#939393",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zaizhong,placeholder:"载重"},model:{value:e.ruleForm.zaizhong,callback:function(i){e.$set(e.ruleForm,"zaizhong",i)},expression:"ruleForm.zaizhong"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#E6EBFF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"center"}},[e._v("登记日期")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:e.ruleForm.dengjiriqi},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.dengjiriqiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#939393"}},[e._v(e._s(e.ruleForm.dengjiriqi?e.ruleForm.dengjiriqi:"请选择登记日期"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0 70rpx",color:"#333",background:"#e6ebff",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",fontWeight:"500"}},[e._v("车辆详情")]),t("xia-editor",{ref:"editor",style:{minHeight:"300rpx",border:"2rpx solid #efefef",width:"100%",padding:"10rpx 20rpx",height:"auto"},attrs:{placeholder:"车辆详情"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.cheliangxiangqingChange.apply(void 0,arguments)}},model:{value:e.ruleForm.cheliangxiangqing,callback:function(i){e.$set(e.ruleForm,"cheliangxiangqing",i)},expression:"ruleForm.cheliangxiangqing"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",alignItems:"center",flexDirection:"column",justifyContent:"space-between",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"10rpx 0",color:"rgb(255, 255, 255)",borderRadius:"20rpx",background:"#1C3AEA",width:"90%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];t.d(i,"b",(function(){return r})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return n}))}}]);