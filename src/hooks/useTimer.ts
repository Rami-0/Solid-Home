import { useState, useEffect, useRef } from 'react';

const useTimer = (initialTime = 60) => {
  const [timer, setTimer] = useState(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Function to decrement the timer
    const decrementTimer = () => {
      setTimer((prevTimer) => prevTimer - 1);
    };

    // Start the timer
    if (timer > 0) {
      intervalRef.current = setInterval(decrementTimer, 1000);
    }

    // Clear the interval and reset the timer when it reaches 0
    if (timer === 0) {
      clearInterval(intervalRef.current!);
      // setTimer(initialTime);
    }

    // Clean up the interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timer, initialTime]);

  return { timer, setTimer };
};

export default useTimer;
