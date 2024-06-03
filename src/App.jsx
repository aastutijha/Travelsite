// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Mains from './components/Mains/Mains.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import TripWeatherForecast from './components/TripWeatherForecast/TripWeatherForecast.jsx'
import SubMain from './components/Submain/Submain.jsx'
import AboutUss from './components/AboutUss/Aboutuss.jsx'
import OurFacilities from './components/OurFacilities/OurFacilities.jsx'
import Clientsection from './components/Clientsection/Clientsection.jsx'
import ChoiceCard from './components/ChoiceCard/ChoiceCard.jsx'
import Contact from './components/contact/contact.jsx'
import InformationBar from './components/InformationBar/InformationBar.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Home from './components/Authentication/components/Home.jsx'
import Register from './components/Authentication/components/Register.jsx'
import Login from './components/Authentication/components/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <>
    {/* <Home /> */}
    <Register />
    <Login />
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