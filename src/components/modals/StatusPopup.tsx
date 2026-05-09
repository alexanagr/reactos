import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useOnlineStatus } from "@/hooks/use-online";

function StatusPopup() {
  const isOnline = useOnlineStatus();

  const [visible, setVisible] = useState(false);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOnline]);

  if (!visible) return null;

  return createPortal(
    <div
      className={`
        fixed w-50 top-11 right-3 z-999
        rounded-md px-5 flex justify-center items-center
        text-white shadow-2xl
        backdrop-blur-md
        transition-all duration-300
        ${isOnline ? "bg-green-500" : "bg-red-500"}
      `}
    >
      {isOnline ? "Επανήλθε η σύνδεση" : "Χωρίς σύνδεση"}
    </div>,
    document.body,
  );
}

export default StatusPopup;
