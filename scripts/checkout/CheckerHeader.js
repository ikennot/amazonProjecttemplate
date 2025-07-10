import {  updateCartQty } from "../../data/cart.js";
 const fileString = 'checkout';
export function renderCheckOutHeader(){
  let html =``;
  
  html+=`Checkout (<a class="return-to-home-link return-to-home-js"
            href="amazon.html"></a>)`;

document.querySelector('.checkout-header-js').innerHTML = html;

updateCartQty (fileString);
}