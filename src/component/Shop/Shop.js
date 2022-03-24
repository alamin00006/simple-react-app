// import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
   
    const clickHandeler = (product)=>{
        const newCart = [...carts, product];
        setCart(newCart);
        addToDb(product.id)
    } 
   
    return (
     
        <div className='main-shop'>
            <div className='shop-container'>
          {
              products.map(product =><Product product={product} key={product.id}clickHandeler={clickHandeler}></Product>)
          }
          
            </div>
            <div className='shop-right'>
             <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;