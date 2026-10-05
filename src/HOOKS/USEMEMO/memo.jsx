import { useMemo, useState } from "react"

export default function Memo(){

    let [number,setNumber]=useState(0)
    let [toggle,setToggle]=useState(false)

    let sty = {
        backgroundColor: toggle ? "black" : "white",
        color:  toggle ? "white" : "black"
    }

    let demovalue = useMemo(()=>{
        return slowfunction(number)
    },[number])

    return(
        <>
        <h1>Hello welocme Memo</h1>
        <h1 style={sty}>Input  number value is {demovalue}</h1>
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} placeholder="Enter the number"/>
        <button onClick={()=>setToggle(!toggle)}>Toggle Color</button>
        </>
    )
}

function slowfunction(num){
    console.log("Slow running function")

    for(let i =0; i<=1000000000;i++){}

    return num*2
}