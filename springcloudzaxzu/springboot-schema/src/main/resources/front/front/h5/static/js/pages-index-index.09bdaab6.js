(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0bd3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4e3cf8e8]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),t.exports=e},"0d9b":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac4d"),i("8a81"),i("ac6a"),i("96cf");var r=n(i("3b8d")),a=n(i("2971"));i("651d");var s=n(i("b704")),o={components:{uniIcons:s.default},data:function(){return{options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",aboutUsDetail:{},systemIntroductionDetail:{},menuList:[],swiperMenuList:[],user:{},tableName:"",swiperList:[],qichexinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,i,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.role=uni.getStorageSync("role"),e=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:i=t.sent,this.user=i.data,this.tableName=e,n=a.default.list(),this.menuList=n,this.menuList.forEach((function(t,e){r.role==t.roleName&&t.frontMenu.forEach((function(t,e){t.child[0].buttons.indexOf("查看")>-1&&r.swiperMenuList.push(t)}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,i,n,r,a,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=[],t.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=t.sent,n=!0,r=!1,a=void 0,t.prev=7,s=e.data.list[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)c=o.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&i.push({img:c.value,title:c.name});t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](7),r=!0,a=t.t0;case 15:t.prev=15,t.prev=16,n||null==s.return||s.return();case 18:if(t.prev=18,!r){t.next=21;break}throw a;case 21:return t.finish(18);case 22:return t.finish(15);case 23:return i&&(this.swiperList=i),this.getAboutUs(),this.getSystemIntroduction(),t.next=28,this.$api.list("news",{page:1,limit:6});case 28:return e=t.sent,this.news=e.data.list,t.next=32,this.$api.recommend("qichexinxi",{page:1,limit:6});case 32:e=t.sent,this.qichexinxilist=e.data.list;case 34:case"end":return t.stop()}}),t,this,[[7,11,15,23],[16,,18,22]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{onSwiperTap:function(t){},getAboutUs:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("aboutus",1);case 2:e=t.sent,this.aboutUsDetail=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSystemIntroduction:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("systemintro",1);case 2:e=t.sent,this.systemIntroductionDetail=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onNewsDetailTap:function(t){this.$utils.jump("../news-detail/news-detail?id=".concat(t))},onDetailTap:function(t,e){this.$utils.jump("../".concat(t,"/detail?id=").concat(e))},onPageTap:function(t){uni.navigateTo({url:"../".concat(t,"/list"),fail:function(){uni.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){uni.setStorageSync("useridTag",0),uni.navigateTo({url:t,fail:function(){uni.switchTab({url:t})}})}}};e.default=o},"62c1":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{width:"100%",background:"#EAF2FF",height:"100%"}},[i("v-uni-swiper",{staticClass:"swiper",style:{width:"94%",margin:"20rpx 3%",overflow:"hidden",borderRadius:"20rpx",background:"#fff",height:"360rpx"},attrs:{"indicator-dots":!1,autoplay:!0,circular:!1,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:3e3,vertical:!1}},t._l(t.swiperList,(function(e,n){return i("v-uni-swiper-item",{key:n,style:{width:"100%",background:"#fff",height:"360rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSwiperTap(e)}}},[i("v-uni-image",{style:{width:"100%",objectFit:"cover",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+e.img}}),t._e()],1)})),1),i("v-uni-view",{staticClass:"menu",style:{padding:"0",margin:"0",flexWrap:"wrap",background:"#f7f7f7",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[t._l(t.menuList,(function(e){return[t._l(e.frontMenu,(function(n,r){return t.role==e.roleName?[t._l(n.child,(function(e,n){return[t._l(e.buttons,(function(n,r){return["查看"==n&&"yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName?i("v-uni-view",{key:r+"_0",staticClass:"menu-list",style:{width:"23%",padding:"12rpx 0",margin:"10rpx 0",height:"auto"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPageTap2("../"+e.tableName+"/list")}}},[i("v-uni-view",{staticClass:"iconarr",class:e.appFrontIcon,style:{padding:"0",margin:"0px auto",color:"#fff",borderRadius:"100%",textAlign:"center",background:"#3A4C94",display:"block",width:"80rpx",lineHeight:"80rpx",fontSize:"40rpx",height:"80rpx"}}),i("v-uni-view",{style:{padding:"0",margin:"20rpx auto 0",color:"#333",textAlign:"center",width:"100%",lineHeight:"28rpx",fontSize:"28rpx"}},[t._v(t._s(e.menu.split("列表")[0]))])],1):t._e()]}))]}))]:t._e()}))]}))],2),i("v-uni-view",{style:{padding:"0 24rpx",margin:"0 0 20rpx",borderRadius:"20rpx",flexWrap:"wrap",background:"#6797FF",display:"flex",width:"100%",height:"auto"}},[i("v-uni-view",{style:{width:"100%",lineHeight:"1.5",fontSize:"48rpx",color:"#fff",textAlign:"center"}},[t._v(t._s(t.systemIntroductionDetail.title))]),i("v-uni-view",{style:{width:"100%",margin:"0 0 20rpx",lineHeight:"1.5",fontSize:"32rpx",color:"#fff",textAlign:"center"}},[t._v(t._s(t.systemIntroductionDetail.subtitle))]),i("v-uni-view",{style:{width:"100%",flexWrap:"wrap",display:"flex",height:"auto"}},[t.systemIntroductionDetail.picture1?i("img",{style:{width:"100%",margin:"0",objectFit:"cover",flex:1,display:"block",height:"200rpx"},attrs:{src:t.baseUrl+t.systemIntroductionDetail.picture1}}):t._e(),t.systemIntroductionDetail.picture2?i("img",{style:{margin:"0 10rpx",objectFit:"cover",flex:"0",display:"block",height:"0"},attrs:{src:t.baseUrl+t.systemIntroductionDetail.picture2}}):t._e(),t.systemIntroductionDetail.picture3?i("img",{style:{margin:"0 10rpx",objectFit:"cover",flex:"0",display:"block",height:"0"},attrs:{src:t.baseUrl+t.systemIntroductionDetail.picture3}}):t._e()]),i("v-uni-view",{style:{width:"100%",padding:"0",margin:"0 0 20rpx 0",lineHeight:"2",fontSize:"28rpx",color:"#fff"},domProps:{innerHTML:t._s(t.systemIntroductionDetail.content)}}),i("v-uni-view",{style:{width:"50%",display:"none",height:"160rpx"}}),i("v-uni-view",{style:{width:"50%",display:"none",height:"160rpx"}})],1),i("v-uni-view",{staticClass:"listBox recommend"},[t._e(),i("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 24rpx",margin:"0"}},[i("v-uni-view",{style:{fontSize:"40rpx",lineHeight:"88rpx",color:"#1C3AEA",fontWeight:"600"}},[t._v("汽车信息推荐")])],1),t._e(),i("v-uni-view",{staticClass:"list-box style2",style:{padding:"24rpx",margin:"0",flexWrap:"wrap",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},t._l(t.qichexinxilist,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list-item",style:{width:"31%",boxShadow:"0 2rpx 12rpx rgba(0,0,0,.3)",margin:"0 0 20rpx",backgroundColor:"#fff",height:"auto"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onDetailTap("qichexinxi",e.id)}}},[i("v-uni-view",{staticClass:"list-item-title ",style:{padding:"6rpx 20rpx",color:"#fff",textAlign:"center",background:"#1C3AEA",width:"100%",lineHeight:"1.5",fontSize:"28rpx"}},[t._v(t._s(e.chepaihao))]),i("v-uni-view",{staticClass:"list-item-title ",style:{padding:"6rpx 20rpx",color:"#fff",textAlign:"center",background:"#1C3AEA",width:"100%",lineHeight:"1.5",fontSize:"28rpx"}},[t._v("品牌:"+t._s(e.pinpai))]),"http"==e.fengmian.substring(0,4)?i("v-uni-image",{staticClass:"list-item-image",style:{padding:"0",margin:"10rpx",objectFit:"cover",borderRadius:"50%",display:"block",width:"200rpx",height:"200rpx"},attrs:{mode:"aspectFill",src:e.fengmian}}):i("v-uni-image",{staticClass:"list-item-image",style:{padding:"0",margin:"10rpx",objectFit:"cover",borderRadius:"50%",display:"block",width:"200rpx",height:"200rpx"},attrs:{mode:"aspectFill",src:e.fengmian?t.baseUrl+e.fengmian.split(",")[0]:""}}),i("v-uni-view",{staticClass:"list-item-title ",style:{padding:"6rpx 20rpx",color:"#fff",textAlign:"center",background:"#1C3AEA",width:"100%",lineHeight:"1.5",fontSize:"28rpx"}},[t._v("状态:"+t._s(e.zhuangtai))])],1)})),1),t._e()],1),i("v-uni-view",{staticClass:"listBox news"},[t._e(),i("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 40rpx",margin:"0",justifyContent:"space-between",fontWeight:"600",display:"flex"}},[i("v-uni-view",{style:{color:"#1C3AEA",fontSize:"40rpx",lineHeight:"88rpx"}},[t._v("公告信息")]),i("v-uni-text",{style:{color:"#1C3AEA",fontSize:"32rpx",lineHeight:"88rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPageTap("news")}}},[t._v("查看更多")])],1),t._e(),i("v-uni-view",{staticClass:"news-box5",style:{padding:"24rpx",margin:"0",flexWrap:"wrap",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},t._l(t.news,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list-item",style:{border:"2rpx solid #1C3AEA",width:"47%",margin:"0 10rpx 20rpx",backgroundColor:"#fff",height:"auto"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onNewsDetailTap(e.id)}}},[i("v-uni-view",{staticClass:"title ",style:{padding:"4rpx 20rpx",overflow:"hidden",color:"#fff",background:"#1C3AEA",width:"100%",lineHeight:"48rpx",fontSize:"28rpx",height:"52rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"category ",style:{padding:"4rpx 20rpx",margin:"4rpx 0",overflow:"hidden",color:"#B0B0B0",width:"100%",lineHeight:"40rpx",fontSize:"28rpx",height:"80rpx"}},[t._v(t._s(e.introduction))]),i("v-uni-view",{staticClass:"time ",style:{width:"100%",padding:"4rpx 20rpx",lineHeight:"1.2",fontSize:"28rpx",color:"#999",textAlign:"right"}},[t._v(t._s(e.addtime.split(" ")[0]))])],1)})),1),t._e()],1),i("v-uni-view",{style:{padding:"10rpx 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,.3)",margin:"0 2.5% 20rpx",flexWrap:"wrap",background:"#fff",display:"flex",width:"95%",height:"auto"}},[i("v-uni-view",{style:{width:"100%",lineHeight:"1.5",fontSize:"48rpx",color:"#1c3aea",textAlign:"center",fontWeight:"600"}},[t._v(t._s(t.aboutUsDetail.title))]),i("v-uni-view",{style:{width:"100%",margin:"0 0 20rpx",lineHeight:"1.5",fontSize:"32rpx",color:"#999",textAlign:"center"}},[t._v(t._s(t.aboutUsDetail.subtitle))]),i("v-uni-view",{style:{width:"100%",padding:"0 10rpx",flexWrap:"wrap",display:"flex",height:"auto"}},[t.aboutUsDetail.picture1?i("img",{style:{margin:"0 10rpx",objectFit:"cover",flex:1,display:"block",height:"240rpx"},attrs:{src:t.baseUrl+t.aboutUsDetail.picture1}}):t._e(),t.aboutUsDetail.picture2?i("img",{style:{margin:"0 10rpx",objectFit:"cover",flex:1,display:"none",height:"160rpx"},attrs:{src:t.baseUrl+t.aboutUsDetail.picture2}}):t._e(),t.aboutUsDetail.picture3?i("img",{style:{margin:"0 10rpx",objectFit:"cover",flex:1,display:"none",height:"160rpx"},attrs:{src:t.baseUrl+t.aboutUsDetail.picture3}}):t._e()]),i("v-uni-view",{style:{width:"100%",padding:"0 20rpx",margin:"0 0 20rpx 0",lineHeight:"2",fontSize:"28rpx",color:"rgb(102, 102, 102)"},domProps:{innerHTML:t._s(t.aboutUsDetail.content)}}),i("v-uni-view",{style:{width:"50%",display:"none",height:"160rpx"}}),i("v-uni-view",{style:{width:"50%",background:"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat",display:"none",height:"160rpx"}})],1)],1)],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},7168:function(t,e,i){var n=i("0bd3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("fbd95b02",n,!0,{sourceMap:!1,shadowMode:!1})},"7f37":function(t,e,i){"use strict";var n=i("7168"),r=i.n(n);r.a},8069:function(t,e,i){"use strict";i.r(e);var n=i("0d9b"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},f75a:function(t,e,i){"use strict";i.r(e);var n=i("62c1"),r=i("8069");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("7f37");var s,o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"4e3cf8e8",null,!1,n["a"],s);e["default"]=c.exports}}]);