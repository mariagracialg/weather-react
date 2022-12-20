import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";
import "./styles.css";

export default function Forecast(props) {
  let [data, setData] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setData(false);
  }, [props.coord]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setData(true);
    console.log(response.data);
  }

  if (data) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          return (
            <div key={index}>
              <ForecastData data={dailyForecast} />
            </div>
          );
        })}
      </div>
    );
  } else {
    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
    return null;
  }
}
