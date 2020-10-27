import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Album from './Album';
import Photo from './Photo';

function Photos(){
    const [photos,setPhotos] = useState([]);
    const [album,setAlbum] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(response => response.json())
        .then(json => setPhotos(json))

        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(res => res.json())
        .then(json => setAlbum(json));
        //.then(json => console.log(json));
    },[id])

    return (
        <div>

            <h1>Album title: {album.title}</h1>
            {photos.map(photo => <Photo key={photo.id} title={photo.title} url={photo.url}/>)}
        </div>
    )
}

export default Photos;