export default function Dynamic(){

    let a = "Afril Aknaf" 
    let b = ["Afril","Sam","john","wick","smith","tony"]
    let c = {
        name:"Sam",
        class:"Mern",
        mode:"Online"
    }

    return(
        <>
        <h1>Dynamic name is {a}</h1>
        {
            b.map((item,index)=>(
                <h2 key={index}>{item}</h2>
            ))
        }
        <h1>My name is {c.name}</h1>
        <h1>My class is {c.class}</h1>
        <h1>My mode is {c.mode}</h1>
        <h1>{Math.random()}</h1>
        </>
    )
}