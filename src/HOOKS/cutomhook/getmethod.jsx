import { useEffect, useState } from "react";

export default function Get(url) {

    let [value, setValue] = useState([])

    useEffect(() => {
        fetch(url).then((res) => res.json()).then((res) => {
            setValue(res)
        }).catch((err) => console.log(err))
    }, [url])

    let Users = value

    return { Users }

}