import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import AboutUs from './pages/AboutUs.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <><Router>
     <Nav/>
     <Routes>
      <Route path="/aboutus" element = {<AboutUs/>}/>
     </Routes>
     <Body/>
     <Footer/>
     </Router>
    </>
  )
}

export default App
