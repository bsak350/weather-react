import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("imperial");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function celsius() {
    return props.imperial - 32 * (5 / 9);
  }

  if (unit === "imperial") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{props.imperial}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
