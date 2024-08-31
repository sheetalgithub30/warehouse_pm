import { configureStore } from "@reduxjs/toolkit";
import { warehouseReducer } from "./slice";

export const store = configureStore({
    reducer:{
        warehouseReducer: warehouseReducer
    }
})