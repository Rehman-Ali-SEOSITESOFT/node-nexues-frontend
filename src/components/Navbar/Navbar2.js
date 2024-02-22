import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
function Navbar2() {
  const [navToggle, setnavToggle] = useState(true);

  return (
    <>
      <nav className="navbar navbar-default  navbar-expand-md">
        <div className="navbar-header">
         <Logo/>
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
            className="nav navbar-nav  navbar-right menu-item-6"
            id="navbar-full"
          >
            <li className="current home home2-n-home">
              <span className="bg-icon">
                <i className="ion-ios-star-outline"></i>
              </span>
              <span className="rotated-title effect">OVERVIEW</span>
              <Link
                to="/node"
                className="link-item "
                smooth={false}
                duration={800}
                activeClass="active"
              >
                OVERVIEW
              </Link>
            </li>
            <li className="about home2-n-about">
              <span className="bg-icon">
                <i className="ion-ios-star-outline"></i>
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
            <li className="service home2-n-service">
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
            <li className="work home2-n-work">
              <span className="bg-icon">
                <i className="ion-ios-star-outline"></i>
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
            <li className="contact home2-n-contact">
              <span className="bg-icon">
                <i className="ion-ios-star-outline"></i>
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
            <li className="auth home2-n-auth">
              <span className="bg-icon">
                <i className="ion-ios-star-outline"></i>
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
                Authentic Intelligence
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
