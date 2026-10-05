import { useState } from "react"
import Counter from "../cutomhook/custom"
import Links from "../../Navigate/link"

export default function State(){

    let [name,setName]=useState("")
    let [toggle,setToggle]=useState(false)
    // let [count,setCount]=useState(0)

    let {count,increment,decrement,reset}=Counter()

    console.log("Page Rendred")

    let styles = {
        backgroundColor: toggle ? "black" : "white",
        color : toggle ? "white" : "black" 
    }


    return(
        <>
        <h1 style={styles}>State function name is {name}</h1>
        <input type="text" placeholder="Enter the name" value={name} onChange={(e)=>{
            setName(e.target.value)
        }} />
        <button onClick={()=>setToggle(!toggle)}>Toggle Theme</button>
        <br />
        <br />

        {/* <button onClick={()=>setCount(count+1)}>Add</button>
        <h1>Count number is {count}</h1>
        <button onClick={()=>{
            if(count<=0){
                setCount(0)
            }else{
                setCount(count-1)
            }
        }}>Sub</button> */}

        <button onClick={increment}>Add</button>
        <h1>Count number is {count}</h1>
        <button onClick={decrement}>Sub</button>
        <button onClick={reset}>Reset</button>

        <Links/>
        </>
    )
}