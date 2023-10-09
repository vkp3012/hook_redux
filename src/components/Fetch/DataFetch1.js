import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetch1() {
    const [post,setPost] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <ul>
                {
                    post.map(posts =>(
                        <li key={posts.id}>
                            {posts.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetch1