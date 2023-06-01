import React, { useMemo, useState } from "react"

const UseMemo = () => {

    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);

    // function multiply(){
    //     console.log("useMemo render")
    //     return count * 5
    // }

    const multiply = useMemo(function multiply(){
        console.log("function render")
        return count *5
    },[count])

    return (
        <>
            <h1> Use Memo Hook </h1>
            <h3>Count : {count}</h3>
            <h3>Item : {item}</h3>
            <h3>{multiply}</h3>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item*10)}>Update Item</button>
        </>
    )
}

export default UseMemo