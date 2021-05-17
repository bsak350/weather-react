import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootsrap.css";
import Weather from "./Weather";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a
          href="https://github.com/bsak350/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Brittany Sak
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
