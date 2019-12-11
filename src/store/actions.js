import * as types from "./types";


export default {

    [types.VIEW_LOADING]:({state,commit},payload)=>{
        //校验payload类型)(业务逻辑)
        commit(types.VIEW_LOADING,payload)
    },

    [types.VIEW_NAV]:({state,commit},payload)=>{
        //校验payload类型)(业务逻辑)
        commit(types.VIEW_NAV,payload)
    },
    [types.VIEW_FOOT]:({state,commit},payload)=>{
        //校验payload类型)(业务逻辑)
        commit(types.VIEW_FOOT,payload)
    },
    [types.UPDATE_BANNER]:({state,commit},payload)=>{
        axios({
            url:'/api/banner',
            params:{_page:1,_limit:10}
          }).then(
            res=>commit(types.UPDATE_BANNER,res.data.data)        
          )      
    },
    [types.UPDATE_HOME]:({state,commit},payload)=>{
        axios({
            url:'/api/home',
            params:{_page:1,_limit:10}
          }).then(
            res=>commit(types.UPDATE_HOME,res.data.data)        
          )      
    },
    [types.UPDATE_FOLLOW]:({state,commit},payload)=>{
        axios({
            url:'/api/follow',
            params:{_page:1,_limit:10}
          }).then(
            res=>commit(types.UPDATE_FOLLOW,res.data.data)        
          )      
    },
    [types.UPDATE_DETAIL]:({state,commit},{dataName,id})=>{
        axios({
            url:`/api/${dataName}/${id}`
          }).then(
            res=>commit(types.UPDATE_DETAIL,res.data.data)        
          )      
    },
    [types.ADD_PRODUCT]:({state,commit},payload)=>{
      axios({
        url:'/api/column',
        params:{_page:1,_limit:10}
      }).then(
        res=>commit(types.ADD_PRODUCT,res.data.data)
      )
    },
    [types.CHECK_USER]:({state,commit},{username,password})=>{
      return axios({
        url:'/api/login',
        method:'post',
        // withCredentials:true,//逐条携带
        data:{
          username,
          password,
          save:true
        }
      }).then(
        res=>{
          commit(types.CHECK_USER,res.data);//同步1
          window.localStorage.setItem('user',JSON.stringify(res.data))//同步2
          return {//两个return不是很理解
            mess:res.data.msg,
            err:res.data.err
          }
          
        }
      )    
  },
  addItem:({commit,state},payload)=>{
    let arr = [...state.buycar];
    let find = false;

    arr.forEach((item,index)=>{
      if(item._id == payload._id){
        item.number++;
        find = true;
      }
    });
    if(!find){
      payload.number = 1;
      arr.push(payload);
    }

    commit(types.ADD_ITEM,arr)   
  },

  changeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item._id == payload._id){
        item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不要直接给mutation传原始state数据，要经过拷贝
    commit(types.CHANGE_ITEM,[...state.buycar])
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
    // commit(types.REMOVE_ITEM,state.buycar);
  },
  clearBuycar:({commit,state})=>{
    commit(types.CLEAR_BUYCAR,[]);
  }


}
