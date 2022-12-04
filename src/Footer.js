import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="App">
      <p className="coder">
        <a
          href="https://github.com/mariagracialg/WeatherApp_project"
          target="_blank"
          rel="noreferrer"
          className="pe-1"
        >
          Open-source code
        </a>
        by
        <a
          href="https://www.linkedin.com/in/mariagracialg/"
          target="_blank"
          rel="noreferrer"
          className="ps-1 pe-1"
        >
          Maria Gracia
        </a>
        | Hosted on
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          className="ps-1"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
