import {configureStore} from "@reduxjs/toolkit";
import logsreducer from "./logSlice";

const store=configureStore({
  reducer:{
    logs:logsreducer,
  },
});

export default store;