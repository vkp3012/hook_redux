import React, { useState } from "react"

function HookCounterTwo() {
    const initialValue = 0
    const [count,setCount] = useState(initialValue);

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () =>{
        if(count === 0){
            return initialValue;
        }
        setCount(prevCount => prevCount - 1)
    }

    const reset = () =>{
        setCount(initialValue)
    }

    const incrementFive = () =>{
        for(let i = 0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default HookCounterTwo