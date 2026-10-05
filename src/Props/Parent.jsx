import Child from "./Child";

export default function Parent(){

    let name = "afril aknaf"
    let ar = ["afril","Aknaf","demo","Sam","John","Tim","David"]

    return(
        <>
        <h1>Hello welcome to Parent in props</h1>
        <Child value={{name,ar}}/>
        </>
    )
}