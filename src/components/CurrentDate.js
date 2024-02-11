import React from "react";
import "../css/CurrentDate.css";

function CurrentDate() {
  const date = new Date();

  const dd = date.getDate();
  const mm = date.toLocaleString("es-AR", { month: "short" });
  const yyyy = date.getFullYear();
  const day = date.toLocaleString("es-AR", { weekday: "long" });

  return (
    <div className="current-date">
      <div className="dd-mm-yyyy">
        <span className="dd">{dd}</span>
        <div className="mm-yyyy">
          <span className="mm">{mm[0].toUpperCase() + mm.slice(1)}</span>
          <span className="yyyy">{yyyy}</span>
        </div>
      </div>
      <div className="day">
        {day.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default CurrentDate;
