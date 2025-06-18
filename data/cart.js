export const cart =[
  // {
  //   id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  //   name: "Black and Gray Athletic Cotton Socks - 6 Pairs"
  // },
  // {
  //   id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  //   name: "Black and Gray Athletic Cotton Socks - 6 Pairs"
  // }
];
export function addToCart(productId)
{
        let quantity =Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      let isExist = false;
    cart.forEach((cartItem)=>{
       if(cartItem.productId === productId)
       {
        cartItem.quantity+=quantity;
       
        isExist = true;
       }
    })
  
    if(!isExist){

    cart.push({
      productId,
      quantity 
    });

  }

}


