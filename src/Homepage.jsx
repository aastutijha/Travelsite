// src/components/HomePage.jsx

import {} from "react";

import Mains from "./components/Mains/Mains.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import TripWeatherForecast from "./components/TripWeatherForecast/TripWeatherForecast.jsx";
import SubMain from "./components/Submain/Submain.jsx";
import AboutUss from "./components/AboutUss/Aboutuss.jsx";
import OurFacilities from "./components/OurFacilities/OurFacilities.jsx";
import Clientsection from "./components/Clientsection/Clientsection.jsx";
import ChoiceCard from "./components/ChoiceCard/ChoiceCard.jsx";
import Contact from "./components/contact/contact.jsx";
import InformationBar from "./components/InformationBar/InformationBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./homepage.css";
const HomePage = () => {
  return (
    <>
      <Navbar /> 
      <Mains />
      <TripWeatherForecast />
      <SubMain />
      <AboutUss />
      <OurFacilities />
      <Clientsection />
      <ChoiceCard />
      <Contact />
      <InformationBar />
      <Footer /> 
    </>
  );
};

export default HomePage;
