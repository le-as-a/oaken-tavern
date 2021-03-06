import React from 'react';
import './media.css';

const Media = ({ posts }) => {
    return (
        <>
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
        </>
    );
}

export default Media;
