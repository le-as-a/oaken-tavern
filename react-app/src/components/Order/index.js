import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './order.css';

import { add, remove, del } from '../../store/order';
import { NavLink, Redirect } from 'react-router-dom';

const Order = ({ items }) => {
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const minVal = 0;

    const onChange = e => {
        let val = e.target.value;
        console.log(val)
        const id = e.target.getAttribute('a-key');
        let item;
        for (let obj of Object.values(items)) {
            if (obj['id'] == id) item = obj;
        }

        const orderItem = { 'name': item.name, 'price': item.price, 'amt': val };

        if (val > 0) {
            dispatch(add(orderItem));
        } else if (val == 0) {
            dispatch(remove(item.name));
        }
    }

    const cost = () => {
        const orderItems = Object.values(order);
        let total = 0;
        for (let item of orderItems) {
            if ((item.name === "Cunning Craftman's Draught" || item.name === "Cordial") && item.amt >= 3) {
                total += (item.price * item.amt) - (Math.floor(item.amt / 3) * 500);
            } else { total += item.price * item.amt; }
        }
        return total;
    }

    return (
        <div className='order-container'>
            <div className='order-menu'>
                <div className='menu-title'>
                    Oaken Tavern Menu
                </div>
                <div id='menu-note'>Note: Cordial/Drought are buy 3, get 500 off.</div>
                <div className='menu-content'>
                    {items.map(item => (
                        <div className='menu-order-container' key={`${item.name}`}>
                            <div className='menu-item-order'>
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
                            <input type='number' onChange={onChange} defaultValue={minVal} min='0' className='item-num' a-key={`${item.id}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='order'>
                <div className='order-list'>
                    <div className='list-title'>
                        <div>Item</div>
                        <div>#</div>
                    </div>
                    {Object.values(order).length > 0 ? Object.values(order).map(item => (
                        <div className='list-item'>
                            <div>{item.name}</div>
                            <div>{item.amt}</div>
                        </div>
                    )) : <div className='no-items'>You don't have any items yet.</div>}
                </div>
                <div className='order-subtotal'>
                    <div className='name-for-order'>
                    Your Name:<br />
                    <input id='username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='order-total'>Total: {cost()} gil due</div>
                    <div className='order-btns'>
                        <NavLink to='/thanks' className='order-links'>
                            <button className='order-style'>Place Order</button>
                        </NavLink>
                        <NavLink to='/' className='order-links'>
                            <button className='order-style'>Return to Home</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
