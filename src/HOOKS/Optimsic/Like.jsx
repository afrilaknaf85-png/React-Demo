import { startTransition, useOptimistic, useState } from "react"

export default function Insta() {

    let [like, setLike] = useState(10)

    let [setopt, addSetopt] = useOptimistic(like, (currentLike, change) => {
      return  currentLike + change
    })

     function handleLike() {
        startTransition(async () => {
            addSetopt(1)

            await new Promise((resolve) => setTimeout(resolve, 3000))

            setLike((curr) => curr + 1)

            console.log(like)
        })
    }

    return (
        <>
            <h1>Like number is {setopt}</h1>
            <h1>Like number is {like}</h1>
            <button onClick={handleLike}>Like It</button>
        </>
    )
}