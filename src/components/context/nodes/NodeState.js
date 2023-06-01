import { useState } from "react"
import NodeContext from "./NodeContext"

const NodeState = (props) => {

    const s1 = {
        "name":"Vivek",
        "class":"11b"
    }

    const [state,setState] = useState(s1)
    const update = () => {
        setTimeout(()=>{
            setState({
                "name":"Vikash",
                "class":"12b"
            })
        },5000)
    }

    return(
        <NodeContext.Provider value={{state,update}}>
            {props.children}
        </NodeContext.Provider>
    )
}

export default NodeState;