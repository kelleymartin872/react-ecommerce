//商品內容，新增
const products = [
  { id: 1, name: 'T-shirt', description: 'Awesome coat.', price: 399, image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3ae4144c-96b2-4648-b301-31902ae6981e/jordan-why-not-%E7%94%B7%E6%AC%BE%E7%9F%AD%E8%A2%96-t-%E6%81%A4-wSCbr0.jpg',quantity:1 },
  { id: 2, name: 'Jean', description: 'Awesome pants.', price: 699, image: 'https://www.yuting.idv.tw/OneBoyInc/image/2018090720Y-F/medium/61813B.jpg',quantity:1 },
]
const productsReducer = (state=products,action)=>{
  return state;
}
export default productsReducer;