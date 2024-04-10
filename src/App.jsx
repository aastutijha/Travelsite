import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import SubMain from './components/Submain/Submain.jsx'
import Recomandation from './components/Recomandation/Recomandation.jsx'
import Productandservices from './components/Productandservices/Productandservices.jsx'
import Clientsection from './components/Clientsection/Clientsection.jsx'
// import AchivementsCarousel from './Components/AchievementsCarousel/AchievementsCarousel'
// import Achivements from './components/Achivements/Achivement.jsx'
import Team from './components/Team/Team.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Institution from './components/Institution/Institution.jsx'


// The Website is divided into multiple sections 
// Navbar-- options menu
// Main -- the video and text alongside with button
// Submain --Who We Are and text inside
// Products And Services -- 2 image sliders displaying products
// ClientsSection-- the list of clients
// Achievements -- the carousel containing images of achievements
// Institutions -- a 3X3 grid to display institutions
// Team -- team member images
// Contact -- a contact form enabled with emailJs
// Footer -- Map and other releveant info
function App() {
  

  return (
    <>
    <Navbar />
    <Main />
    <SubMain />
    <Recomandation/>
    <Productandservices />
    <Clientsection />
    <Team/>
    <Contact />
    <Footer />
    </>
  )
}

export default App