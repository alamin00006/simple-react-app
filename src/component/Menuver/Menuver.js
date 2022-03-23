import React from 'react';
import logo from '../../images/Logo.svg'
import './Menuver.css'
const Menuver = () => {
    return (
        <nav className='nav'>
           <div className="">
             <img src={logo} alt="" />
           </div>
           <div className='shop-details'>
            <a href="/order">Order</a>
            <a href="/Order Reviwe">Order Reviwe</a>
            <a href="/Manage Inventory">Manage Inventory</a>
           </div>
        </nav>
    );
};

export default Menuver;