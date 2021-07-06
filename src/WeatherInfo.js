import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <h2>
      <div className="row">
        <div className="col-md-5 mb-5">
          <span className="city">{props.data.city}</span>
        </div>
        <div className="col-md-2">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
          </div>
        </div>
        <div className="col-md-5 temp">
          <WeatherTemp imperial={props.data.temperature} />
        </div>
        <div className="col-md-8 mt-3">
          <span className="date">
            <FormatDate date={props.data.date} />
          </span>
        </div>
        <div className="col-md-4"></div>
        <ul>
          <li>{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} MPH</li>
        </ul>
      </div>
    </h2>
  );
}
