import React, { useEffect, useState } from 'react'

function INtervalHookCounter() {
    const initialValue = 0;
    const [count,setCount] = useState(initialValue);
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(()=>{
        const Interval = setInterval(tick,1000)
        return () => {
            clearInterval(Interval);
        }
    },[])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default INtervalHookCounter