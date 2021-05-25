import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      coord: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "c6ae7a266fd79d65419f44e508f65fae";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row header">
          <div className="col-6">
            <h1>Weather App</h1>
          </div>
          <div className="col-6">
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Enter City"
                    autoFocus={true}
                    autoComplete={false}
                    onChange={handleCityChange}
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
        </div>
        <br />
        <WeatherInfo data={weather} />
        <WeatherForecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
