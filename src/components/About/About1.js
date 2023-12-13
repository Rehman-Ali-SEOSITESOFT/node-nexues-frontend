import React, { useEffect, useState } from "react";
import bg_vide from "../../videos/bigway.mp4";
function About1() {
  const [security, setSecurity] = useState(0);
  const [fair, setFair] = useState(0);
  const [auth, setAuth] = useState(0);
  const [intel, setIntel] = useState(0);

  const startTimer = (interval, setValue, limit) => {
    let counter = 0;
    const timerInterval = setInterval(() => {
      counter = counter + 1;
      setValue(counter);
      if (counter === limit) {
        clearInterval(timerInterval);
      }
    }, interval);
  };

  useEffect(() => {
    const securityInterval = startTimer(20, setSecurity, 100); // Security timer
    const fairInterval = startTimer(30, setFair, 100); // Fair timer
    const authInterval = startTimer(40, setAuth, 100); // Auth timer
    const intelInterval = startTimer(50, setIntel, 100); // Intel timer

    // Cleanup intervals
    return () => {
      clearInterval(securityInterval);
      clearInterval(fairInterval);
      clearInterval(authInterval);
      clearInterval(intelInterval);
    };
  }, []);

  return (
    <>
      <section id="about" className="bg-non-fixed">
        <video autoPlay loop muted className="bg_video">
          <source src={bg_vide} type="video/mp4"></source>
        </video>
        <div className="bg-inner-dark"></div>
        <div className="bg-50-r"></div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12  align-items-center">
              <div className="pad-l-45 pad-r-45">
                <div className="section-block-title">
                  <div className="section-title">
                    <article className="section-title-body mobile-mb-0">
                      <h1
                        className="head-title wow fadeInDown animated"
                        data-wow-duration="1.5s"
                      >
                        ABOUT
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <div className="container about-con">
                        <img
                          src="img/preview/node_logo.png"
                          alt="Node Logo"
                          className="node-logo"
                          width="250"
                          height="250"
                        />
                        <div className="text-container">
                          <p
                            className="head-text txt wow  fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            Calling this a Node Sale is like saying a power
                            plant is just a battery.
                          </p>
                          <p
                            className="head-text txt  wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            When you buy a server on the NNN cloud, you’re not
                            just getting a slice of tech real estate; you’re
                            plugging into the heart of the digital future.
                          </p>
                          <p
                            className="head-text txt wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            This is about owning a piece of the infrastructure
                            that will power Web 5.0, the next revolution of the
                            internet.
                          </p>
                          <p
                            className="head-text txt wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            You’re not just buying a server; you’re investing in
                            a piece of the puzzle that will connect and empower
                            billions, in a network backed by the bedrock of gold
                            and silver.
                          </p>
                          <p
                            className="head-text txt wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            It’s a stake in a new digital economy, with the
                            potential for returns as expansive as the cloud
                            itself.
                          </p>
                          <p
                            className="head-text txt wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            This isn’t just a Node Sale; it’s a passport to the
                            future of the internet.
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="pad-l-45 pad-r-45 block">
                <div
                  className="widget-block wow fadeInDown animated"
                  data-wow-duration="1.5s"
                >
                  <div className="container">
                    <h4 className="widget-title">
                      FAULT TOLERANCE FOR HUMANITY
                    </h4>
                    <p className="p-m ">
                      Imagine an online world where authenticity and safety
                      reign supreme, a digital haven safeguarding your data from
                      the darker corners of the web.
                    </p>
                    <p className="p-m ">
                      This is the essence of fault tolerance for humanity.
                    </p>
                    <p className="">
                      Journey back to a protected online environment where your
                      data finds sanctuary and the world is backed by precious
                      matels.
                    </p>
                    <p className="">
                      Here's why you should join our Dual Infrastructure Bond:
                    </p>

                    <ul className="ul-n opensans">
                      <li>
                        <span className="fb-bold">Data Sanctuary:</span> We're
                        building a refuge for your data, shielding it from the
                        risks of the web's darker side. Your information is safe
                        and secure here.
                      </li>
                      <li>
                        <strong className="fb-bold">Backup Plans:</strong> We're
                        not relying on a single point of failure. By
                        decentralization, we ensure that your data remains
                        intact even when unexpected issues arise.
                      </li>
                      <li>
                        <strong className="fb-bold">Adaptability:</strong> We're
                        always ready to evolve and adapt to new challenges to
                        keep your data secure in an ever-changing digital
                        landscape.
                      </li>
                      <li>
                        <strong className="fb-bold">Being Prepared:</strong>{" "}
                        We've got plans in place. Our emergency response
                        strategies, resource reserves, and effective leadership
                        ensure your data's protection no matter the
                        circumstances.
                      </li>
                      <li>
                        <strong className="fb-bold">
                          Global Collaboration:
                        </strong>{" "}
                        Some online risks are global in scope, demanding
                        cooperation. We're uniting as a global force on the
                        Vogon Cloud to combat issues that threaten online
                        safety.
                      </li>
                      <li>
                        <strong className="fb-bold">Thinking Long-Term:</strong>{" "}
                        Our focus isn't just on the present; it's on securing a
                        safer digital future. We're making choices that protect
                        your data for generations to come.
                      </li>
                      <li>
                        <strong className="fb-bold">Team of Experts:</strong>{" "}
                        We're not facing this challenge alone. A team of diverse
                        experts - from cloud, AI, cybersecurity to ethics - is
                        working together to keep your online world secure.
                      </li>
                    </ul>
                  </div>

                  <div
                    className="widget-block wow fadeInDown animated"
                    data-wow-duration="1.5s"
                  >
                    <div className="clearfix"></div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${security}%` }}
                      ></div>
                      <span className="skill-value">
                        Enhanced Security<span> {security}%</span>
                      </span>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${fair}%` }}
                      ></div>
                      <span className="skill-value">
                        Fair Compensation<span> {fair}%</span>
                      </span>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${auth}%` }}
                      ></div>
                      <span className="skill-value">
                        Authentic Intelligence<span> {auth}%</span>
                      </span>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${intel}%` }}
                      ></div>
                      <span className="skill-value">
                        Collective Intelligence<span> ${intel}%</span>
                      </span>
                    </div>
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

export default About1;
