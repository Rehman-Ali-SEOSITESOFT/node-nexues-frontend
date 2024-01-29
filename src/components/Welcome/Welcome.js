import React from "react";
import Video from "../../videos/bigway.mp4";
import ReactPlayer from "react-player";
function Welcome() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="section-sub-title">
                <article className="section-title-body white">
                  <h1 className="head-title">
                    <span>Node Nexus Network</span>
                    <br />
                    Fault Tolerance for Humanity
                  </h1>

                  <p className="head-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
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
