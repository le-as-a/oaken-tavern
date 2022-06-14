import React from 'react';
import { NavLink } from 'react-router-dom';
import './thanks.css';

const Thanks = () => {
    return (
        <div className='thanks'>
            <div className='thx-container'>
                <div className='order-complete'>
                    Your order is complete!
                </div>
                <div className='staff'>
                    One of our staff members will be with you shortly...
                </div>
                <div className='thanks-links'>
                    <NavLink to='/'>Return to Home</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Thanks;
