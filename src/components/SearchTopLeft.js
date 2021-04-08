import React from "react";
import "../style/SearchTopLeft.css";
function SearchTopLeft({ name, img }) {
  return (
    <>
      <div className="top__left">
        <img src={img[0]?.url} alt={`img ${name}`} />
        <h2> {name}</h2>
        <p>Author</p>
      </div>
    </>
  );
}

export default SearchTopLeft;
