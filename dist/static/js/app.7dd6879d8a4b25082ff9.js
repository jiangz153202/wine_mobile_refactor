webpackJsonp([6],{"+iNV":function(t,e){var n="http://mcapi.dddingjiu.com/";t.exports={Index:{basicInfoUrl:n+"api/index"},User:{basicUserInfoUrl:n+"api/user"}}},"8e4C":function(t,e){e.RESULT={SUCCESS:{code:1e4,msg:"请求成功"},CREATE_SUCCESS:{code:10001,msg:"创建成功"},UPDATE_SUCCESS:{code:10002,msg:"修改成功"},DELETE_SUCCESS:{code:10003,msg:"删除成功"},NO_DATA:{code:10004,msg:"查询不到数据"},ARG_ERROR:{code:4e4,msg:"参数错误"},NO_LOGIN:{code:40001,msg:"未登录"},FORBIDDEN:{code:40003,msg:"禁止访问"},NOT_FOUND:{code:40004,msg:"未找到"},UPLOAD_ERR:{code:40005,msg:"上传失败"},INTERNAL_ERROR:{code:5e4,msg:"服务器内部错误"},FAILD:{code:50003,msg:"请求失败"},TOKEN_NO_FIND:{code:60001,msg:"token找不到,请重新登录"},TOKEN_ERR:{code:60002,msg:"token无效,请重新登录"}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={name:"bottom-tabbar",data:function(){return{selected:"home"}},watch:{selected:function(t){this.$router.push(t),window.localStorage.setItem("navTabIndex",t)}},created:function(){var t=window.localStorage.getItem("navTabIndex");null!=t&&(this.selected=t)}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-tabbar",{attrs:{fixed:!0},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"home"}},[n("img",{attrs:{slot:"icon",src:"static/img/lazybar/home@2x.png"},slot:"icon"}),t._v("\n    首页\n  ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"group"}},[n("img",{attrs:{slot:"icon",src:"static/img/lazybar/group@2x.png"},slot:"icon"}),t._v("\n    订单\n  ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"cart"}},[n("img",{attrs:{slot:"icon",src:"static/img/lazybar/group@2x.png"},slot:"icon"}),t._v("\n    购物车\n  ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"user"}},[n("img",{attrs:{slot:"icon",src:"static/img/lazybar/group@2x.png"},slot:"icon"}),t._v("\n    我的\n  ")])],1)},staticRenderFns:[]},i={name:"App",components:{BottomTabbar:n("VU/8")(a,c,!1,null,null,null).exports},created:function(){},mounted:function(){window.addEventListener("visibilitychange",function(){document.hidden})}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),this.$route.meta.showBottomTabbar?e("bottom-tabbar"):this._e()],1)},staticRenderFns:[]},s=n("VU/8")(i,r,!1,null,null,null).exports,u=n("/ocq"),d=n("Au9i"),l=n.n(d);o.default.use(u.a);var m=new u.a({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"IndexComponent",component:function(){return n.e(0).then(n.bind(null,"JXTs"))},meta:{showBottomTabbar:!0}},{path:"/group",name:"GroupComponent",component:function(t){d.Indicator.open(),n.e(4).then(function(){t(n("fZX7")),d.Indicator.close()}.bind(null,n)).catch(n.oe)},meta:{showBottomTabbar:!0}},{path:"/cart",name:"CartComponent",component:function(t){d.Indicator.open(),n.e(2).then(function(){t(n("1CLz")),d.Indicator.close()}.bind(null,n)).catch(n.oe)},meta:{showBottomTabbar:!0}},{path:"/user",name:"UserComponent",component:function(t){d.Indicator.open(),n.e(3).then(function(){t(n("md3T")),d.Indicator.close()}.bind(null,n)).catch(n.oe)},meta:{showBottomTabbar:!0}},{path:"*",component:function(){return n.e(1).then(n.bind(null,"Lbao"))}}]}),p=n("mtWM"),f=n.n(p),g=n("NYxO"),h=n("bOdI"),b=n.n(h),_=n("Xxa5"),v=n.n(_),x=n("exGp"),E=n.n(x),T=n("//Fk"),I=n.n(T),w=n("8e4C"),N=n.n(w);var A=function(t,e,n){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post",n=arguments[2];return console.log("当前的参数",n),new I.a(function(o,a){O({url:t,method:e,data:n}).then(function(t){console.log("api-ok"),o(t.data)}).catch(function(t){console.log("api-error"),a(N.a.RESULT.NO_DATA)})})}(t,e,n)},C=n("+iNV"),D=n.n(C),S=function(t){return A(D.a.Index.basicInfoUrl,"get",t)},R={namespaced:!0,state:{IndexBasicData:[]},getters:{},actions:{getIndexBasicData:function(t){var e=this,n=t.commit;return E()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S().then(function(t){n("GET_INDEX_DATA",t.data)}).catch(function(t){n("GET_INDEX_DATA",t)});case 2:case"end":return t.stop()}},t,e)}))()}},mutations:b()({},"GET_INDEX_DATA",function(t,e){t.IndexBasicData=e})};o.default.use(g.a);var U=new g.a.Store({state:{userinfo:{age:"xxx"}},actions:{},mutations:{},modules:{contextBasic:R},strict:!1,plugins:[]});f.a.interceptors.request.use(function(t){return t.withCredentials=!0,t.headers["Coent-Type"]="application/x-www-form-urlencoded",console.log("2发起请求",t),t}),f.a.install=function(t){t.prototype.$axios=f.a};var O=f.a;n("sVYa"),n("d8/S"),n("a4aY");o.default.use(l.a),o.default.use(O),o.default.config.productionTip=!1,o.default.config.devtools=!0,new o.default({el:"#app",store:U,router:m,components:{App:s},template:"<App/>"})},a4aY:function(t,e){},"d8/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7dd6879d8a4b25082ff9.js.map