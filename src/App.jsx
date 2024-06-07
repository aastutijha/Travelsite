// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Mains from './components/Mains/Mains.jsx'
//import Login from './components/Login/login.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
//import Main from './components/Main/Main.jsx'
import TripWeatherForecast from './components/TripWeatherForecast/TripWeatherForecast.jsx'
import SubMain from './components/Submain/Submain.jsx'
import AboutUss from './components/AboutUss/Aboutuss.jsx'
//import AboutUs from './components/AboutUs/AboutUs.jsx'
import OurFacilities from './components/OurFacilities/OurFacilities.jsx'
//import Clients from './components/Clientss/Clients.jsx'
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
    <Mains/>
    <TripWeatherForecast />
    <SubMain />
    <AboutUss/>
    <OurFacilities/>
    <Clientsection/>
    <ChoiceCard/>
    <Contact/>
    <InformationBar/>
    <Footer />
    
    </>
  )
}

export default App