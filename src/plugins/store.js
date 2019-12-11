import Vue from 'vue';
import Vuex from 'vuex';
// console.log('vuex',Vuex);//{Store类}
Vue.use(Vuex);

import state from '../store/state'
import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'

//创建状态管理实例
// let store =new Vuex.Store(配置)
let store =new Vuex.Store({
    //key == actions / mutations /state / getters
    // value == {}
    state,actions,mutations,getters
})

export default store;

