import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../../images/logo-big-shop.png";

function Navbar() {
  const [navToggle, setnavToggle] = useState(true);

  return (
    <>
      <nav className="navbar navbar-default  navbar-expand-md">
        <div className="navbar-header">
          <Link to="/" className="header-logo" smooth={false} duration={800}>
            {/* <span></span> */}
            <img src={logo} alt="logo" />
          </Link>
          <button
            onClick={() => setnavToggle(!navToggle)}
            type="button"
            className="navbar-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#bs-example-navbar-collapse-1"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          className={
            navToggle
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav   navbar-right menu-item-6 home-page-nav"
            id="navbar-full"
          >
            <li className="current home">
              <span className="bg-icon">
                <i className="ion-ios-home-outline"></i>
              </span>
              <span className="rotated-title effect">Node Owner</span>
              <Link
                to="/node"
                className="link-item "
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Node Owner
              </Link>
            </li>
            <li className="about">
              <span className="bg-icon">
                <i className="ion-ios-person-outline"></i>
              </span>
              <span className="rotated-title effect">Coalition</span>
              <Link
                to="/coalition"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Coalition
              </Link>
            </li>
            <li className="service">
              <span className="bg-icon">
                <i className="ion-ios-star-outline"></i>
              </span>
              <span className="rotated-title effect">
                Application Developer
              </span>
              <Link
                to="/app-dev"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Application Developer
              </Link>
            </li>
            <li className="work">
              <span className="bg-icon">
                <i className="ion-ios-photos-outline"></i>
              </span>
              <span className="rotated-title effect">Users</span>
              <Link
                to="/users"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Users
              </Link>
            </li>
            <li className="contact">
              <span className="bg-icon">
                <i className="ion-ios-chatboxes-outline"></i>
              </span>
              <span className="rotated-title effect">
                Asset Backed Providers
              </span>
              <Link
                to="/assets"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Asset Backed
              </Link>
            </li>
            <li className="auth">
              <span className="bg-icon">
                <i className="ion-ios-telephone-outline"></i>
              </span>
              <span className="rotated-title effect">
                Authentic Intelligence
              </span>
              <Link
                to="/authentic"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Authentic intelligence
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;