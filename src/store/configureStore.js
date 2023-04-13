import  { configureStore } from "@reduxjs/toolkit";
import showMcqSliceReducer from "./showMcqSlice";
import userSliceReducer from "./userSlice";

export const store = configureStore({
    reducer:{
        mcq: showMcqSliceReducer,
        user: userSliceReducer,

    }
})