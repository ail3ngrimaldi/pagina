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
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact'>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;