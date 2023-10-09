import  React, { useEffect, useState } from  "react"

function HookMouse(){
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMouseMovePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("UseEffect Called")
        window.addEventListener('mousemove',logMouseMovePosition)

        return () => {
            console.log('Component unmount');
            window.removeEventListener("mousemove",logMouseMovePosition)
        }
    },[])

    return (
        <div>
            Hook - X - {x} Y - {y}
        </div>
    )
}

export default HookMouse