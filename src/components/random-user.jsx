import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/Theme";

const RandomUser = () => {
  const api = "https://randomuser.me/api/";

  const [user, setUser] = useState(null);
  const [active, setActive] = useState(false);

  async function getData() {
    await fetch(api)
      .then((res) => res.json())
      .then((json) => setUser(json.results[0]));
  }

  useEffect(() => {
    getData();
  }, [active]);

  const {theme, switchTheme} = useContext(ThemeContext)

  return (
    <div className="content">
      <img className="user__img" src={user?.picture?.thumbnail} alt="" />
      <h2 className="user__title">
        {user?.name?.title} {user?.name?.first} {user?.name?.last}
      </h2>
      <a className="user__tel" href={`tel: ${user?.phone}`}>
        tel: {user?.phone}{" "}
      </a>
      <a className="user__email" href={`mailto: ${user?.email}`}>
        email: {user?.email}{" "}
      </a>
      <button className="user__btn" onClick={() => setActive(!active)}>
        Get users info
      </button>
      <button onClick={switchTheme}>theme</button>
    </div>
  );
};

export default RandomUser;
