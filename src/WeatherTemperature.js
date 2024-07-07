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
    return (props.imperial * 5) / 9 - 32;
  }

  if (unit === "imperial") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.imperial)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
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
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
