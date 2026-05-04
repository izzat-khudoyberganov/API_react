import React, { useEffect, useState } from "react";

// map - tayyor array elementlaridan yangi bir array yasaydi
const Map = () => {
  const url = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  async function getData() {
    await fetch(url)
      .then((javob) => javob.json())
      .then((tayyorMalumot) => setProducts(tayyorMalumot));
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(products);
  //   id, thumbnail, title, price
  //   map - faqat array bilan ishlaydi
  return (
    <>
      {products?.products?.map((el) => (
        <div key={el.id}>
          <h2>{el.title}</h2>
          <img src={el.thumbnail} alt={el.title} />
          <b>{el.price}</b>
        </div>
      ))}
    </>
  );
};

export default Map;
