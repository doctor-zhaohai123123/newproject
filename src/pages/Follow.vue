<template>
  <div class="follow">
    <mt-search v-model="value">
      <mt-cell
      v-for="(item,index) in get"
      :key='index'
      :title="item.title"
      :to="{name:'detail',params:{id:item._id},query:{dataName:'follow',age:Math.random()}}"
      is-link
      :list-data="$store.state.follow" :data-name="'follow'"
    >
    </mt-cell>
  </mt-search>
    <List :list-data="$store.state.follow" :data-name="'follow'"></List>
  </div>
</template>
<script>
import List from "@/components/List"
import Vue from "vue"

import { Search,Cell } from 'mint-ui';
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
import {mapGetters,mapActions} from 'vuex'

Vue.use(Search,Cell);

export default{
  data(){
    return{
      value:''
    }
  },
  components:{
    List
  },
  computed:{
    get(){
      let result=[];
      this.$store.state.follow.forEach((item,index) => {
        if(item.title.indexOf(this.value) !== -1 ){
              result.push(item)
            }
        
      });
      return result
    }
  },
  activated(){
   this.$store.dispatch('UPDATE_FOLLOW')
  }
}
</script>
<style scoped>
.mint-search{height:2rem;}
.follow{margin-top:1rem}
</style>>

