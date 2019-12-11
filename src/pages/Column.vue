<template>


  <div class="newsList">
     <!-- <qiu></qiu> -->
    <div class="xiaoguo" >
      <!-- <router-link tag="div" active-class = "active" to="/echarts"><a href="javascript:;">手机销量</a></router-link> -->
      <!-- <router-link tag="div" active-class = "active" to="/bdmap"><a href="javascript:;">当前位置</a></router-link> -->
      <van-button type="primary" to="/bdmap" color="linear-gradient(to right, #4bb0ff, #6149f6)">当前位置</van-button>
      <van-button type="primary" to="/echarts" color="linear-gradient(to right, #4bb0ff, #6149f6)">手机销量</van-button>
    </div>
    <ul>
      <transition-group
        enter-active-class = "animated fadeIn"
        leave-active-class = "animated fadeOut"
      >
        <li
          v-for="(item,index) of $store.state.column"
          :key="item._id"
          :style="`animation-delay: ${index*100}ms`"
        >
            <img :src="item.image" alt="">
            <div>
              <p v-html="item.detail.content" style="color:red"></p>
              <p style="color:red">{{item.detail.price}}</p>
            </div>
            <button @click="addItem(item)">+</button>
        </li>
        <!-- 动画要有进退场的概念 -->
      </transition-group> 
      <!-- <transition-group
        enter-active-class = "animated fadeIn"
        leave-active-class = "animated fadeOut"
      >
        <div key="1" v-show="bl" :style="`width:100px;height:100px;background:red;animation-delay: ${0}ms`">box</div>
        <div key="2" v-show="bl" :style="`width:100px;height:100px;background:blue;animation-delay: ${100}ms`">box2</div>

      </transition-group> -->
    </ul>
    
  </div>
  
</template>


<script>

import {mapState,mapActions} from 'vuex';
import {UPDATE_COLUMN} from '../store/types.js'
import { Button } from 'vant';

import qiu from './qiu';

export default {
  name:'Column',
  
  data(){
    return {
      column:[],
      bl:true
    }
  },
  // computed:mapState(['column']),
  methods:mapActions(['addItem']),
   components :{VanButton:Button,qiu},
  // activated(){
  mounted(){
    // this.$store.dispatch({type:xx,payload:xx})
    // this.$store.dispatch({type:UPDATE_COLUMN})
    // setTimeout(()=>{
    //   this.column=[
    //     {_id:1,title:'xxx',des:'xxx1',number:1},
    //     {_id:2,title:'xxxx',des:'xxx2',number:1},
    //     {_id:3,title:'xxxxx',des:'xxx3',number:1},
    //   ];
    // },0)
   
   this.$store.dispatch('ADD_PRODUCT')

  }

}
</script>

<style scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList .xiaoguo{display:flex;justify-content: space-between;padding:0 1.5rem}
.newsList .xiaoguo a{display: block;width:1rem;height:0.5rem;background:darkgray;text-align: center;line-height: 0.5rem;border-radius: 50%}

.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;display: flex;justify-content: space-around;align-items: center}
.newsList ul li img{width:2rem;height:2rem}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>
