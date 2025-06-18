import {cart, deleteCheckOut} from  '../data/cart.js';
import { products} from '../data/products.js';
import { formatCurrence } from './utils/money.js';
 function renderCheckOut(){
let checkoutHTML=``;
      cart.forEach((checkOutItem)=>{
            let productID = checkOutItem.id;
              let matchItem;
     
              products.forEach((ID)=>{
                if(productID === ID.id)
                  matchItem=ID;
              })
            
                  checkoutHTML+=`   <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchItem.name}
                </div>
                <div class="product-price">
                  $${formatCurrence(matchItem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${checkOutItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary" data-product-id="${productID}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1-${productID}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1-${productID}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1-${productID}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
      });
document.querySelector(`.order-summary-js`).innerHTML = checkoutHTML;
 }

 renderCheckOut();
document.querySelectorAll('.delete-quantity-link').forEach((container)=>{
  container.addEventListener(`click`,()=>{
    const {productId} = container.dataset;
     deleteCheckOut(productId);
  })
})