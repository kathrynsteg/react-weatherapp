import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function celsius() {
    return ((props.imperial - 32) * 5) / 9;
  }

  if (unit === "imperial") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.imperial)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius} rel="noopener noreferrer">
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit} rel="noopener noreferrer">
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
