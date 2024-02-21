import React, { useState } from "react";
import Lightbox from "./Lightbox1";
import Modal from "react-modal";
import ReactPlayer from "react-player";
Modal.setAppElement("#root");
function Portfolio1() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="popup-video"
      >
        <div className="player-sec">
          <ReactPlayer url={url} playing={true} controls={true} />
        </div>
        <span
          onClick={() => setModalIsOpen(false)}
          className="close-btn"
        ></span>
      </Modal>
      <section id="portfolio" className="bg-non-fixed">
        <div className="bg-inner-dark2"></div>
        <div className="bg-50-r"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="pad-l-45 pad-r-45">
                <div className="section-block-title">
                  <div className="section-title">
                    <article className="section-title-body mobile-mb-0">
                      <h1
                        className="head-title wow fadeInDown animated"
                        data-wow-duration="1.5s"
                      >
                       WHY YOU SHOULD INVEST?
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        CONTRIBUTE TO A SAFER, DECENTRALIZED, SUSTAINABLE, AND MORE SECURE INNOVATIVE FUTURE. 
                      </p>
                      <p
                        className="head-text wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        RESHAPE THE DIGITAL INFRASTRUCTURE LANDSCAPE THAT BUILDS A BETTER AI WHILE SUPPORTING ECONOMIC DEVELOPMENT AND CLEAN TECHNOLOGY
                      </p>
                      <p
                        className="head-text wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                        CONTRIBUTE TO A FAIRER, MORE EFFICIENT TECHNOLOGICAL FUTURE THAT COMBINES SECURITY WITH POTENTIAL FOR HIGH RETURNS
                      </p>
                      <p
                        className="head-text wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                         MAKE AN INVESTMENT IN THE TECHNICAL BACKBONE FOR A BETTER TOMORROW
                      </p>
                      <p
                        className="head-text wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                         BEYOND THE FINANCIAL INCENTIVE, EMBRACE A TECH REVOLUTION PROVIDING HIGH GROWTH POTENTIAL DELIVERING FAULT TOLERANCE FOR HUMANITY
                       
                      </p>
                      <p
                        className="head-text wow fadeInUp animated txt"
                        data-wow-duration="1.5s"
                      >
                  
                        THE NNN ADVANTAGE IS SECURITY, INNOVATION AND CONSERVATION</p>
                  
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="pad-l-45 pad-r-45 block">
                <Lightbox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio1;
