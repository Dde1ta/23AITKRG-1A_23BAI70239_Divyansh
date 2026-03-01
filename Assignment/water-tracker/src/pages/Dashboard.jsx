import {Link, Outlet} from 'react-router-dom';

export const Dashboard = () => {
    return(
        <div className='Dashboard'>
            <div className="dashboard-header">
                <h3>Dashboard</h3>
                <nav className="dashboard-nav"> 
                    <Link to="home" className="nav-link">Dashboard</Link>
                    <Link to='tracker' className="nav-link">Tracker</Link>
                </nav>
            </div>

            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;