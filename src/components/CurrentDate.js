import React from "react";
import "../css/CurrentDate.css";

function CurrentDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("es-AR", { month: "short" });
  const year = date.getFullYear();
  const weekday = date.toLocaleString("es-AR", { weekday: "long" });

  return (
    <div className="current-date">
      <div className="day-month-year">
        <span className="day">{day}</span>
        <div className="month-year">
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </div>
      </div>
      <div className="weekday">
        {weekday.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default CurrentDate;
