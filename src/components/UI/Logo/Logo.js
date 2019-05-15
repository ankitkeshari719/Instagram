import React from "react";

import spriteLogo from "../../../assets/images/sprite.png";
import "./Logo.css";

const logo = () => {
  return (
    <div className="Logo">
      <img src={spriteLogo} alt="myBurger" />
    </div>
  );
};

export default logo;
