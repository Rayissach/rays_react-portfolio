import styled from 'styled-components';
import PrjBgImg1 from '/Users/rayissach/Desktop/Code-Folder/rays_react_portfolio/src/images/shooting_star_background.gif';

export const ProjectContainer = styled.div `
background: black;
height: 100vh;
`

export const ProjectWrapper = styled.div `
overflow: hidden;
position: absolute;
text-align: center;
// background: #333333;
// background: #111111;
background: #222222;
height: 25vh;
width: 25%;
margin: 20px;
padding: 10px;
`

export const ProjectCards = styled.div `
// background: yellow;
// margin-left: auto;
// margin-right: auto;
margin: auto;
display: inline-block;
background-image: url(${PrjBgImg1});
background-size: cover;
color: blue;
position: relative;
line-height: 12.5vh;
height: 95%;
width: 95%;
text-align: center;
align: center;
padding: 25%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2) ;
// overflow: hidden;


// z-index: 20;
`
// export const Span = styled.span `
// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// height: 3px;
// background: linear-gradient(to right, transparent, #1779ff);
// animation: animate1 2s linear infinite;


// @keyframes animate1 
// {
// 0% 
// {
// transform: translateX(-100%);
// }
// 100%
// {
// transform: translateX(100%);
// }
// }

// `

export const Span1 = styled.span `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, transparent, #1779ff);
  animation: animate1 2s linear infinite;


  @keyframes animate1 
  {
  0% 
  {
  transform: translateX(-100%);
  }
  100%
  {
  transform: translateX(100%);
  }
  }
`

export const Span2 = styled.span `

  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #1779ff);
  animation: animate2 2s linear infinite;
  animation-delay: 1s;


  @keyframes animate2 
  {
  0% 
  {
  transform: translateY(-100%);
  }
  100%
  {
  transform: translateY(100%);
  }
  }


`

export const Span3 = styled.span `

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, transparent, #1779ff);
  animation: animate3 2s linear infinite;


  @keyframes animate3 
  {
  0% 
  {
  transform: translateX(100%);
  }
  100%
  {
  transform: translateX(-100%);
  }
  }


`

export const Span4 = styled.span `

  position: absolute;
  bottom: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, transparent, #1779ff);
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
  
  
  @keyframes animate4 
  {
  0% 
  {
  transform: translateY(100%);
  }
  100%
  {
  transform: translateY(-100%);
  }
  }

`
