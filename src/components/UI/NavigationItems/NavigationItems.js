import React from "react";

import classes from "./NavigationItems.css";
import { NavigationItem } from "../..";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Instagram
    </NavigationItem>
    <NavigationItem link="/addPost">Add Post</NavigationItem>
    <NavigationItem link="/profile">Profile</NavigationItem>
  </ul>
);

export default navigationItems;
