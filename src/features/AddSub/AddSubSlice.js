import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:88,
}
export const AddSubSlice =createSlice({
    name:'AddSub',
    initialState:initialState,
    reducers:{
        AddByOne:(state)=>{
            console.log("Inside Addone method");
            console.log("state----->",state);
            state.value += 1;
        },
        Reset:(state)=>{
            console.log(state)
            state.value =0
        },
        SubByOne:(state)=>{
            console.log(state)
            state.value -= 1;
        },
    }
})
export const { AddByOne, Reset, SubByOne } = AddSubSlice.actions; 
export const selectCount = (state) =>{
        console.log(state);
        return state.AddSub.value
} 
export default AddSubSlice.reducer;