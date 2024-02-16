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
                        WHY SHOULD YOU INVEST
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        Investing in Node Nexus Network is more than a financial
                        decision; it's a step towards a safer, decentralized,
                        sustainable, and more secure innovative future. With a
                        solid foundation in green technology and AI and a
                        commitment to reshaping the digital infrastructure
                        landscape, NNN offers investors a unique blend of
                        security, potential high returns, and the opportunity to
                        contribute to a fairer, more efficient technological
                        future. Discover why NNN is not just an investment in
                        technology but an investment in a better tomorrow.
                      </p>
                      <p
                        className="head-text wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        The Financial Incentive: High Yield and Growth Potential
                        Fault Tolerance for Humanity Revolution Security and
                        Innovation: The NNN Advantage
                      </p>
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
