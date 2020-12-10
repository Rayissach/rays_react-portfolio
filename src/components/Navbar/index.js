import React from 'react';
import { NavbarContainer, Nav, NavLogo, NavDropdown, NavItem, NavLinks } from "./navbarElements.js";


const Navbar = () => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>Ray</NavLogo>
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