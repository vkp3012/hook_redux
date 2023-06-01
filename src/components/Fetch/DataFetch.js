import React, { useEffect, useState } from 'react'
import axios from "axios"

const DataFetch = () => {
    const [post,setPost] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState({})

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                console.log(res.data)
                setLoading(false)
                setPost(res.data);  
                setError(null)
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
                setPost({})
                setError(err)
            })      
    },[])

    return (
        <div>
            <h5>
                <h2>Post All Data</h2>
                {
                    loading ? "...Loading Data" : 
                    post.map((post)=>(
                        <ul key={post.id}>
                            <li>{post.title}</li>
                        </ul>
                    ))
                }

                {error ? "...error Some Thing in data loading file": error }
            </h5>
        </div>
    )
}

export default DataFetch
