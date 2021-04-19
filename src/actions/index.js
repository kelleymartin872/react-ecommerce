//修改store所調用的action

export const addCarting = (product) => {
  return {
    type: 'ADD_CART',
    product: product,
    id: product.id,
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
export const shakeShake = (boolean) => {
  return{
    type:'SHAKE_SHAKE',
    boolean: boolean,
  }
}