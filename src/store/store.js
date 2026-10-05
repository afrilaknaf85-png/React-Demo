import { configureStore } from "@reduxjs/toolkit"
import { counter } from "../app/user"

export const store = configureStore({
    reducer:{
        usercounter:counter.reducer
    }
})