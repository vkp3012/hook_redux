import React, { useMemo, useState } from 'react'

const Another = () => {
  const [count,setCount] = useState(0)
  const [item,setItem] = useState(10)
  // function multiply() {
  //   console.log("function render");
  //   return count*5
  // }

  const multiply = useMemo(function multiply(){
    console.log("function render");
    return count*5
  },[count])

  return (
    <div>
      <h3>Use Memo hook </h3>
      <h5>Count : {count}</h5>
      <h5>Item : {item}</h5>
      <h5>{multiply}</h5>
      <button 
        className='btn btn-primary'
        onClick={()=>setCount(count + 1)}
      > 
        +
      </button>
      <button 
        className='btn btn-primary'
        onClick={()=>setItem(item + 1)}
      > 
        +
      </button>
    </div>
  )
}

export default Another

