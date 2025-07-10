import { cart,updateCartQty} from "../../data/cart.js";
import { matchProduct } from "../../data/products.js";
import { formatCurrence } from "../utils/money.js";
import { MatchDeliveryId } from "../../data/DeliveryOptions.js";
const fileString = 'PaymentSummary';
export function paymentSummary(){
let total = 0;
let shippingFee = 0;
cart.forEach((cartItem)=>{
    const matchItem = matchProduct(cartItem.id);
    const deliveryMatchItem = MatchDeliveryId(cartItem.deliveryOptionsId);
    total += matchItem.priceCents * cartItem.quantity;
    shippingFee += deliveryMatchItem.priceCents;
    
})
  
const totalWithoutTax = total + shippingFee;
const tax = totalWithoutTax * 0.1;
const orderTotal = tax + totalWithoutTax;
let paymentSummaryHTML = `
 <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div class="payment-items-js"></div>
            <div class="payment-summary-money">$${formatCurrence(total)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrence(shippingFee)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrence(totalWithoutTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrence(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrence(orderTotal)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>

`
document.querySelector('.payment-summary-js').innerHTML = paymentSummaryHTML
updateCartQty(fileString);
console.log(cart)
}

