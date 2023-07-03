import { useContext, useEffect, useState } from 'react';
import { FaBars, FaCalendar, FaFileMedicalAlt, FaHome, FaPills, FaUserCircle, FaUserMd } from 'react-icons/fa';
import { GiMedicinePills, GiMedicines } from 'react-icons/gi';
import { MdOutlineLogout } from 'react-icons/md';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';
import './sidebar.css';

const SidebarComponent = () => {

    const [collapsed, setCollapsed] = useState(false);

    const handleWindowResize = () => {
        setCollapsed(window.innerWidth <= 768); // Change the breakpoint value as per your requirement
    };

    useEffect(() => {
        // Check the window size on initial render
        handleWindowResize();

        // event listener for window resize
        window.addEventListener('resize', handleWindowResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const { dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate('/patient');
        toast.success("Logout successful");
    }
    return (
        <div style={{ minHeight: '100vh' }}>
            <Sidebar collapsed={collapsed} className="sidebar" transitionDuration={1000}>
                <Menu>
                    <MenuItem
                        icon={<FaBars />}
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2>Medisphere</h2>
                    </MenuItem>

                    <MenuItem icon={<FaHome className="icons-side" />} component={<Link to="home" />}  >
                        <span className="span-side">Dashboard</span>
                    </MenuItem>

                    <SubMenu label="Doctors" className="span-side" icon={<FaUserMd className="icons-side" />} >
                        <MenuItem icon={<FaCalendar className="icons-side" />} component={<Link to="appointments" />}>
                            <span className="span-side">Appointments</span>
                        </MenuItem>
                        <MenuItem icon={<FaFileMedicalAlt className="icons-side" />} component={<Link to="records" />}>
                            <span className="span-side">MedicalRecords</span>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu label="Pharmacy" className="span-side" icon={<FaPills className="icons-side" />} >
                        <MenuItem icon={<GiMedicinePills className="icons-side" />}  >
                            <span className="span-side">Medication</span>
                        </MenuItem>
                        <MenuItem icon={<GiMedicines className="icons-side" />} component={<Link to="prescription" />}>
                            <span className="span-side">Prescriptions</span>
                        </MenuItem>
                    </SubMenu>

                    <MenuItem component={<Link to="profile" />}>
                        <FaUserCircle className="icons-side" />
                        <span className="span-side">UserProfile</span>
                    </MenuItem>

                    <MenuItem>
                        <MdOutlineLogout className="icons-side" />
                        <span className="span-side" onClick={handleLogout}>Log out</span>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarComponent;
