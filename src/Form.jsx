import { useState, useRef, useEffect } from "react"
import axios from "axios"

export default function Form1() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let [up, setUp] = useState(false)

    let [refresh, setRefresh] = useState(false)

    let [id, setId] = useState("")

    // let name = useRef("")
    // let email = useRef("")
    // let password = useRef("")
    let [user, setUser] = useState([])

    const nameRegex = /^[^\s][\p{L}'\s-]{1,59}$/u;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    useEffect(() => {
        fetch("https://69c631a1f272266f3eac16ce.mockapi.io/Users").then((res) => res.json()).then((res) => {
            console.log(res)
            setUser(res)
        }).catch((err) => console.log(err))
    }, [refresh])


    function handleSubmit(e) {

        e.preventDefault()

        // let refname = name.current.value
        // let refemail = email.current.value
        // let refpass = password.current.value

        let refname = name
        let refemail = email
        let refpass = password

        console.log(refname)
        console.log(refemail)
        console.log(refpass)

        if (!nameRegex.test(refname)) {
            console.log("Wrong name")
            return
        }

        if (!emailRegex.test(refemail)) {
            console.log("Wrong Email")
            return
        }

        if (!strongPasswordRegex.test(refpass)) {
            console.log("Wrong password")
            return
        }

        let payload = {
            UserName: refname,
            UserEmail: refemail,
            UserPassword: refpass
        }



        axios.post("https://69c631a1f272266f3eac16ce.mockapi.io/Users", payload).then((res) => {
            console.log(res)
            setRefresh(true)
        }).catch((err) => console.log(err))

        console.log("Form Successfullly Submitted")

        //    name.current.value=""
        //    email.current.value=""
        //    password.current.value=""

        setName("")
        setEmail("")
        setPassword("")
    }

    function updated(item) {

        console.log(item)
        setUp(true)

        setName(item.UserName)
        setEmail(item.UserEmail)
        setPassword(item.UserPassword)
        setId(item.id)
    }

    function updating(e) {

        e.preventDefault()

        let refname = name
        let refemail = email
        let refpass = password

        let payload = {
            UserName: refname,
            UserEmail: refemail,
            UserPassword: refpass
        }


        fetch(`https://69c631a1f272266f3eac16ce.mockapi.io/Users/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(payload)
        }).then((res) => res.json()).then((res) => {
            console.log(res)
            setRefresh(true)
            setName("")
            setEmail("")
            setPassword("")
        }).catch((err) => console.log(err))
    }

    function deleted(item) {
        axios.delete(`https://69c631a1f272266f3eac16ce.mockapi.io/Users/${item.id}`).then((res) => {
            console.log(res)
            setRefresh(true)
        }).catch((err) => console.log(err))
    }

    return (
        <>
            <h1>Form Value</h1>
            <form onSubmit={up ? updating : handleSubmit}>
                <input type="text" placeholder="Enter the name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter the email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {/* <input type="text" placeholder="Enter the name" ref={name} />
            <input type="email" placeholder="Enter the email" ref={email} />
            <input type="password" placeholder="Enter the password" ref={password} /> */}
                <input type="submit" />
            </form>


            <h1>User List</h1>
            {
                user.map((item, index) => (
                    <div key={index}>
                        <h1>User Id No is {item.id}</h1>
                        <h1>User Name is {item.UserName}</h1>
                        <h1>User Email is {item.UserEmail}</h1>
                        <h1>User Password is {item.UserPassword}</h1>
                        <button onClick={() => updated(item)}>Update</button>
                        <button onClick={() => deleted(item)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}