import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Instagram
    </NavigationItem>
    <NavigationItem link="/addPost">Add Post</NavigationItem>
    <NavigationItem link="/profile">Profile</NavigationItem>
  </ul>
);

export default navigationItems;
