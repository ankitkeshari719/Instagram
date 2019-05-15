import React from "react";
import "./Header.css";
import NavigationItems from "../UI/NavigationItems/NavigationItems";
import Logo from "../UI/Logo/Logo";

class Header extends React.Component {
  render() {
    return (
      <header className="Toolbar">
        <div className="HeaderLogo">
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
