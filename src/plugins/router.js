import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue'
// import Follow from '../pages/Follow.vue'
// let Follow =()=>{return 加载后的目标组件}
let Follow =()=> import (/* webpackChunkName: "follow" */'../pages/Follow.vue')
// import Column from '../pages/Column.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
import Error from '../pages/Error.vue'
import BuyCar from '../pages/BuyCar.vue'
// import Echarts from '../pages/Echarts.vue'
let Echarts =()=> import (/* webpackChunkName: "Echarts" */'../pages/Echarts.vue')
let BdMap =()=> import (/* webpackChunkName: "BdMap" */'../pages/BdMap.vue')
// import BdMap from '../pages/BdMap.vue'



let routes=[
  {path:'/home',component:Home},
  {path:'/Follow',component:Follow},
  {path:'/column',component:r=>require(['../pages/Column.vue'],r)},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/Reg',component:Reg},
  {path:'/buycar',component:BuyCar},
  {path:'/echarts',component:Echarts},
  {path:'/BdMap',component:BdMap},

  
  // {path:'/Detail/:id',component:Detail,name:'detail',props:true},
  // {path:'/Detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,dataName:route.query.dataName})},  //箭头函数直接返回一个对象，要在对向外面加括号
  {path:'/Detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,...route.query})},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error},

];

export default new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {//第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  
})