import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const initialValue = 0;
    const [count,setCount] = useState(initialValue)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log(`useEffect - Updating document title`)
        document.title = `You Clicked ${count} times`
    },[count])

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button
                onClick={()=>setCount(count + 1)}
            >
                Clicked {count} times
            </button>
        </div>
    )
}

export default HookCounterOne