import React from "react";

import "./Home.scss";
import credit from "../../assets/credit.png";
import car from "../../assets/car.png";
import cloud from "../../assets/cloud.png";
import home from "../../assets/home.png";

const Home = () => {
  return (
    <div className="app__home">
    
      <div className="home__text">
        <h1 className="head-text">Make apt finalcial decision</h1>
        <p className="p-text">
          Compare and apply for the best personal finace products
        </p>
      </div>
      <div className="app__cards">
        <div className="single__card">
          <div className="img__wrapper">
            <img src={home} alt="house loans" />
          </div>
          <p>House Insurance</p>
        </div>

        <div className="single__card">
          <div className="img__wrapper">
            <img src={car} alt="car loans" />
          </div>
          <p>Car Loan</p>
        </div>

        <div className="single__card">
          <div className="img__wrapper">
            <img src={cloud} alt="cloud service" />
          </div>
          <p>Cloud Service</p>
        </div>

        <div className="single__card">
          <div className="img__wrapper">
            <img src={credit} alt="credit card" />
          </div>
          <p>Credit Loan</p>
        </div>
      </div>
      <div className="bg__img">
        <a href="/" className="box">
          <div>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
