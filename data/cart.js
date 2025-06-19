

export let cart =JSON.parse(localStorage.getItem('cart'))||[
 
];

function saveLocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
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
    saveLocalStorage();
  }

}

export function deleteCheckOut(productID){
 let newCart = [];
 cart.forEach((cartItem)=>{
  if(productID !== cartItem.productId)
    newCart.push(cartItem);
 })
 cart = newCart;
 saveLocalStorage();  
}

