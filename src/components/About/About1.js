import React, { useEffect, useState } from "react";
import bg_vide from "../../videos/investment.mp4";
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
                        WHAT IS THE INVESTMENT
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
                            Embark on a unique investment journey with the Node
                            Nexus Network Infrastructure Bond, a golden
                            opportunity to secure a stake in the future of
                            technology. This investment isn't just about
                            yielding returns; it's about being part of a
                            revolutionary movement toward sustainable,
                            decentralized digital solutions. With attractive
                            terms and a robust growth trajectory, investing in
                            NNN offers a blend of security, innovation, and the
                            potential for significant financial rewards.
                          </p>
                          <p
                            className="head-text txt  wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            An "Infrastructure Bond" with Node Nexus Network is
                            your chance to invest in tomorrow's technology,
                            offering secure returns and supporting sustainable,
                            innovative digital solutions. At the same time, a
                            "Security Token Offering" allows you to opt into
                            this revolutionary tech movement digitally. This may
                            offer less security than a bond, but its higher risk
                            provides a much higher return because it combines
                            financial growth with cutting-edge development.
                          </p>
                          <p
                            className="head-text txt wow fadeInUp animated"
                            data-wow-duration="1.5s"
                          >
                            Understanding the Infrastructure Bond The Security
                            Token Offering:
                          </p>
                          <ul className="head-text wow p-m fadeInUp animated txt">
                        <li> A lucrative option Rewards and Token
                            Program</li>
                        
                      </ul>
                          {/* <p
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
                          </p> */}
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
                    <h4 className="widget-title">WHAT ARE THE TERMS</h4>
                    <p className="p-m ">
                      The Node Nexus Network Infrastructure Bond is designed
                      with the investor in mind, offering terms that balance
                      reward with security and options. Investors who choose our
                      bond can expect a high annual yield backed by the
                      stability of $ 175 Million in Gold and the innovation of
                      NNN's technological advancements.
                    </p>
                    <p className="p-m ">
                      Those who opt-in to transform their ownership directly
                      into the node server infrastructure start receiving
                      payments immediately in rewards and tokens for a higher
                      yield in a Token on the Ethereum Blockchain.
                    </p>
                    <p className="">
                      As a potential investor in Node Nexus Network, you can
                      expect to earn a significantly higher return on your
                      investment each year than standard savings or investment
                      options.
                    </p>

                    <ul className="ul-n opensans">
                      <li>
                        <span className="fb-bold">Duration and Yield:</span>  A
                        Comprehensive Overview The 2-Year Balloon Note Explained
                        Cash Yield vs. Node Server Conversion Options
                      </li>
                      {/* <li>
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
                      </li> */}
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
