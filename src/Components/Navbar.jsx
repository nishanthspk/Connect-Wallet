import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './Button';

import {  useNavigate  } from "react-router-dom";
import { useState } from 'react'

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <div className=' ' >
    <nav className=''>
           
            
            <div>  <CustomButton /></div>
    </nav>
    </div>
  );
};

export default Navbar;
