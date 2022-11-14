import React from 'react';
import './NavBar.css';
import { CgProfile } from 'react-icons/cg';
import { RiArrowDownSLine } from 'react-icons/ri';
import logo from '../image 1.png'

const NavBar = () => {
    return (
        <div className='Navbar'>
            <div className="title">
                <img className='logo' src={logo} alt="" />
            </div>
                <div className='NavItem'>
                <span className='my_assignment'>My Assignment</span>
                <span className='ChatWithMentor'>Chat With Mentor</span>
                <span className='ProfileName'><CgProfile className='Profile'/> ProfileName <RiArrowDownSLine className='arrow'/></span>
                </div>
        </div>
    );
};

export default NavBar;