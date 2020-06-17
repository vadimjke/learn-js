import React from 'react';
import PostListItem from '../post-list-item'

import './post-list.css';

const PostList = ({ posts }) => {
    const elements = posts.map((item) => {
        return (
            <li className="list-group-item">
                ..
            </li>
        )
    })
    return (
        <div>
            <ul className="app-list list-group">
                <PostListItem label="Going to learn React" important />
                <PostListItem label="That is is good" />
                <PostListItem label="I need a break..." />
            </ul>
        </div>
    );
};

export default PostList;