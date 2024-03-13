import React from "react";
import Video from "../../videos/bigway.mp4";
import ReactPlayer from "react-player";
function SectionTwo() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-3">
              <div className="section-sub-title center">
                <div className="player-wrapper-home">
                  <img
                    alt=""
                    className="img-fluid"
                    src="img/logo-big.png"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-9 text-sec-n">
              <div className="section-sub-title ">
                <article className="section-title-body white">
                  <h1 className="head-title">
                    <strong className="font-strong">Introducing</strong> <span>NNN</span><br />
                    <span>FAULT TOLERANCE FOR HUMANITY</span>
                  </h1>
                  <p className="head-text">
                    NNN is a Decentralized Infrastructure Provider purpose-built to support edge and hybrid computingnecessary for AI.It is comprised of regional co-location facilities that provide managed services and faulttolerance for humanity.
                  </p>
                  <p className="head-text">
                    Fault tolerance for humanity describes how NNN will secure your data and empower your information. Itembodies how our technology will digitally transform your authenticity while securitizing the underlyingresource value units through precious metals.
                  </p>
                  <p className="head-text">
                    On the NNN decentralized cloud, your data and insights power a smarter AI to create collective intelligence.
                  </p>
                  <p className="head-text">
                    <span> People-Powered Internet </span> is the foundation for a more reliable and safer online experience: Web 5.0. Joinus today to contribute to a smarter and safer world.
                  </p>
                </article>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
