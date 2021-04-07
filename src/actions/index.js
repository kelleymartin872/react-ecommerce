//修改store所調用的action

export const addCarting = (item) => {
  return {
    type: 'ADD_CART',
    item: item,
    ip: item.ip,
  }
}
export const removeItem = (index) => {
  return {
    type: 'REMOVE_CART',
    index: index,
  }
}
export const increment = (index) => {
  return{
    type:'INCREMENT_QUANTITY',
    index: index,
  }
}
export const decrement = (index) => {
  return{
    type:'DECREMENT_QUANTITY',
    index: index,
  }
}