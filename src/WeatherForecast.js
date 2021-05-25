import axios from "axios";
import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c6ae7a266fd79d65419f44e508f65fae";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">☀️</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">75° </span>
            <span className="WeatherForecast-temp-min">60° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
