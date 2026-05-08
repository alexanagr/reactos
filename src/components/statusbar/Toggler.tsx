// hooks
import useConfig from "@/hooks/use-config";

// components
import { RiContrast2Line } from "@remixicon/react";

export default function Toggler() {
  const { setDayNight } = useConfig();
  return (
    <div onClick={setDayNight}>
      <RiContrast2Line size={20} />
    </div>
  );
}
