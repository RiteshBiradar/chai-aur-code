import React from 'react'
import './App.css'
import Hero from "./components/HeroSection.jsx"
import Navbar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
import Instructor from './components/Instructor.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Features></Features>
    <Instructor></Instructor>
    <Footer></Footer>
    </div>
  )
}

export default App
