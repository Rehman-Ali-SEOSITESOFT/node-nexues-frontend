import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

function Lightbox() {
    return (
        <>
        <SimpleReactLightbox>
            <SRLWrapper>
            <div className="row  gx-5">
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog1.jpg">
                            <img  className="img-fluid" alt="Fault Tolerance for Hummanity" src="img/preview/blog1.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Fault Tolerance for Humanity</span>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/nnn_secure.jpg">
                            <img  className="img-fluid" alt="SECURE CLOUD" src="img/preview/nnn_secure.jpg"/>
                        </a>
                        <span className="single-portfolio-title">SECURE CLOUD</span>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/lucrative_returns.jpg">
                            <img  className="img-fluid" alt="LUCRATIVE RETURNS" src="img/preview/nnn_secure.jpg"/>
                        </a>
                        <span className="single-portfolio-title">LUCRATIVE RETURNS</span>
                    </div>
                </div> 
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog18.jpg">
                            <img  className="img-fluid" alt="Gold Backed" src="img/preview/blog21.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Gold Backed</span>
                    </div>
                </div> 
            </div>
            </SRLWrapper>
        </SimpleReactLightbox> 
        </>
    )
}

export default Lightbox
