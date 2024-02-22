import React from "react";
import SliderThreeItem from "../Sliders/Slider2";
import Featured from "../Featured/Featured2";

function Portfolio2() {
  return (
    <>
      <section id="portfolio" className="single-bg">
        <div className="section-block-title">
          <div className="bg-dark"></div>
          <div className="container">
            <div className="section-sub-title center">
              <article className="section-title-body white">
                <h1 className="head-title">
                <span>JOIN US</span> TO SHAPE THE <span>FUTURE</span> TOGETHER
                </h1>
              </article>
            </div>
          </div>
          <div className="container">
            <div className="carousel-with-dots gap-30">
              <SliderThreeItem />
            </div>
            <div className="clearfix h50"></div>
          </div>
        </div>
        <Featured />
      </section>
    </>
  );
}

export default Portfolio2;
