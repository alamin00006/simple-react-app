import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
   
   
    return (
     
        <div className='main-shop'>
            <div className='shop-container'>
          {
              products.map(product =><Product product={product} key={product.id}></Product>)
          }
          
            </div>
            <div>
                <h2>Right Side</h2>
            </div>
        </div>
    );
};

export default Shop;