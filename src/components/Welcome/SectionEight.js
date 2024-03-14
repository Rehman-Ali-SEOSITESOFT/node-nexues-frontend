import React from "react";

function SectionEight() {
  return (
    <section>
      <div className="block color-scheme-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <div className="section-sub-title ">
                <article className="section-title-body white">
                  <h1 className="head-title">
                    <span>How do we solve it?</span>
                    <br />
                    Through: Security –Scalability –Inter operability - Data Management - Decentralization
                  </h1>
                </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-7 text-sec-n">
              <div className="section-sub-title ">
                <article className="section-title-body white">
                  <p className="head-text4">
                    <span>A Distributed Quantum Ledger Database</span>
                  </p>
                  <p className="head-text">
                  1. Security: Our DQ-LDB employs SPHINCS+ and BLS 12-381 cryptographic protocols, which ensure impenetrability and safeguard against the advanced threats posed by classical and emerging quantum computing attacks.
                  </p>
                  <p className="head-text">
                  2. Scalability: Quantum computing, combined with our Zaph HyperVM and apolyglot JIT compiler, delivers unprecedented scalability, enabling real-time execution of diverse programming languages and catering to a broad spectrum of systems. </p>
                  <p className="head-text">
                  3. Interoperability: The DQ-LDB's polyglot JIT compiler enhances system compatibility, ensuring smooth communication across various programming landscapes and fostering a universally connective environment.
                  </p>
                  <p className="head-text">
                  4. Data Management: Our DQ-LDB achieves meticulous data integrity and streamlined management across its distributed ledger–database hybrid through deterministic concurrency and consensus groups generating structured JSON data.
                  </p>
                  <p className="head-text">
                  5. Decentralization: DQ-LDB's decentralized nature is fortified by consensus groups that distribute ledger maintenance, enhancing system resilience by removing single points of failure.
                  </p>
                 </article>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="section-sub-title center">
                <div className="mt-100">
                  <img
                    alt=""
                    className="img-fluid"
                    src="img/img5.png"
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
