import { Link, Outlet } from "react-router-dom";
import { memo } from "react";

const DashboardLayout = () => {
  return (
    <div className="container">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="nav-buttons">
          <Link to="summary" className="nav-btn">
            Summary
          </Link>

          <Link to="analytics" className="nav-btn">
            Analytics
          </Link>

          <Link to="settings" className="nav-btn">
            Settings
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default memo(DashboardLayout);
