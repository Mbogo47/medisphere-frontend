import { Outlet } from 'react-router-dom';
import SidebarComponent from '../components/Sidebar';
import '../styles/dash.css';

const Dashboard = () => {

    return (
        <>
            <div className="dashboard">

                <SidebarComponent />
                <div className='dashboard-content'>
                    <Outlet /></div>
            </div>
        </>
    );
};

export default Dashboard;
