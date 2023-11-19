// LanguageSelect.tsx
import React from "react";
import { useToggleLanguage } from "./useToggleLanguage";

const LanguageSelect: React.FC = () => {
  const { currentLanguage, toggleLanguage, languages } = useToggleLanguage();

  return (
    <div className="fixed bottom-0 right-0 p-4 flex flex-col print:hidden">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => toggleLanguage(language.code)}
          className={`px-2 py-1 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 ${
            currentLanguage === language.code && "font-bold"
          }`}
        >
          <span className="flex items-center">
            <span role="img" aria-label="Flag" className="text-2xl mr-1">
              {language.emoji}
            </span>
            {language.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelect;
