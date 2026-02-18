import { memo } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>🌍 EcoTrack</h1>

        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Dashboard
          </Link>

          <Link to="/logs" style={linkStyle}>
            Logs
          </Link>

          {isAuthenticated ? (
            <Link to="/logout" style={linkStyle}>
              Logout
            </Link>
          ) : (
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

// Simple inline styles for the header
const headerStyle = {
  background: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  padding: '1rem 0',
  marginBottom: '2rem',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  color: '#667eea',
  fontSize: '1.5rem',
  fontWeight: '700',
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: '#667eea',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
};

export default memo(Header);
