//加入購物車，數量更改
const items = [];

const cartItems = (state=items,action)=>{
  const newState = JSON.parse(JSON.stringify(state));
  
  switch(action.type){
    case 'ADD_CART':
      newState.push(action.item)
      return newState;
    case 'REMOVE_CART':
      newState.splice(action.index,1);
      return newState;
    case 'INCREMENT_QUANTITY':
      newState[action.index].quantity += 1;
      return newState;
    case 'DECREMENT_QUANTITY':
      if(newState[action.index].quantity<2){
        return newState
      }else{
        newState[action.index].quantity -= 1;
      return newState;
      }
    default:
      return state;
  }
};

export default cartItems;