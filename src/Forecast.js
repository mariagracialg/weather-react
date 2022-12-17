import React from "react";

export default function Forecast() {
  return (
    <div className="card gradient border-0 m-3">
      <div className="row ms-2 me-2 ">
        <img src={`./images/01d.svg`} alt="test-img" className="col p-0" />
        <div className="col-5 text-start align-self-center text-capitalize p-0">
          <strong>Sunday</strong>
          <br />
          <span className="forecast-desc">Broken Clouds</span>
        </div>
        <div className="col text-center align-self-center p-0">
          <div className="forecast-temp">
            <span>35°C</span> <br />
            <span id="forecast-min-temp">24°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
