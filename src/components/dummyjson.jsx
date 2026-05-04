import React, { useEffect, useState } from "react";

const DummyJSON = () => {
  const [endpoint, setEndpoint] = useState("products");
  async function getData() {
    await fetch("https://dummyjson.com/" + endpoint)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    getData();
  }, [endpoint]);

  return (
    <div className="mt-5">
      <button onClick={() => setEndpoint("products")}>Products</button>
      <button onClick={() => setEndpoint("carts")}>Carts</button>
      <button onClick={() => setEndpoint("users")}>Users</button>
      <button onClick={() => setEndpoint("todos")}>Todos</button>
    </div>
  );
};

export default DummyJSON;
