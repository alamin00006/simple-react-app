
import React from 'react';

const Cart = ({carts}) => {
   console.log(carts)
    let total = 0;
    let shiping = 0;
    for(const product of carts){
     total = total + product.price;
     shiping = shiping + product.shipping;
    }
    const tax = (total*0.1).toFixed(2);
    const granTotal = total + shiping + parseFloat(tax);
    
    return (
        <div>
               <h2>Order Summary:</h2>
                <p>Select Items:{carts.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shiping Charge : {shiping}</p>
                <p>Tax :{tax}</p>
                <p>Grand Total:{granTotal}</p>
        </div>
    );
};

export default Cart;