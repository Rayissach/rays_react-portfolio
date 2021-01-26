import React from 'react';
import { PictureInPictureAlt } from 'styled-icons/material';
import { ContactContainer, ContactForm, ContactWrapper } from './contactElements.js';

const h1Style = {
  color: 'yellow',
}
const inputStyle = {
  width: '100%',
}
const Contact = () => {
  return (
    <>
    <ContactContainer>
      <ContactWrapper>
        <ContactForm>
          <h1 style= {h1Style}>Contact Me</h1>
          <input type='text' id='name' style= {inputStyle} placeholder='Name' />
          <br />
          <input type='text' id='email' style= {inputStyle} placeholder='Email' />
          <br />
          <input type='text' id='subject' style= {inputStyle}name='subject' placeholder='Subject' />
          <br />
          <textarea type='text' id='Message' style= {inputStyle} rows='8' placeholder='Message' />
        </ContactForm>
      </ContactWrapper> 
    </ContactContainer>
    </>
  )
}






export default Contact