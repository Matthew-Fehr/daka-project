import { createContext, useState, useContext } from "react";
import languageDe from "./language_ger";
import languageEs from "./language_es";
import languageEn from "./language_en";

/**
 * checks whether localStorage is empty. If yes uses german as default language
 * @returns language file
 */
function checkLocalStorage() {
  if (
    localStorage.getItem("languageName") === null ||
    localStorage.getItem("languageName") === "ES"
  ) {
    localStorage.setItem("languageName", "ES");
    return languageEs;
  }
  if (localStorage.getItem("languageName") === "EN") {
    localStorage.setItem("languageName", "EN");
    return languageEn;
  }
  return languageDe;
}

export const LanguageContext = createContext(checkLocalStorage());

export const SetSomeContext = createContext<
  React.Dispatch<React.SetStateAction<typeof languageEs>> | undefined
>(undefined);

export const useLanguage = () => {
  const setLanguage = useContext(SetSomeContext);
  if (!setLanguage) {
    throw new Error(
      "setLanguage was called outside of the AllSkillsFilterProvider"
    );
  }
  return setLanguage;
};

function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState(checkLocalStorage);

  return (
    <LanguageContext.Provider value={lang}>
      <SetSomeContext.Provider value={setLang}>
        {children}
      </SetSomeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
