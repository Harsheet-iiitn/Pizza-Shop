import React, { useState } from "react";

function StopwatchApp() {
  const [stopwatches, setStopwatches] = useState([]);

  // Add a new stopwatch
  function addStopwatch() {
    setStopwatches((prev) => [
      ...prev,
      { id: Date.now(), time: 0, isRunning: false, intervalId: null },
    ]);
  }

  // Start or resume a stopwatch
  function startStopwatch(id) {
    setStopwatches((prev) =>
      prev.map((sw) => {
        if (sw.id === id && !sw.isRunning) {
          const intervalId = setInterval(() => {
            setStopwatches((prev) =>
              prev.map((innerSw) =>
                innerSw.id === id
                  ? { ...innerSw, time: innerSw.time + 1 }
                  : innerSw
              )
            );
          }, 1000);

          return { ...sw, isRunning: true, intervalId };
        }
        return sw;
      })
    );
  }

  // Stop a stopwatch
  function stopStopwatch(id) {
    setStopwatches((prev) =>
      prev.map((sw) => {
        if (sw.id === id && sw.isRunning) {
          clearInterval(sw.intervalId);
          return { ...sw, isRunning: false, intervalId: null };
        }
        return sw;
      })
    );
  }

  // Reset a stopwatch
  function resetStopwatch(id) {
    setStopwatches((prev) =>
      prev.map((sw) => {
        if (sw.id === id) {
          clearInterval(sw.intervalId);
          return { ...sw, time: 0, isRunning: false, intervalId: null };
        }
        return sw;
      })
    );
  }
}

export { addStopwatch, startStopWatch, stopStopwatch, resetStopwatch };
