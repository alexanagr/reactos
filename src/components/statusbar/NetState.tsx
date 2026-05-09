//hooks
import { useOnlineStatus } from "@/hooks/use-online";

import { OfflineIcon, OnlineIcon } from "@/types/icons";

export default function NetState() {
  const isOnline = useOnlineStatus();

  const tooltip = `You are ${isOnline ? "Online" : "Offline"}`;

  return (
    <div
      className={`${isOnline ? "text-green-600" : "text-red-600"}`}
      title={tooltip}
    >
      {isOnline ? <OnlineIcon size={20} /> : <OfflineIcon size={20} />}
    </div>
  );
}
