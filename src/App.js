import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
// import Scroll from 'react-scroll';
import Navbar from "./components/Navbar";
import './App.css';

function App () {
  return(
    <Router>
        <Navbar />
    </Router>
  )
}


export default App;
