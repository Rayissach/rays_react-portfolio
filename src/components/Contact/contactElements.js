import styled from 'styled-components';

export const ContactContainer = styled.div `
background: grey;
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
`

export const ContactForm = styled.form `
width: 50%;
margin: auto;
margin: 15%;
// padding: 5%;
// position: absolute;
justify-content: space-evenly;
// margin: auto;

@media screen and (max-width:640px){
  font-size: 10px;
}

`
