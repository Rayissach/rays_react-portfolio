import React from 'react';
import { NavbarContainer, Nav, NavLogo, NavDropdown, NavItem, NavLinks, MobileIcon } from "./navbarElements.js";
// import { FaBars } from 'react-icons/fa';
// import {Zap} from '@styled-icons/octicons';
import { Menu } from 'react-feather';

const Navbar = () => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>Ray</NavLogo>
            <MobileIcon>
              <Menu />
            </MobileIcon>
            <NavDropdown>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects'>Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='connect'>Connect</NavLinks>
              </NavItem>
            </NavDropdown>
          </NavbarContainer>
        </Nav>
    </>
  )

}

export default Navbar