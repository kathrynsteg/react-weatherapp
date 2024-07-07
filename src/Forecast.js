import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code="rain-night" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-max">65°</span>
            <span className="WeatherForecast-min">45°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
