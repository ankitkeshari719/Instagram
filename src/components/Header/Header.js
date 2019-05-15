import React from "react";
import classes from "./Header.css";
import { Logo, NavigationItems } from "..";

class Header extends React.Component {
  render() {
    return (
      <header className={classes.Toolbar}>
        <div className={classes.HeaderLogo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </header>
    );
  }
}

export default Header;
