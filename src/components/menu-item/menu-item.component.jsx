import React from "react";
import "./menu-item.style.css";
const MenuItem = ({ title, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="col-3 menu-item pt-5 mx-2 mt-4"
    >
      <div
        style={{
          marginLeft: `30px`,
          marginRight: `30px`,
        }}
        className="content "
      >
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
