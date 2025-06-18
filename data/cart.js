import { renderCheckOut } from "../scripts/checkout";

export let cart =[
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 5
  },
  {
   id: "alden_iyot_main_001",

   quantity: 10
  }
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

export function deleteCheckOut(productID){
 cart.forEach((cartItem)=>{
  if(productID === cartItem.id)
    cart.splice(1,cartItem);
    renderCheckOut();
    
 })
}

