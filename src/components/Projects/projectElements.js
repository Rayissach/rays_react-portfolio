import styled from 'styled-components';

export const ProjectWrapper = styled.div `
// background: black;
height: 100vh;
`

export const ProjectCards = styled.div `
background: yellow;
color: blue;
position: absolute;
height: 25vh;
width: 90%;
margin: 25px;
text-align: center;
padding: 25%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2) ;

// z-index: 20;
`
export const Span = styled.span `
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
