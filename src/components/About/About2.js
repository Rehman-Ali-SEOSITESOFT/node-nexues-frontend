import React from "react";
import { Link } from "react-scroll";
function About2() {
  return (
    <>
      <section id="about" className="single-bg ab2">
        <div className="section-block-title">
          <div className="bg-dark"></div>
          <div className="container">
            <div className="section-sub-title center">
              <article className="section-title-body white">
                <h1 className="head-title">
                Introducing <span>Coalitions</span> on Node Nexus Networks
                </h1>
              </article>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2 d-flex align-items-center">
                <div className="widget-block relative">
                  <div className="h100 d-none d-lg-block"></div>
                  <h4 className="widget-title">THE ROLE OF COALITIONS IN FAULT TOLERANCE FOR HUMANITY</h4>
                  <p>
                  Coalitions in the NNN Decentralized Cloud are like safety nets for our digital oil: Data in the digital world. They ensure that we safeguard when and how we share our data with others so they can refine it into powerful information under our terms. While other private coalitions might have their AI views, everything your coalitions keep working smoothly and securely. Even if you create a joint coalition with someone else, you can always rely on the technology that powers your own Coalition to help you, no matter what happens, keeping all our digital lives safe and uninterrupted. However, the benefit to the world is that when your Authentic Intelligence is shared in shared coalitions, we create a Collective Intelligence where no bias resides.
                  </p>
                  <div className="block-feature d-lg-none d-xl-block">
                    <i className="ion-calendar"></i>
                    <a href="/">YOUR COALITION ON NNN</a>
                    <p>
                    Leveraging Vogon technology, your coalitions are built on a foundation of quantum-resistant security protocols and decentralized consensus mechanisms. This ensures that data within coalitions is secure from today's cyber threats and prepares for future challenges in the quantum computing era.
                    </p>
                  </div>
                  <div className="block-feature d-lg-none d-xxl-block">
                    <i className="ion-image"></i>
                    <a href="/">COALITIONS & DATA SHARING</a>
                    <p>
                    Coalitions provide enhanced data security through advanced encryption and decentralized storage; data within coalitions is virtually impervious to unauthorized access and cyber-attacks. You choose when and how to scale dynamically, accommodating your growing data needs and ensuring that the unlikely failure of one server does not affect the overall network, guaranteeing your uninterrupted service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 d-flex align-items-end">
                {/* <div className="relative  d-flex">
                  <div className="card-block  lax lax_preset_fadeIn:50:150  lax_preset_slideY:4500:700">
                    <div className="card-info">
                      <h2>100%</h2>
                      <h4>Owned by YOU for YOU and shared with Humanity.</h4>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/preview/about3.png"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="block color-scheme-1">
          <div className="container">
            <div className="welcome-article-block">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="welcome-article dark y-50">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/your_data.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>Your Data, Your Rules:</h4>
                      <p>
                      With a decentralized cloud coalition, your data is no longer held by big corporations but is securely stored across a network of individual operators, ensuring you have ultimate control over your information. It's like having your digital fortress.
                      </p>
                      <Link
                        to="contact"
                        className="btn-default white btn-move"
                        smooth={false}
                        duration={800}
                      >
                        JOIN TODAY
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="welcome-article dark">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/resilient_internet.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>More Resilient Internet:</h4>
                      <p>
                      Quantum-resistant security protocols and decentralized consensus mechanisms ensures data within coalitions is secure and prepared for the future quantum computing era.
                      </p>
                      <Link
                        to="contact"
                        className="btn-default white btn-move t1"
                        smooth={false}
                        duration={800}
                      >
                        JOIN TODAY
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="welcome-article dark y-50">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/money_tree.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>ENHANCED DATA SECURITY:</h4>
                      <p>
                      Coalitions the loud to dynamically scale, accommodating the growing data needs of businesses worldwide and ensuring that the failure of one node does not affect the overall network, guaranteeing uninterrupted service and data growth is profitable.
                      </p>

                      <Link
                        to="contact"
                        className="btn-default white btn-move t2"
                        smooth={false}
                        duration={800}
                      >
                       JOIN TODAY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h50 d-none d-lg-block"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About2;
