import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";

const App = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <h1>Products</h1>
      {!products && <div>Loading...</div>}
      {products && <CardList products={products} />}
    </main>
  );
};

export default App;
