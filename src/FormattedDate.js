import React from "react";
import { padStart } from "lodash";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hours = padStart(String(props.date.getHours()), 2, 0);
  let minutes = padStart(String(props.date.getMinutes()), 2, 0);
  return (
    <div>
      {day}, {month} {date} at {hours}:{minutes}
    </div>
  );
}
