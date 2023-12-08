import React from 'react'
import SliderThreeItem from './../Sliders/Slick-three-item'
import Featured from '../Featured/Featured'

function Portfolio() {
    return (
        <>
        <section  id="portfolio" className="single-bg">
            <div className="section-block-title">
                <div className="bg-dark"></div>
                <div className="container">
                    <div className="section-sub-title center">
                        <article className="section-title-body white">
                            <h1 className="head-title">MORE ABOUT <span>US</span> </h1>
                        </article>
                    </div>    
                </div> 
                <div className="container">
                    <div className="carousel-with-dots gap-30">
                        <SliderThreeItem/>
                    </div> 
                    <div className="clearfix h50"></div>
                </div>
            </div>
            <Featured/>
        </section>
   
        </>
    )
}

export default Portfolio
