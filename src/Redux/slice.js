import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import { act } from "react";


const warehouseSlice = createSlice({
    initialState :{
        originalData :[...data],
        searchData:[],
        filterData:[...data],
        filterOption:{
            city:"",
            cluster:"",
            space:""
        }
    },
    name:"warehouseSlice",
    reducers:{
       filterByName:(state,action)=>{
        const search = action.payload
        state.searchData = state.originalData.filter((data)=>{
            return data.name.toLowerCase().includes(search.toLowerCase())
        })
       },
       
       setFilterOption:(state,action)=>{
           state.filterOption ={...state.filterOption,...action.payload}
       },
       setFilterData :(state)=>{
        state.filterData = state.originalData.filter((data)=>{
            return (
                (state.filterOption.city === "" || data.city === state.filterOption.city) &&
                (state.filterOption.cluster === "" || data.cluster === state.filterOption.cluster) &&
                (state.filterOption.space === "" || data.space_available === parseInt(state.filterOption.space))
            )
        })
       },
       resetFilter:(state)=>{
        state.filterData =[...state.originalData];
        state.filterOption={city:"",cluster:"",space:""};
       }
    }
})

export const warehouseReducer = warehouseSlice.reducer;
export const {filterByName,setFilterOption,setFilterData,resetFilter} = warehouseSlice.actions 