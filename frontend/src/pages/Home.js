import "./Home.css";
import React, { useState } from "react";
import list from "../data";
import Cards from "./card";

const Home = (handleClick) => {
  return (
    <div className="Furnica-pic">
      <img
        src="https://i.ibb.co/4dRT58N/FURNICA-Renovate-your-home.png"
        width="700px"
        height="350px"
      />
      <div className="empty-space">
        <br />
        <br />

        <div className="Furnica-intro">
          Furnica is a web application made to help locally independent
          furniture seller to able to make day end meet.
          <br />
          Furnica provide business owners with a place to sell their products.
          Customers that use Furnica will be protected
          <br />
          by insurance when furnishes were purchased in a poor quality.
          <div>
            <br />
            <br />
            <h2> Best Sellers:</h2>
            <section>
              {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
