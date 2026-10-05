import { createContext } from "react";
import Child1 from "./child";
import Navigates from "../../Navigate/useNavigate";

export let content = createContext({})

export default function Parent() {

    let name = "Afril"
    let ar = [10, 20, 30, 40, 50, 60]

    return (
        <>
            <content.Provider value={{name,ar}}>
                <h1>Parent</h1>
                <Child1  />
            </content.Provider>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Navigates/>
        </>
    )
}