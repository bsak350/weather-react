import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="temp">{props.imperial}</span>
      <span className="unit"> °F </span>
    </div>
  );
}
