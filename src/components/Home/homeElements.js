import styled from 'styled-components';
import bgImage1 from '/Users/rayissach/Desktop/Code-Folder/rays_react_portfolio/src/images/shooting_star_background2.gif'
// import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll} from 'react-scroll';

export const HomeContainer  = styled.div `
background-image: url(${bgImage1});
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
// width: 100%;
// margin: auto;
align-content: center;
height: 100vh;
padding: 50px;
`


export const WelcomeText = styled.div `
display: block;
margin: auto;
text-align: center;
color: silver;
// background: yellow;
// word-wrap: break-word;
width: 80%;
position: absolute;
padding: 30px;
  top: 40%;
  // left: 50%;
  // margin-right: -50%;
  // transform: translate(-50%, -50%);
background: rgb(169,169,169, 0.3);
border: 4px solid rgb(0,0,0, 0.4);
border-radius: 10px;
`

export const HomeAbtText = styled.div `
display: block;
float: left;
position: relative;
box-sizing: content-box;
height: 100px;
width: 80%;
margin: 50px;
padding: 50px;
word-wrap: break-word;
text-align: center;
margin: auto;
top: 65%;
background: rgb(169,169,169, 0.3);
border: 4px solid rgb(0,0,0, 0.4);
border-radius: 10px;


@media screen and (max-width:600px){
  font-size: 10px;
  color: red;
  transition: all ease 1s;
}
`
