import React, { useState } from "react";
import Navbar2 from "../Navbar/Navbar2";
import { Link } from "react-scroll";
function Header2() {
  const [fixHeader, setFixed] = useState(false);
  //let winHeight = window.innerHeight;
  const fixedHeader = () => {
   
      if (window.scrollY >= window.innerHeight - 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
   
  };

  window.addEventListener("scroll", fixedHeader);

  return (
    <>
      <Link
        to="home"
        id="totop"
        className={fixHeader ? "d-block" : "d-none"}
        smooth={false}
        duration={800}
      >
           <div className='back-to-top-home'>
           <i className="ion-ios-arrow-thin-up"></i>
           </div>
      </Link>
      <header id="header" className={fixHeader ? "header-top-fixed" : ""}>
        <div className="full-screen-block">
          <div
            className={
              fixHeader ? "header-body header-body-fixed" : "header-body"
            }
            id="header-body-fixed"
          >
            <div id="container-fixed">
              <Navbar2 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header2;
