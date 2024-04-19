import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import SubMain from './components/Submain/Submain.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import OurFacilities from './components/OurFacilities/OurFacilities.jsx'
import Clientsection from './components/Clientsection/Clientsection.jsx'
import ChoiceCard from './components/ChoiceCard/ChoiceCard.jsx'
//import Team from './components/Team/Team.jsx'
import Contact from './components/contact/contact.jsx'
import InformationBar from './components/InformationBar/InformationBar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  
  return (
    
    <>
    <Navbar />
    <Main />
    <SubMain />
    <AboutUs />
    <OurFacilities/>
    <Clientsection />
    <ChoiceCard/>
    <Contact />
    <InformationBar/>
    <Footer />
    </>
  )
}

export default App