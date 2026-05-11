import { useContext } from "react";
import Main from "./components/main";
import Next from "./components/next";
import RandomUser from "./components/random-user";
import { ThemeContext } from "./context/Theme";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme == 'light' ? 'light' : 'dark'}>
      <RandomUser />
      <Main />
    </div>
  );
};

export default App;
