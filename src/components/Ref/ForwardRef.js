import React, { useRef } from "react"
import User from "./User"

const ForwardRef = () => {
    const inputRef = useRef(null);
    console.log("ForwardRef Render")
    const updateInput = () => {
        inputRef.current.value = 1000
        inputRef.current.style.color = "red"
        inputRef.current.focus()
    }

    return (
        <>
            <h2> ForwardRef Hook</h2>
            <User ref={inputRef}/>
            <button 
                className="btn btn-primary"
                onClick={updateInput}
            >
                Update Input
            </button>
        </>
    )
}

export default ForwardRef