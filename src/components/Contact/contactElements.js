import styled from 'styled-components';

export const ContactContainer = styled.div `
background: #708090;
height: 75vh;
width: 100%;
position: absolute;
`
export const ContactWrapper =styled.div `
border: 4px solid purple;
border-sizing: border-box;
height: 75%;
width: 80%;
display: block;
position: absolute;
margin: auto;
margin: 10%;
text-decoration: none;
background: black;
justify-content: center;
background: rgb(169,169,169, 0.3);
border: 4px solid rgb(0,0,0, 0.4);
border-radius: 10px;
`

export const ContactForm = styled.form `
width: 50%;
margin: 10% auto;
// padding: 5%;
// position: absolute;
// justify-content: space-evenly;
// margin: auto;

@media screen and (max-width:640px){
  font-size: 10px;
}

`

export const Button = styled.button `
background: #3511C9;
color: #D8BFD8;
border: none;
border-radius: 10px;
text-decoration: none;
text-align: center;
display: inline-block;
font-size:16px;
// padding: 15px 32px;
width: 100%;
overflow: auto;
// word-wrap: break-word;
positon: relative;
float: right;
margin: auto;

`
