import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import bgImage1 from '/Users/rayissach/Desktop/Code-Folder/rays_react_portfolio/src/images/shooting_star_background2.gif';

export const Nav = styled.nav `
background: black;
// background-image: url(${bgImage1});
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
// pointer-events: none;
`

export const NavbarContainer = styled.div `
display: flow;
margin: auto;
height: 8vh;
// padding: 0px 10px 0px 10px;
postion: absolute;
line-spacing: 2px;

// position: static;
// justify-content: space-around;
// width: 30%;

`
export const NavLogo = styled(LinkRouter)`
 display: flow;
 position: absolute;
 color: silver;
 text align: center;
 font-size: 2rem;
 text-decoration: none;
 background: #3511C9;
 padding: 0px 10px 0px 10px;
 line-height: 8vh;
 left: 0px;
 width: 5rem;

 &:hover {
   background: none;
   color: #3511C9;
   opacity: .5;
   backface-visibility: hidden;

  animation: logo_animation 2s linear infinite;

  @keyframes logo_animation {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
 }
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
display: block;
text-align: center;
// padding-right: .5em;
// padding-left: .5em;
line-spacing: 1rem;
word-wrap: break-word;
width: 33.33%;
margin-auto: center;
// background: purple;
align-content: center;
`
export const NavLinks = styled(LinkScroll)`
box-sizing: content-box;
// border: 2px solid white;
display: inline-block;
word-wrap: break-word;
color: white;
text-align: center;
padding-right: 1em;
padding-left: 1em;
// background: blue;

&:hover {
  background: grey;
  color: black;
  opacity: .25;
}
@media screen and (max-width: 640px){
  padding-right: .5em;
  padding-left: .5em;
  transition: all 1s ease;
};
`