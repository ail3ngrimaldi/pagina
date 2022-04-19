import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

export const NavAndSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen) 
    }


    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
       
        </>
    );
}