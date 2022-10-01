import useCountdown from "./USecontactdown";

const Timer = () => {
  const endTime = new Date().getTime() + 60000 * 3; // 2 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);
  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  return (
    <div className="time">
      <p className="timer_time">Timer</p>
      <p>
        00:{minutes <= 10 ? "0" + minutes : minutes}:
        {seconds <= 10 ? "0" + seconds : seconds}
      </p>
      <small>remaining</small>
      <p className="Hours">Hours:Minutes:Seconds</p>
    </div>
  );
};

export default Timer;
