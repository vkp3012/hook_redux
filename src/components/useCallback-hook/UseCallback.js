import React,{ useCallback, useState } from 'react'
import Todo from './Todo'

const UseCallback = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([])

    const addTodo = useCallback(()=>{
        setTodos((prev)=>[...prev,"New Enter "])
    },[])

    // const addTodo = () => {
    //     setTodos((prev)=>[...prev,'New Entry'])
    // }

    const increment = () => { 
        setCount(count+1)
    }

    return (
        <>
            <Todo todos={todos} addTodo = {addTodo}/>
            <div>
                Count : {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default UseCallback
