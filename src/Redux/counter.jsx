import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,reset } from "../app/user"

export default function Counter(){

    let counts = useSelector((state)=>state.usercounter.count)

    let dispacth = useDispatch()


    return(
        <>
        <button onClick={()=>dispacth(increment())}>Add</button>
        <h1>Counter app is {counts}</h1>
        <button onClick={()=>dispacth(decrement())}>Sub</button><br />
        <button onClick={()=>dispacth(reset())}>Reset</button>

        </>
    )
}