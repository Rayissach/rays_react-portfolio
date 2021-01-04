import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav `
background: black;
z-index: 10;
display: flow;
justify-self: flex-start;
width: 100%;
// position: absolute;
position: static;
// position: relative;
/*offset-x | offset-y | blur-radius | spread-radius | color*/
box-shadow: 0rem -1rem 1rem 1rem black;
padding: 0px 10px 0px 10px;
justify-content: center;
flex-direction: column!important;
`

export const NavbarContainer = styled.div `
display: flow;
margin: auto;
height: 8vh;
// padding: 0px 10px 0px 10px;
postion: absolute;
line-spacing: 2px;s

// position: static;
// justify-content: space-around;
// width: 30%;
`
export const NavLogo = styled(LinkRouter)`
 display: flow;
 position: absolute;
 color: white;
 text align: center;
 font-size: 2rem;
 text-decoration: none;
 background: green;
 padding: 0px 10px 0px 10px;
 line-height: 8vh;
 left: 0px;
 width: 5rem;
 ;
`
export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 400px){
display: flow;
position: absolute;
font-size: 2.5rem;
height: 8vh;
color: white;
margin: auto;
float: right;
// background: blue;
width: 2rem;
right: 4px;
padding: 5px;

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
 line-height: 8vh;
 bottom: 0;
//  background: yellow;




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