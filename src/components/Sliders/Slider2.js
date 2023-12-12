import React, { Component } from "react";
import Slider from "react-slick";
export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <>
        <Slider {...settings}>
          <div className="full-screen-block">
            <div className="sliderTitleBlock rotated">
              <h3 className="homeSliderTitleTop white">Node Nexus Network</h3>
              <h1 className="homeSliderTitle">
                <span>Fault Tolerance for Humanity</span>{" "}
              </h1>
            </div>
          </div>
          <div className="full-screen-block">
            <div className="sliderTitleBlock rotated">
              <h3 className="homeSliderTitleTop white">Node Nexus Network</h3>
              <h1 className="homeSliderTitle">
                {" "}
                <span>People Powered Internet</span>{" "}
              </h1>
            </div>
          </div>

          <div className="full-screen-block">
            <div className="sliderTitleBlock rotated">
              <h3 className="homeSliderTitleTop white">Node Nexus Network</h3>
              <h1 className="homeSliderTitle">
                {" "}
                <span>Collective Intelligence Hosting</span>{" "}
              </h1>
            </div>
          </div>
          {
            //<div   className="full-screen-block slider2_2">
            //  <div className="sliderTitleBlock">
            //      <h3 className= "homeSliderTitleTop">Mosaic Design Studio</h3>
            //      <h1 className= "homeSliderTitle"> Creative Web  <br/> Design Agency</h1>
            //  </div>
            //</div>
          }
        </Slider>
      </>
    );
  }
}
