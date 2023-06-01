import React, { useContext, useEffect } from 'react'
import nodeContext from '../nodes/NodeContext'

const About = () => {
    const a = useContext(nodeContext)
    useEffect(()=>{
        a.update()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[a])
    
    return (
        <div>
            This is About {a.state.name} and he is class {a.state.class}
        </div>
    )
}

export default About
