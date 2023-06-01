import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { changeColor } from "../../Redux/theme"

const Color = () => {
    const [color,setColor] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <input
                type='text'
                placeholder='type color name...'
                onChange={(e)=>setColor(e.target.value)}
            />
            <button onClick={()=>dispatch(changeColor(color))}>set color</button>
        </div>
    )
}

export default Color
