import React from 'react';

function Photo({title,url}){

    return(
        <div>
            <p>Album title: {title}</p>
            <img src={url}/>
        </div>
    )
}

export default Photo;