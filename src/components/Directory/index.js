import React from "react";
import ShopMen from "./../../assets/men.jpg";
import ShopWomen from "./../../assets/women-1.jpg";
import "./style.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a>Shop Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
