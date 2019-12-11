import state from './state.js'

export default {
  buycar:(state)=>state.buycar,
  totalPrice(){
    let totalPrice = 0; //总价
    for (let i =0;i<state.buycar.length;i++){
      totalPrice += parseInt(state.buycar[i].detail.price*state.buycar[i].number)
    }
    return totalPrice;
  },
  totalCount(){
    let totalCount = 0;//总数
    for (let i =0;i<state.buycar.length;i++){
      totalCount += parseInt(state.buycar[i].number);
    }
    return totalCount;
  }
}