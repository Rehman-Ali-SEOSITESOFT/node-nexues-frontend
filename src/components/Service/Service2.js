import React from "react";
const services = [
  {
    _id: "001",
    classIcon: "ion-ios-pie-outline",
    title: "ORGANIZATION",
    text: "Data is organized, making it accessible and manageable globally.",
  },
  {
    _id: "002",
    classIcon: "ion-ios-pie-outline",
    title: "QUANTUM RESISTANT",
    text: "cutting-edge security protocols withstand the threats posed by quantum computing, protecting your data.",
  },
  {
    _id: "003",
    classIcon: "ion-ios-pie-outline",
    title: "GLOBAL ACCESSIBILITY",
    text: "Coalitions operate in 16 regions and 251 nations and offer global reach, ensuring your data is accessible wherever you are.",
  },
  {
    _id: "004",
    classIcon: "ion-ios-pie-outline",
    title: "COST EFFECTIVE",
    text: "oalitions are accessible to businesses of all sizes, driving hosting services costs lower, saving 40 to 60% compared to traditional cloud services.",
  },
  {
    _id: "005",
    classIcon: "ion-ios-pie-outline",
    title: "COLLECTIVE INTELLIGENCE",
    text: "Coalitions empower friends, departments, companies, or governments to securely share with others to create a more powerful version of AI: Collective Intelligence",
  },
  {
    _id: "006",
    classIcon: "ion-ios-pie-outline",
    title: "Powerful & Flexible",
    text: "NNN harnesses cutting-edge technology to offer secure, scalable solutions that adapt to the future of finance and digital innovation.",
  },
];
function Service2() {
  return (
    <>
      <section id="services" className="single-bg">
        <div className="section-block-title">
          <div className="bg-dark"></div>
          <div className="container">
            <div className="section-sub-title center">
              <article className="section-title-body white">
                <h1 className="head-title">
                DECENTRALIZED <span>YET</span> ORGANIZED
                </h1>
              </article>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {services.map((service) => (
                <div className="col-xxl-4 col-md-6" key={service._id}>
                  <div className="block-feature-icon left">
                    <div className="icon hi-icon-color hi-icon-effect">
                      <span className="hi-icon">
                        <i className={service.classIcon}></i>
                      </span>
                    </div>
                    <div className="block-title">
                      <h4>{service.title}</h4>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h50"></div>
        </div>
      </section>
    </>
  );
}

export default Service2;
