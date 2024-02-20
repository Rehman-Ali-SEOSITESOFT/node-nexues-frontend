import React from "react";
const services = [
  {
    _id: "001",
    classIcon: "ion-ios-pie-outline",
    title: "HIGH ANNUAL YIELD",
    text: "NNN offers an impressive 12.5% annual yield, making it an attractive option for investors seeking lucrative returns",
  },
  {
    _id: "002",
    classIcon: "ion-ios-pie-outline",
    title: "FLEXIBLE PAYOUTS",
    text: "Investors can receive payouts in digital currency and convert yields into operational node servers, offering a unique way to participate in the digital revolution.",
  },
  {
    _id: "003",
    classIcon: "ion-ios-pie-outline",
    title: "GOLD BACKED",
    text: "Your investment is secured with $ 175 M in gold, providing security and stability that are rare in digital investments.",
  },
  {
    _id: "004",
    classIcon: "ion-ios-pie-outline",
    title: "GREEN MEETS AI",
    text: "NNN is at the forefront of integrating green technology and AI, aligning with global sustainability goals and technological advancements.",
  },
  {
    _id: "005",
    classIcon: "ion-ios-pie-outline",
    title: "DUAL PROGRESS",
    text: "Investing means earning financial returns that support improving the world through sustainable and innovative technology.",
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
                      Here are six reasons that make NNN an unparalleled investment opportunity for those looking to capitalize on the digital age while supporting sustainable and innovative practices.
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
