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
                  About <span>Node</span> Nexus Network Coalition
                </h1>
              </article>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2 d-flex align-items-center">
                <div className="widget-block relative">
                  <div className="h100 d-none d-lg-block"></div>
                  <h4 className="widget-title">Fault Tolerance for Humanity</h4>
                  <p>
                    Learn about the robustness and resilience of our
                    decentralized cloud ecosystem, ensuring that it can
                    withstand and recover from any potential failures or
                    disruptions. It means that humanity can trust their data
                    will always be secure and accessible, even in the face of
                    unexpected challenges, contributing to the reliability of a
                    global collective intelligence. Joining this ecosystem and
                    its coaltions offers not only personal empowerment but also
                    a safeguard for the authentic progress of humanity in an
                    ever-connected world.
                  </p>
                  <div className="block-feature d-lg-none d-xl-block">
                    <i className="ion-calendar"></i>
                    <a href="/">Coaltions on a Decentralized Cloud</a>
                    <p>
                      A decentralized cloud is better because it offers enhanced
                      security, data ownership, and resilience while fostering
                      innovation and collaboration across a distributed network,
                      ensuring a more reliable and equitable digital future. In
                      the vibrant tapestry of NNN's decentralized cloud, a
                      coalition is not just a team; it's a groundbreaking
                      assembly of consensus groups working in harmony through a
                      deterministic concurrent process. This process is the
                      backbone of a decentralized data warehouse that's not
                      merely a storage unit but a fortress, safeguarded by the
                      cryptographic strength of BLS 12-381. Imagine an intricate
                      dance where every step, every move, is a piece of data
                      being woven into a resilient, transparent JSON tapestry,
                      ready to be unfurled across the digital expanse. This
                      isn't just compute stack appications with data storage;
                      it's a revolution in how information is held, protected,
                      and accessed. With the agility of a microservice, this
                      system seamlessly integrates into any software application
                      you choose, making your hosting on NNN not just secure but
                      effortlessly adaptable. It's not just a coalition; it's a
                      union of technology and trust, powering a future where
                      your digital presence is as customizable as it is secure.
                    </p>
                  </div>
                  <div className="block-feature d-lg-none d-xxl-block">
                    <i className="ion-image"></i>
                    <a href="/">Owned by You</a>
                    <p>
                      A decentralized cloud is better when its servers are owned
                      by decentralized owners. This ensures data sovereignty,
                      and reduces the risk of single points of failure. NNN
                      enhances security through distributed ownership, and
                      empowers individuals and businesses to have greater
                      control over their data and digital assets, fostering a
                      more resilient and equitable digital ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 d-flex align-items-end">
                <div className="relative  d-flex">
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
                </div>
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
                      src="img/preview/blog18.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>Your Data, Your Rules:</h4>
                      <p>
                        With decentralized cloud coalition, your data is no
                        longer held by big corporations but is securely stored
                        across a network of individual operators, ensuring that
                        you have ultimate control over your information. It's
                        like having your own digital fortress.
                      </p>
                      <Link
                        to="services"
                        className="btn-default white btn-move"
                        smooth={false}
                        duration={800}
                      >
                        Visit Services
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="welcome-article dark">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/blog19.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>More Resilient Internet:</h4>
                      <p>
                        Imagine the internet as a giant puzzle. Instead of one
                        piece holding everything together, it's now spread
                        across many pieces. This means if one piece fails, the
                        whole puzzle still works. It's like having a phone that
                        never drops calls.
                      </p>
                      <Link
                        to="portfolio"
                        className="btn-default white btn-move t1"
                        smooth={false}
                        duration={800}
                      >
                        Visit Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="welcome-article dark y-50">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/blog20.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>Smarter AI for Everyone:</h4>
                      <p>
                        This new technology called Authentic Intelligence makes
                        AI like Siri or Alexa way smarter. It learns from
                        everyone's experiences, so it can help you better. It's
                        like having a personal tutor that knows everything about
                        the world and your life, helping you make better
                        decisions.
                      </p>

                      <Link
                        to="blog"
                        className="btn-default white btn-move t2"
                        smooth={false}
                        duration={800}
                      >
                        Visit Blogs
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
