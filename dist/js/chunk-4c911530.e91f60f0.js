(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c911530"],{e630:function(e,t,s){"use strict";s("f4cd")},f4cd:function(e,t,s){},fbdb:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editmeg"},[s("Emoji",{ref:"emoji",attrs:{textConent:e.rename}}),s("button",{on:{click:e.onSubmit}},[e._v("提交")]),s("div",{staticClass:"bottom"},[s("div",{staticClass:"block"},e._l(e.list,(function(t,n){return s("div",{key:n,staticClass:"timeline"},[s("p",[s("span",[e._v(e._s(t.megs.name))]),e._v(e._s(t.megs.createdAt)+" ")]),s("p",{staticClass:"content"},[e._v(e._s(t.megs.content))]),s("div",{staticClass:"del_re"},[s("p",{staticClass:"reply",on:{click:function(s){return e.replyMessage(n,t.megs.name)}}},[e._v("回复")]),s("p",{staticClass:"reply",on:{click:function(s){return e.delMessage(t.megs.id)}}},[e._v("删除")])]),e._l(t.reply,(function(t,i){return s("div",{key:i,staticClass:"rep"},[s("svg",{staticClass:"icon inicon",attrs:{"aria-hidden":"true"}},[0==t.star?s("use",{attrs:{"xlink:href":"#icon-taidixiongwanoukeai"}}):e._e(),1==t.star?s("use",{attrs:{"xlink:href":"#icon-labixiaoxin-"}}):e._e()]),s("p",[s("span",[e._v(e._s(t.name))]),e._v(e._s(t.createdAt)+" ")]),s("p",{staticClass:"content"},[e._v(e._s(t.content))]),s("div",{staticClass:"del_re"},[s("p",{staticClass:"reply",on:{click:function(s){return e.replyMessage(n,t.name)}}},[e._v("回复")]),s("p",{staticClass:"reply",on:{click:function(s){return e.delreply(t.id)}}},[e._v("删除")])])])})),s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[1==t.megs.star?s("use",{attrs:{"xlink:href":"#icon-labixiaoxin-"}}):e._e(),0==t.megs.star?s("use",{attrs:{"xlink:href":"#icon-taidixiongwanoukeai"}}):e._e()]),s("div",{staticClass:"line"})],2)})),0)])],1)},i=[],o=(s("b0c0"),s("ac1f"),s("1276"),s("365c")),a=s("bbe3"),c={name:"EditMeg",data:function(){return{list:[],rename:"",type:1,oneMeg:{type:1,star:1,name:"Sugar",email:"1163723641@qq.com"},uid:"",reindex:0}},methods:{onSubmit:function(){var e=this;this.$refs.emoji.referContent(),this.content=this.$refs.emoji.content,0!==this.content.length&&(this.oneMeg.content=this.content[this.content.length-1],this.oneMeg.type=this.type,""==this.rename?Object(o["f"])(this.oneMeg).then((function(t){t&&(console.log(t),"200"==t.code?(e.$message({message:"发布成功",type:"success",duration:1e3}),e.list.unshift({megs:e.oneMeg}),console.log("自己添加的留言",e.oneMeg)):e.$message({showClose:!0,message:"发布失败",type:"error",duration:1e3}))})).catch((function(e){console.log(e),this.$message({showClose:!0,message:"发布失败",type:"error",duration:1e3})})):(this.oneMeg.name+=this.rename,this.oneMeg.uid=this.uid,console.log("回复this.oneMeg:",this.oneMeg),Object(o["p"])(this.oneMeg).then((function(t){t&&(console.log("回复别人的信息res",t),"200"==t.code?(e.$message({message:"发布成功",type:"success",duration:1e3}),e.list[e.reindex].reply.push(e.oneMeg),e.rename=""):e.$message({showClose:!0,message:"发布失败",type:"error",duration:1e3}))})).catch((function(e){console.log(e),this.$message({showClose:!0,message:"发布失败",type:"error",duration:1e3})}))))},replyMessage:function(e,t){console.log(e),this.rename="",console.log("回复的那一条的索引:",e),this.reindex=e;var s=t.split("@")[0];this.rename="@".concat(s),console.log("rename的值",this.rename),this.uid=this.list[e].megs.id,console.log("回复的那一条留言的uid",this.uid)},delMessage:function(e){var t=this;Object(o["i"])(e).then((function(e){e&&("200"==e.code?(t.$message({message:"删除成功",type:"success",duration:1e3}),t.reFresh()):t.$message({showClose:!0,message:"删除失败",type:"error",duration:1e3}))})).catch((function(e){console.log(e),this.$message({showClose:!0,message:"删除失败",type:"error",duration:1e3})}))},delreply:function(e){var t=this;Object(o["j"])(e).then((function(e){e&&("200"==e.code?(t.$message({message:"删除成功",type:"success",duration:1e3}),t.reFresh()):t.$message({showClose:!0,message:"删除失败",type:"error",duration:1e3}))})).catch((function(e){console.log(e),this.$message({showClose:!0,message:"删除失败",type:"error",duration:1e3})}))},reFresh:function(){var e=this;this.$route.query.id&&(this.type=this.$route.query.id),Object(o["o"])(this.type).then((function(t){console.log("EditMeg中返回的删除之后刷新后的具体的文章对应的留言",t),e.list=t.data})).catch((function(e){console.log(e)}))}},components:{Emoji:a["a"]},created:function(){var e=this;this.$route.query.id&&(this.type=this.$route.query.id),Object(o["o"])(this.type).then((function(t){console.log("EditMeg中返回的具体的文章对应的留言",t),e.list=t.data})).catch((function(e){console.log(e)}))}},r=c,l=(s("e630"),s("2877")),u=Object(l["a"])(r,n,i,!1,null,"0be36dfd",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4c911530.e91f60f0.js.map