import React from 'react';
import '../styles/Header.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink className='efectoNav' to='/' >
            Home
          </NavLink>
          <NavLink className='efectoNav' to='/about' >
            About
          </NavLink>
          <NavLink className='efectoNav' to='/projects' >
            Portfolio
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact'>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;