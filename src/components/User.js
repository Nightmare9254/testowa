import React, { useEffect, useState } from 'react';
import {imgTab} from  '../userImg';

function User({userId}){

    const [users,setUsers] = useState([]);

        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            .then(res => res.json())
            .then(json => setUsers(json))
            // .then(json => console.log(json))
        })


    return(
        <div className="user">
            {users.map(user => <p>Created by: {user.name}</p>)}
            <img src={imgTab[userId]} className="user-img"></img>
        </div>
    )
}

export default User;