import React, { useEffect, useState } from 'react';
import { roll } from '../Random';
import Post from "./Post";


  function Posts() {

    const [posts,setPosts] = useState([]);
    const [users,setUsers] = useState([]);
    const prePosts = [];
    //1. While dopoki dlugosc tablicy randomowych liczb nie jest 100
    //2. robisz funckje getRadom()
    //3. W while robisz if() czy juz jest w tablicy jezeli nie ma takiej liczb to push else losuj kolejna
    //4. For w fetchu do 100
    //5. Przypisac do prePosts
    //6. Cale preposts przypisac do setPosts
    let rngTab = [];
    roll(rngTab);



     useEffect(() =>{
           for(let i = 0; i <= 100; i++){
            fetch(`https://jsonplaceholder.typicode.com/posts/${rngTab[i]}`)
            .then(res => res.json())
            .then(json => {
              prePosts.push(json);
              if(prePosts.length === 100){
                setPosts(prePosts);
              }
            })
            //.then(json => console.log(json));
           }

      },[]);

    return (
      <div className="posts-main">
           {posts.map(post => <Post user={users.id} key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}/>)}
      </div>
    );
  }

export default Posts;