import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

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