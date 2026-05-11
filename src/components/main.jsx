import React, { useContext } from "react";
import Card from "./card";
import { ThemeContext } from "../context/Theme";

const Main = () => {
  // Data flow - Ma'lumot oqimi || yuqoridagi component dan pastdagi componentga

  // useContext    

  // useState, useEffect, useContext   
  const { theme, switchTheme } = useContext(ThemeContext);
  console.log(theme);
  
  return (
    <div>
      <Card title="test title" count={10} isActive={false} />
      <Card title="test title 2 " count={11} isActive={true} />
      <button onClick={switchTheme}>theme</button>
    </div>
  );
};

export default Main;
