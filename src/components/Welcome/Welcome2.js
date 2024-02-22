import React from "react";
import ReactPlayer from "react-player";
import Video from "../../videos/bigway.mp4";

function Welcome2() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <div className="section-sub-title center">
                <article className="section-title-body white">
                  <h1 className="head-title">
                    <span>NNN:</span> At the heart of this revolution are
                    Coalitions, a <span>unique</span> feature of the NNN{" "}
                    <span>Decentralized Cloud</span> that promises unparalleled
                    security, efficiency, and <span>global accessibility.</span>
                  </h1>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="section-sub-title">
                <article className="section-title-body white">
                  <p className="head-text pt-home2">
                    Coalitions are specialized groups within the NNN
                    Decentralized Cloud, powered by Vogon's Distributed Quantum
                    Ledger Database (DQLDB). They represent a collaborative
                    framework where data is organized, secured, and made
                    accessible across the global decentralized cloud network.
                    This innovative approach ensures that no single entity
                    controls or monopolizes the information, fostering a more
                    democratic and secure digital ecosystem.
                  </p>
                  <p className="head-text">
                    When an individual, organization, company, or government
                    uploads their data onto the NNN Cloud, it resides in their
                    first coalition. This is the birthplace of "Authentic
                    Intelligence," a form of AI that Deep Thought can use to
                    create conversations internally, reflecting the unique data
                    and insights of the initial uploaded data. When it is shared
                    using strict mechanisms to ensure data governance, lineage,
                    protection, and pedigree, it creates "Collective
                    Intelligence."
                  </p>
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

export default Welcome2;
