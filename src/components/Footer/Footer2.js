import React from "react";
import {
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import LearnMoreAboutSection from "./LearnMoreAbout";

function Footer2() {
  return (
    <>
      <footer id="footer">
        <LearnMoreAboutSection/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <article className="footer-info-block">
                <ul className="list-unstyled flickr">
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog6.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="img/preview/blog8.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <article className="footer-info-block">
                <div className="section-sub-title">
                  <article className="section-title-body white">
                    <h4 className="head-title">More about our Coalition</h4>
                  </article>
                </div>
                <p>A Coalition is . . .</p>
              </article>
            </div>
            <div className="col-xl-3 col-md-6">
              <article className="footer-info-block">
                <div className="section-sub-title">
                  <article className="section-title-body white">
                    <h4 className="head-title">Want to learn more?</h4>
                  </article>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">A Node or Infrastructure?</a>
                  </li>
                  <li>
                    <a href="/">Application Developer?</a>
                  </li>
                  <li>
                    <a href="/">Users?</a>
                  </li>
                  <li>
                    <a href="/">Asset Backed?</a>
                  </li>
                  <li>
                    <a href="/">Authentic Intelligence?</a>
                  </li>
                </ul>
              </article>
            </div>
            <div className="col-xl-3 col-md-6">
              <article className="footer-info-block">
                <div className="section-sub-title">
                  <article className="section-title-body white">
                    <h4 className="head-title">Tweet</h4>
                  </article>
                </div>
                <p>
                  <a href="/">#Mosaic</a> coming up with their blog theme{" "}
                  <a href="/">#Design</a> show yourself from the best side
                </p>
                <p>
                  <a href="/">http://t.co/b0V7taIgvv</a>
                </p>
              </article>
            </div>
            <div className="col-xl-3 col-md-6">
              <article className="footer-info-block">
                <div className="section-sub-title">
                  <article className="section-title-body white">
                    <h4 className="head-title">Worthy Content</h4>
                  </article>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">NNN Introduction</a>
                  </li>
                  <li>
                    <a href="/">More about NNN</a>
                  </li>
                  <li>
                    <a href="/">Web 5.0?</a>
                  </li>
                  <li>
                    <a href="/">What is a Bond?</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-8  order-1 col-xs-7 col-sm-8">
                <ul className="footer-icon list-unstyled">
                  <li>
                    <FacebookShareButton
                      url="https://youtu.be/3aSb1WPK4Kg"
                      quote="Anema"
                      hashtag="#anema"
                    >
                      <FacebookIcon round={true} size={32}></FacebookIcon>
                    </FacebookShareButton>
                  </li>
                  <li>
                    <PinterestShareButton
                      url="https://youtu.be/3aSb1WPK4Kg"
                      media="https://youtu.be/3aSb1WPK4Kg"
                    >
                      <PinterestIcon round={true} size={32}></PinterestIcon>
                    </PinterestShareButton>
                  </li>
                  <li>
                    <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg">
                      <LinkedinIcon round={true} size={32}></LinkedinIcon>
                    </LinkedinShareButton>
                  </li>
                  <li>
                    <TwitterShareButton url="https://youtu.be/3aSb1WPK4Kg">
                      <TwitterIcon round={true} size={32}></TwitterIcon>
                    </TwitterShareButton>
                  </li>
                  <li>
                    <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                      <TelegramIcon round={true} size={32}></TelegramIcon>
                    </TelegramShareButton>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-xs-5 col-sm-4">
                <div className="footer-logo">
                  <img src="img/logo-big-shop1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer2;
