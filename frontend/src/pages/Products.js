import React, { useState, useEffect } from "react";
import list from "../data";
import Cards from "./card";
import "./Products.css";
import axios from "axios";
import Cart from "./Cart";

export let cart = [];

const Products = ({ props }) => {
  const [search, setSearch] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [furnitureCopy, setFurnitureCopy] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getFurnitures = async () => {
      await axios
        .get("https://evening-chamber-92951.herokuapp.com/api/furniture")
        .then((res) => {
          console.log(res.data);
          setFurniture(res.data);
          setFurnitureCopy(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFurnitures();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value === "") {
      setFurniture(furnitureCopy);
    } else {
      let filtered = [];
      furnitureCopy.forEach((furniture) => {
        if (
          furniture.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) === true ||
          String(furniture.price).includes(e.target.value.toLowerCase()) ===
            true
        ) {
          filtered.push(furniture);
        }
        setFurniture(filtered);
      });
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault();
  };

  const handleClick = (item) => {
    console.log("button clicked");
    let items_in_cart = [];
    cart.forEach((product) => {
      items_in_cart.push(product);
    });
    items_in_cart.push(item);
    setCart(items_in_cart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // const Setsearch = () => {};

  return (
    <div>
      <br />
      <h1>Search for Furniture</h1>
      <input
        className="border p-1 mx-8"
        type="text"
        placeholder="Search here!"
        onChange={handleChange}
      />
      {/* <button onClick={getFurnitures}>Get the data</button> */}
      <br />
      <h2> Our Products:</h2>
      <section>
        {furniture.length === 0
          ? "No data available in the server"
          : furniture.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
      </section>
      <Cart
        cart={cart}
        setCart={setCart}
        handleRemove={handleRemove}
        handleAdd={handleAdd}
      ></Cart>
    </div>
  );
};

export default Products;
