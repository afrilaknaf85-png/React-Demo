import { useReducer, useState } from "react"

function demo(state,action){
    console.log(state)
    console.log(action)

    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1};
        case "DECREMENT":
            return {count:state.count-1};
    }
}

export default function Reducer() {

    let [count, setCount] = useState(0)

    let [state,dispacth] =useReducer(demo,{count:0})

    //state ==> variable name
    //demo ==> update pandra funciion 
    // dispacth ==> trigger updating funcrtion ==> (demo)

    console.log(state)

    const increment = () => {
        // setCount(count + 1)
        dispacth({type:"INCREMENT"})
    }

    const decrement = () => {
        // setCount(count - 1)
        dispacth({type:"DECREMENT"})
    }

    return (
        <>
            <button onClick={increment}>Add</button>
            <h1>Reducer count is {state.count}</h1>
            <button onClick={decrement}>Sub</button>
        </>
    )
}