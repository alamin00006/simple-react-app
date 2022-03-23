import React from 'react';
import './Product.css'
const Product = (props) => {
  const {name,img,price,ratings} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p>{name}</p>
            <p><small>Price : {price}</small></p>
            <p> <small>Ratings : {ratings} Star</small></p>
            </div>
            <button className='btn'><p>Add To Cart</p></button>
        </div>
        
    );
};

export default Product;