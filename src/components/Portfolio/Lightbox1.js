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
                        <a href="img/preview/blog3.jpg">
                            <img  className="img-fluid" alt="Copper Backed" src="img/preview/blog22.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Copper Backed</span>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="single-portfolio-block">
                        <a href="img/preview/blog20.jpg">
                            <img  className="img-fluid" alt="Silver Backed" src="img/preview/blog20.jpg"/>
                        </a>
                        <span className="single-portfolio-title">Silver Backed</span>
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
