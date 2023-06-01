import React, { useCallback, useState } from "react";
import Child from "./Child";

const Callback = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Vivek")
    console.log("render")
    const callback = useCallback(function (){
    },[])

    return (
        <>
            <h1>UseCallback Hook</h1>
            <h2>Count value is {count}</h2>
            <h2>Name is {name}</h2>
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>
                Increment
            </button>
            <button className="btn btn-primary" onClick={()=>setName("Vikash")}>
                Update Name
            </button>
            <Child callback={callback}/>
        </>
    )
}

export default Callback