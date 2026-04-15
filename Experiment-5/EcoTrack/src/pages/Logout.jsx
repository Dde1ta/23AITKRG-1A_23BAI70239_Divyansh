import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "@mui/material/Button"

const Logout=()=>{
  const {setIsLoggedIn}=useAuth();
  const navigate=useNavigate();
  const handleLogout=()=>{
    setIsLoggedIn(false);
    navigate("/login");
  }
  return(
    <div style={{padding:"1rem"}}>
      <h1>Logout</h1>
      <Button onClick={handleLogout} variant="contained" color="error">Logout</Button>
    </div>
  )
}
export default Logout;