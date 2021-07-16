import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.css";
const MenuItem = ({ title, imageUrl,LinkUrl,history,match }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="col-3 menu-item pt-5 mx-2 mt-3"
      onClick={()=> history.push(`${match.url}${LinkUrl}`)}
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

export default withRouter(MenuItem);
