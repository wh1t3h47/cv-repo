// useLanguage.ts
import { languages } from "@/utils/i18n/languages";
import { useEffect, useState } from "react";
import { useT } from "talkr";

export const useToggleLanguage = () => {
  const { setLocale, locale } = useT();

  const [currentLanguage, setCurrentLanguage] = useState<string>(locale);

  useEffect(() => {
    setCurrentLanguage(locale);
  }, [locale]);

  const toggleLanguage = (languageCode: string) => {
    setLocale(languageCode);
  };

  return { currentLanguage, toggleLanguage, languages };
};
