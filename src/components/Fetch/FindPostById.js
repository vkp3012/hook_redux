import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FindPostById() {
    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[id])
    return (
        <div>
            <input 
                type='text'
                value={id}
                onChange={e=>setId(e.target.value)}
            />
            <h4>{post.title}</h4>
        </div>
    )
}

export default FindPostById