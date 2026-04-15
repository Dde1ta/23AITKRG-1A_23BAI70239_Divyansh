import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import logs from "../data/logs";

export const fetchLogs=createAsyncThunk(
  "logs/fetchlogs",
  async()=>{
    const files=await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(logs);
      },1000);
    })
    return files;
  }
)

const logslice=createSlice(
  {
    name:"logs",
    initialState:{
      data:[],
      status:"idle",
      error:null,
    },
    reducers:[],
    extraReducers:(builder)=>{
       builder.addCase(fetchLogs.pending,(state)=>{
        state.status="loading";
       })
       .addCase(fetchLogs.fulfilled,(state,action)=>{
        state.status="success";
        state.data=action.payload;
       })
       .addCase(fetchLogs.rejected,(state,action)=>{
        state.status="failed";
        state.error=action.error.message;
       });
    },
  }
);

export default logslice.reducer;