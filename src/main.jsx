import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MainThemeContext from "./context/Theme.jsx";
import "./index.css";
import MainLangContextProvider from "./context/Lang.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLangContextProvider>
      <MainThemeContext>
        <App />
      </MainThemeContext>
    </MainLangContextProvider>
  </StrictMode>,
);
