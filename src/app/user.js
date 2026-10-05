import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count:0
}

export const counter = createSlice({
    name:"Counter Values",
    initialState,
    reducers:{
        increment:(state,action)=>{
             state.count+=1
        },
        decrement:(state,action)=>{
             state.count-=1
        },
        reset:(state,action)=>{
             state.count=0
        }
    }
})

export const {increment,decrement,reset} = counter.actions

export default counter.reducer