import { useEffect, useLayoutEffect, useState } from "react"
import Get from "../cutomhook/getmethod"
import NavLinks from "../../Navigate/navlink"

export default function Effect() {

    let [name, setName] = useState("")
    let [width, setWidth] = useState(window.innerWidth)

  let { Users } = Get("http://jsonplaceholder.typicode.com/users")
        console.log(Users)


    useEffect(() => {
        console.log("Page Rendred")

        // fetch("http://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((res) => console.log(res)).catch((err) => console.log(err))     

        // handlefunction()

      
    }, [])


    //  let handlefunction = async () => {

    // }


    useLayoutEffect(() => {
        const up = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", up)

        return () => {
            window.removeEventListener("resize", up)
        }
    }, [])

    // ()=>{}  ==> group code excute use aku 
    // [] => depends 

    return (
        <>
            <h1>Hello welcome to Effect page</h1>
            <h1>My name is {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <h1>Screen inner Width is {width}</h1>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <NavLinks/>
        </>
    )
}