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

function Footer5() {
  return (
    <>
      <footer id="footer">
        <LearnMoreAboutSection/>
        <div className="pad-l-45 pad-r-45">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">About</h4>
                    </article>
                  </div>
                  <p>
                    Evolve today from a Node mindset to a partnership in a
                    global infrastructure!
                  </p>
                </article>
              </div>
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">Information</h4>
                    </article>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">What is a Coaltion?</a>
                    </li>
                    <li>
                      <a href="/">Are you an Application Developer?</a>
                    </li>
                    <li>
                      <a href="/">Want to be a user on NNN?</a>
                    </li>
                    <li>
                      <a href="/">Asset Backed Infrastructure?</a>
                    </li>
                    <li>
                      <a href="/">Authentic Intelligence</a>
                    </li>
                  </ul>
                </article>
              </div>
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">Want to Learn More?</h4>
                    </article>
                  </div>
                  <p>
                    <a href="/">#Node</a>Vs Infrastructure
                  </p>
                  <p>
                    <a href="/">Future Web</a>
                  </p>
                </article>
              </div>
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">Media</h4>
                    </article>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Showcase</a>
                    </li>
                    <li>
                      <a href="/">Print Materials</a>
                    </li>
                    <li>
                      <a href="/">Packaging</a>
                    </li>
                    <li>
                      <a href="/">Shipping</a>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="h25"></div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-md-8 order-1 col-xs-12 col-sm-8">
                  <ul className="footer-icon list-unstyled">
                    <li>
                      <FacebookShareButton
                        url="https://youtu.be/3aSb1WPK4Kg"
                        quote="Node Nexus"
                        hashtag="#node"
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
                <div className="col-md-4 col-xs-12 col-sm-4">
                  <div className="footer-logo">
                    <img src="img/logo-big-shop1.png" alt="NNN" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer5;
