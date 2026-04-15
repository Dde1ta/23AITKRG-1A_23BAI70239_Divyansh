import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header=()=>{
  const {isLoggedIn}=useAuth();
  return(
    <header style={{padding:'1rem',backgroundColor:'lightblue'}}>
      <h1>Eco-Track</h1>
      <p>Carborn Footprint Tracker</p>
      <nav>
        <Link to="/" style={{color:"white"}}>Dashboard</Link>{" | "}
        <Link to="/logs" style={{color:"white"}}>Logs</Link>{" | "}
        <Link to="/login" style={{color:"white"}}>Login</Link>{" | "}
        <Link to="/logout" style={{color:"white"}}>Logout</Link>
      </nav>
    </header>
  )
}
export default Header;