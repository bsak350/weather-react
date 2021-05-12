import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Las Vegas",
    temperature: 75,
    date: "Thursday 09:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 0,
    wind: 5,
  };

  return (
    <div className="Weather">
      <div className="row header">
        <div className="col-4">
          <h1>Weather App</h1>
        </div>
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <form>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter City"
                  autoFocus="on"
                  autoComplete="off"
                />
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-primary">
            Current Location
          </button>
        </div>
      </div>
      <br />
      <h2>
        <div className="row">
          <div className="col-5">
            <span className="city">{weatherData.city}</span>
          </div>
          <div className="col-2">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </div>
          <div className="col-5">
            <span className="temp">{weatherData.temperature}°F</span>
          </div>
          <div className="col-8">
            <span className="date">{weatherData.date}</span>
          </div>
          <div className="col-4"></div>
          <ul>
            <li>{weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} MPH</li>
          </ul>
        </div>
      </h2>
    </div>
  );
}
