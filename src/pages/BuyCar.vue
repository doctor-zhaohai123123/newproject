<template>
  <div class="buycar">
    <div class="show" v-show='buycar.length<=0'>
      <h2>购物车暂时什么东西都没有哦.......</h2>
      <router-link tag="div" class="gou" to="/column"><a href="javascript:;">来购物吧</a></router-link>
    </div>
    <ul>
    <li
      v-for="item of buycar"
      :key="item._id"
    >
      <img :src="item.image" alt="">
      <p v-html="item.detail.content"></p>      

      <a @click="changeItem({_id:item._id,num:1})">+</a>
      <input type="text" :value="item.number" >
      <a @click="changeItem({_id:item._id,num:-1})">-</a>
      <a href="javascript:;" @click="removeItem({_id:item._id})">删除商品</a>
      <span style="color:red">单价:${{item.detail.price}}</span>
      <span style="color:red" >总价:${{item.detail.price*item.number}}</span>
    </li>

    <button @click="clearBuycar" v-show="buycar.length>0">清空</button>
    <van-submit-bar
      v-show='totalPrice>0'
      :price="totalPrice*100"
      button-text="提交订单"
       @submit="onSubmit(totalPrice)"
    />

  </ul>

  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import { SubmitBar } from 'vant';
import store from '../plugins/store'

export default { 
  beforeRouteEnter(to,from,next){
    store.state.user.err==0? next() :next('/login')
  },
  components:{vanSubmitBar:SubmitBar},
  computed:mapGetters(['buycar','totalPrice','totalCount']),
  methods:{
    ...mapActions(['changeItem','clearBuycar','removeItem']),
    onSubmit(price){
      alert('请支付:'+price)
    }

  }
}

</script>

<style  scoped>
.buycar{margin-top: 0.6rem;}
.show{position: fixed;left:20%;top:30% }
.show .gou{margin-left:1.5rem;}
.show .gou a{display: block;line-height: 0.5rem;color: red;}
.buycar ul li img{width:2rem;height:2rem}
.buycar ul li input{width:0.5rem}
.buycar ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;display: flex;justify-content: space-around;align-items: center}
</style>

