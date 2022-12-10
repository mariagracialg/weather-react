import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [ciudad, setCiudad] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [min, setMin] = useState(null);
  let [max, setMax] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [realFeel, setRealFeel] = useState(null);
  let [pressure, setPressure] = useState(null);

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
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setMin(Math.round(response.data.main.temp_min));
      setMax(Math.round(response.data.main.temp_max));
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
      setCiudad(response.data.name);
      setRealFeel(Math.round(response.data.main.feels_like));
      setPressure(Math.round(response.data.main.pressure));
    }
  }

  if (temperature) {
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
                    In <span id="current-city">{ciudad}</span>
                  </h4>
                  <br />
                  <img
                    src={`./images/${icon}.svg`}
                    alt={description}
                    width="30%"
                    id="today-weather-icon"
                  />
                  <br />
                  <h3 id="today-temp-description">{description}</h3>
                  <div className="App today-body">
                    <div className="row today-weather-info">
                      <div className="col">
                        <h3 className="today-temp" id="today-degrees">
                          {temperature}°C
                        </h3>
                      </div>
                    </div>
                    <div className="row today-min-max">
                      <div className="col today-max">
                        <p>
                          <strong>Max</strong>{" "}
                          <span id="max-temp">{max}°C</span>
                        </p>
                      </div>
                      <div className="col today-min">
                        <p>
                          <strong>Min</strong>{" "}
                          <span id="min-temp">{min}°C</span>
                        </p>
                      </div>
                    </div>
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
                                <span>{wind} km/h</span>
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
                                <span>{humidity}%</span>
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
                                <span>{pressure} hPA</span>
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
                                <span>{realFeel}°C</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
