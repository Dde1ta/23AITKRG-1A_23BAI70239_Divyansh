import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Login = () => {
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/");
    }

    return (
        <div className="container login-container">
            <div className="login-card">
                <h2>Welcome to EcoTrack</h2>
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                    Track your carbon footprint
                </p>
                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default memo(Login);