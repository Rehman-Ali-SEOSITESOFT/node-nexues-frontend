import React from "react";
import Video from "../../videos/bigway.mp4";
import ReactPlayer from "react-player";
function Welcome() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <div className="section-sub-title center">
                <article className="section-title-body white">
                  <h1 className="head-title">
                    <span>Node Nexus Network</span>
                    <br />
                    Fault Tolerance for Humanity
                  </h1>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 text-sec-n">
              <div className="section-sub-title ">
                <article className="section-title-body white">
                  <p className="head-text">
                    "Fault Tolerance for Humanity" embodies Node Nexus Network's
                    (NNN) dedication to delivering decentralized cloud
                    infrastructure technology that is resilient to protect your
                    digital assets.
                  </p>
                  <p className="head-text">
                    It emphasizes creating robust cloud computing and AI systems
                    capable of handling disruptions seamlessly and enhancing
                    collective intelligence through cost-efficient cloud
                    hosting.
                  </p>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="section-sub-title center">
                <div className="player-wrapper-home">
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    url={Video}
                    playing
                    controls={true}
                    muted
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
