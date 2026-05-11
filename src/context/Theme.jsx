import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function MainThemeContext({ children }) {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }
  const values = {
    theme,
    switchTheme
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default MainThemeContext;
