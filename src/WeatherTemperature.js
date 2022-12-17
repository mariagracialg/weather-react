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
      <div>
        <div className="row today-weather-info">
          <div className="col">
            <h3 className="today-temp m-0" id="today-degrees">
              {props.celsius.temperature}°C
            </h3>
          </div>
          <div className="col-6 weather-options">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <span
                className="btn btn-outline-primary"
                name="btnradio"
                id="btnradio1"
              >
                °C
              </span>

              <span
                className="btn btn-outline-primary"
                name="btnradio"
                id="btnradio2"
                onClick={convertFahrenheit}
              >
                °F
              </span>
            </div>
          </div>
        </div>
        <div className="row today-min-max">
          <div className="col today-max">
            <p>
              <strong>Max</strong>{" "}
              <span id="max-temp">{props.celsius.max}°C</span>
            </p>
          </div>
          <div className="col today-min">
            <p>
              <strong>Min</strong>{" "}
              <span id="min-temp">{props.celsius.min}°C</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius.temperature * 9) / 5 + 32;
    let fahrenheitMax = (props.celsius.max * 9) / 5 + 32;
    let fahrenheitMin = (props.celsius.min * 9) / 5 + 32;
    return (
      <div>
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
              <span
                className="btn btn-outline-primary"
                name="btnradio"
                id="btnradio1"
                onClick={convertCelsius}
              >
                °C
              </span>

              <span
                className="btn btn-outline-primary"
                name="btnradio"
                id="btnradio2"
              >
                °F
              </span>
            </div>
          </div>
        </div>
        <div className="row today-min-max">
          <div className="col today-max">
            <p>
              <strong>Max</strong>{" "}
              <span id="max-temp">{Math.round(fahrenheitMax)}°F</span>
            </p>
          </div>
          <div className="col today-min">
            <p>
              <strong>Min</strong>{" "}
              <span id="min-temp">{Math.round(fahrenheitMin)}°F</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
