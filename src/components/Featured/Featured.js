import React from "react";

function Featured() {
  return (
    <>
      <div className="color-scheme-1 block">
        <div className="container">
          <div className="section-sub-title center">
            <article className="section-title-body white">
              <h1 className="head-title">
                WHY A DECENTRALIZED INFRASTRUCTURE TECHNOLOGY?
              </h1>
              <p className="head-text txt-c">
                Node Nexus Network's decentralized cloud is a revolutionary
                blend of the latest digital technology and the solid reliability
                of gold and silver, making it a secure and efficient global
                platform. This network spans 16 regions worldwide, ensuring fast
                and adaptable services for all kinds of businesses. With Node
                Nexus, you're investing in a future where cutting-edge digital
                innovation meets the trusted value of precious metals, creating
                a stable and exciting opportunity for everyone.
              </p>
            </article>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 order-md-0 order-lg-1">
              <div className="moon-block">
                <span className="moon"></span>
                <img
                  alt=""
                  className="img-fluid"
                  src="img/preview/feature.png"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 order-md-1 order-lg-0">
              <div className="feature">
                <article className="widget-block right">
                  <h4 className="widget-title title-l" >GLOBAL TECHNOLOGY</h4>
                  <p>
                    NNN's Cloud spans 16 global regions, offering unparalleled
                    speed, reliability, accessibility, and secure.
                  </p>
                </article>
                <article className="widget-block right">
                  <h4 className="widget-title title-l">ADVANCED INTEGRATION</h4>
                  <p>
                    NNN Cloud provides cutting-edge efficiency and fault
                    tolerance, making it a leader in innovative cloud
                    technology.{" "}
                  </p>
                </article>
              </div>
            </div>
            <div className="col-lg-3  col-md-6  order-md-2  order-lg-3">
              <div className="feature">
                <article className="widget-block">
                  <h4 className="widget-title title-l">TECH-METAL BONDS</h4>
                  <p>
                    We combine digital innovation with the security of precious
                    metals like gold and silver for a stable and trustworthy
                    future.
                  </p>
                </article>

                <article className="widget-block ">
                  <h4 className="widget-title title-l">SECURITY & INNOVATION</h4>
                  <p>
                    We dramatically enhance data security and AI efficiency,
                    making it an ideal choice for businesses and homes.{" "}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
