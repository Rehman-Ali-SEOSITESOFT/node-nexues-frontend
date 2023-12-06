import React from 'react';
import {FacebookShareButton,
        PinterestShareButton,
        TelegramShareButton,
        LinkedinShareButton,
        TwitterShareButton} from "react-share";
import {FacebookIcon,
        PinterestIcon,
        TelegramIcon,
        LinkedinIcon,
        TwitterIcon} from "react-share";

function Footer1() {
    return (
        <>
        <footer id="footer">
            <div  className="pad-l-45 pad-r-45">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-xl-3 col-md-6">
                            <article className="footer-info-block">
                                <div className="section-sub-title">
                                    <article className="section-title-body white">
                                        <h4 className="head-title">IN CONCLUSION</h4>
                                    </article>
                                </div>
                                <p>Evolve today from a Node mindset to a partnership in a dual backed bond of global cloud infrastructure securitized by a precious metals bond!</p>
                            </article>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <article className="footer-info-block">
                                <div className="section-sub-title">
                                    <article className="section-title-body white">
                                        <h4 className="head-title">HAVE QUESTIONS?</h4>
                                    </article>
                                </div>
                                <ul className="list-unstyled">
                                    <li><a href="/">I want to learn more about Nodes.</a></li>
                                    <li><a href="/">I don't understand what a Coalition is.</a></li>
                                    <li><a href="/">I am an Application Developer.</a></li>
                                    <li><a href="/">I am User and want to understand the difference.</a></li>
                                    <li><a href="/">I am interested in the use of precious metals.</a></li>
                                    <li><a href="/">I am interested in Authentic & Collective Intelligence.</a></li>
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
                                <p><a href="/">Node </a>Vs Infrastructure</p>
                                <p><a href="/">Future Web</a></p>
                            </article>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <article className="footer-info-block">
                                <div className="section-sub-title">
                                    <article className="section-title-body white">
                                        <h4 className="head-title">MEDIA</h4>
                                    </article>
                                </div>
                                <ul className="list-unstyled">
                                    <li><a href="https://nnn.cloud/navigate">How can I participate to learn more?</a></li>
                                    <li><a href="https://nnn.cloud/navigate">What is decentralized cloud infrastrucure?</a></li>
                                    <li><a href="https://nnn.cloud/navigate">How does and Infastructure Bond work?</a></li>
                                    <li><a href="https://nnn.cloud/navigate">How does a Commodity Bond work?</a></li>
                                    <li><a href="https://nnn.cloud/navigate">Is this a Crypto Blockchain deal a Commodity Bond work?</a></li>
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
                                        <FacebookShareButton url="https://www.facebook.com/profile.php?id=61553754122176" 
                                        quote= "Node Nexus" hashtag="#node">
                                            <FacebookIcon round={true} size={32}></FacebookIcon>
                                        </FacebookShareButton>
                                        
                                    </li>
                                    <li>
                                        <PinterestShareButton url="https://www.instagram.com/nnn_dcloud/" media="https://www.instagram.com/nnn_dcloud/">
                                            <PinterestIcon round={true} size={32}></PinterestIcon>
                                        </PinterestShareButton>    
                                    </li>  
                                    <li>
                                        <LinkedinShareButton url="https://www.linkedin.com/company/nnn-cloud/" >
                                            <LinkedinIcon round={true} size={32}></LinkedinIcon>
                                        </LinkedinShareButton>    
                                    </li>
                                    <li>
                                        <TwitterShareButton url="https://twitter.com/nnn_onX">
                                            <TwitterIcon round={true} size={32}></TwitterIcon>
                                        </TwitterShareButton>    
                                    </li>
                                    <li>
                                        <TelegramShareButton url="https://t.me/+mfpLtRMV_s1jZTNh">
                                            <TelegramIcon round={true} size={32}></TelegramIcon>
                                        </TelegramShareButton>    
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="footer-logo">
                                    <img src="img/logo-big-shop1.png" alt="NNN"/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            

        </footer>
        </>
    )
}

export default Footer1
