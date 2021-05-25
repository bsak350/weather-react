import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">☀️</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">75 </span>
            <span className="WeatherForecast-temp-min">60 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
