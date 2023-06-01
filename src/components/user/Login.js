import React from 'react'
import { login,logout } from "../../Redux/User"
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={()=>{
                    dispatch(login({ 
                        name : "Vivek" , 
                        age :20, 
                        email : "vivek@gmail.com"
                    }))
                }}
            >
                Login
            </button>
            <button
                onClick={()=>{
                    dispatch(logout())
                }}
            >
                Logout
            </button>
        </div>
    )
}

export default Login
