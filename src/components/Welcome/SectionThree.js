import React from "react";
import Video from "../../videos/bigway.mp4";
import ReactPlayer from "react-player";
function SectionThree() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <div className="section-sub-title">
                <article className="section-title-body white">
                  <h1 className="head-title">
                    <span>Our Why</span>
                    <br />
                    Empowering the Human Identity in the Digital age beyond Web 3.0 into the future
                  </h1>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 text-sec-n">
              <div className="section-sub-title ">
                <img
                  alt=""
                  className="img-fluid sec-img-3-1"
                  src="img/img2.png"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="section-sub-title">
                <img
                
                  alt=""
                  className="img-fluid img2-home"
                  src="img/img1.png"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-12">
            <p className="head-text3 wow fadeInDown animated"
                      data-wow-duration="1.5s">
                    THE HUMAN IDENTITY POWERS THE GLOBAL ECONOMY – IT’S TIME FOR A CLOUD SOLUTION THAT SUPPORTS IT 
                    </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
