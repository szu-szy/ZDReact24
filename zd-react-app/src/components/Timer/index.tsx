import { useTimer } from "./hooks/useTimer";

export const Timer = () => {
  const { seconds } = useTimer();

  return(
    <div>
      <h1>Timer</h1>
      <span>Pozostałe sekundy: {seconds}</span>
      <span>Pozostałe minuty: {seconds}</span>
    </div>
  )
}