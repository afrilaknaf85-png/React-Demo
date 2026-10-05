function Button(){


    console.log("Welcome")

    return(
        <>
        <button className="w-[200px] h-auto bg-red-200 p-[20px] rounded-[30px]" onClick={()=>console.log("Button Clicked")}>Click Me</button>
        </>
    )
}

export default Button