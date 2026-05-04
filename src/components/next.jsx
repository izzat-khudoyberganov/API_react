import React, { useEffect, useState } from "react";
import ProductCard from "./product-cart";

const Next = () => {
  const url = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  async function getData() {
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid">
      {Array.isArray(products) &&
        products.length > 0 &&
        products.map((el) => <ProductCard key={el.id} {...el} />)}
    </div>
  );
};

export default Next;
