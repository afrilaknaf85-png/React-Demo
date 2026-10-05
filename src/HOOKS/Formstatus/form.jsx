
import { useFormStatus } from "react-dom"

export function SubmitButton(){

    let {pending} = useFormStatus()
    let sty = {
        backgroundColor : pending ? "red" : "yellow",
        color : pending ? "aqua" : "green"
    }

    return(
        <>
        <button type="submit" style={sty} disabled={pending}>{pending? "Submitting.." : "Submit"}</button>
        </>
    )
}



export default function Form(){


    let HandleSubmit = async(formData)=>{
        await new Promise((resolve)=>setTimeout(resolve,3000))

        console.log(formData.get("Name"))
    }

    return(
        <>
        <h1>FOrm Status hook</h1>
        <form action={HandleSubmit}>
            <input type="text" placeholder="Enter the name" name="Name" />
            <SubmitButton/>
        </form>
        </>
    )
}