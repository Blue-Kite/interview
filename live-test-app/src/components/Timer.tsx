import { useEffect, useState } from "react";

const CountdownTimer = ({ initialSeconds }: { initialSeconds: number }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{seconds} seconds remaining</p>
    </div>
  );
};
export const Timer = () => {
  return (
    <div>
      <CountdownTimer initialSeconds={60} />
    </div>
  );
};
