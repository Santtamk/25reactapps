import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId;

    const startTimer = () => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      setStart(true);
      intervalId = interval;
    };
    if (start) {
      startTimer();
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  const reset = () => {
    setTimer(0);
    setStart(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <h3>{timer}</h3>
      </div>
      <div>
        <button onClick={() => setStart(!start)}>
          {start ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
