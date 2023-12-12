import React, { Component } from "react";
import Slider from "react-slick";
import bg_vide from '../../videos/girl.mp4'
export default class SimpleSlider3 extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000
    };
    return (
      <>
        
        <Slider {...settings}>
            <div  className="full-screen-block relative">
                <video autoPlay loop muted className="bg_video">
                    <source src={bg_vide} type="video/mp4"></source>
                </video>
                <div className="bg-dark"></div>
                <div className="sliderTitleBlock">
                    
                    <h1 className= "homeSliderTitle"> Decentralized Cloud Provider</h1>
                    <h3 className= "homeSliderTitleBottom">NNN is a decentralized cloud provider thru its federation of Node Operators, MSPs and Business Ecosytem Coalition Group partners.</h3>
                </div>
            </div>
            <div   className="full-screen-block slider3_2">
                <div className="sliderTitleBlock">
                    
                    <h1 className= "homeSliderTitle">Scroll down to join today!</h1> 
                    <h3 className= "homeSliderTitleBottom">
                    Joining a decentralized cloud ecosystem means being part of a technological revolution.
                    NNN empowers individuals to take control of their data, ensuring privacy and security 
                    while contributing to a global collective intelligence.

                    It's your opportunity to shape a people-powered internet that not only protects your 
                    individuality but also fuels a more intelligent and connected world.</h3>   
                </div>
            </div>
        </Slider>
      </>
    );
  }
}