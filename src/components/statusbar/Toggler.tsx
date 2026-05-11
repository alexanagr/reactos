// hooks
import useConfig from "@/hooks/use-config";
import { useTranslation } from "react-i18next";

// components
import { RiContrast2Line } from "@remixicon/react";

export default function Toggler() {
  const { darkMode, setDayNight } = useConfig();

  const { t } = useTranslation();

  const d = t("statusbar.darkmode.setdark");
  const l = t("statusbar.darkmode.setlight");

  const tooltip = darkMode ? l : d;

  return (
    <div onClick={setDayNight} title={tooltip}>
      <RiContrast2Line size={20} />
    </div>
  );
}
