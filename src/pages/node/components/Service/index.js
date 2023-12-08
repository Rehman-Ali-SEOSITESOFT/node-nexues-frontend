import React from "react";

const services = [
  {
    _id: "001",
    classIcon: "ion-ios-pie-outline",
    title: "Accessibility and Inclusivity",
    text: "The Sprite tier offers an accessible entry point for SMBs, allowing them to leverage the benefits of decentralized technology without a hefty investment. This inclusivity is vital for fostering a diverse and robust network.",
  },
  {
    _id: "002",
    classIcon: "ion-ios-pie-outline",
    title: "Scalability and Flexibility",
    text: "As businesses grow or their needs evolve, they can move up the tiers, from Centro to Tian, and eventually to Nations. Each tier offers increased capabilities and resources, aligning with the scaling needs of mid-market and enterprise-level participants. This flexibility ensures that the NNN can accommodate businesses at different stages of their growth.",
  },
  {
    _id: "003",
    classIcon: "ion-ios-pie-outline",
    title: "Customization and Specialization",
    text: "Different tiers cater to varying requirements of data handling, processing power, and network participation. For instance, the Tian and Nations tiers are equipped to handle the extensive demands of large enterprises and national entities, offering more advanced features and greater control.",
  },
  {
    _id: "004",
    classIcon: "ion-ios-pie-outline",
    title: "Diverse Contribution and Synergy",
    text: "The tiered system encourages a wide range of participants to contribute to the NNN ecosystem. This diversity leads to a rich blend of perspectives and capabilities, enhancing the network's innovation and resilience.",
  },
  {
    _id: "005",
    classIcon: "ion-ios-pie-outline",
    title: "Strategic Investment Opportunities",
    text: "Each tier represents a different level of investment and potential return, appealing to a variety of investors. SMBs can benefit from the cost-effective Sprite tier, while large enterprises and national entities might find strategic value in the higher tiers.",
  },
  {
    _id: "006",
    classIcon: "ion-ios-pie-outline",
    title: "Wider Economic Impact",
    text: "By enabling participation at all levels, from SMBs to national entities, the NNN drives economic growth across the spectrum. It creates opportunities for businesses of all sizes to be part of the digital future, thus having a broader impact on the global economy.",
  },
];

function Service1() {
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
                        Node Server Categories
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated txt padding-txt"
                        data-wow-duration="1.5s"
                      >
                        In summary, the four tiers of Node Servers on NNN –
                        Sprite, Centro, Tian, and Nations – are crucial in
                        democratizing access to decentralized technology,
                        ensuring scalability, and fostering a diverse,
                        collaborative, and economically impactful network that
                        aligns with the varied needs and capabilities of SMBs,
                        mid-market players, large enterprises, and national
                        entities.
                      </p>
                      <div className="h25"></div>
                      <div
                        className="fucts-block my-block wow fadeInUp animated pad-l"
                        data-wow-duration="1.5s"
                      >
                        <div className="fuct my-block-inner">
                          <div className="icon-d">
                            <span className="icon-d-inner">
                              <img
                                src="/img/preview/sprite_icon.png"
                                className="service-logo-m"
                                alt="sprite-icon"
                              />
                            </span>
                          </div>

                          <h2 className="h2-f">Sprite</h2>
                          <h4 className="h4-f">Personal & SMB</h4>
                        </div>
                        <div className="fuct my-block-inner">
                          <div className="icon-d">
                            <span className="icon-d-inner">
                              <img
                                src="/img/preview/centro_icon.png"
                                className="service-logo-m"
                                alt="centro-icon"
                              />
                            </span>
                          </div>
                          <h2 className="h2-f">Centro</h2>
                          <h4 className="h4-f">Mid Market</h4>
                        </div>
                        
                      </div>
                      <div
                        className="fucts-block my-block wow fadeInUp animated pad-r"
                        data-wow-duration="1.5s"
                      >
                      
                        <div className="fuct my-block-inner">
                          <div className="icon-d">
                            <span className="icon-d-inner">
                              <img
                                src="/img/preview/titan_icon.png"
                                className="service-logo-m"
                                alt="titan-icon"
                              />
                            </span>
                          </div>
                          <h2 className="h2-f">Titan</h2>
                          <h4 className="h4-f">Enterprise</h4>
                        </div>
                        <div className="fuct my-block-inner">
                          <div className="icon-d">
                            <span className="icon-d-inner">
                              <img
                                src="/img/preview/nations_icon.png"
                                className="service-logo-m"
                                alt="nations-icon"
                              />
                            </span>
                          </div>
                          <h2 className="h2-f">Nations</h2>
                          <h4 className="h4-f">MSPs</h4>
                        </div>
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
      </section>
    </>
  );
}

export default Service1;
