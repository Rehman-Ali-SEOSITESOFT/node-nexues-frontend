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
                        Node Server Sizes
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        Our Node Servers come in Sprite, Centro, Titan and
                        Nations compute cabilities. Click on each one of the
                        icons to learn more.
                      </p>
                      <div>
                        <img
                          src="/img/preview/node-servers/sprite_embossed.png"
                          className="server-img"
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891925239?h=ad14e51cf4&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                        />
                        <img
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891925598?h=2273d703c4&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                          src="/img/preview/node-servers/centro_embossed.png"
                          className="server-img"
                        />
                        <img
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891925942?h=d90ba06bb3&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                          src="/img/preview/node-servers/titans_embossed.png"
                          className="server-img"
                        />
                        <img
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891926238?h=9b2bb161a9&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                          src="/img/preview/node-servers/nations_embossed.png"
                          className="server-img"
                        />
                      </div>
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
