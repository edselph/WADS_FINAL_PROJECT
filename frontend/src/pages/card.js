import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = ({ item, handleClick }) => {
  const { name, price, imageUrl, countInStock, storeName } = item;

  // const handleClick = (item) => {
  //   // props.setCart(item);
  // };

  return (
    <div className="cards">
      <div className="image_box">
        <img src={imageUrl} alt="" width="350px" height="350px" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Stock: {countInStock}</p>
        <p>StoreName: {storeName}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
