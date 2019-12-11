import * as types  from './types'


export default {
    // 'VIEW_LOADING':(state,payload)=>state.bLoading = payload
    [types.VIEW_LOADING]:(state,payload)=>state.bLoading = payload,
    [types.VIEW_NAV]:(state,payload)=>state.bNav = payload,
    [types.VIEW_FOOT]:(state,payload)=>state.bFoot = payload,

    [types.UPDATE_HOME]:(state,payload)=>state.home = payload,
    [types.UPDATE_FOLLOW]:(state,payload)=>state.follow = payload,
    [types.UPDATE_BANNER]:(state,payload)=>state.banner = payload,

    [types.UPDATE_DETAIL]:(state,payload)=>state.detail = payload,

    [types.CHECK_USER]:(state,payload)=>state.user = payload,

    [types.ADD_ITEM]:(state,payload)=>{
        state.buycar = payload;
        
    },
    [types.CHANGE_ITEM]:(state,payload)=>{
        state.buycar = payload;
        
    },
    [types.REMOVE_ITEM]:(state,payload)=>{
        state.buycar = payload;
        
    },
    [types.CLEAR_BUYCAR]:(state,payload)=>{
        state.buycar = payload;
    },
    [types.ADD_PRODUCT]:(state,payload)=>{
        state.column = payload;
    },
    'UPDATE_LA':(state,payload)=>{
        state.la='bmw'
    }
}

// var proname = 'proname'
// obj['proname']
// obj[proname]

