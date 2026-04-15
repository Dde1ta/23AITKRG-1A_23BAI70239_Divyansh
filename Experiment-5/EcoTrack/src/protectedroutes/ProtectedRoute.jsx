import { useAuth } from "../contexts/AuthContext";
import { Navigate,Outlet } from "react-router-dom";
import Login from "../pages/Login";
const ProtectedRoute=({children})=>{
  const {isLoggedIn}=useAuth();
  if(isLoggedIn)
    return <Outlet/>;
  return <Navigate to="/login" replace/>
}
export default ProtectedRoute;