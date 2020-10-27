import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import User from './User';
import UserInfo from './UserInfo';

function SerchUser(){

    const [value,setValue] = useState("");
    const [user,setUser] = useState([]);
    //{console.log(value)}


    return(
        <>
        <div className="searchuser-wrapper">
            <input type="text" placeholder="serch for user" className="search-input" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="search-button" onClick={() =>{

                    fetch(`https://jsonplaceholder.typicode.com/users/?username=${value}`)
                    .then(res => res.json())
                    .then(json => setUser(json))
                    // .then(json => console.log(json))

            }}>Search</button>


        </div>
         {user.map(user => <UserInfo key={user.id} id={user.id} address={user.address} name={user.name} email={user.email} phone={user.phone}/>)}
        </>
    )
}

export default SerchUser;