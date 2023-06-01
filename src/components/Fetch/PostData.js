import axios from 'axios'
import React, { useState } from 'react'

const PostData = () => {

    const [state,setState] = useState({
        userId : "",
        title : "",
        body : ""
    })

    const handleChange = (e) => {
        setState({[e.target.name]:e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post('https://jsonplaceholder.typicode.com/posts',state)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <>
            <h3>Create a Form and Post a Data</h3>
            <form onSubmit={submitForm}>
                <div>
                    <input
                        type='text'
                        name="UserId"
                        onChange={handleChange}
                        value={state.userId}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name="title"
                        onChange={handleChange}
                        value={state.title}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name="body"
                        onChange={handleChange}
                        value={state.body}
                    />
                </div>
                <button>Update Form</button>
            </form>
        </>
    )
}

export default PostData
