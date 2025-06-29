import { cart } from "../../data/cart.js";
import { matchProduct } from "../../data/products.js";
import DeliveryOptions from "../../data/DeliveryOptions.js";
export function paymentSummary(){
let total = 0;
let shippingFee = 0;
cart.forEach((cartItem)=>{
    const matchItem = matchProduct(cartItem.id);
    total += matchItem.priceCents * cartItem.quantity;
    
})

console.log((total/100).toFixed(2));


console.log(shippingFee)
}

