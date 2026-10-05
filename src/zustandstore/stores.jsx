import { create } from "zustand";
import { persist } from "zustand/middleware";

export const stores = create(persist((set)=>({
    count:0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
    reset:()=>set((state)=>({count:0}))
}),{name:"counter_values"}))