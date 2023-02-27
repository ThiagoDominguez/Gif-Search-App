import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCat] = useState([""]);

  return (
    <div>
      <h2>Gif Search App</h2>
      <AddCategory setCategory={setCat} />
      <hr />

      {categories.map((cat) => {
        return <GifGrid key={cat} category={cat} />;
      })}
    </div>
  );
};

export default GifExpertApp;
