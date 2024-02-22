import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-big-shop.png";

function Logo() {
  return (
    <Link to="/" className="header-logo" smooth={false} duration={800}>
      {/* <span></span> */}
      <img src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
