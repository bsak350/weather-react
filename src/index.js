import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Las Vegas" />

        <footer>
          Project coded by Brittany Sak
          <br />
          <a
            href="https://github.com/bsak350/weather-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://pensive-feynman-61d550.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted by Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
