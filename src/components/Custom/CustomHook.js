import { useEffect } from 'react'

const CustomHook = (count) => {
    useEffect(()=>{
        console.log("custom Hook called")
        if(count>1){
            document.title = `Count ${count}`
        }else{
            document.title = `Count `
        }
    },[count])
}

export default CustomHook
