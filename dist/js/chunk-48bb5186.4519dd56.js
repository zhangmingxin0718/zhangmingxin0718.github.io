(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48bb5186"],{"0a57":function(t,s,i){"use strict";i("3bbf")},"17be":function(t,s,i){t.exports=i.p+"img/logo.86fa2541.jpg"},"3bbf":function(t,s,i){},b279:function(t,s,i){t.exports=i.p+"img/qq.3e7f88a5.jpg"},bb51:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home"},[i("div",{staticClass:"home_bottom"},[i("div",{staticClass:"info_left animate__animated animate__zoomInDown"},[i("el-card",{staticClass:"box-card me"},[i("img",{staticClass:"avater",attrs:{src:t.logoImg,alt:""}}),i("h1",[t._v("Sugar")]),i("p",[t._v("珍惜时光，不负韶华")]),i("ul",[i("li",{on:{mouseenter:function(s){return t.mouseenter(1)},mouseleave:function(s){return t.mouseleave()}}},[i("i",{staticClass:"iconfont icon-shejiao-QQ"}),1==t.isShow?i("div",{staticClass:"iconurl"},[i("img",{attrs:{src:t.iconUrl[0],alt:""}}),i("div",{staticClass:"arrow"})]):t._e()]),i("li",{on:{mouseenter:function(s){return t.mouseenter(2)},mouseleave:function(s){return t.mouseleave()}}},[i("i",{staticClass:"iconfont icon-shejiao-weixin"}),2==t.isShow?i("div",{staticClass:"iconurl"},[i("img",{attrs:{src:t.iconUrl[1],alt:""}}),i("div",{staticClass:"arrow"})]):t._e()]),i("li",{on:{mouseenter:function(s){return t.mouseenter(3)},mouseleave:function(s){return t.mouseleave()}}},[i("i",{staticClass:"iconfont icon-shejiao-youxiang"}),3==t.isShow?i("div",{staticClass:"email"},[i("p",{staticStyle:{color:"black"}},[t._v("1163723641@qq.com")]),i("div",{staticClass:"arrow"})]):t._e()])]),i("el-divider",[t._v("简介")]),i("div",{staticClass:"intro"},[i("p",[t._v("努力学习前端的小白")]),i("p",[t._v("长路漫漫亦灿灿")]),i("p",[t._v("心之所向，璀璨远方")]),i("p",[t._v("一分耕耘，一分收获")])])],1),i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("热门文章")])]),t._l(t.hotblogList,(function(s,e){return i("a",{key:s.id,staticClass:"text item sb",on:{click:function(i){return t.gotoDetail(s.id)}}},[i("span",{staticClass:"biao red"},[t._v(t._s(e+1))]),i("p",[t._v(t._s(s.title))]),i("div",{staticClass:"red views"},[i("i",{staticClass:"el-icon-view"}),t._v(t._s(s.views)+" ")])])}))],2),i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("网站信息")])]),i("div",{staticClass:"text item"},[t._v(" 文章总数："),i("span",{staticClass:"red"},[t._v(t._s(t.blogList.length))]),t._v(" 篇 ")]),i("div",{staticClass:"text item"},[t._v(" 分类总数："),i("span",{staticClass:"red"},[t._v(t._s(t.getClassifies.length))]),t._v(" 个 ")])])],1),i("div",{staticClass:"info_right animate__animated animate__zoomInRight"},[i("Summary",{attrs:{list:t.blogList}})],1)])])},a=[],o=i("5530"),n=i("17be"),c=i.n(n),l=i("b279"),r=i.n(l),u=i("ee36"),v=i.n(u),m=i("3eb8"),d=i("365c"),f=i("2f62"),_={name:"Home",data:function(){return{logoImg:c.a,blogList:[],hotblogList:[],iconUrl:[r.a,v.a],isShow:0}},computed:Object(o["a"])({},Object(f["b"])(["getClassifies"])),components:{Summary:m["a"]},methods:{mouseenter:function(t){this.isShow=t},mouseleave:function(){this.isShow=0},gotoDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}},created:function(){var t=this;Object(d["b"])().then((function(s){t.hotblogList=s.data,console.log("首页请求到的最热文章：",s)})).catch((function(t){console.log(t)})),Object(d["a"])(10).then((function(s){t.blogList=s.data,console.log("首页请求到的10篇文章：",s)})).catch((function(t){console.log(t)}))}},b=_,h=(i("0a57"),i("2877")),g=Object(h["a"])(b,e,a,!1,null,"d1345eca",null);s["default"]=g.exports},ee36:function(t,s,i){t.exports=i.p+"img/vx.6b6010ee.jpg"}}]);
//# sourceMappingURL=chunk-48bb5186.4519dd56.js.map