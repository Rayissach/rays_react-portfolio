import React from 'react';
import {HomeContainer, WelcomeText, HomeAbtText} from './homeElements.js';


const Home = () => {
  return (
    <>
    <HomeContainer>
      <WelcomeText><h2>Hi, I'm Ray <br/>  a Software Developer</h2></WelcomeText>
      <HomeAbtText><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
         qui officia deserunt mollit anim id est laborum.</h3></HomeAbtText>
    </HomeContainer>
    </>
  )
}

export default Home