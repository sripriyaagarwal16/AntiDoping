import React, { useState, useEffect } from "react";

const Timer = ({ duration, onTimeUp }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }
    const timerId = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timerId);
  }, [time, onTimeUp]);

  return <div className="timer">Time Remaining: {time}s</div>;
};

export default Timer;
