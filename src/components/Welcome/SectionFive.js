import React from "react";
import ReactPlayer from "react-player";
function SectionFive() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <div className="section-sub-title ">
                <article className="section-title-body white">
                  <h1 className="head-title">
                  <strong>Introducing</strong>  <span>Node Nexus Network</span>
                    <br />
                   A visual summary
                  </h1>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-12">
              <div className="section-sub-title center">
                <div className="player-wrapper-home">
                  <ReactPlayer
                    className="react-player2"
                    width="500"
                    height="500"
                    url={"https://player.vimeo.com/video/921047740?h=fb421a7a6c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
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

export default SectionFive;
