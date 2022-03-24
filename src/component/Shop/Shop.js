// import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
   
    const clickHandeler = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    } 
   
    return (
     
        <div className='main-shop'>
            <div className='shop-container'>
          {
              products.map(product =><Product product={product} key={product.id}clickHandeler={clickHandeler}></Product>)
          }
          
            </div>
            <div className='shop-right'>
                <h2>Order Summary:</h2>
                <p>Select Items:{cart.length}</p>
                <p>Total Price:</p>
                <p>Total Shiping Charge :</p>
                <p>Tax :</p>
                <p>Grand Total:</p>
            </div>
        </div>
    );
};

export default Shop;