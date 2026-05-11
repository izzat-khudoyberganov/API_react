import React, { useContext } from "react";
import { MainLangContext } from "../context/Lang";

const Card = ({ count, isActive, title }) => {
  //  const { count, isActive, title } = props; // distruktizatsiya
  const {lang, switchlang} = useContext(MainLangContext)

  return (
    <div>
      <h2>{title}</h2>
      <p>{count}</p>
      <p>{JSON.stringify(isActive)}</p>
      <button onClick={switchlang}>{lang}</button>
    </div>
  );
};

export default Card;
