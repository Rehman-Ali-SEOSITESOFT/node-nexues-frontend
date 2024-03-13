import React from "react";
import Video from "../../videos/bigway.mp4";
import ReactPlayer from "react-player";
function SectionOne() {
  return (
    <section>
      <div className="">
        <div className="section-one-background">
          <div className="container section-one">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <div className="section-sub-title center ">
                  <article className="section-title-body white">
                    <h1
                      className="head-title2 wow fadeInDown animated"
                      data-wow-duration="1.5s"
                    >
                      FAULT TOLERANCE FOR HUMANITY
                    </h1>
                    <p className="head-text2 wow fadeInDown animated"
                      data-wow-duration="1.5s">
                      Discover how the groundbreaking fusion of AI and Distributed Quantum Ledger Databases is revolutionizing data and AItechnology, promising unprecedented security, scalability, andtransparency for future innovations.
                    </p>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
