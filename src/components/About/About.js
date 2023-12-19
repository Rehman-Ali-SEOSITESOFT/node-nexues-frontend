import React from "react";
function About() {
  return (
    <>
      <section id="about" className="light">
        <div className="bg-light"></div>
        <div className="block">
          <div className="container">
            <div className="row align-items-center  gx-5">
              <div className="col-lg-6">
                <div className="section-sub-title">
                  <article className="section-title-body">
                    <h1 className="head-title">
                      The mission of<span> Node Nexus Network:</span>
                    </h1>
                    <p className="head-text">
                      To safeguard and empower humanity's digital existence
                      through resilient, secure, and equitable data management.
                      <br />
                      <br />
                      <span className="sub-text">Our Purpose:</span> We act as a digital sanctuary, offering
                      robust protection and intelligent for your Authentic
                      Intelligence
                      <br />
                      <br />
                      <span className="sub-text">How we do it: </span>
                      We leverage advanced decentralized
                      technologies and collaborative global expertise to deliver
                      fault tolerance for humanity.
                      <br />
                      <br />
                      We provide a stable, secure and intelligent digital
                      infrastructure purpose built for your Authentic Human
                      Experience.
                    </p>

                    <ul className="list-unstyled list-bold d-lg-none d-xl-block">
                      <li>
                        <i className="ion-checkmark"></i> Enhanced Security
                      </li>
                      <li>
                        <i className="ion-checkmark"></i> Fair Compensation
                      </li>
                      <li>
                        <i className="ion-checkmark"></i> Authentic Intelligence
                      </li>
                      <li>
                        <i className="ion-checkmark"></i> Collective
                        Intelligence
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img-block">
                  <img
                    alt=""
                    className="img-fluid"
                    src="img/preview/about1.jpg"
                  />
                  <div className="about-img lax   lax_preset_slideY:3500:-400">
                    <img
                      alt=""
                      className="img-fluid"
                      src="img/preview/about2.jpg"
                    />
                  </div>
                  <div className="about-img-info widget-block dark mb-0">
                    <h4 className="widget-title dark">OUR WHITE PAPER</h4>
                    <p>
                      Download our Company's Committment to the Net Citizen of
                      tomorrow, today.
                    </p>
                    <a
                      href="www.google.com"
                      className="btn-default btn-move active mb-0"
                    >
                      DOWNLOAD
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
