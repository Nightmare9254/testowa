import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import User from './User';


  function Post({userId, id, title, body}){

    return (
      <div className="post">
            <User userId={userId}/>
            <p className="post-title">{title}</p>
            <hr/>

            <Link to={`posts/${id}`} className="post-link">See more</Link>
            <hr/>
      </div>
    );
  }
export default Post;