import React, { useEffect, useState } from "react";

const Api = () => {
  const [endpoints, setEndpoints] = useState("posts");

  function onChange(text) {
    setEndpoints(text);
  }

  async function getData() {
    await fetch("https://jsonplaceholder.typicode.com/" + endpoints)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    getData();
  }, [endpoints]);

  return (
    <div className="mt-5">
      <button onClick={() => onChange("posts")}>Posts</button>
      <button onClick={() => onChange("comments")}>Comments</button>
      <button onClick={() => onChange("albums")}>Albums</button>
      <button onClick={() => onChange("photos")}>Photos</button>
      <button onClick={() => onChange("todos")}>Todos</button>
      <button onClick={() => onChange("users")}>Users</button>
    </div>
  );
};

export default Api;
