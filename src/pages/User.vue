<template>
  <div class="content">
    <div class="header">
      <h2><img :src="server.baseUrl + $store.state.user.data.icon" alt=""/></h2>
      <div class="user-box">
        <a href="javascript:;">{{$store.state.user.data.nikename}}</a>
        <a href="javascript:;" @click="logout" style='display:block'>注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>{{$store.state.user.data.follow}}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{$store.state.user.data.fans}}</span>
          <p class="end">粉丝</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>公开博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>秘密博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//import "../assets/css/user.css";//全局
import store from "../plugins/store"
export default {

  beforeRouteEnter(to,from,next){
    store.state.user.err==0? next() :next('/login')
  },
  methods:{
    logout(){
      axios({
        url:'/api/logout',
        method:'delete'
      }).then(
        res=>{
          if(res.data.err ===0){
            console.log(store===this.$store) //true
            this.$router.push('/home')
            this.$store.commit('CHECK_USER',{
              err:1,
              msg:'未登录'
            })
          }
          window.localStorage.removeItem('user')
        }
      )
    }
  }
}
</script>
<style>
  @import url('../assets/css/user.css'); /*全局*/

</style>

