import { useState } from 'react';
import { FaBars, FaHeartbeat, FaHome, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { MdMedicalServices } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='header'>
            <h2>
                <FaHeartbeat className='heart' />
                <span className='title'>MediSphere</span>
            </h2>
            <div id="menu-btn" style={{ fontSize: '20px' }} onClick={toggleMenu}>
                {isMenuOpen ?
                    <>
                        <FaTimes />
                        <ul className='nav-list'>
                            <li>
                                <span className="span-link" onClick={() => scrollToSection('home')}>
                                    Home
                                </span>
                            </li>
                            <li>
                                <span className="span-link" onClick={() => scrollToSection('services')}>
                                    Services
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className="span-link" onClick={() => scrollToSection('about')}>
                                    About
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className="span-link" onClick={() => scrollToSection('contact')}>
                                    Contact
                                </span>
                            </li>
                            <li className='nav-item'>
                                <Link to='/doctor' className="span-link" > Login</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signup' className="span-link" >Sign Up</Link>
                            </li>
                        </ul>


                    </>
                    : <FaBars />}
            </div>

            <nav className={isMenuOpen ? 'navbar active' : 'navbar'}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <FaHome className='icons' onClick={() => scrollToSection('home')} title="Home" />
                    </li>
                    <li className='nav-item'>
                        <MdMedicalServices className='icons' onClick={() => scrollToSection('services')} title="Services" />
                    </li>
                    <li className='nav-item'>
                        <FaInfoCircle className='icons' onClick={() => scrollToSection('about')} title="About" />
                    </li>
                    <li className='nav-item'>
                        <RiContactsBookLine className='icons' onClick={() => scrollToSection('contact')} title="Contact" />
                    </li>
                </ul>
            </nav>

            <div className='auth-buttons'>
                <Link to='/patient' className="button-link">Login as patient</Link>
                <Link to='/doctor' className="button-link">Login as doctor</Link>
            </div>
        </header>
    );
}

export default Header;
