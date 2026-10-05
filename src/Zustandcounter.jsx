import { stores } from "./zustandstore/stores"

export default function ZusCounter(){

    const {count,increment,decrement,reset}=stores()

    return(
        <>
        <button onClick={increment}>Add</button>
        <h1>Counter Value is {count}</h1>
        <button onClick={decrement}>Sub</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}