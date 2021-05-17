import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
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
    let apiKey = "633a901d15239b95c1fd6a7642839e6b";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row header">
          <div className="col-4">
            <h1>Weather App</h1>
          </div>
          <div className="col-4">
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
          <div className="col-4">
            <button type="button" className="btn btn-primary">
              Current Location
            </button>
          </div>
        </div>
        <br />
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
