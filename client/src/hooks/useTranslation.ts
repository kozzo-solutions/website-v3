import { useState, useEffect } from "react";
import { translations, type Language, getTranslation } from "@/lib/i18n";

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setCurrentLanguage(savedLanguage);
    }
    
    // Update document title
    document.title = getTranslation(currentLanguage, "app-title.title");
  }, [currentLanguage]);

  const t = (key: string): string => {
    return getTranslation(currentLanguage, key);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "fr" ? "en" : "fr";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.title = getTranslation(newLanguage, "app-title.title");
  };

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
    document.title = getTranslation(language, "app-title.title");
  };

  return {
    t,
    currentLanguage,
    toggleLanguage,
    setLanguage,
    translations,
  };
}
