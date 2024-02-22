import React from "react";
import { Link } from "react-scroll";
import ReactPlayer from "react-player";
import Video from "../../videos/bigway.mp4";
function Welcome3() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12">
              <div className="section-sub-title center">
                <article className="section-title-body white">
                  <h1 className="head-title">
                  Unlock Next-Generation <span>Hosting</span>, <span>Efficiency</span> , <span>Security</span>, and Innovation for Your Applications with <span>Authentic Intelligence.</span> 
                  </h1>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="section-sub-title">
                <article className="section-title-body white">
                  <p className="head-text">
                  In an era where digital transformation is not just an option but a necessity, application developers stand at the forefront of pioneering a future cloud infrastructure that is secure, efficient, and sustainable. On NNN your participation will help us to emerge as a beacon of innovation, offering a unique blend of cost-effective hosting, advanced infrastructure and security measures, and cutting-edge technologies such as our Zaph Hyper VM and Marvin the AI Actuary. 
                  </p>
                  <p className="head-text">
                  By joining the NNN movement, developers gain ownership of their own Cloud Computing Company, a decentralized platform that enhances application performance through optimized processes and quantum-level security frameworks.  Help us champion helping those in under-promoted parts of the planet with AI-driven solutions on green technology campuses that create jobs. As developers rise to not only meet the current demands of the digital landscape but join us in leading the charge towards a more resilient, inclusive, authentic, and forward-thinking digital future.

                  </p>
                  {/* <Link
                    to="portfolio"
                    className="btn-default white btn-move"
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
                  </Link> */}
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

export default Welcome3;
