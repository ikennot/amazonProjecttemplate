

export let cart =JSON.parse(localStorage.getItem('cart'));

if(!cart){
cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionsId: '1'
  },
  {
   id: "alden_iyot_main_001",
   quantity: 5,
     deliveryOptionsId: '2'
  }
];
}
function saveLocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId)
{
        let quantity =Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      let isExist = false;
    cart.forEach((cartItem)=>{
       if(cartItem.id === productId)
       {
        cartItem.quantity+=quantity;
       
        isExist = true;
       }
    })
  
    if(!isExist){

    cart.push({
      id: productId,
      quantity: quantity,
      deliveryOptionsId: '1'
    });
    saveLocalStorage();
  }

}

export function deleteCheckOut(productID){
 let newCart = [];
 cart.forEach((cartItem)=>{
  if(productID !== cartItem.id)
    newCart.push(cartItem);
 })
 cart = newCart;
 saveLocalStorage();  
}

export function updateCartQty(fileString)
{
  let totalQty = 0;
   cart.forEach((cartItem)=>{
    totalQty+=cartItem.quantity;
   })
    
   if(fileString ==='amazon')
    document.querySelector('.cart-quantity-js').innerHTML = totalQty;
  else if(fileString ==='checkout')
    document.querySelector('.return-to-home-js').innerHTML = `${totalQty} items`
}



export function newUpdateQty(productID,newQty){

  cart.forEach((cartItem)=>{
    if(cartItem.id === productID){
      cartItem.quantity = newQty;
      saveLocalStorage();
    }
  })


}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchItem;
    cart.forEach((cartItem)=>{
      if(cartItem.id === productId){
            matchItem = cartItem;
      }
    })

    matchItem.deliveryOptionsId = deliveryOptionId;
    
    saveLocalStorage();
}
