import { useTranslation } from "react-i18next";

export default function Language() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "gr" : "en";

    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "EL" : "EN"}
    </button>
  );
}