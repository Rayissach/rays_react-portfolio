import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav `
background: black;
z-index: 10;
`

export const NavbarContainer = styled.div `
display: flow;
margin: auto;
height: 8vh;
padding: 0px 10px 0px 10px;
/*offset-x | offset-y | blur-radius | spread-radius | color*/
box-shadow: 0rem -1rem 1rem 1rem black;
position: static;
// justify-content: space-around;
`
export const NavLogo = styled(LinkRouter)`
 display: flow;
 color: white;
 text align: center;
 font-size: 2rem;
 text-decoration: none;
 background: green;
 padding: 0px 10px 0px 10px;
 line-height: 8vh;
 
`
export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 400px){
// display: block;
// position: relative;
// color: yellow;
// align-content: right;
// right: 10px;
// margin: auto;
// margin: 0 -22px 0 0px;
// line-height: 8vh;
// height: 20rem;
// top: 50%;
// right: 40px;

}
`

export const NavDropdown = styled.ul `
//  width: 100%;
 display: flow;
 align-content: center;
 text-decoration: none;
 list-style-type: none;
//  background: red;
//  margin: 1rem 2rem 1rem 2rem;
 margin: auto;
//  line-height: 8vh;
 bottom: 0;




 /*mobile screens are usually 640px*/
 @media screen and (max-width: 400px){
   display: none;
 };
`
export const NavItem = styled.li`
text-align: center;
margin-right: 1em;
// background: green;
`
export const NavLinks = styled(LinkScroll)`
box-sizing: content-box;
// border: 2px solid white;
display: flow;
color: white;
`