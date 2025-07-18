 import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
 
 export function MatchDeliveryId(deliveryId)
 {
    let matchItem;
    DeliveryOptions.forEach((option)=>{
     if(option.id === deliveryId)
     {
        matchItem = option;
     }
    })

    matchItem.id = deliveryId;

    return matchItem

 }
 
 
 const DeliveryOptions=[
    {
        id: '1',
        deliveryDays: 7,
        priceCents:0

    },

    {
        id:'2',
        deliveryDays: 3,
        priceCents: 499
    },

    {
        id: '3',
        deliveryDays: 1,
        priceCents:999 
    }
]

export function calculateDeliveryDate(deliveryOption) {
  const today = dayjs();
   
  let i  = deliveryOption.deliveryDays;
   let deliveryDate;
  while(i !== 0)
  {

    deliveryDate = today.add(
    deliveryOption.deliveryDays,
    'days'
  );
  
 const week = deliveryDate.format('dddd');

 if(week ==='Saturday'||week ==='Sunday')
    break;

  i--;
  }

  
  
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );

  return dateString;
}
export default DeliveryOptions