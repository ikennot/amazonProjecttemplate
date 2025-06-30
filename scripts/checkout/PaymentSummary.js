import { cart } from "../../data/cart.js";
import { matchProduct } from "../../data/products.js";
import DeliveryOptions,{ MatchDeliveryId } from "../../data/DeliveryOptions.js";
export function paymentSummary(){
let total = 0;
let shippingFee = 0;
cart.forEach((cartItem)=>{
    const matchItem = matchProduct(cartItem.id);
    const deliveryMatchItem = MatchDeliveryId(cartItem.deliveryOptionsId);
    total += matchItem.priceCents * cartItem.quantity;
    shippingFee += deliveryMatchItem.priceCents;
    
})

let paymentSummaryHTML = `
 <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$42.75</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$4.99</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$47.74</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$4.77</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$52.51</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>

`

}

