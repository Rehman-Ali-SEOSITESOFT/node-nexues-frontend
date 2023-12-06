import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo-big-shop.png";

function Navbar5() {
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
            className="nav navbar-nav  navbar-right menu-item-6"
            id="navbar-full"
          >
            <li className="current home">
              <span className="bg-icon">1</span>
              <span className="rotated-title">Node Owner</span>
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
              <span className="bg-icon">2</span>
              <span className="rotated-title">Coalition</span>
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
              <span className="bg-icon">3</span>
              <span className="rotated-title">Application Developer</span>
              <Link
                to="/application-developer"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Application Developer
              </Link>
            </li>
            <li className="work">
              <span className="bg-icon">4</span>
              <span className="rotated-title">Users</span>
              <Link
                to="/user"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Users
              </Link>
            </li>
            <li className="contact">
              <span className="bg-icon">5</span>
              <span className="rotated-title">Asset Backend Providers</span>
              <Link
                to="/assets-backend-providers"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Asset Backend
              </Link>
            </li>
            <li className="auth">
              <span className="bg-icon">6</span>
              <span className="rotated-title">Authentic Intelligence </span>
              <Link
                to="/authentic-intelligence"
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

export default Navbar5;