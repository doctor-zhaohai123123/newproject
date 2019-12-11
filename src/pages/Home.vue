<template>
  <div class="home">
    <Slider :banner-data="$store.state.banner" :data-name="'home'"></Slider>
    <List :list-data="$store.state.home" :data-name="'home'"></List>
  </div>
</template>
<script>
import Slider from "@/components/Slider"
import List from "@/components/List"

export default {
  components :{Slider,List},
  mounted(){
    this.$store.dispatch('UPDATE_HOME')
    this.$store.dispatch('UPDATE_BANNER')

    // const timer = setInterval( ()=>{
    //   console.log(1)
    // },1000)

  //  const timer =  setTimeout(function(){ 
  //     console.log(123) 
  //   }, 3000);

    // this.$once('hook:deactivated',()=>{
    //   clearInterval(timer);
    // }) 
    
  },

  beforeDestroy(){
    
  },
  activated(){
    this.$store.dispatch('UPDATE_HOME')
    this.$store.dispatch('UPDATE_BANNER')

    // this.$axios({
    //   url:"/data/user.json"
    // }).then(
    //   res=>console.log(res.data)
    // )
    // this.$root.$data.bLoading=true;
    //并行无关联
    // this.$axios({
    //   url:'http://localhost:3000/api/home',
    //   params:{_page:1,_limit:10}
    // }).then(
    //   res=>{
    //     // this.$root.$data.bLoading=false;
    //     this.listData = res.data.data
    //     }
    // )
    // this.$axios({
    //   url:'http://localhost:3000/api/banner',
    //   params:{_page:1,_limit:10}
    // }).then(
    //   res=>this.banner= res.data.data
      
    // )
  }
}

// 串行有关联
// axios({
//   url:'/api/parent'
// }).then(
//   res=>res.data.child
// ).then(
//   child=>axios({url:'/xx/'+child})
// ).then(
//   data=>console.log('数据',data)
// )

</script>
<style>

</style>

