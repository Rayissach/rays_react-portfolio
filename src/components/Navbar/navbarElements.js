import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav `
background: black;
`

export const NavbarContainer = styled.div `
display: flow;
padding: 0px 10px 0px 10px;
/*offset-x | offset-y | blur-radius | spread-radius | color*/
box-shadow: 0rem -1rem 1rem 1rem black;
`
export const NavLogo = styled(LinkRouter)`
 display: flow;
 color: red;
 font-size: 2em;
 text-decoration: none;
 background: green;
 padding: 10px;
`
export const NavDropdown = styled.ul `
//  width: 100%;
 display: flow;
 align-content: center;
 text-decoration: none;
 list-style-type: none;
 background: red;
 margin: 1rem 2rem 1rem 2rem;



 /*mobile screens are usually 640px*/
 @media screen and (max-width: 400px){
   display: none;
 };
`
export const NavItem = styled.li`
text-align: center;
margin-right: 1em;
background: green;
`
export const NavLinks = styled(LinkScroll)`
box-sizing: content-box;
border: 2px solid white;
display: flow;
color: white;
`