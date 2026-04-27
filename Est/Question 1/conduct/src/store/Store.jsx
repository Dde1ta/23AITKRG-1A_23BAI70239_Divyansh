import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./ListSlice"

const store = configureStore({
    reducer : {
        list : ListReducer,
    },
});

export default store;