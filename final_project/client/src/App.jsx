import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import About from './pages/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <><Router>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/aboutUs" element = {<About/>}/>
     </Routes>
     <Body/>
     <Footer/>
     </Router>
    </>
  )
}

export default App
