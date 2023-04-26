import { configureStore } from "@reduxjs/toolkit";
import  AddSubReducer  from "../features/AddSub/AddSubSlice";

export const store =  configureStore({
    reducer:{
        AddSub:AddSubReducer
    }
})