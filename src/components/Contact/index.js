import React from 'react';
import { PictureInPictureAlt } from 'styled-icons/material';
import { ContactContainer, ContactForm, ContactWrapper, Button } from './contactElements.js';

const h1Style = {
  color: '#D8BFD8',
  padding: '10px'
};
const inputStyle = {
  width: '100%',
  opacity: 0.4,
  margin: '3px',
};
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
          <Button type='submit' aria-label='✨✨✨✨✨'> Connect </Button>
        </ContactForm>
      </ContactWrapper> 
    </ContactContainer>
    </>
  )
}






export default Contact