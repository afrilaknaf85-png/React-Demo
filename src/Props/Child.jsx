export default function Child({value}){

    console.log(value)

    return(
        <>
        <h1>Hello welcome to Child in props</h1>
        <h1>My name is {value.name}</h1>
        
        </>
    )
}