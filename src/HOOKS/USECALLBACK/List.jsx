import { useEffect, useState } from "react"

export default function List({getItem}){

    let [item,setItem]=useState([])

    useEffect(()=>{
        setItem(getItem)
        console.log("List function")
    },[getItem])

    return(
        <>
        <h1>List</h1>
        {item.map((item,index)=>(
            <h1 key={index}>{item}</h1>
        ))}
        </>
    )
}