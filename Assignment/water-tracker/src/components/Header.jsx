import { useAuth } from "../context/AuthContext";
import "./Header.css";

export const Header = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const handleLogout = () => {
        setIsAuthenticated(false);
    }

    return (
        <div className="header">
            <h1 className="header-logo"> Water Tracker </h1>
            {isAuthenticated && (
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </div>
    )
};

export default Header;