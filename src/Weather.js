import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });

    setReady(true);
  }

  if (ready) {
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
                    autoFocus={true}
                    autoComplete={false}
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
              <span className="city">{weather.city}</span>
            </div>
            <div className="col-2">
              <div className="clearfix weather-temperature">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="float-left"
                />
              </div>
            </div>
            <div className="col-5">
              <span className="temp">{weather.temperature}°F</span>
            </div>
            <div className="col-8">
              <span className="date">
                <FormatDate date={weather.date} />
              </span>
            </div>
            <div className="col-4"></div>
            <ul>
              <li>{weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} MPH</li>
            </ul>
          </div>
        </h2>
      </div>
    );
  } else {
    let apiKey = "633a901d15239b95c1fd6a7642839e6b";
    let city = "Las Vegas";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
