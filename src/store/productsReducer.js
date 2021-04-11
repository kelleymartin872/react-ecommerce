//商品內容，新增
const products = [
  {
    id:1,
    name:'NC2009B',
    brand:'+NICHE',
    description:'+NICHE',
    price:2480,
    image:'https://jp.owndays.com/storage/products/QNDnE8E8VnvkvqsTU24ezvAPXavo8MhJQ63RkQ1c.jpeg',
    quantity:1,
  },
  {
    id:2,
    name:'NC1022B',
    brand:'+NICHE',
    description:'+NICHE',
    price:1980,
    image:'https://jp.owndays.com/storage/products/asAdWsdwqqBN2vk31ZnvznEMnRw340bLlrcru2hn.jpeg',
    quantity:1,
  },
  {
    id:3,
    name:'SUN1057B',
    brand:'OWNDAYS',
    description:'OWNDAYS',
    price:1680,
    image:'https://jp.owndays.com/storage/products/HJJjQhuRWI3r5w46GtzehKNzEZCS3YHJ9zaTPXKM.jpeg',
    quantity:1,
  },
  {
    id:4,
    name:'SUN1058B',
    brand:'OWNDAYS',
    description:'OWNDAYS',
    price:1590,
    image:'https://jp.owndays.com/storage/products/dKT7r5ru4B9UtFhHFqecKGFYBY4uHR8igc3bACRn.jpeg',
    quantity:1,
  },
  {
    id:5,
    name:'SNP1013T',
    brand:'OWNDAYS',
    description:'OWNDAYS SNAP',
    price:2990,
    image:'https://jp.owndays.com/storage/products/Qch4vwtOTnjoLAkFK47q1Uw5WlPmLd6aMSU1dJt0.jpeg',
    quantity:1,
  },
  {
    id:6,
    name:'JD1032B',
    brand:'John Dillinger',
    description:'John Dillinger',
    price:3990,
    image:'https://jp.owndays.com/storage/products/eOS6Z3LZMjWD55gnL9DoAtjJP8HYCroL6rRs6rzB.jpeg',
    quantity:1,
  },
  {
    id:7,
    name:'MM1012B',
    brand:'Memory Metal',
    description:'Memory Metal',
    price:2480,
    image:'https://jp.owndays.com/storage/products/fWSL2ygtSvk4hL7Pw3Ha8WW5Nl38EmY6F2dgixlT.jpeg',
    quantity:1,
  },
  {
    id:8,
    name:'AU2080T',
    brand:'AIR Ultem Classic',
    description:'AIR Ultem Classic',
    price:1880,
    image:'https://jp.owndays.com/storage/products/2TpsAW1CZngV9nhNHFDiLwr2pwOaBjcB0yuj9yIU.jpeg',
    quantity:1,
  },
  {
    id:9,
    name:'FC2022S',
    brand:'FUWA CELLU',
    description:'FUWA CELLU',
    price:2380,
    image:'https://jp.owndays.com/storage/products/O2cPS7fXAPTj8GInOgW5R62fSdWgQexkNU8UQacx.jpeg',
    quantity:1,
  },
  {
    id:10,
    name:'MM1010B',
    brand:'Memory Metal',
    description:'Memory Metal',
    price:2680,
    image:'https://jp.owndays.com/storage/products/TWWXuirkEymbXwvRGKlrO16jkQXPojMPUavDH1Pr.jpeg',
    quantity:1,
  },
  {
    id:11,
    name:'PU2001T',
    brand:'OWNDAYS',
    description:'電影「煙囪之城」× OWNDAYS',
    price:2990,
    image:'https://jp.owndays.com/storage/products/UI1fPj4oqIQiChk7vsLWVxyu6V1X5KEd7jmnFDIG.jpeg',
    quantity:1,
  },
  {
    id:12,
    name:'LB1011G',
    brand:'lillybell',
    description:'lillybell',
    price:3280,
    image:'https://jp.owndays.com/storage/products/mQLy5l2riG5HFLwEhteF5cELhCKsmn6aAIOS1FRy.jpeg',
    quantity:1,
  },
  {
    id:13,
    name:'LB1010G',
    brand:'lillybell',
    description:'lillybell',
    price:2400,
    image:'https://jp.owndays.com/storage/products/xWr7E179MYa7zVceOhSwdlHLFm43yW6wJqCDVar5.jpeg',
    quantity:1,
  },
  {
    id:14,
    name:'LB2005J',
    brand:'lillybell',
    description:'lillybell',
    price:3990,
    image:'https://jp.owndays.com/storage/products/BcBAaDSyBk7SPLGq1NRy3U5Hd7ER5fBk.jpg',
    quantity:1,
  },
  {
    id:15,
    name:'MM1002B',
    brand:'Memory Metal',
    description:'Memory Metal',
    price:4200,
    image:'https://jp.owndays.com/storage/products/zn6byt9BNMhuiWT5aG3gLTAyEkKyQaG1UGbeDzyN.jpeg',
    quantity:1,
  },
  {
    id:16,
    name:'LB2006J',
    brand:'lillybell',
    description:'lillybell',
    price:3500,
    image:'https://jp.owndays.com/storage/products/ZpeUHpnPJOQPHkD0po7zPWhjaJgmEMZGrFV8MuqI.jpeg',
    quantity:1,
  },
  {
    id:17,
    name:'ECO2017K',
    brand:'ECO2XY',
    description:'ECO2XY',
    price:1780,
    image:'https://jp.owndays.com/storage/products/Re1vJz0ddBpyXZwdvQggjakvWarfx0mNNzBJOhcZ.jpeg',
    quantity:1,
  },
  {
    id:18,
    name:'ECO2009',
    brand:'ECO2XY',
    description:'ECO2XY',
    price:3280,
    image:'https://jp.owndays.com/storage/products/tYnVY0XUbAQQGnD5smhy8x0SJL8S3Tqh.jpg',
    quantity:1,
  },
  {
    id:19,
    name:'JU2027N',
    brand:'Junni',
    description:'Junni',
    price:2990,
    image:'https://jp.owndays.com/storage/products/QvfnmYLkAVD0IgsgNbcfHo8gSwIizETcVYhdffoY.jpeg',
    quantity:1,
  },
  {
    id:20,
    name:'JU1016K',
    brand:'Junni',
    description:'Junni',
    price:2880,
    image:'https://jp.owndays.com/storage/products/xNCEJy3ZvKb733JH4W8CIjB9fYjIYraSiLRp6eia.jpeg',
    quantity:1,
  },
  {
    id:21,
    name:'JU1015G',
    brand:'Junni',
    description:'Junni',
    price:2600,
    image:'https://jp.owndays.com/storage/products/M3UY1A4tktDB80MqPLneg43xz9Y2tvXj.jpg',
    quantity:1,
  },
  {
    id:22,
    name:'GB1026B',
    brand:'Graph Belle',
    description:'Graph Belle',
    price:2260,
    image:'https://jp.owndays.com/storage/products/8CeBOgIdfPHAb6U1TDNkVrfar1uRm9BFmZVvDoZJ.jpeg',
    quantity:1,
  },
  {
    id:23,
    name:'GB2027B',
    brand:'Graph Belle',
    description:'Graph Belle',
    price:2780,
    image:'https://jp.owndays.com/storage/products/S6nMQhHjEttsXM4Uuon0ODloJhmIkLp7ajs6PQoR.jpeg',
    quantity:1,
  },
  {
    id:24,
    name:'GB2017G',
    brand:'Graph Belle',
    description:'Graph Belle',
    price:3580,
    image:'https://jp.owndays.com/storage/products/p30l8pPGO3DTJhwR86OtswDMqCDwkofbt5C1x5kk.jpeg',
    quantity:1,
  },
]
const productsReducer = (state=products,action)=>{
  return state;
}
export default productsReducer;