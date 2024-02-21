import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
function NewsletterForm() {
  const [NewsEmail, setNewsEmail] = useState("");
  const [NewsEmailError, setNewsEmailError] = useState({});
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const doNewsSubmit = () => {
      setModalIsOpen(true);

  };
  const newsletterValidate = () => {
    const NewsEmailError = {};
    let isNewsValid = true;
    if (NewsEmail.trim().length < 1) {
      NewsEmailError.errText = "*Email Field Required";
      isNewsValid = false;
      setNewsEmailError(NewsEmailError);
      return isNewsValid;
    }
    if (!NewsEmail.includes("@") || !NewsEmail.includes(".")) {
      NewsEmailError.errText1 = "*Invalid Email Field";
      isNewsValid = false;
    }
    setNewsEmailError(NewsEmailError);
    return isNewsValid;
  };
  return (
    <>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="popup-send"
      >
        <div className="block-popup">
          <h4>Thank you.</h4>
          <h4>For Joining Us</h4>
        </div>
        <span
          onClick={() => setModalIsOpen(false)}
          className="close-btn"
        ></span>
      </Modal>
      <div id="newsletter-form-wrapper">
        <div id="newsletter-form-inner">
          <div id="NewsletterErrResults"></div>
          <div id="NewsletterResult"></div>
          <div id="NewsletterContent">
            <div className="d-flex align-center justify-content-center">
              <img
                src="/img/preview/join-us/novus_large.png"
                height={120}
                width={120}
              />
              <img
                src="/img/preview/join-us/navigate_large.png"
                height={120}
                width={120}
              />
              <img
                src="/img/preview/join-us/neighborhood_large.png"
                height={120}
                width={120}
              />
              <img
                src="/img/preview/join-us/node_large.png"
                height={120}
                width={120}
              />
            </div>
              <button
              onClick={() => doNewsSubmit()}
              className="btn-default white btn-move">
              Select Program
              </button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsletterForm;
