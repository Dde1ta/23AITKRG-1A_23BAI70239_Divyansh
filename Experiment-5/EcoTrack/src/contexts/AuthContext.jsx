import { useState,useContext,createContext } from "react";

const Auth=createContext(null);
export const AuthContext=({children})=>{
 
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (<Auth.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children}
  </Auth.Provider>
  );
}
export const useAuth=()=>{
  return useContext(Auth);
}
