import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const calcTimeLeft = (t) => {
  if (!t) return 0;
  const left = t - new Date().getTime();
  if (left < 0) return 0;
  return left;
};
export default function useCountdown(endTime) {
  const [end, setEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(end));
  const navigate = useNavigate();
  useEffect(() => {
    setTimeLeft(calcTimeLeft(end));
    const timer = setInterval(() => {
      const targetLeft = calcTimeLeft(end);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(timer);
        navigate("/flutter-test");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [end]);
  return [timeLeft, setEndTime];
}
