//hooks
import { useOnlineStatus } from "@/hooks/use-online";

// components
import {
  RiGlobalLine as Online,
  RiGlobalOffLine as Offline,
} from "@remixicon/react";

export default function NetState() {
  const isOnline = useOnlineStatus();

  return (
    <div className={`${isOnline ? "text-green-400" : "text-red-400"}`}>
      {isOnline ? <Online size={20} /> : <Offline size={20} />}
    </div>
  );
}
