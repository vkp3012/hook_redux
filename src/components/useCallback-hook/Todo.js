import React, { memo } from 'react'

const Todo = (props) => {
    console.log("child render")
    return (
        <>
            <h2>My Todo</h2>
            {
                props.todos.map((todo,index)=>{
                    return (
                        <p key={index}>
                            {todo + index}
                        </p>
                    )
                })
            }
            <button onClick={props.addTodo}>Add Todo</button>
        </>
    )
}

export default memo(Todo)
