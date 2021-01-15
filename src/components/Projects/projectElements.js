import styled from 'styled-components';

export const ProjectContainer = styled.div `
// background: black;
height: 100vh;
`

export const ProjectWrapper = styled.div `
overflow: hidden;
position: aboslute;
`

export const ProjectCards = styled.div `
background: yellow;
color: blue;
position: absolute;
height: 25vh;
width: 25%;
margin: 25px;
text-align: center;
padding: 25%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2) ;
overflow: hidden;


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
