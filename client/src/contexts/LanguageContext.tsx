import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, type Language, getTranslation } from "@/lib/i18n";

interface LanguageContextType {
  t: (key: string) => string;
  currentLanguage: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  translations: typeof translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update document title whenever language changes
    document.title = getTranslation(currentLanguage, "app-title.title");
  }, [currentLanguage]);

  const t = (key: string): string => {
    return getTranslation(currentLanguage, key);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "fr" ? "en" : "fr";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
  };

  const value: LanguageContextType = {
    t,
    currentLanguage,
    toggleLanguage,
    setLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
