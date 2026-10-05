import { useRef, useState } from "react"
// import Hero from "./assets/hero.mp4"

export default function Ref(){

    let [name,setName]=useState("")

    console.log("Compoent rendred")

    let inputref = useRef("")

    const display = ()=>{
        console.log(inputref.current.value)
    }

    const videoref = useRef("")


    return(
        <>
        <h1>Ref Page</h1>
        <h1>My name is </h1>
        {/* <input type="text" placeholder="Enter the name" value={name} onChange={(e)=>setName(e.target.value)} /> */}
        <input type="text" placeholder="Enter the name" ref={inputref} />
        <button onClick={display}>Display useRef value</button> <br />

        <button onClick={()=>{
            inputref.current.focus()
        }}>focus inut</button>

        {/* <img src={Hero} alt="" /> */}
        <video src="" ref={videoref}></video>
        <button onClick={()=>videoref.current.play()}>play</button>
        </>
    )
}