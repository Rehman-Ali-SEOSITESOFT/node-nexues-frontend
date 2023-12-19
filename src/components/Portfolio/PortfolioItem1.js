import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function PortfolioItem({ portfolioTitle, portfolioInfo, portfolioSrc, portfolioAlt }) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={ModalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="popup-content">
        <div className="block-popup">
          <div className="">
            <div className="row gx-5 d-flex align-items-center">
              <div className="col-md-6">
                <img alt="" src={portfolioSrc} className="img-fluid image" />
              </div>
              <div className="col-md-6">
                <h4>{portfolioTitle}</h4>
                <p><span>{portfolioInfo}</span></p>

                <div className="topic-section">
                  <p>The four-tier structure of Node Servers on the Nexus Node Network (NNN): – Sprite, Centro, Tian, and Nations – is ingeniously designed to cater to a wide range of participants, from small and medium-sized businesses (SMBs) to mid-market players, large enterprises, and even national-level entities. This tiered approach is crucial for several reasons:</p>
                </div>

                <div className="image-section">
                  <img src="sprite_logo.png" alt="Sprite Logo" width="400" height="400" />
                  <img src="centro_logo.png" alt="Centro Logo" width="400" height="400" />
                  <img src="titan_logo.png" alt="Titan Logo" width="400" height="400" />
                  <img src="nations_logo.png" alt="Nations Logo" width="400" height="400" />
                </div>

                <div className="sub-paragraphs">
                  <p><strong>Accessibility and Inclusivity:</strong> The Sprite tier offers an accessible entry point for SMBs, allowing them to leverage the benefits of decentralized technology without a hefty investment. This inclusivity is vital for fostering a diverse and robust network.</p>

                  <p><strong>Scalability and Flexibility:</strong> As businesses grow or their needs evolve, they can move up the tiers, from Centro to Tian, and eventually to Nations. Each tier offers increased capabilities and resources, aligning with the scaling needs of mid-market and enterprise-level participants. This flexibility ensures that the NNN can accommodate businesses at different stages of their growth.</p>

                  <p><strong>Customization and Specialization:</strong> Different tiers cater to varying requirements of data handling, processing power, and network participation. For instance, the Tian and Nations tiers are equipped to handle the extensive demands of large enterprises and national entities, offering more advanced features and greater control.</p>

                  <p><strong>Diverse Contribution and Synergy:</strong> The tiered system encourages a wide range of participants to contribute to the NNN ecosystem. This diversity leads to a rich blend of perspectives and capabilities, enhancing the network's innovation and resilience.</p>
                </div>

                <div className="summary-section">
                  <p>In summary, the four tiers of Node Servers on NNN – Sprite, Centro, Tian, and Nations – are crucial in democratizing access to decentralized technology, ensuring scalability, and fostering a diverse, collaborative, and economically impactful network that aligns with the varied needs and capabilities of SMBs, mid-market players, large enterprises, and national entities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span onClick={() => setModalIsOpen(false)} className="close-btn"></span>
      </Modal>
      <div className="portfolio-cell">
        <div className="portfolio-item">
          <div className="image-overlay">
            <span onClick={() => setModalIsOpen(true)} className="link">&nbsp;</span>
            <div className="image-overlay-content">
              <h4>{portfolioTitle}</h4>
              <p>{portfolioInfo}</p>
            </div>
          </div>
          <img src={portfolioSrc} alt={portfolioAlt} className="img-responsive" />
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
