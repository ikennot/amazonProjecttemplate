import {cart, deleteCheckOut} from  '../data/cart.js';
import { products} from '../data/products.js';
import { formatCurrence } from './utils/money.js';
import { updateCartQty,newUpdateQty} from '../data/cart.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import DeliveryOptions from '../data/DeliveryOptions.js';

let fileString = 'checkout'

hello();
let checkoutHTML=``;
      cart.forEach((checkOutItem)=>{
            let productID = checkOutItem.id;
              let matchItem;
     
              products.forEach((ID)=>{
                if(productID === ID.id)
                  matchItem=ID;
           
              })
              
              let deliveryOptionsId = checkOutItem.deliveryOptionsId;
              let deliveryId;
              DeliveryOptions
                  checkoutHTML+=`<div class="cart-item-container js-cart-item-container-${productID}">
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
                  <span class="update-quantity-link link-primary" data-product-id="${productID}">
                    Update
                  </span>
                   <input class="quantity-input update-qty-${productID}">
                        <span class="save-quantity-link link-primary" data-save-id="${productID}">Save</span>
                  <span class="delete-quantity-link link-primary" data-product-id="${productID}">
                    Delete
                  </span>
                  <span class="validation-js-${productID} validation"></span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                 
                ${deliveryOptionsHtml(productID,checkOutItem)}
      
              </div>
            </div>
          </div>`
      });
document.querySelector(`.order-summary-js`).innerHTML = checkoutHTML;

function deliveryOptionsHtml(productID,checkOutItem){
  let html = ``;
  DeliveryOptions.forEach((DeliveryOption)=>{
    let today =dayjs();
    let dateString = today.add(DeliveryOption.deliveryDays,'day').format('dddd, MMMM DD');
    const shipping = DeliveryOption.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrence(DeliveryOption.priceCents)} -Shipping`
    let isChecked = DeliveryOption.id === checkOutItem.deliveryOptionsId ? `checked` : ``; 

     html+=`
          <div class="delivery-option">
                  <input type="radio" 
                    class="delivery-option-input"
                    name="delivery-option-1-${productID}"  ${isChecked}>
                  <div>
                    <div class="delivery-option-date">
                       ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${shipping}
                    </div>
                  </div>
                </div>
     `

  })

  return html;
}

document.querySelectorAll('.delete-quantity-link').forEach((container)=>{
  container.addEventListener(`click`,()=>{
    const {productId} = container.dataset;
    console.log(productId)
     deleteCheckOut(productId);
    let con = document.querySelector(`.js-cart-item-container-${productId}`);
    con.remove();
    updateCartQty(fileString);
  })
})

document.querySelectorAll('.update-quantity-link').forEach((container)=>{

  container.addEventListener('click',()=>{
    const {productId} = container.dataset;
  let con = document.querySelector(`.js-cart-item-container-${productId}`);
  con.classList.add("is-editing-quantity");
  })
})


document.querySelectorAll(`.save-quantity-link`).forEach((save)=>{

  save.addEventListener('click',()=>{
     const {saveId} = save.dataset;
    const valid = document.querySelector(`.validation-js-${saveId}`);
    let quantity = document.querySelector(`.update-qty-${saveId}`)
    let quantityValue = Number(quantity.value);
 if(quantityValue < 0){
   valid.innerHTML= `invalid input - the Quantity is lower than 0`
     return;
   }else if(quantityValue > 10)
   {
     valid.innerHTML = `invalid input - quantity reach its limit`
     return;
   }


    let removeCon = document.querySelector(`.js-cart-item-container-${saveId}`)
    removeCon.classList.remove('is-editing-quantity');
   
    newUpdateQty(saveId,quantityValue) 
    document.querySelector('.quantity-label').innerHTML = `${quantityValue}`
    updateCartQty(fileString)
    valid.innerHTML= '';
  })
 

})
 
updateCartQty(fileString);