import { useState } from "react";

export default function Counter(){

    let [count,setCount]=useState(0)

    let increment = ()=>{
        setCount((curr)=>curr+1)
    }

    let decrement = ()=>{
        setCount((curr)=>curr-1)
    }

    let reset = ()=>{
        setCount(0)
    }

    return {count,increment,decrement,reset}

}