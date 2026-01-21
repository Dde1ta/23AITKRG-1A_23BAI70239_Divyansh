import {Link, Outlet} from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h3>Dashboard</h3>
                {
                // nav bar is persistent
                }
                <nav className="dashboard-nav"> 
                    <Link to="summary" className="nav-link">Summary</Link>
                    <Link to='analytics' className="nav-link">Analytics</Link>
                    <Link to='logs' className='nav-link'>Logs</Link>
                </nav>
            </div>

            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout;