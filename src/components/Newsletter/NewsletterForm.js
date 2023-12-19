import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
function NewsletterForm() {
  const [NewsEmail, setNewsEmail] = useState("");
  const [NewsEmailError, setNewsEmailError] = useState({});
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const doNewsSubmit = (e) => {
    e.preventDefault();
    const isNewsValid = newsletterValidate();
    if (isNewsValid) {
      //    ------   ready ---------

      setModalIsOpen(true);
      // alert("Thanks you.")

      //    -----------------------
    }
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
          <h4>you are added</h4>
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

            <form
              id="MyNewsletter"
              name="MyNewsletter"
              className="text-center"
              method="post"
              onSubmit={doNewsSubmit}
            >
              <div className="clearfix"></div>
              <input
                type="submit"
                className="newsletter-btn btn-default white btn-move"
                value="Select Program"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsletterForm;
