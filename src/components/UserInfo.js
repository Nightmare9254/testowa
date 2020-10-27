import React from 'react';
import User from './User';
import {imgTab} from  '../userImg';

function UserInfo({name, email, address, id}){

    return(
        <div className="user-info-wrapper">
            <p>Username: {name}</p>
            <p>Email address: {email}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
            <img src={imgTab[id]} className="user-info-img"/>
        </div>
    )
}

// to rob jeszcze ja bd za 10 min

export default UserInfo;