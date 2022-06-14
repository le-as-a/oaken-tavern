import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { del } from '../../store/order';
// import mainBG from './main-bg.mp4';
import './welcome.css';

import { useDispatch } from 'react-redux';

const Welcome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(del());
    }, [dispatch]);

    return (
        <div className='welcome'>
            <div className='main-container'>
                <div className='tavern-title'>
                    <div id='title'>Oaken Tavern</div>
                    <div className='tavern-links'>
                        <div className='tav-desc'>
                            A place to rest between Duty Finder queues and your PF filling.<br />
                            Find our discord <a href='https://discord.gg/Dn9DzY5eE4'>here</a>!
                        </div>
                        <NavLink to='/menu' className='menu-btn'>
                            Our Menu
                        </NavLink>
                    </div>
                </div>
                <div className='loc-info'>
                    <div id='loc-title'>Location:</div>
                    Jenova, Mist,<br />
                    Ward 21, Plot 37
                </div>
            </div>
        </div>
    );
};

export default Welcome
