import React, { useEffect, useState } from 'react';
import Post from './Post';
import {useParams, Link} from 'react-router-dom';
import User from './User';


function SinglePost(){

    const {id} = useParams();
    const [singlePost,setSinglePost] = useState({});




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => setSinglePost(json))
    })
    return(
        <div className="post">
            <User userId={singlePost.userId}/>
            <p className="single-post-title">{singlePost.title}</p>
            <p>{singlePost.body}</p>
            <Link to="/"  className="post-link">Go back</Link>
        </div>
    );
}

export default SinglePost
