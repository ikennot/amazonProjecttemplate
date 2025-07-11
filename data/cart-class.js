

// export let cart =JSON.parse(localStorage.getItem('cart'));

class Cart{
    cartItems;
    localStorageKey;
   constructor(localStorageKey){
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
   }
   loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
    if(!this.cartItems){
    this.cartItems = [
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
 }

  saveLocalStorage(){
  localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
}

 addToCart(productId)
{
      let quantity =Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      let isExist = false;
    this.cartItems.forEach((cartItem)=>{
       if(cartItem.id === productId)
       {
        cartItem.quantity+=quantity;
       
        isExist = true;

       }
    })
    
    if(!isExist){

    this.cartItems.push({
      id: productId,
      quantity: quantity,
      deliveryOptionsId: '1'
    });
  }

  this.saveLocalStorage();

}

deleteCheckOut(productID){
 let newCart = [];
 this.cartItems.forEach((cartItem)=>{
  if(productID !== cartItem.id)
    newCart.push(cartItem);
 })
 this.cartItems = newCart;
 this.saveLocalStorage();  
}
 updateCartQty(fileString)
{
  let totalQty = 0;
   this.cartItems.forEach((cartItem)=>{
    totalQty+=cartItem.quantity;
   })
    
  switch (fileString) {
  case 'amazon':
    document.querySelector('.cart-quantity-js').innerHTML = totalQty;
    break;

  case 'checkout':
    document.querySelector('.return-to-home-js').innerHTML = `${totalQty} items`;
    break;
  case 'PaymentSummary':
    document.querySelector('.payment-items-js').innerHTML = `Items (${totalQty}):`;
    break;
  // Optional: handle default case
  default:
    // Do nothing or log unknown case
    break;
}

}

newUpdateQty(productID,newQty){

  this.cartItems.forEach((cartItem)=>{
    if(cartItem.id === productID){
      cartItem.quantity = newQty;
      this.saveLocalStorage();
    }
  })


}

 updateDeliveryOption(productId,deliveryOptionId){
  let matchItem;
    this.cartItems.forEach((cartItem)=>{
      if(cartItem.id === productId){
            matchItem = cartItem;
      }
    })

    matchItem.deliveryOptionsId = deliveryOptionId;
    
    this.saveLocalStorage();
}

}

const Cartnew = new Cart('cart-oop');


console.log(Cartnew.cartItems)
