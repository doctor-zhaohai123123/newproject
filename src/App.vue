<template>
  <div id="app">
    <Loading v-show="bLoading"></Loading>
    <Header v-show="bNav"></Header>
    <transition 
    enter-active-class='animated bounceInLeft'
    >
      <keep-alive 
        :exclude="['Column']"
      >
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Footer v-show="bFoot"></Footer> 
 
    <!-- <h3>{{la}}</h3> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Loading from "./components/Loading"


import { VIEW_NAV, VIEW_FOOT} from './store/types.js'
import {mapState,mapMutations} from "vuex"

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Loading
  },
  
  mounted(){
    // console.log('store',this.$store)
    this.UPDATE_LA()
  },

  methods:{
    ...mapMutations(['UPDATE_LA']),//要有映射
    checkPath(path){//路由检测
      // console.log('path',path);
      if(/home|follow|column/.test(path)){
        this.$store.dispatch(VIEW_NAV,true)
        this.$store.dispatch(VIEW_FOOT,true)
      }
      if(/user/.test(path)){
        this.$store.dispatch(VIEW_NAV,false)
        this.$store.dispatch(VIEW_FOOT,true)
      }
      if(/login|reg|Detail/.test(path)){
        this.$store.dispatch(VIEW_NAV,false)
        this.$store.dispatch(VIEW_FOOT,false)
      }
      if(/buycar/.test(path)){
        this.$store.dispatch(VIEW_NAV,true)
        this.$store.dispatch(VIEW_FOOT,false)
      }
    }
  },

  watch:{
    $route:{
      handler(current,prev){
        // current.path == /home|/follow|/column|/detail/23456
        this.checkPath(current.path)
      },
      immediate:true,
      deep:true
    }
  },

  computed:mapState([
    'bNav','bFoot','bLoading','la'
  ])

}
</script>

<style>

</style>
