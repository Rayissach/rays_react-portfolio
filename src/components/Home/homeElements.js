import styled from 'styled-components';
import bgImage1 from '/Users/rayissach/Desktop/Code-Folder/rays_react_portfolio/src/images/shooting_star_background2.gif'
// import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll} from 'react-scroll';

export const HomeContainer  = styled.div `
background-image: url(${bgImage1});
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
width: 100%;
// margin: auto;
align-content: center;
height: 100vh;
`


export const WelcomeText = styled.h2 `
display: block;
margin: auto;
text-align: center;
// line-height: 100vh;
color: silver;
// background: yellow;
// word-wrap: break-word;
// width: 50%;
position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
