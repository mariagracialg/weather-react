import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState(null);
  let [data, setData] = useState({ ready: false });

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(event) {
    event.preventDefault();
    let apiKey = "55bb75aee5ffe7e4b5112ff6e6da39f1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);

    function showTemperature(response) {
      console.log(response.data);
      setData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        min: Math.round(response.data.main.temp_min),
        max: Math.round(response.data.main.temp_max),
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        city: response.data.name,
        realFeel: Math.round(response.data.main.feels_like),
        pressure: Math.round(response.data.main.pressure),
      });
    }
  }

  if (data.ready) {
    return (
      <div className="App ">
        <div className="container">
          <div className="card">
            <div className="row g-0">
              <div className="col left-container">
                <form
                  className="search col"
                  id="search-form"
                  onSubmit={displayWeather}
                >
                  <label>Today in</label>
                  <div className="input-group mb-2">
                    <input
                      type="search"
                      name="search-box"
                      id="search-box"
                      className="form-control input-group mb-3"
                      placeholder="Search for a city"
                      width="50%"
                      autoComplete="off"
                      onChange={getCity}
                    />
                    <div className="input-group-append">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        id="current-location-button"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
                <div className="App today-body">
                  <h4>
                    In <span id="current-city">{data.city}</span>
                  </h4>
                  <h6>
                    <FormattedDate date={data.date} />
                  </h6>
                  <br />
                  <img
                    src={`./images/${data.icon}.svg`}
                    alt={data.description}
                    width="30%"
                    id="today-weather-icon"
                  />
                  <br />
                  <h3 className="pt-4" id="today-temp-description">
                    {data.description}
                  </h3>
                  <div className="App today-body">
                    <WeatherTemperature celsius={data} />
                    <div className="card gradient border-0 m-3">
                      <div className="row me-2 ms-2 mt-2 ">
                        <div>
                          <div className="row pe-4 ps-4 pt-2 pb-3">
                            <div className="col">
                              <div className="col">
                                <img
                                  src={`./images/wind.svg`}
                                  alt="wind"
                                  width="40%"
                                />
                              </div>
                              <div className="col">
                                <strong>Wind</strong>
                                <br />
                                <span>{data.wind} km/h</span>
                              </div>
                            </div>
                            <div className="col text-center">
                              <div className="col">
                                <img
                                  src={`./images/humidity.svg`}
                                  alt="humidity"
                                  width="40%"
                                />
                              </div>
                              <div className="col">
                                <strong>Humidity</strong>
                                <br />
                                <span>{data.humidity}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row me-2 ms-2 mt-2 ">
                        <div>
                          <div className="row pe-4 ps-4 pt-2 pb-3">
                            <div className="col">
                              <div className="col">
                                <img
                                  src={`./images/barometer.svg`}
                                  alt="barometer"
                                  width="40%"
                                />
                              </div>
                              <div className="col">
                                <strong>Pressure</strong>
                                <br />
                                <span>{data.pressure} hPA</span>
                              </div>
                            </div>
                            <div className="col text-center">
                              <div className="col">
                                <img
                                  src={`./images/thermometer.svg`}
                                  alt="thermometer"
                                  width="40%"
                                />
                              </div>
                              <div className="col">
                                <strong>RealFeel</strong>
                                <br />
                                <span>{data.realFeel}°C</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Forecast />
                    <Forecast />
                    <Forecast />
                    <Forecast />
                    <Forecast />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App ">
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col left-container">
                <form
                  className="search col"
                  id="search-form"
                  onSubmit={displayWeather}
                >
                  <label>Today in</label>
                  <div className="input-group mb-2">
                    <input
                      type="search"
                      name="search-box"
                      id="search-box"
                      className="form-control input-group mb-3"
                      placeholder="Search for a city"
                      width="50%"
                      autoComplete="off"
                      onChange={getCity}
                    />
                    <div className="input-group-append">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        id="current-location-button"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
                <p className="text-center p-3">
                  Check the weather in your city. <br /> Find out if you'll be
                  needing an umbrella ☂️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
