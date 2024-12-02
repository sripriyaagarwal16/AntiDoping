import React, { useState, useEffect } from "react";

const Timer = ({ duration, onTimeUp }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [onTimeUp]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-xl font-semibold text-red-500 mb-4">
      Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;