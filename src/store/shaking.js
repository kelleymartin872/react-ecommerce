// 加入購物車動畫狀態
const shaking = (state=false,action)=>{
  if(action.type==='SHAKE_SHAKE'){
    const newState = action.boolean;
    return newState;
  }else{
    return state;
  }
}
export default shaking;