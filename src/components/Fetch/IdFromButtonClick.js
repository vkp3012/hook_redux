import axios from 'axios';
import React, { useEffect, useState } from 'react'

function IdFromButtonClick() {
    const [post,setPost] = useState({})
    const [id,setID] = useState(1);
    const [idFromButtonClick,setIDFromButtonClick] = useState(1)

    const clickData = () => {
        setIDFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[idFromButtonClick])

    return (
        <div>
            <input type='text' value={id} onChange={e=>setID(e.target.value)}/>
            <button type='button' onClick={clickData}>Fetch Data</button>
            <h3>{post.title}</h3>
        </div>
    )
}

export default IdFromButtonClick