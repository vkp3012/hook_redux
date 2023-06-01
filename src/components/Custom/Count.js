import React, { useState } from 'react'
import CustomHook from './CustomHook';

const Count = () => {
    const [count,setCount] = useState(0);
    //create a Custom Hook
    CustomHook(count)
    return (
        <div>
            <h3>{count}</h3>
            <button
                className='btn btn-primary'
                onClick={()=>setCount(count+1)}
            >
                Click 😀
            </button>
        </div>
    )
}

export default Count
