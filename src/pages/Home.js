import React from "react";
import Header from "./../components/Header/Header";
import Welcome from "./../components/Welcome/Welcome";
import About from "./../components/About/About";
import Service from "./../components/Service/Service";
import Portfolio from "./../components/Portfolio/Portfolio";
import Contact from "./../components/Contact/Contact";
import Map from "./../components/Map";
import Footer from "./../components/Footer/Footer";
import SimpleSlider from "./../components/Sliders/Slick-slider";
import Newsletter from "../components/Newsletter/Newsletter";
import SectionOne from "../components/Welcome/SectionOne";
import SectionTwo from "../components/Welcome/SectionTwo";
import SectionThree from "../components/Welcome/SectionThree";
import SectionFour from "../components/Welcome/SectionFour";
import SectionFive from "../components/Welcome/SectionFive";
import SectionSix from "../components/Welcome/SectionSix";
import SectionSeven from "../components/Welcome/SectionSeven";
import SectionEight from "../components/Welcome/SectionEight";
import SectionTen from "../components/Welcome/SectionTen";
import SectionEleven from "../components/Welcome/SectionEleven";
import SectionTwelve from "../components/Welcome/SectionTwelve";
import SectionThirteen from "../components/Welcome/SectionThirteen";

function Home() {
  return (
    <>
      <div id="home" className="full-screen-block sliderLight">
        <Header />
        <SimpleSlider />
      </div>
      <Welcome />
      <About />
      <Service />
      <Portfolio />
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionTen/>
      <SectionEleven/>
      <SectionTwelve/>
      <SectionThirteen/>
      <Contact />
      <Newsletter/>
      <Map />
      <Footer />

    </>
  );
}

export default Home;
