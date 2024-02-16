import React from "react";
import ReactPlayer from "react-player";
import Video from "../../videos/bigway.mp4";

function Welcome1() {
  return (
    <section>
      <div className=" color-scheme-2 ">
        <div className="bg-50-l not-before"></div>
        <div className="bg_object1 lax lax_preset_fadeIn:50:100 lax_preset_spin:4000:270  lax_preset_slideY:2500:700"></div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="pad-l-45 pad-r-45">
                <div className="section-block-title">
                  <div className="section-title">
                    <article className="section-title-body">
                      <h1
                        className="head-title wow fadeInDown animated"
                        data-wow-duration="1.5s"
                      >
                        OVERVIEW OF NODE NEXUS
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text p-m wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        Dive into the heart of innovation with Node Nexus
                        Network (NNN), a trailblazer redefining the digital
                        landscape through pioneering advancements in cloud
                        computing and artificial intelligence.
                      </p>
                      <p
                        className="head-text wow p-m fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        As a central figure in the tech revolution, NNN is
                        committed to delivering sustainable, cutting-edge
                        solutions that promise to reshape how we interact with
                        digital infrastructure.
                      </p>
                      <p
                        className="head-text wow p-m fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        With a global footprint extending across 16 regions and
                        a mission to offer high-quality, cost-effective cloud
                        services, NNN is not just leading the charge; it's
                        setting new benchmarks for excellence and innovation in
                        the tech sector.
                      </p>
                      <p
                        className="head-text wow p-m fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        An "Infrastructure Bond" is a unique investment
                        opportunity where you can support and benefit from NNN's
                        growth. At the same time, a "Security Token Offering"
                        represents a digital share in the company, allowing you
                        to own a piece of the future of technology.
                      </p>
                      <p
                        className="head-text wow p-m fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        Unmute the video to learn more about: The Mission and
                        Vision of NNN Global Reach and Strategic Presence Our
                        Commitment to a Better Future
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="pad-l-45 pad-r-45 video-d">
                <div className="section-block-title ">
                  <div className="section-title">
                    <article className="section-title-body">
                      <div className="player-wrapper-home">
                        <ReactPlayer
                          className="react-player"
                          width="100%"
                          height="90%"
                          url={Video}
                          playing
                          controls={true}
                          muted
                          loop={true}
                        />
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome1;
