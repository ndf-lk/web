import React, { useContext } from "react";

export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {},
});

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <button onClick={() => setLanguage("jp")}>
      Switch Language (Current: {language})
    </button>
  );
};
