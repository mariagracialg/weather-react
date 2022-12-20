import React from "react";
import ForecastDay from "./ForecastDay";

export default function ForecastData(props) {
  return (
    <div>
      <div className="card gradient border-0 m-3">
        <div className="row ms-2 me-2 ">
          <img
            src={`./images/${props.data.weather[0].icon}.svg`}
            alt={props.data.weather[0].description}
            className="col p-0"
          />
          <div className="col-5 text-start align-self-center text-capitalize p-0">
            <strong>
              <ForecastDay date={new Date(props.data.dt * 1000)} />
            </strong>
            <div className="text-capitalize">
              <span className="forecast-desc ">
                {props.data.weather[0].description}
              </span>
            </div>
          </div>
          <div className="col text-center align-self-center p-0">
            <div className="forecast-temp">
              <span>{Math.round(props.data.temp.max)}°C</span> <br />
              <span id="forecast-min-temp">
                {Math.round(props.data.temp.min)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
