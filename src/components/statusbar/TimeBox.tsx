import { useState, useEffect } from "react";

export default function TimeBox() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = (date: Date) => {
    return date.toLocaleTimeString("el-GR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="localtime">
        {localTime(time)}
    </div>
  )
}
