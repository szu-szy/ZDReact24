import { useEffect, useRef, useState } from "react";

export const FunctionComponent = () => {
  let newCount = 0;
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const INTERVAL_TIME = 500;

  const handleChange = () => {
    // 1 opcja - niepoprawna
    // newCount += 1;
    // console.log(newCount);

    // 2 opcja - poprawna
    setCount(prev => prev + 1);
    
  }

  const createInterval = (): void => {
    const newInterval = setInterval(() => {
      setCount(prev => prev + 1);
    }, INTERVAL_TIME);

    intervalRef.current = newInterval;
  }

  const handleStopInterval = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleStartInterval = () => {
    createInterval();
  };

  useEffect(() => {
    // Odmontowanie komponentu
    // createInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null;
      };
      // console.log('Odmontowanie komponentu FunctionComponent')
    };
  }, []);

  // 3 etapy cyklu zycia komponentu
  // - zamontowanie
  // - aktualizacja
  // - odmontowanie

  // opcja 1
  useEffect(() => {
    console.log('a');
  })

  // opcja 2
  useEffect(() => {
    console.log('b')
  }, []);

  // opcja 3
  useEffect(() => {
    console.log('c')
  }, [count]);

  return (
    <div>
      <h1>Count: {newCount}</h1>
      <h1>Count poprawny: {count}</h1>
      <button onClick={handleStopInterval}>Stop interval</button>
      <button onClick={handleStartInterval}>Start Interval</button>
      <button onClick={handleChange}>Increase count to 1</button>
    </div>
  );
};
