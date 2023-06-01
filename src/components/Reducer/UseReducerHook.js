import axios from "axios"
import React, { useEffect, useReducer } from "react"

const initialState = {
    "loading":true,
    "error":'',
    "post" : []
}

const reducer = (state,action) => {
    switch(action.type){
        case "Fetch_Success":
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case "Fetch_Error":
            return {
                loading : false,
                post : {},
                error : 'Some Thing Wrong'
            }
        default :
            return state
    }
}

const UseReducerHook = () => {
    const [ state, dispatch ] = useReducer(reducer,initialState);

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                dispatch({type:"Fetch_Success",payload:res.data})
            })
            .catch((err)=>{
                dispatch({type:"Fetch_Error"})
            })
    },[])

    return (
        <>
            { state.loading ? 
                "...loading": 
                state.post.map((post)=>(
                        <ul key={post.id}>
                            <li>{post.title}</li>
                        </ul>
                    ))
            }
            { state.error ? state.error : null }
        </>
    )
}

export default UseReducerHook;