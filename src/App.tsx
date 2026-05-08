// hooks
import { useEffect } from "react";
import useConfig from "./hooks/use-config";

// components
import Desktop from "@/components/desktop";
import MenuDraw from "./components/drawer";
import Launchers from "./components/desktop/Launchers";
import StatusBar from "@/components/statusbar";

export default function App() {
  const { darkMode } = useConfig();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  return (
    <Desktop>
      <Launchers />
      <MenuDraw />
      <StatusBar />
    </Desktop>
  );
}
