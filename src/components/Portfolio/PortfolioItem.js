import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

function PortfolioItem({
  portfolioUrl,
  portfolioTitle,
  portfolioInfo,
  portfolioSrc,
  portfolioAlt,
  id
}) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const [desc, setDesc] = useState([
    {
      id: 1,
      desc: "Fault tolerance is like having a backup plan when something goes wrong. On our cloud its decentralized and its backed up globally through the use of an equation that makes sure it follows Isaac Asimov's principles of robotics.  It means computers and AI can never intentionally or unintentionally harm you. Nor will it let another Human. That is fault tolerance for humanity.",
    },
    {
      id: 2,
      desc: "It's a type of artificial intelligence that gets what you need, learns from your data, and makes intelligent decisions to help you. This AI can work even better because of the Node Nexus Network's advanced technology and secure environment. It's like having a super-smart, trustworthy friend who knows exactly how to help you based on what it has learned from your data.",
    },
    {
      id: 3,
      desc: "Collective intelligence is like a giant brainstorming session where everyone's shared data makes the group smarter together. By contributing your personal information to a secure, decentralized online database, you're helping build this collective knowledge. And the cool part? You get rewarded for just being you, as your data helps companies understand what people like you really want.",
    },
    {
      id: 4,
      desc: "In the NNN ecosystem, 'asset-backed' means valuable physical assets like gold and silver support their digital services. These assets aren't just precious but also provide a practical, strong foundation for NNN's technology. It's like having a sturdy base that makes everything built on it more reliable and trustworthy.",
    },
    {
      id: 5,
      desc: "In a decentralized cloud, 'egalitarian' means it's a fair and equal space for all users, like a game where everyone has the same chance. This setup ensures 'Your Data, Your Rules,' giving you full control over your own information. It's like being the boss of your own online space, deciding who gets access to your data, making the system fairer for everyone.",
    },
    {
      id: 6,
      desc: "NNN is pioneering Web 5.0 by emphasizing user empowerment and data control in a decentralized web platform that is 	beyond the current blockchain technologies. We prioritize personal data security and user autonomy, allowing users 	full control over their own information. The integration of AI within NNN’s framework promises a more personalized 	and user-driven internet experience, aligning with the transformative vision of Web 5.0.",
    },
    {
        id: 7,
        desc:"NNNN's Smarter AI is like a supercharged versus if Authentic Intelligence when each one of shares our authentic human 	experiences. This collective intelligence makes everyone smarter by learning from shared information. By fueling a 	knowledge economy, where you get paid for being you, NNN allows users to benefit financially. Now all of us share 	collective insights and we collectively make more informed decisions. It's like having access to the ultimate set of 	shared notes, boosting learning and understanding for everyone involved."
    }
  ]);

  return (
    <>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="popup-content"
      >
        <div className="block-popup">
          <div className="">
            <div className="row gx-5 d-flex align-items-center">
              <div className="col-md-6">
                <img alt="" src={portfolioSrc} className="img-fluid image" />
              </div>
              <div className="col-md-6">
                <h4>{portfolioTitle}</h4>
                <p>
                  <span>{portfolioInfo}</span>
                </p>

                <p>
                {desc.filter(item => item.id === id)[0].desc}
                 </p>
              </div>
            </div>
          </div>
        </div>
        <span
          onClick={() => setModalIsOpen(false)}
          className="close-btn"
        ></span>
      </Modal>
      <div className="portfolio-cell">
        <div className="portfolio-item">
          <div className="image-overlay">
            <span onClick={() => setModalIsOpen(true)} className="link">
              &nbsp;
            </span>
            <div className="image-overlay-content">
              <h4>{portfolioTitle}</h4>
              <p>{portfolioInfo}</p>
            </div>
          </div>
          <img
            src={portfolioSrc}
            alt={portfolioAlt}
            className="img-responsive"
          />
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
