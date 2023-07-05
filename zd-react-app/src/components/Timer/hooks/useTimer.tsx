import { useEffect, useRef, useState } from "react"

type TimerType = {
  seconds: number,
}

export const useTimer = ():TimerType => {
  const [seconds, setSeconds] = useState(10);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const createInterval = () => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    intervalRef.current = interval;
  }

  const handleClearInterval = () => {
    if(intervalRef.current) clearInterval(intervalRef.current);
  }

  useEffect(() => {
    createInterval();

    return () => {
      if(intervalRef.current) handleClearInterval();
    }
  }, []);

  return {
    seconds
  }
}