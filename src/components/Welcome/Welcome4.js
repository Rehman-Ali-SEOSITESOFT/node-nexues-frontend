import React from "react";
import { Link } from "react-scroll";
import ReactPlayer from "react-player";
import Video from "../../videos/bigway.mp4";
function Welcome4() {
  return (
    <section>
      <div className="block color-scheme-white light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="section-sub-title">
                <article className="section-title-body">
                  <h1 className="head-title">
                    We care about our all <span>clients</span> and can make
                    their <span>life</span> more easier !
                  </h1>
                  <p className="head-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                  <Link
                    to="portfolio"
                    className="btn-default  btn-move"
                    smooth={false}
                    duration={800}
                  >
                    Portfolio
                  </Link>
                  &nbsp;
                  <Link
                    to="contact"
                    className="btn-default active btn-move t1"
                    smooth={false}
                    duration={800}
                  >
                    Contact
                  </Link>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="section-sub-title center video-home2">
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

export default Welcome4;
