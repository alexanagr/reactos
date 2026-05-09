// hooks
import useConfig from "@/hooks/use-config";

// components
import { RiContrast2Line } from "@remixicon/react";

export default function Toggler() {
  const { darkMode, setDayNight } = useConfig();

  const tooltip = `Switch to ${darkMode ? "light" : "dark"} mode`;

  return (
    <div onClick={setDayNight} title={tooltip}>
      <RiContrast2Line size={20} />
    </div>
  );
}
