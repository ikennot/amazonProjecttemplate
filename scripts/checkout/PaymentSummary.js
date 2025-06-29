import { cart } from "../../data/cart.js";
import { matchProduct } from "../../data/products.js";
export function paymentSummary(){
let total = 0;

cart.forEach((cartItem)=>{
    const matchItem = matchProduct(cartItem.id);
    total += matchItem.priceCents * cartItem.quantity;
})

console.log((total/100).toFixed(2));
}

