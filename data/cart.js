export const cart =[];
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


