import React, { useEffect, useState } from "react"

const getLocalItem = () => {
    const list = localStorage.getItem("lists")
    if(list){
        return JSON.parse(localStorage.getItem("lists"))
    }else{
        return [];
    }
}

const TodoApp = () => {
    const [input,setInput] = useState("")
    const [todos,setTodos] = useState(getLocalItem())
    const [edit,setEdit] = useState(null)
    const [toggle,setToggle] = useState(true)

    const addTodo = e => {
        e.preventDefault();

        if(!input){
            alert("!input value is empty")
        }else if(input && !toggle){
            setTodos(
                todos.map((elem)=> {
                    if(elem.id === edit){
                        return { ...elem,name:input}
                    }
                    return elem
                })
            )
            setToggle(true)
            setInput("")
            setEdit(null)
        }else{
            const inputData = {id:new Date().getTime().toString(),name:input}
            setTodos([...todos,inputData])
            setInput("") 
        }

    }

    const deleteItem = (id) => {
        const del = todos.filter((elem)=>{
            return elem.id !== id
        }) 
        setTodos(del)
    }

    const editItem = (id) => {
        const edit = todos.find((item)=>{
            return item.id === id
        })
        setToggle(false)
        setInput(edit.name)
        setEdit(id)
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    })

    return (
        <>
            <h1>Todo APP 📝</h1>
            <input 
                type="text"
                placeholder="Type something........." 
                value={input}
                onChange={e=>setInput(e.target.value)}
            />
            {
                toggle ? <button onClick={addTodo}>Add Items</button> : <button onClick={addTodo}>Update Items</button>
            }
            
            <div>
                {
                    todos.map((todo)=>{
                        return (
                            <ul key={todo.id}>
                                <li>{todo.name}</li>
                                <button onClick={()=>deleteItem(todo.id)}>Delete</button>
                                <button onClick={()=>editItem(todo.id)}>Edit</button>
                            </ul>
                        )}
                    )
                }
            </div>
        </>
    )
}

export default TodoApp