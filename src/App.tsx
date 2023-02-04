import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Componet/Nav'
import Footer from './Componet/Footer'
import History from './Componet/History'
import Home from './Componet/Home'
import Attraction from './Componet/Attraction'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Card } from '@chakra-ui/react'
// import Card from './Componet/Card'
// import Image1 from './Componet/Image1'


function App() {
  

  return (
    <>
    <Nav />
    {/* <Slider/> */}
    {/* <Card /> <Card /> <Card /> */}
    {/* <Image1/> */}
    
    
    <Routes>
   

<Route path="/Attraction" element={<Attraction/>}  />

<Route path="/" element={<Home/>} />

<Route path = "/ourHistory" element={<History/>} />


</Routes>
    </>
  )
  
}

export default App
