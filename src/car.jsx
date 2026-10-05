import "./car.css"
import style from "./mod.module.css"

export default function Car() {

    let sty = {
        color : "yellow",
        backgroundColor:"green",
        margin:"20px",
        width:"200px",
        heigth:"auto",
        padding:"30px"
    }

    return(
        <>
        <h1 id="h1" style={{color:"red"}}>Car page</h1>
        <h2 style={sty}>Welcome to React css page</h2>

        <br />
        <br />
        <h1 id={style.john}>Style 1 module</h1>
        <h1 className={style.sam}>style 2 in module</h1>
        </>
    )

}