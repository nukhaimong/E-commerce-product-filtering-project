import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Rocommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Component/Card";
import products from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCatgory] = useState(null);
  // --------input filter------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // -------radio filter------
  const handleChange = (event) => {
    setSelectedCatgory(event.target.value);
  };

  // -----button filter------
  const handleButtonClick = (event) => {
    setSelectedCatgory(event.target.value);
  };

  const filterdData = (products, selected, query) => {
    let filteredProducts = products;
    // filter input
    if (query) {
      filteredProducts = filteredItems;
    }
    //filter selected
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
      );
    }

    return filteredProducts.map((product, i) => (
      <Card
        key={i}
        img={product.img}
        title={product.title}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
        star={product.star}
        reviews={product.reviews}
      />
    ));
  };

  const result = filterdData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Products result={result} />
    </>
  );
};

export default App;
