import React, { useState, useEffect } from "react";

function TimeComponent() {
  const [time, setTime] = useState(getFormattedTime());
  const [dayname, setDayName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = getFormattedTime();
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const today = new Date();
    const dayIndex = today.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    setDayName(days[dayIndex]);
    setMonth(monthNames[today.getMonth()]);
    setDay(String(today.getDate()).padStart(2, "0"));
  }, []);

  function getFormattedTime() {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  return (
    <div className="App">
      <h1>
        {time} • {dayname}, {month} {day}
      </h1>
    </div>
  );
}

export default TimeComponent;
