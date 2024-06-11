// src/App.jsx

import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from './Homepage.jsx';
import TripWeatherForecast from "./components/TripWeatherForecast/TripWeatherForecast.jsx";
import Login from "./components/Authentication/Login.jsx";
import Signup from "./components/Authentication/Signup.jsx";
import TourDetailspage from "./pages/TourDetails.jsx";
import Australia from "./components/Submain/Tours/Popular Outbound/Australia.jsx";
import CoxsBazarSea from "./components/Submain/Tours/Popular Outbound/CoxsBazarSea.jsx";
import London from "./components/Submain/Tours/Popular Outbound/London.jsx";
import Paris from "./components/Submain/Tours/Popular Outbound/Paris.jsx";
import Tokyo from "./components/Submain/Tours/Popular Outbound/Tokyo.jsx";
import Illam from "./components/Submain/Tours/Inbound/Illam.jsx";
import Langtang from "./components/Submain/Tours/Inbound/Langtang.jsx";
import Everest from "./components/Submain/Tours/Inbound/Everest.jsx";
import Darjelling from "./components/Submain/Tours/Inbound/Darjelling.jsx";
import Lumbini from "./components/Submain/Tours/Inbound/Lumbini.jsx";
import Chitwan from "./components/Submain/Tours/Inbound/Chitwan.jsx";
import Rara from "./components/Submain/Tours/Inbound/Rara.jsx";
import Indonesia from "./components/Submain/Tours/Outbound/Indonesia.jsx";
import India from "./components/Submain/Tours/Outbound/India.jsx";
import Dubai from "./components/Submain/Tours/Outbound/Dubai.jsx";
import China from "./components/Submain/Tours/Outbound/China.jsx";
import Japan from "./components/Submain/Tours/Outbound/Japan.jsx";
import Thailand from "./components/Submain/Tours/Outbound/Thailand.jsx";
import Cambodia from "./components/Submain/Tours/Outbound/Cambodia.jsx";

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
      <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><HomePage /></ProtectedRoute>} />
      <Route path="/TripWeatherForecast" element={<ProtectedRoute isAuthenticated={isAuthenticated}><TripWeatherForecast /></ProtectedRoute>} />
      <Route path="/TourDetails" element={<ProtectedRoute isAuthenticated={isAuthenticated}><TourDetailspage /></ProtectedRoute>} />
      <Route path="/tours/Australia" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Australia /></ProtectedRoute>} />
      <Route path="/tours/CoxsBazarSea" element={<ProtectedRoute isAuthenticated={isAuthenticated}><CoxsBazarSea /></ProtectedRoute>} />
      <Route path="/tours/London" element={<ProtectedRoute isAuthenticated={isAuthenticated}><London /></ProtectedRoute>} />
      <Route path="/tours/Paris" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Paris /></ProtectedRoute>} />
      <Route path="/tours/Tokyo" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Tokyo /></ProtectedRoute>} />
      <Route path="/tours/inbound/Everest" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Everest /></ProtectedRoute>} />
      <Route path="/tours/inbound/Illam" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Illam /></ProtectedRoute>} />
      <Route path="/tours/inbound/Langtang" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Langtang /></ProtectedRoute>} />
      <Route path="/tours/inbound/Lumbini" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Lumbini /></ProtectedRoute>} />
      <Route path="/tours/inbound/Darjelling" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Darjelling /></ProtectedRoute>} />
      <Route path="/tours/inbound/Rara" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Rara /></ProtectedRoute>} />
      <Route path="/tours/inbound/Chitwan" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Chitwan /></ProtectedRoute>} />
      <Route path="/tours/outbound/Indonesia" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Indonesia /></ProtectedRoute>} />
      <Route path="/tours/outbound/India" element={<ProtectedRoute isAuthenticated={isAuthenticated}><India /></ProtectedRoute>} />
      <Route path="/tours/outbound/Dubai" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dubai /></ProtectedRoute>} />
      <Route path="/tours/outbound/China" element={<ProtectedRoute isAuthenticated={isAuthenticated}><China /></ProtectedRoute>} />
      <Route path="/tours/outbound/Japan" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Japan /></ProtectedRoute>} />
      <Route path="/tours/outbound/Thailand" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Thailand /></ProtectedRoute>} />
      <Route path="/tours/outbound/Cambodia" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Cambodia /></ProtectedRoute>} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
