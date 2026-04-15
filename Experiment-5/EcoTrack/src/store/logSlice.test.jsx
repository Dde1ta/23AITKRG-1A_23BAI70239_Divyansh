import logReducer from "./logSlice";

test("testing initial state of store",()=>{
  const initialState={
      data:[],
      status:"idle",
      error:null,
    };
  const result=logReducer(undefined,{type:undefined});
  expect(result).toEqual(initialState);
})

test("testing loading state when fetch is pending",()=>{
  const initialState={
    data:[],
    status:"idle",
    error:null,
  };
  const action={type:"logs/fetchlogs/pending"};
  const result=logReducer(initialState,action);
  console.log(result);
  expect(result.status).toBe("loading");
})