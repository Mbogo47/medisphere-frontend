import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <div className='section' id='footer'>
            <h2 className='heading'>Follow Us</h2>
            <div className='media-container'>
                <div>
                    <FaFacebookF className='media-icon' />
                    <FaTwitter className='media-icon' />
                    <FaInstagram className='media-icon' />
                    <FaLinkedin className='media-icon' />
                    <FaPinterest className='media-icon' />
                </div>

                <div className="credit"> created by <a href="https://github.com/Mbogo47">Ivy Mbogo</a> &copy; 2023 | all rights reserved</div>

            </div>
        </div>
    );
};

export default Footer;
