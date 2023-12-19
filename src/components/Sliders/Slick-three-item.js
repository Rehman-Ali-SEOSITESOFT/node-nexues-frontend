import React, { Component } from "react";
import Slider from "react-slick";
import PortfolioItem from './../Portfolio/PortfolioItem'
export default class SliderThreeItem extends Component {

  render() {
    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 400000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <>
     
        <Slider {...settings}>
        <div className="item">
            <PortfolioItem id={1} portfolioUrl={"/"} portfolioTitle={"Fault Tolerance for Humanity"} portfolioInfo={"Your data is decentralized"} 
            portfolioSrc={"img/preview/blog1.jpg"} portfolioAlt={"blog"}  />
        </div>
        <div className="item">
            <PortfolioItem id={2} portfolioUrl={"/"} portfolioTitle={"Authentic Intelligence"} portfolioInfo={"Uniquely Human Assisted"} 
            portfolioSrc={"img/preview/blog2.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem id={3} portfolioUrl={"/"} portfolioTitle={"Collective Intelligence"} portfolioInfo={"Get Paid for Being You"} 
            portfolioSrc={"img/preview/blog34.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem id={4} portfolioUrl={"/"} portfolioTitle={"Asset Backed"} portfolioInfo={"Utility of Worth"} 
            portfolioSrc={"img/preview/blog5.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem id={5} portfolioUrl={"/"} portfolioTitle={"Egalitarian"} portfolioInfo={"Your Data, Your Rules"} 
            portfolioSrc={"img/preview/blog37.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem id={6} portfolioUrl={"/"} portfolioTitle={"Web 5.0"} portfolioInfo={"More Resilient Internet:"} 
            portfolioSrc={"img/preview/blog6.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem id={7} portfolioUrl={"/"} portfolioTitle={"Knowledge Economy"} portfolioInfo={"Smarter AI for Everyone: "} 
            portfolioSrc={"img/preview/blog7.jpg"} portfolioAlt={"blog"}/>
        </div>
        </Slider>
        
      </>
    );
  }
}