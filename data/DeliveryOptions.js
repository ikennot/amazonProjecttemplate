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

export default DeliveryOptions