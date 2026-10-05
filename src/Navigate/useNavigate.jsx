import {useNavigate} from "react-router-dom"

export default function Navigates(){

    let navigate = useNavigate()

    return(
        <>
        <h1 onClick={()=>{
            setTimeout(()=>navigate("/"),3000)
        }}>Go to Home Page</h1>
        </>
    )
}