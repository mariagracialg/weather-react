import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="row today-weather-info">
        <div className="col">
          <h3 className="today-temp m-0" id="today-degrees">
            {props.celsius}°C
          </h3>
        </div>
        <div className="col-6 weather-options">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <a
              href="/"
              className="btn btn-outline-primary"
              name="btnradio"
              id="btnradio1"
            >
              °C
            </a>

            <a
              href="/"
              className="btn btn-outline-primary"
              name="btnradio"
              id="btnradio2"
              onClick={convertFahrenheit}
            >
              °F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="row today-weather-info">
        <div className="col">
          <h3 className="today-temp m-0" id="today-degrees">
            {Math.round(fahrenheit)}°F
          </h3>
        </div>
        <div className="col-6 weather-options">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <a
              href="/"
              className="btn btn-outline-primary"
              name="btnradio"
              id="btnradio1"
              onClick={convertCelsius}
            >
              °C
            </a>

            <a
              href="/"
              className="btn btn-outline-primary"
              name="btnradio"
              id="btnradio2"
            >
              °F
            </a>
          </div>
        </div>
      </div>
    );
  }
}
