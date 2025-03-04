import React from 'react';

const PostCard = ({ title, content, author }) => {
    return (
        <div className="postcard">
            <h2>{title}</h2>
            <p>{content}</p>
            <p><small>By {author}</small></p>
        </div>
    );
};

export default PostCard;