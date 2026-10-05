import { useContext } from "react"
import { content } from "./parent"

export default function Child3(){

 const values = useContext(content)

 console.log(values)

    return(
        <>
        <h1>Child3</h1>
        </>
    )
}