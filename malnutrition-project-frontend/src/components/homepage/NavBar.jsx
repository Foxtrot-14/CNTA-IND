import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('./favicon.ico')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
          <NavBtnLink to='/register'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;