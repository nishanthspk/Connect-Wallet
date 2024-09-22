import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './Button';
// import MobileMenu from '../Components/MobileView.jsx';
import {  useNavigate  } from "react-router-dom";
import { useState } from 'react'

const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
  return (
    <div className=' ' >
    <nav className=''>
            {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} /> */}
    </nav>
    </div>
  );
};

export default Navbar;
