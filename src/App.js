import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Link, Scroll} from 'react-scroll';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App () {
  return(
    <Router>
        <Navbar />
        <Home />
        <Projects />
        <Contact />
    </Router>
  )
}


export default App;
