import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false  //设置成false 以阻止 vue 在启动时生成生产提示


// 资源引入 会优化
//配置应用的字体比列
import './assets/js/font'; //会经过优化
import "./assets/css/base.css" //全局暴露


//引入路由的配置

import router from './plugins/router'


// 引入异步交互插件axios的配置
import "./plugins/axios";


//全局过滤器的配置
import  './filters'


//配置服务器地址
Vue.prototype.server = require('./config/server')


//全局动画样式
import 'animate.css';


//引入状态管理
import store from './plugins/store';



// 同步状态管理与本地存储
let local = window.localStorage.getItem('user');

if(local){
  store.commit('CHECK_USER',JSON.parse(local))
}


 new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

