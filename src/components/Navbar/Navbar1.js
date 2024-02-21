import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-big-shop.png";

function Navbar1() {
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
            className="nav navbar-nav  navbar-right menu-item-5"
            id="navbar-full"
          >
            <li className="current home">
              <span className="bg-icon">1</span>
              <span className="rotated-title">OVERVIEW</span>
              <Link
                to="home"
                className="link-item "
                smooth={false}
                duration={800}
                activeClass="active"
              >
                OVERVIEW
              </Link>
            </li>
            <li className="about">
              <span className="bg-icon">2</span>
              <span className="rotated-title">INVESTMENT</span>
              <Link
                to="about"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
              INVESTMENT
              </Link>
            </li>
            <li className="service">
              <span className="bg-icon">3</span>
              <span className="rotated-title">TERMS</span>
              <Link
                to="services"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
              TERMS
              </Link>
            </li>
            <li className="work">
              <span className="bg-icon">4</span>
              <span className="rotated-title">TECHNOLOGY</span>
              <Link
                to="portfolio"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
               TECHNOLOGY
              </Link>
            </li>
            <li className="contact2">
              <span className="bg-icon">5</span>
              <span className="rotated-title">INVEST TODAY</span>
              <Link
                to="contact"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                INVEST TODAY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
