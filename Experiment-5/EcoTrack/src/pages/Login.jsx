import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const Login=()=>{
  const {isLoggedIn,setIsLoggedIn}=useAuth();
  const navigate=useNavigate();
  const handleLogin=()=>{
    setIsLoggedIn(true);
    navigate("/");
  }
  return(
    <div style={{padding:"1rem"}}>
      <h1>Login</h1>
      <Button onClick={handleLogin} disabled={isLoggedIn} color="success" variant="contained">Login</Button>
    </div>
  )
}
export default Login;