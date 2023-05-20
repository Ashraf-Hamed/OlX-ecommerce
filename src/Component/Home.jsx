import React from "react";
import background from "../assests/hero4.png";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-white text-dark  border-0 ">
        <img
          src={background}
          className="card-img"
          alt="background"
          height="600px"
        />

        <div className="card-img-overlay d-flex flex-column  justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text fs-2  lead">CHECK OUT ALL TRENDS</p>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Home;
