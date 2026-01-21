import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("It is bricked");
        setIsAuthenticated(true);
        navigate('/');
    }

    return (
        <>
            <h3>login</h3>
            
            <button onClick={handleLogin}>
                Login
            </button>
        </>
    )
}

export default Login;
