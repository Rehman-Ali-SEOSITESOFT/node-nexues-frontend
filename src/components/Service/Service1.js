import React, { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
Modal.setAppElement("#root");
const services = [
  {
    _id: "001",
    classIcon: "ion-ios-pie-outline",
    title: "Create a video placeholder popup:",
    text: "The Sprite tier offers an accessible entry point for SMBs, allowing them to leverage the benefits of decentralized technology without a hefty investment. This inclusivity is vital for fostering a diverse and robust network.",
  },
  {
    _id: "002",
    classIcon: "ion-ios-pie-outline",
    title: "Create a video placeholder popup:",
    text: "As businesses grow or their needs evolve, they can move up the tiers, from Centro to Tian, and eventually to Nations. Each tier offers increased capabilities and resources, aligning with the scaling needs of mid-market and enterprise-level participants. This flexibility ensures that the NNN can accommodate businesses at different stages of their growth.",
  },
  {
    _id: "003",
    classIcon: "ion-ios-pie-outline",
    title: "Create a video placeholder popup:",
    text: "Different tiers cater to varying requirements of data handling, processing power, and network participation. For instance, the Tian and Nations tiers are equipped to handle the extensive demands of large enterprises and national entities, offering more advanced features and greater control.",
  },
  {
    _id: "004",
    classIcon: "ion-ios-pie-outline",
    title: "Create a video placeholder popup:",
    text: "The tiered system encourages a wide range of participants to contribute to the NNN ecosystem. This diversity leads to a rich blend of perspectives and capabilities, enhancing the network's innovation and resilience.",
  },
  {
    _id: "005",
    classIcon: "ion-ios-pie-outline",
    title: "Create a video placeholder popup:",
    text: "Each tier represents a different level of investment and potential return, appealing to a variety of investors. SMBs can benefit from the cost-effective Sprite tier, while large enterprises and national entities might find strategic value in the higher tiers.",
  },
  {
    _id: "006",
    classIcon: "ion-ios-pie-outline",
    title: "Create a video placeholder popup:",
    text: "By enabling participation at all levels, from SMBs to national entities, the NNN drives economic growth across the spectrum. It creates opportunities for businesses of all sizes to be part of the digital future, thus having a broader impact on the global economy.",
  },
];

function Service1() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <>
      <section id="services" className="bg-non-fixed">
        <div className="bg-inner-dark2"></div>
        <div className="bg-50-l"></div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 order-md-1 justify-content-center d-flex align-items-center">
              <div className="pad-l-45 pad-r-45">
                <div className="section-block-title">
                  <div className="section-title">
                    <article className="section-title-body mobile-mb-0">
                      <h1
                        className="head-title wow fadeInDown animated"
                        data-wow-duration="1.5s"
                      >
                        WHAT IS THE TECHNOLOGY
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated txt padding-txt"
                        data-wow-duration="1.5s"
                      >
                        Its proprietary technology is at the forefront of the
                        Node Nexus Network's success - a testament to its
                        innovative spirit and commitment to redefining the tech
                        landscape. From the groundbreaking decentralized global
                        infrastructure and hosting facilities in 16 regions
                        worldwide to its quantum ledger database and DeepThought
                        technology, creating an AI-agnostic Decentralized
                        Collective Intelligence. NNN's technological arsenal is
                        diverse and powerful, ensuring unparalleled data
                        custodianship and accessibility.
                      </p>

                      <div className="h25"></div>
                      <div className="block-feature block-feature2">
                        <i
                          className="ion-ios-pie-outline mypie"
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891926238?h=9b2bb161a9&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                        ></i>
                        <p className="head-text wow fadeInUp animated txt  txt-padding">
                          Sustainable Infrastructure
                        </p>
                      </div>
                      <div className="block-feature block-feature2">
                        <i
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891926238?h=9b2bb161a9&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                          className="ion-ios-pie-outline mypie"
                        ></i>
                        <p className="head-text wow fadeInUp animated txt  txt-padding">
                          DeepThought Technology: AI Agnostic
                        </p>
                      </div>
                      <div className="block-feature block-feature2">
                        <i
                          onClick={() => {
                            setModalIsOpen(true);
                            setUrl(
                              "https://player.vimeo.com/video/891926238?h=9b2bb161a9&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            );
                          }}
                          className="ion-ios-pie-outline mypie"
                        ></i>
                        <p className="head-text wow fadeInUp animated txt  txt-padding">
                          The Vogon Decentralized Cloud: A Paradigm Shift
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="pad-l-45 pad-r-45 block">
                <div className="row">
                  {services.map((service) => (
                    <div className="col-lg-12 col-xxl-6" key={service._id}>
                      <div className="block-feature">
                        <i className={service.classIcon}></i>
                        <a href="/">{service.title}</a>
                        <p>{service.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}

export default Service1;
