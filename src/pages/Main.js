import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SerchUser from '../components/SerchUser';

function Main(){


    return(
        <div className="main-header">
            <h1>Welcome</h1>
            <Link to="/posts" className="main-link">Posts</Link>
            <Link to="/search-users" className="main-link">Search users</Link>
            <Link to="/albums" className="main-link">Albums</Link>
        </div>
    )
}

export default Main;