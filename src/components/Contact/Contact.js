import React from "react";
import ContactForm from "./../Contact/ContactForm";

function Contact() {
  return (
    <>
      <section id="contact" className="bg-non-fixed">
        <div className="bg-inner-dark2"></div>
        <div className="bg-50-l"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12  order-md-1 justify-content-center d-flex align-items-center">
              <div className="pad-l-45 pad-r-45">
                <div className="section-block-title">
                  <div className="section-title">
                    <article className="section-title-body mobile-mb-0">
                      <h1
                        className="head-title wow fadeInDown animated"
                        data-wow-duration="1.5s"
                      >
                        Contact
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        Contact us today to evolve from a Node to an Asset
                        Backed Infrastructure.
                      </p>
                      <div className="h25"></div>
                      <div
                        className="contact-icon wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        <ul className="list-unstyled">
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/img/preview/social-icons/nnn_facebook.png"
                                className="contact-logo-m"
                                alt="facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.pinterest.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/img/preview/social-icons/nnn_pinterest.png"
                                className="contact-logo-m"
                                alt="pinterest"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://pk.linkedin.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/img/preview/social-icons/nnn_linkedin.png"
                                className="contact-logo-m"
                                alt="linkedin"
                              />
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/img/preview/social-icons/nnn_x.png"
                                className="contact-logo-m"
                                alt="x"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://telegram.org/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/img/preview/social-icons/nnn_telegram.png"
                                className="contact-logo-m"
                                alt="telegram"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="pad-l-45 pad-r-45 block">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="widget-block mobile-center">
                      <h4 className="widget-title">
                        <i className="ion-android-pin"></i>Address:
                      </h4>
                      <p>
                        99 Queens Road Central Hong Kong 888777
                        <br /> email: nnnhko@nnn.cloud
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="widget-block mobile-center">
                      <h4 className="widget-title">
                        <i className="ion-android-chat"></i>Chat with Team:
                      </h4>
                      <p>
                        <a
                        className="link-chat"
                          href="https://nnn.cloud/chat"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Click here&nbsp;
                        </a>
                        to Chat with our Team
                      </p>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
