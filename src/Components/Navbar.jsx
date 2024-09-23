import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './Button';
// import MobileMenu from '../Components/MobileView.jsx';
import {  useNavigate  } from "react-router-dom";
import { useState } from 'react'

const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div className=' ' >
    <nav className=''>
            {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} /> */}
            
            <div>  <CustomButton /></div>
    </nav>
    </div>
  );
};

export default Navbar;
