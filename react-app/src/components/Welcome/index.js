import React from 'react';
import { NavLink } from 'react-router-dom';
// import mainBG from './main-bg.mp4';
import './welcome.css';

const Welcome = () => {
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
            <div className='loc-hrs'>
                <b>Full service nights:</b><br />
                Fridays and Saturdays, starting at 8:00PM PST
            </div>
        </div>
    );
};

export default Welcome
