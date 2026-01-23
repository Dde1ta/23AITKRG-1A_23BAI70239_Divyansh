import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("It is bricked");
        setIsAuthenticated(true);
        navigate('/');
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h3>Login</h3>
                
                <button onClick={handleLogin} className="login-button">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login;
