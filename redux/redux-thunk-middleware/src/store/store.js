import { configureStore } from "@reduxjs/toolkit";
import  {gitUserSlice}  from "../freatures/gitUserSlice";

export const store = configureStore({
    reducer: {
        gitUser: gitUserSlice.reducer
    },
})