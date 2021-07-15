import React from "react";
import "./homepage.style.css";
const Homepage = () => {
  return (
    <div className="homepage container ">
      <div className="directory-menu">
        <div className="row justify-content-around">
          <div className="col-3 menu-item pt-5">
            <div className="content ">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="col-3 menu-item pt-5">
            <div className="content ">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="col-3 menu-item pt-5">
            <div className="content ">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-5 menu-item mx-2 pt-5">
            <div className="content ">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="col-5 menu-item mx-2 pt-5">
            <div className="content ">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
