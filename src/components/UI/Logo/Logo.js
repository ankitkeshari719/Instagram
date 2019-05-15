import React from "react";
import spriteLogo from "../../../assets/images/sprite.png";
import classes from "./Logo.css";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={spriteLogo} alt="myBurger" />
    </div>
  );
};

export default logo;
