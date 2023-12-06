import React from "react";
import Header4 from "./components/Header";
import Welcome4 from "./components/Welcome";
import About4 from "./components/About";
import Service4 from "./components/Service";
import Portfolio4 from "./components/Portfolio";
import Contact4 from "./components/Contact";
import Map from "./components/Map";
import Footer4 from "./components/Footer";
import SimpleSlider4 from "./components/Slider";
function Home4() {
  return (
    <>
      <div id="home" className="full-screen-block sliderLight">
        <Header4 />
        <SimpleSlider4 />
      </div>
      <Welcome4 />
      <About4 />
      <Service4 />
      <Portfolio4 />
      <Contact4 />
      <Map />
      <Footer4 />
    </>
  );
}

export default Home4;
