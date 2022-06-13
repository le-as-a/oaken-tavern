import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = ({ items }) => {
    return (
        <div className='menu'>
            <div className='menu-container'>
                <div className='menu-screen'>
                    {items.map(item => (
                        <div className='menu-item' key={`${item.name}`}>
                            <img src={`${item.img_url}`} alt='item' className='item-img' />
                            <div className='item-text'>
                                <div className='item-info'>
                                    <div className='item-name'>
                                        {item.name}
                                    </div>
                                    <div className='item-price'>
                                        {item.price} gil ea.
                                    </div>
                                </div>
                                <div className='item-desc'>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='menu-nav'>
                <NavLink to='/order' className='nav-order'>
                    Place an Order
                </NavLink>
                <NavLink to='/' className='nav-main'>
                    Home
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
