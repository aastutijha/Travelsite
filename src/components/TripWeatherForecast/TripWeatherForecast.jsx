import React from 'react';
import './TripWeatherForecast.css';

const TripWeatherForecast = () => {
  return (
    <div className="trip-weather-forecast">
      <div className="header">
        <h2>Trip Weather Forecast</h2>
      </div>
      <div className="location">
        <h3>Kathmandu</h3>
        <div className="current-weather">
          <span className="temperature">22°C</span>
          <span className="condition">Partly Cloudy ☁️</span>
         
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hour">
          <span className="time">12:00 H</span>
          <span className="icon">☀️</span>
          <span className="temperature">25°C</span>
        </div>
        <div className="hour">
          <span className="time">13:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">20°C</span>
        </div>
        <div className="hour">
          <span className="time">14:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">19°C</span>
        </div>
        <div className="hour">
          <span className="time">15:00 H</span>
          <span className="icon">☁️</span>
          <span className="temperature">15°C</span>
        </div>
        <div className="hour">
          <span className="time">16:00 H</span>
          <span className="icon">❄️</span>
          <span className="temperature">-5°C</span>
        </div>
        <div className="hour">
          <span className="time">17:00 H</span>
          <span className="icon">🌬️</span>
          <span className="temperature">25°C</span>
        </div>
      </div>
    </div>
  );
};

export default TripWeatherForecast;