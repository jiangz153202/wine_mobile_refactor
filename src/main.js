// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $axios from './utils/axios-reset';
import store from './store';

//导入淘宝开源移动端适配方案
import 'lib-flexible';

//导入miniUi和其他公共模块
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/reset/ddui.less'
Vue.use(MintUI);
//设置axios
Vue.use($axios);

Vue.config.productionTip = false

Vue.config.devtools = true


//配置font-szie 大小
// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
