import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";


const warehouseSlice = createSlice({
    initialState :{
        originalData :[...data],
        searchData:[],
    },
    name:"warehouseSlice",
    reducers:{
       filterByName:(state,action)=>{
        const search = action.payload
        state.searchData = state.originalData.filter((data)=>{
            return data.name.toLowerCase().includes(search.toLowerCase())
        })
       }
    }
})

export const warehouseReducer = warehouseSlice.reducer;
export const {filterByName} = warehouseSlice.actions 