import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Kyoto" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://kathryn-stegeman-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kathryn Stegeman
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kathrynsteg/react-weatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
