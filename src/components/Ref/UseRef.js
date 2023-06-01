import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)
    console.log("UseRef Render")
    const inputUpdate = () => {
        inputRef.current.focus()
        inputRef.current.value = 2000
    }

    return (
        <div>
            <h2>UseRef Hook</h2>
            <input type='text' ref={inputRef}/>
            <button
                onClick={inputUpdate}
                className='btn btn-primary'
            >Update Input</button>
        </div>
    )
}

export default UseRef
