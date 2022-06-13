import React from 'react';
import './welcome.css';

const Welcome = ({ posts }) => {
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
                        <div className='menu-btn'>Our Menu</div>
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
            <div className='tavern-media'>
                <div className='media-title'>
                    Share your screenshots with us on discord in the #media channel!
                </div>
                <div className='media-imgs'>
                    {posts && posts.map(post => (
                        <div className='media-post'>
                            <img src={`${post.url}`} alt={`${post.id}-img`} className='post-img' />
                            Posted by {post.user}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Welcome
