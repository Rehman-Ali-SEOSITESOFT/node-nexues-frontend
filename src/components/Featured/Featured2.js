import React from "react";

function Featured() {
  return (
    <>
      <div className="color-scheme-1 block">
        <div className="container">
          <div className="section-sub-title center">
            <article className="section-title-body white">
              <h1 className="head-title">THE DATA SHARING PROBLEM: <span>SOLVED!</span></h1>
              <p className="head-text">
              You have heard that Data is the new Oil.  Like oil data needs to be refined by a process to transform it into information.  What is information for some, maybe just data to others.  Coalitions empower this transformation of helping us solve the data sharing problem through our Deep Thought Technology.
              </p>
            </article>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 order-md-0 order-lg-1">
              <div className="moon-block">
                <span className="moon"></span>
                <img
                  alt=""
                  className="img-fluid"
                  src="img/preview/deep_thought_42.png"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 order-md-1 order-lg-0">
              <div className="feature">
                <article className="widget-block right">
                  <h4 className="widget-title">SCALABLE PERFORMANCE</h4>
                  <p>
                  The AI-agnostic approach, combined with data compartmentalization into coalitions, ensures seamless integration of diverse AI models and scalable, optimized performance for each data type.
                  </p>
                </article>
                <article className="widget-block right">
                  <h4 className="widget-title">ENHANCED SECURITY</h4>
                  <p>
                  BLS 12-381, a sophisticated cryptographic signature scheme, ensures that every transaction across the network of Coalitions is secure and verifiable.

                  </p>
                </article>
                <article className="widget-block right d-lg-none d-xl-block">
                  <h4 className="widget-title">DECENTRALIZED GOVERNANCE</h4>
                  <p>
                  Coalitions operate under a decentralized governance model, ensuring no single entity has complete control over the system. 
                  </p>
                </article>
                <article className="widget-block right d-lg-none d-xxl-block">
                  <h4 className="widget-title">BETTER PROCESSING</h4>
                  <p>
                  Coalitions are designed to process and store data optimally for the queries and transactions they handle allowing Deep Thought to adapt to these optimizations.

                  </p>
                </article>
              </div>
            </div>
            <div className="col-lg-3  col-md-6  order-md-2  order-lg-3">
              <div className="feature">
                <article className="widget-block">
                  <h4 className="widget-title">COALITION COMMUNICATION</h4>
                  <p>
                  Inter-coalition communication between coalitions allows for broader tasks or queries spanning multiple promotes complex data analyses and transactions.
                  </p>
                </article>
                <article className="widget-block">
                  <h4 className="widget-title">CONSENSUS MECHANISM</h4>
                  <p>
                  Each coalition can use its consensus protocol based on the data it holds, ensuring orderly, predictable data transactions and mitigating potential data corruption.

                  </p>
                </article>
                <article className="widget-block d-lg-none d-xl-block">
                  <h4 className="widget-title">INNOVATIVE APPROACH</h4>
                  <p>
                  It addresses challenges of data security, scalability, and interoperability; it paves the way for fair, balanced, transparent, and efficient data management.
                  </p>
                </article>
                <article className="widget-block d-lg-none d-xxl-block">
                  <h4 className="widget-title">PRIVACY EMPOWERED</h4>
                  <p>
                  Coaltions empower users to opt out of data trading, and set preferences for data usage, offering secure ways to trade and leverage the value of information.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
