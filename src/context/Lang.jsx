import { createContext, useState } from "react";

export const MainLangContext = createContext(null);

function MainLangContextProvider({ children }) {
  const [lang, setLang] = useState("uz");

  function switchlang() {
    setLang((prev) => (prev == "uz" ? "en" : "uz"));
  }

  return (
    <MainLangContext.Provider value={{ lang, switchlang }}>
      {children}
    </MainLangContext.Provider>
  );
}

export default MainLangContextProvider;
