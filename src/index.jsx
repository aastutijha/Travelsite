import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import TourDetailspage from './pages/TourDetails.jsx';
import Australia from './components/Submain/Tours/Popular Outbound/Australia.jsx';
import CoxsBazarSea from './components/Submain/Tours/Popular Outbound/CoxsBazarSea.jsx';
import London from './components/Submain/Tours/Popular Outbound/London.jsx';
import Paris from './components/Submain/Tours/Popular Outbound/Paris.jsx';
import Tokyo from './components/Submain/Tours/Popular Outbound/Tokyo.jsx';
import Illam from './components/Submain/Tours/Inbound/Illam.jsx';
import Langtang from './components/Submain/Tours/Inbound/Langtang.jsx';
import Everest from './components/Submain/Tours/Inbound/Everest.jsx';
import Darjelling from './components/Submain/Tours/Inbound/Darjelling.jsx';
import Lumbini from './components/Submain/Tours/Inbound/Lumbini.jsx';
import Chitwan from './components/Submain/Tours/Inbound/Chitwan.jsx';
import Rara from './components/Submain/Tours/Inbound/Rara.jsx';
import Indonesia from './components/Submain/Tours/Outbound/Indonesia.jsx';
import Europe from './components/Submain/Tours/Outbound/Europe.jsx';
import Dubai from './components/Submain/Tours/Outbound/Dubai.jsx';
import China from './components/Submain/Tours/Outbound/China.jsx';
import Japan from './components/Submain/Tours/Outbound/Japan.jsx';
import Thailand from './components/Submain/Tours/Outbound/Thailand.jsx';
import Cambodia from './components/Submain/Tours/Outbound/Cambodia.jsx';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/TourDetails" element={<TourDetailspage />} />
        <Route path="/tours/Australia" element={<Australia />} />
        <Route path="/tours/CoxsBazarSea" element={<CoxsBazarSea />} />
        <Route path="/tours/London" element={<London />} />
        <Route path="/tours/Paris" element={<Paris />} />
        <Route path="/tours/Tokyo" element={<Tokyo />} />

        <Route path="/tours/inbound/Everest" element={<Everest />} />
        <Route path="/tours/inbound/Illam" element={<Illam />} />
        <Route path="/tours/inbound/Langtang" element={<Langtang />} />
        <Route path="/tours/inbound/Lumbini" element={<Lumbini />} />
        <Route path="/tours/inbound/Darjelling" element={<Darjelling />} />
        <Route path="/tours/inbound/Rara" element={<Rara />} />
        <Route path="/tours/inbound/Chitwan" element={<Chitwan />} />
        
        <Route path="/tours/outbound/Indonesia" element={<Indonesia />} />
        <Route path="/tours/outbound/Europe" element={<Europe />} />
        <Route path="/tours/outbound/Dubai" element={<Dubai />} />
        <Route path="/tours/outbound/China" element={<China />} />
        <Route path="/tours/outbound/Japan" element={<Japan />} />
        <Route path="/tours/outbound/Thailand" element={<Thailand />} />
        <Route path="/tours/outbound/Cambodia" element={<Cambodia />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);