import { useAuth } from "../context/AuthContext";

const Header = (props) => {
    const title = props.title;
    const {isAuthenticated, setIsAuthenticated} = useAuth();

    const logout = () => {
        setIsAuthenticated(false);
    }

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "1rem 2rem",
        backgroundColor: "#6495ed",
        color: "white"
    };

    const h1Style = {
        margin: 0,
        flex: 1,
        textAlign: 'center'
    };

    const buttonStyle = {
        padding: "0.5rem 1rem",
        backgroundColor: "white",
        color: "#6495ed",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "500"
    };
    

    return(
        <header style={headerStyle}>
            <div style={{width: '100px'}}></div>
            <h1 style={h1Style}>{title}</h1>
            {isAuthenticated && (
                <button onClick={logout} style={buttonStyle}>Logout</button>
            )}
        </header>
    );
}


export default Header;
