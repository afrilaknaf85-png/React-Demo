import { useCallback, useMemo, useState } from "react"
import List from "./List"

export default function CallBack(){

    let [count,setCount]=useState(0)
    let [toggle,setToggle]=useState(false)

    let sty = {
        backgroundColor: toggle ? "black" : "white",
        color:  toggle ? "white" : "black"
    }

    let getItem = useCallback(()=>{
        return [count+1,count+2,count+3]
    },[count])

    // let getItem = useMemo(()=>{
    //     return 
    // },[])

    return(
        <>
        <h1 style={sty}>My count is {count}</h1>
        <input type="number" value={count} onChange={(e)=>setCount(parseInt(e.target.value))} placeholder="Enter the number"/>
        <button onClick={()=>setToggle(!toggle)}>Toggle Color</button>
        <List getItem={getItem}/>
        </>
    )
}