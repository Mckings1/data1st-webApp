import React from "react";
import image from "../Images/Frame 40071.png";

function Header() {
  return (
    <header className="header">
      <img src={image} alt="header-image" className="header-image" />
    </header>
  );
}

export default Header;
