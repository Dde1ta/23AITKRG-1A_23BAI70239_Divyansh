import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import data from '../data/data.js'

export const fetchlist = createAsyncThunk(
    "list/fetchlist",
    async() => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return data;
    }
)

const listSlice = createSlice({
    name : "list",
    initialState : {
        data : [],
        status : "idle",
        error : null,
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchlist.pending, (state, action) =>{
            state.status = "loading";
        })
        .addCase(fetchlist.fulfilled, (state, action) =>{
            state.status = "success";
            state.data = action.payload;
        })
        .addCase(fetchlist.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default listSlice.reducer;