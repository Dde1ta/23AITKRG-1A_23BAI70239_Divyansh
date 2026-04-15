import {fetchLogs} from "../store/logSlice";
import {useSelector,useDispatch} from "react-redux";
import Button from "../components/Button";
import { useCallback, useMemo } from "react";
const Logs=()=>{
  console.log("Parent logs Rendered");
  const {data,status,error}=useSelector(state=>state.logs);
  const dispatch=useDispatch();
  //UseCallback to have stable function reference across renders
  const clickHandler=useCallback(()=>{
      dispatch(fetchLogs());
  },[dispatch]);

  //Memoize filtering until data changes
    const highcarbon=useMemo(()=>{
      console.log("running filter calculation");
     return data?(data.filter((log)=>log.carbon>=4)):[];
    },[data]);

  let content=null;
   if(status==='loading')
      content=<p>Loading content....</p>;
   else if(status==='failed')
      content=<p>{error}</p>
   else{
    content=(
      <>
      <ul>
          {highcarbon.map(elem=>(
              <li key={elem.id}>{elem.activity}={elem.carbon}Kgs</li>
          ))}
      </ul>
      </>  
    )
  }
  return(
    <>
     <h1>High Carbon Activities</h1>
     <Button clkHandler={clickHandler} textVal={"Fetch Logs"}></Button>
     {content}
    </>
  )
}
export default Logs;


