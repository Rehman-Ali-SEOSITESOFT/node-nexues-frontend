import React from "react";
const services = [
  {
    _id: "001",
    classIcon: "ion-ios-pie-outline",
    title: "NODE OWNER",
    text: "Own the infrastructure that will power Web 5.0",
  },
  {
    _id: "002",
    classIcon: "ion-ios-pie-outline",

    title: "COALITION",
    text: "Global, Regional, local, business and personal coalitions.",
  },
  {
    _id: "003",
    classIcon: "ion-ios-pie-outline",

    title: "DEVELOPERS",
    text: " Build what you want and when you want decentralized",
  },
  {
    _id: "004",
    classIcon: "ion-ios-pie-outline",

    title: "USERS",
    text: " Get paid for being you.",
  },
  {
    _id: "005",
    classIcon: "ion-ios-pie-outline",

    title: "ASSET BACKED",
    text: "Dual Bond backing of our Infrastructure",
  },
  {
    _id: "006",
    classIcon: "ion-ios-pie-outline",

    title: "AUTHENTIC INTELLIGENCE",
    text: "Own the infrastructure that will power Web 5.0",
  },
];
function Service() {
  return (
    <>
      <section id="services">
        <div className="bg-dark"></div>
        <div className="section-block-title">
          <div className="section-title">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-sm-10">
                  <article className="section-title-body">
                    <h1
                      className="head-title wow fadeInDown animated"
                      data-wow-duration="1.5s"
                    >
                      SIX FEATURES
                    </h1>
                    <div
                      className="section-col wow fadeInUp animated"
                      data-wow-duration="1.5s"
                    ></div>
                    <p
                      className="head-text wow fadeInUp animated"
                      data-wow-duration="1.5s"
                    >
                      PROVIDING FAULT TOLERANCE FOR HUMANITY
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block color-scheme-blur">
          <div className="container">
            <div className="row">
              {services.map((service) => (
                <div className="col-lg-4 col-md-6" key={service._id}>
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
      </section>
    </>
  );
}

export default Service;
