import '../../styles/Header.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

const Navbar = ( {toggle} ) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle}/>
        <NavMenu>
        <NavLink className='efectoNav' to='/' >
            Home
          </NavLink>
          <NavLink className='efectoNav' to='/about' >
            About
          </NavLink>
          <NavLink className='efectoNav' to='/portfolio' >
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